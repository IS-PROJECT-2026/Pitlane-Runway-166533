document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#glossary-search");
    const filterButtons =
        document.querySelectorAll(".glossary-filter");

    const aviationList =
        document.querySelector("#aviation-glossary");

    const f1List =
        document.querySelector("#f1-glossary");

    const emptyMessage =
        document.querySelector("#glossary-empty");

    let glossaryTerms = [];
    let activeDomain = "all";

    const topicFiles = [
        {
            domain: "aviation",
            path: "topics/data/aviation/how-planes-are-cleared-for-takeoff.json"
        },
        {
            domain: "f1",
            path: "topics/data/f1/how-f1-aerodynamics-work.json"
        }
    ];

    async function loadGlossary() {
        try {
            const responses = await Promise.all(
                topicFiles.map(async (topic) => {
                    const response = await fetch(topic.path);

                    if (!response.ok) {
                        throw new Error(
                            `Unable to load ${topic.path}`
                        );
                    }

                    const data = await response.json();

                    return {
                        domain: topic.domain,
                        terms: data.glossary || []
                    };
                })
            );

            glossaryTerms = responses.flatMap(
                (topic) =>
                    topic.terms.map((term) => ({
                        ...term,
                        domain: topic.domain
                    }))
            );

            renderGlossary();

        } catch (error) {
            console.error(
                "Unable to load glossary data:",
                error
            );
        }
    }

    function renderGlossary() {
        aviationList.innerHTML = "";
        f1List.innerHTML = "";

        const searchTerm =
            searchInput.value.trim().toLowerCase();

        const filteredTerms = glossaryTerms.filter((term) => {
            const matchesDomain =
                activeDomain === "all" ||
                term.domain === activeDomain;

            const matchesSearch =
                !searchTerm ||
                term.term.toLowerCase().includes(searchTerm) ||
                term.definition
                    .toLowerCase()
                    .includes(searchTerm);

            return matchesDomain && matchesSearch;
        });

        filteredTerms.forEach((term) => {
            const targetList =
                term.domain === "aviation"
                    ? aviationList
                    : f1List;

            const termElement =
                document.createElement("div");


            termElement.innerHTML = `
                <dt>${term.term}</dt>
                <dd>${term.definition}</dd>
            `;

            targetList.appendChild(termElement);
        });

        updateDomainVisibility(filteredTerms);

        emptyMessage.hidden =
            filteredTerms.length !== 0;
    }

    function updateDomainVisibility(terms) {
        const aviationSection =
            document.querySelector(
                '[data-domain-section="aviation"]'
            );

        const f1Section =
            document.querySelector(
                '[data-domain-section="f1"]'
            );

        const hasAviation =
            terms.some(
                (term) => term.domain === "aviation"
            );

        const hasF1 =
            terms.some(
                (term) => term.domain === "f1"
            );

        aviationSection.hidden = !hasAviation;
        f1Section.hidden = !hasF1;
    }

    searchInput.addEventListener(
        "input",
        renderGlossary
    );

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activeDomain =
                button.dataset.domain;

            filterButtons.forEach((item) => {
                item.classList.toggle(
                    "active",
                    item === button
                );
            });

            renderGlossary();
        });
    });

    loadGlossary();
});
