        import { levelOptions, sessions, sessionTimings } from "./data.js";

        const previousChoices = {};

        function chooseRandom(options, choiceName) {
            let choiceIndex = Math.floor(Math.random() * options.length);
            const previousIndex = previousChoices[choiceName];

            if (options.length > 1 && choiceIndex === previousIndex) {
                choiceIndex = (choiceIndex + 1) % options.length;
            }

            previousChoices[choiceName] = choiceIndex;
            return options[choiceIndex];
        }

        function updateLevelOptions() {
            const selectedAge = document.getElementById("player-age").value;
            const levelSelect = document.getElementById("player-level");
            const availableLevels = levelOptions[selectedAge];

            levelSelect.innerHTML = "";
            availableLevels.forEach(function(level) {
                const option = document.createElement("option");
                option.value = level;
                option.textContent = level.charAt(0).toUpperCase() + level.slice(1);
                levelSelect.appendChild(option);
            });
        }

        function generateSession() {
            const selectedAge = document.getElementById("player-age").value;
            const selectedLevel = document.getElementById("player-level").value;
            const selectedDuration = document.getElementById("session-duration").value;
            const timings = sessionTimings[selectedDuration];
            const session = sessions[selectedAge][selectedLevel];

            if (!session) {
                console.error("Session data not found");
                return;
            }
            const sessionKey = selectedAge + "-" + selectedLevel;
            const warmUp = chooseRandom(session.warmUps, sessionKey + "-warm-up");
            const miniTennis = chooseRandom(session.miniTennis, sessionKey + "-mini-tennis");
            const mainSession = chooseRandom(session.mainSessions, sessionKey + "-main-session");
            const coachNotes = chooseRandom(session.notes, sessionKey + "-coach-notes");

            document.getElementById("session").innerHTML = `
                <h2>${selectedAge.replace("-plus", "+")} ${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Session</h2>
                <p><strong>Duration:</strong> ${selectedDuration} minutes</p>
                <h3>1. Warm Up (${timings.warmUp} minutes)</h3>
                <p>${warmUp}</p>
                <h3>2. Mini Tennis (${timings.miniTennis} minutes)</h3>
                <p>${miniTennis}</p>
                <h3>3. Main Session (${timings.mainSession} minutes)</h3>
                <p>${mainSession}</p>
                <h3>4. Coach's Notes / Wrap Up</h3>
                <ul><li>${coachNotes}</li></ul>
            `;
        }

        document.getElementById("player-age").addEventListener("change", updateLevelOptions);
        document.getElementById("generate-session").addEventListener("click", generateSession);
        updateLevelOptions();