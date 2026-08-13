document.addEventListener("DOMContentLoaded", () => {
    const aircraft = document.querySelector("#aircraft");
    const startButton = document.querySelector("#start-simulation");
    const resetButton = document.querySelector("#reset-simulation");

    const status = document.querySelector("#simulation-status");
    const speed = document.querySelector("#simulation-speed");
    const altitude = document.querySelector("#simulation-altitude");

    const stageLabel = document.querySelector("#simulation-stage-label");
    const stageTitle = document.querySelector("#simulation-stage-title");
    const stageDescription = document.querySelector(
        "#simulation-stage-description"
    );

    const progressSteps = document.querySelectorAll(
        ".simulation-progress-step"
    );

    if (
        !aircraft ||
        !startButton ||
        !resetButton ||
        !status ||
        !speed ||
        !altitude
    ) {
        return;
    }

    const simulationStages = [
        {
            status: "AIRCRAFT READY",
            speed: 0,
            altitude: 0,
            title: "Aircraft Ready",
            description:
                "The aircraft and flight crew complete the required checks before beginning the departure process."
        },
        {
            status: "TAXIING",
            speed: 25,
            altitude: 0,
            title: "Taxi",
            description:
                "The aircraft moves along the taxiway toward the assigned departure runway under ground control."
        },
        {
            status: "TAKEOFF CLEARANCE RECEIVED",
            speed: 0,
            altitude: 0,
            title: "Takeoff Clearance",
            description:
                "The tower controller clears the aircraft for takeoff when the runway and surrounding traffic conditions allow a safe departure."
        },
        {
            status: "ACCELERATING",
            speed: 140,
            altitude: 0,
            title: "Acceleration",
            description:
                "The aircraft accelerates along the runway. As its speed increases, the wings generate increasing lift."
        },
        {
            status: "ROTATING",
            speed: 220,
            altitude: 0,
            title: "Rotation",
            description:
                "The aircraft raises its nose as the pilots rotate the aircraft into the takeoff attitude."
        },
        {
            status: "AIRBORNE",
            speed: 250,
            altitude: 35,
            title: "Liftoff",
            description:
                "The aircraft has left the runway and begins its initial climb away from the airport."
        }
    ];

    let currentStage = 0;
    let simulationTimer = null;

    function updateDisplay(stageIndex) {
        const stage = simulationStages[stageIndex];

        status.textContent = stage.status;
        speed.textContent = stage.speed;
        altitude.textContent = stage.altitude;

        stageLabel.textContent =
            `STAGE ${String(stageIndex + 1).padStart(2, "0")}`;

        stageTitle.textContent = stage.title;
        stageDescription.textContent = stage.description;

        progressSteps.forEach((step, index) => {
            step.classList.toggle(
                "active",
                index === stageIndex
            );
        });
    }

    function updateAircraft(stageIndex) {
        const positions = [
            {
                left: "8%",
                bottom: "42%",
                rotation: "0deg"
            },
            {
                left: "18%",
                bottom: "42%",
                rotation: "0deg"
            },
            {
                left: "28%",
                bottom: "42%",
                rotation: "0deg"
            },
            {
                left: "50%",
                bottom: "42%",
                rotation: "0deg"
            },
            {
                left: "70%",
                bottom: "43%",
                rotation: "-8deg"
            },
            {
                left: "82%",
                bottom: "58%",
                rotation: "-12deg"
            }
        ];

        const position = positions[stageIndex];

        aircraft.style.left = position.left;
        aircraft.style.bottom = position.bottom;
        aircraft.style.transform =
            `rotate(${position.rotation})`;
    }

    function showStage(stageIndex) {
        currentStage = stageIndex;

        updateDisplay(stageIndex);
        updateAircraft(stageIndex);
    }

    function startSimulation() {
        clearInterval(simulationTimer);

        startButton.disabled = true;
        startButton.textContent = "Simulation Running";

        showStage(0);

        simulationTimer = setInterval(() => {
            if (currentStage >= simulationStages.length - 1) {
                clearInterval(simulationTimer);

                startButton.disabled = false;
                startButton.textContent = "Run Again";

                return;
            }

            showStage(currentStage + 1);
        }, 1400);
    }

    function resetSimulation() {
        clearInterval(simulationTimer);

        startButton.disabled = false;
        startButton.textContent = "Start Takeoff";

        showStage(0);
    }

    startButton.addEventListener(
        "click",
        startSimulation
    );

    resetButton.addEventListener(
        "click",
        resetSimulation
    );

    showStage(0);
});