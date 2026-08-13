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
document.addEventListener("DOMContentLoaded", () => {
    const speedControl = document.querySelector("#aero-speed");
    const frontWingControl = document.querySelector("#front-wing");
    const rearWingControl = document.querySelector("#rear-wing");

    const speedValue = document.querySelector("#aero-speed-value");
    const downforceValue = document.querySelector("#aero-downforce-value");
    const dragValue = document.querySelector("#aero-drag-value");
    const balanceValue = document.querySelector("#aero-balance-value");

    const speedOutput = document.querySelector("#aero-speed-output");
    const frontWingOutput = document.querySelector("#front-wing-output");
    const rearWingOutput = document.querySelector("#rear-wing-output");

    const explanationTitle = document.querySelector(
        "#aero-explanation-title"
    );

    const explanationText = document.querySelector(
        "#aero-explanation-text"
    );

    if (
        !speedControl ||
        !frontWingControl ||
        !rearWingControl
    ) {
        return;
    }

    function updateAerodynamics() {
        const speed = Number(speedControl.value);
        const frontWing = Number(frontWingControl.value);
        const rearWing = Number(rearWingControl.value);

        /*
         * These calculations are intentionally simplified.
         * They are used to demonstrate relationships rather than
         * represent real F1 aerodynamic data.
         */

        const downforce = Math.round(
            ((speed / 200) ** 2) *
            ((frontWing + rearWing) / 6) *
            100
        );

        const drag = Math.round(
            ((speed / 200) ** 2) *
            ((frontWing + rearWing) / 6) *
            60
        );

        const balanceDifference =
            frontWing - rearWing;

        let balance;
        let title;
        let explanation;

        if (balanceDifference >= 2) {
            balance = "FRONT BIASED";

            title = "Front-Heavy Aerodynamic Balance";

            explanation =
                "The front wing is producing substantially more aerodynamic effect than the rear wing. In a real car, an excessive front bias can make the rear feel less stable.";
        } else if (balanceDifference <= -2) {
            balance = "REAR BIASED";

            title = "Rear-Heavy Aerodynamic Balance";

            explanation =
                "The rear wing is producing substantially more aerodynamic effect than the front wing. More rear aerodynamic load can improve rear stability, but excessive drag can reduce straight-line speed.";
        } else {
            balance = "BALANCED";

            title = "Balanced Aerodynamics";

            explanation =
                "The front and rear aerodynamic settings are working together to produce a relatively balanced car.";
        }

        speedValue.textContent = speed;
        downforceValue.textContent = downforce;
        dragValue.textContent = drag;
        balanceValue.textContent = balance;

        speedOutput.textContent = `${speed} km/h`;
        frontWingOutput.textContent = `${frontWing} / 5`;
        rearWingOutput.textContent = `${rearWing} / 5`;

        explanationTitle.textContent = title;
        explanationText.textContent = explanation;
    }

    speedControl.addEventListener(
        "input",
        updateAerodynamics
    );

    frontWingControl.addEventListener(
        "input",
        updateAerodynamics
    );

    rearWingControl.addEventListener(
        "input",
        updateAerodynamics
    );

    updateAerodynamics();
});
document.addEventListener("DOMContentLoaded", () => {
    const quizzes = document.querySelectorAll(".topic-quiz");

    if (!quizzes.length) {
        return;
    }

    const quizData = {
        aviation: [
            {
                question: "Who normally gives the final takeoff clearance?",
                options: [
                    "The cabin crew",
                    "Air Traffic Control",
                    "The airport security team",
                    "The passengers"
                ],
                answer: 1,
                explanation:
                    "Air Traffic Control gives the aircraft its takeoff clearance when the runway and surrounding traffic situation allow it to depart safely."
            },
            {
                question: "What does a pilot normally do if a takeoff instruction is unclear?",
                options: [
                    "Take off immediately",
                    "Ignore the instruction",
                    "Clarify the instruction with ATC",
                    "Ask another passenger"
                ],
                answer: 2,
                explanation:
                    "The pilot should clarify an unclear instruction with ATC rather than guessing or proceeding without understanding it."
            },
            {
                question: "What is a taxiway used for?",
                options: [
                    "Moving aircraft between airport areas",
                    "Measuring aircraft altitude",
                    "Controlling cabin temperature",
                    "Storing passenger luggage"
                ],
                answer: 0,
                explanation:
                    "Taxiways provide the routes aircraft use to move between parking areas, runways and other parts of the airport."
            }
        ],

        f1: [
            {
                question: "What is the main purpose of aerodynamic downforce?",
                options: [
                    "To make the car lighter",
                    "To push the car toward the track",
                    "To increase engine temperature",
                    "To reduce tyre contact"
                ],
                answer: 1,
                explanation:
                    "Downforce pushes the car toward the track, increasing the load on the tyres and helping the car generate grip through corners."
            },
            {
                question: "What is aerodynamic drag?",
                options: [
                    "A force that opposes the car's motion through the air",
                    "The force that turns the steering wheel",
                    "The weight of the driver",
                    "The force produced by the brakes"
                ],
                answer: 0,
                explanation:
                    "Drag is aerodynamic resistance that acts against the car's movement through the air. Reducing drag can help improve straight-line speed."
            },
            {
                question: "Why is aerodynamic balance important?",
                options: [
                    "It determines the driver's helmet size",
                    "It controls the fuel colour",
                    "It helps distribute aerodynamic load between the front and rear",
                    "It determines the race length"
                ],
                answer: 2,
                explanation:
                    "Aerodynamic balance describes how aerodynamic load is distributed between the front and rear of the car. A suitable balance helps the car remain predictable and stable."
            }
        ]
    };

    quizzes.forEach((quiz) => {
        const quizType = quiz.dataset.quiz;
        const questions = quizData[quizType];

        if (!questions) {
            return;
        }

        const currentElement =
            quiz.querySelector(".quiz-current");

        const totalElement =
            quiz.querySelector(".quiz-total");

        const questionElement =
            quiz.querySelector(".quiz-question");

        const optionsElement =
            quiz.querySelector(".quiz-options");

        const feedbackElement =
            quiz.querySelector(".quiz-feedback");

        const nextButton =
            quiz.querySelector(".quiz-next");

        const resultElement =
            quiz.querySelector(".quiz-result");

        const scoreElement =
            quiz.querySelector(".quiz-score");

        const scoreTotalElement =
            quiz.querySelector(".quiz-score-total");

        const resultMessage =
            quiz.querySelector(".quiz-result-message");

        const restartButton =
            quiz.querySelector(".quiz-restart");

        let currentQuestion = 0;
        let score = 0;

        totalElement.textContent = questions.length;
        scoreTotalElement.textContent = questions.length;

        function showQuestion() {
            const question = questions[currentQuestion];

            currentElement.textContent = currentQuestion + 1;

            questionElement.textContent =
                question.question;

            optionsElement.innerHTML = "";
            feedbackElement.textContent = "";

            nextButton.hidden = true;
            resultElement.hidden = true;

            question.options.forEach((option, index) => {
                const button =
                    document.createElement("button");

                button.type = "button";
                button.className = "quiz-option";
                button.textContent = option;

                button.addEventListener(
                    "click",
                    () => selectAnswer(index)
                );

                optionsElement.appendChild(button);
            });
        }

        function selectAnswer(selectedIndex) {
            const question = questions[currentQuestion];

            const optionButtons =
                optionsElement.querySelectorAll(
                    ".quiz-option"
                );

            optionButtons.forEach((button) => {
                button.disabled = true;
            });

            if (selectedIndex === question.answer) {
                score++;

                feedbackElement.textContent =
                    `Correct. ${question.explanation}`;
            } else {
                feedbackElement.textContent =
                    `Not quite. ${question.explanation}`;
            }

            optionButtons[question.answer]
                .classList.add("correct");

            if (selectedIndex !== question.answer) {
                optionButtons[selectedIndex]
                    .classList.add("incorrect");
            }

            nextButton.hidden = false;
        }

        function showResult() {
            optionsElement.innerHTML = "";
            feedbackElement.textContent = "";
            nextButton.hidden = true;

            resultElement.hidden = false;

            scoreElement.textContent = score;

            if (score === questions.length) {
                resultMessage.textContent =
                    "Excellent. You have a strong understanding of this topic.";
            } else if (score >= 2) {
                resultMessage.textContent =
                    "Good work. Review the explanations for the questions you missed.";
            } else {
                resultMessage.textContent =
                    "Keep exploring the topic and try the quiz again.";
            }
        }

        nextButton.addEventListener(
            "click",
            () => {
                currentQuestion++;

                if (currentQuestion >= questions.length) {
                    showResult();
                } else {
                    showQuestion();
                }
            }
        );

        restartButton.addEventListener(
            "click",
            () => {
                currentQuestion = 0;
                score = 0;

                showQuestion();
            }
        );

        showQuestion();
    });
});