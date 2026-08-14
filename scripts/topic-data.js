document.addEventListener("DOMContentLoaded", async () => {
    const topicContainer = document.querySelector("[data-topic-data]");

    if (!topicContainer) return;

    const path = topicContainer.dataset.topicData;

    try {
        const response = await fetch(path);
        const topic = await response.json();

        renderGlossary(topic.glossary || []);
        renderInteractiveConcepts(topic.interactiveConcepts || []);
    } catch (error) {
        console.error("Unable to load topic data:", error);
    }
});

function renderGlossary(glossary) {
    const glossaryList = document.querySelector("#glossary-list");

    if (!glossaryList) return;

    glossaryList.innerHTML = "";

    glossary.forEach((item) => {
        const wrapper = document.createElement("div");

        wrapper.innerHTML = `
            <dt>${item.term}</dt>
            <dd>${item.definition}</dd>
        `;

        glossaryList.appendChild(wrapper);
    });
}

function renderInteractiveConcepts(concepts) {
    const list = document.querySelector("#interactive-concepts");

    if (!list) return;

    list.innerHTML = "";

    concepts.forEach((concept) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${concept.title}</strong><br>
            ${concept.description}
        `;

        list.appendChild(li);
    });
}