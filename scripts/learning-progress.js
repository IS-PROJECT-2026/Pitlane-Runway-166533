document.addEventListener("DOMContentLoaded", () => {
    const progressKey = "pitlane-runway-progress";

    const progress = JSON.parse(
        localStorage.getItem(progressKey) || "{}"
    );

    const items = document.querySelectorAll(
        "[data-progress-topic]"
    );

    const completedElement =
        document.querySelector("#progress-completed");

    const totalElement =
        document.querySelector("#progress-total");

    if (!items.length || !completedElement || !totalElement) {
        return;
    }

    let completed = 0;

    items.forEach((item) => {
        const topicId =
            item.dataset.progressTopic;

        if (progress[topicId]) {
            item.textContent = "✓";
            item.classList.add("completed");
            completed++;
        }
    });

    completedElement.textContent = completed;
    totalElement.textContent = items.length;
});