document.addEventListener("DOMContentLoaded", () => {
    const driverContainer =
        document.querySelector("#driver-showcase");

    const aircraftContainer =
        document.querySelector("#aircraft-showcase");

    if (!driverContainer || !aircraftContainer) {
        return;
    }

    const dataFiles = [
        {
            container: driverContainer,
            path: "topics/data/showcase/drivers.json"
        },
        {
            container: aircraftContainer,
            path: "topics/data/showcase/aircraft.json"
        }
    ];

    async function loadShowcase() {
        try {
            await Promise.all(
                dataFiles.map(async ({ container, path }) => {
                    const response = await fetch(path);

                    if (!response.ok) {
                        throw new Error(
                            `Unable to load ${path}`
                        );
                    }

                    const data = await response.json();

                    renderItems(container, data.items);
                })
            );
        } catch (error) {
            console.error(
                "Unable to load showcase data:",
                error
            );
        }
    }

    function renderItems(container, items) {
        container.innerHTML = "";

        items.forEach((item) => {
            const article =
                document.createElement("article");

            article.className = "showcase-item";

            const metadata =
                item.era || item.type;

            const status =
                item.status === "current"
                    ? "CURRENT"
                    : item.status === "past"
                        ? "PAST"
                        : "";

            article.innerHTML = `
                <div class="showcase-image-wrapper">
                    <img
                        class="showcase-image"
                        src="${item.image}"
                        alt="${item.alt}"
                        loading="lazy"
                    >
                </div>

                <div class="showcase-item-content">
                    <div class="showcase-item-meta">
                        ${metadata}
                        ${status ? ` · ${status}` : ""}
                    </div>

                    <h4>${item.name}</h4>

                    <p>${item.description}</p>
                </div>
            `;

            container.appendChild(article);
        });
    }

    loadShowcase();
});