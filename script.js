        const levelOptions = {
            "3-5": ["beginner"],
            "6-8": ["beginner", "intermediate"],
            "9-11": ["beginner", "intermediate"],
            "12-15": ["beginner", "intermediate", "advanced"],
            "16-17": ["beginner", "intermediate", "advanced"],
            "18-plus": ["beginner", "intermediate", "advanced"]
        };
        
        const sessions = {
            "3-5": {
                beginner: {
                    warmUps: ["5 minutes of skipping, side steps, and fun shadow swings.", "Play follow-the-leader movements, then gently bounce and catch the ball.", "Move like different animals around the court, finishing with easy racket taps."] ,
                    miniTennis: ["Mini tennis inside the service boxes using a foam ball and two-bounce rallies.", "Touch tennis in the service boxes with a partner, aiming over a low net.", "Roll and tap the ball across the service box, then try a gentle rally."] ,
                    mainSessions: ["Explore forehands and backhands with a coach feed, then let players rally for three hits.", "Hit forehands and backhands to large targets, finishing with a cooperative rally game.", "Play a simple red-ball rally game where players earn a point for sending the ball over the net."] ,
                    notes: ["Use simple words, celebrate effort, and show a relaxed low-to-high swing.", "Keep the racket ready in front and watch the ball all the way to contact.", "Encourage soft hands, small steps, and a balanced finish after every swing."]
                }
            },
            "6-8": {
                beginner: {
                    warmUps: ["8 minutes of movement games, racket taps, and gentle coach feeds.", "Jog, skip, and balance on one foot before easy forehand and backhand shadow swings.", "Play a red-ball reaction game, then rally slowly from inside the service boxes."],
                    miniTennis: ["Mini tennis inside the service boxes with a goal of three controlled shots.", "Touch tennis in the service boxes, using a low compression ball and relaxed swings.", "Rally from the service boxes, allowing one bounce and aiming through the middle."],
                    mainSessions: ["Practise basic forehands and backhands from a coach feed, then play short cooperative rallies.", "Hit forehand and backhand targets from a ready position, followed by a rally-to-five game.", "Rally with a partner using red or orange balls, recovering to the middle after each shot."],
                    notes: ["Prepare the racket early and finish the swing toward the target.", "Brush the ball from low to high without trying to hit too hard.", "Use small adjustment steps and keep the eyes on the ball after the bounce."]
                },
                intermediate: {
                    warmUps: ["10 minutes of dynamic movement, racket skills, and controlled baseline feeds.", "Use quick feet between cones, then build forehand and backhand rallies gradually.", "Start with ball taps and catches, then progress to moving mini tennis."],
                    miniTennis: ["Touch tennis in the service boxes with three cross-court shots before changing direction.", "Mini tennis with a target cone in each service box and a focus on height over the net.", "Rally inside the boxes while taking one recovery step after every shot."],
                    mainSessions: ["Build forehand and backhand consistency with target zones, movement, and a rally-to-ten game.", "Alternate forehand and backhand feeds, then play points where players must recover to the middle.", "Practise cross-court rallying with orange or green balls, adding a directional change on a short ball."],
                    notes: ["Use a smooth low-to-high swing and contact the ball in front.", "Apply gentle topspin to create height and control.", "Keep the feet active between shots and return to a balanced ready position."]
                }
            },
            "9-11": {
                beginner: {
                    warmUps: ["10 minutes of dynamic movement followed by easy cooperative baseline rallies.", "Use shadow swings, side shuffles, and coach feeds to both sides.", "Warm up with racket taps, catching games, and relaxed forehand feeds."],
                    miniTennis: ["Mini tennis inside the service boxes with a five-shot rally target.", "Touch tennis in the service boxes, changing between forehand and backhand sides.", "Play service-box rallies that reward a high, safe ball over the net."],
                    mainSessions: ["Practise basic forehand and backhand drills, then play simple cross-court points.", "Use coach feeds to build a forehand rally and a backhand rally before playing to seven points.", "Rally cooperatively from the baseline, focusing on keeping the ball in play and recovering to the middle."],
                    notes: ["Complete the full swing motion, low to high, brushing the ball.", "Prepare early, turn the shoulders, and finish balanced toward the target.", "Slow the movement down so the ball lands safely in the opposite service box."]
                },
                intermediate: {
                    warmUps: ["12 minutes of dynamic movement, controlled rallies, and forehand-to-backhand transitions.", "Begin with mini tennis, then add split steps and movement to alternating feeds.", "Use cooperative baseline rallies with a gradual increase in pace and depth."],
                    miniTennis: ["Mini tennis inside the service boxes with a focus on height, spin, and recovery steps.", "Touch tennis in the service boxes: rally cross-court three times, then change direction.", "Play moving mini tennis where the coach calls forehand or backhand before contact."],
                    mainSessions: ["Improve consistency with forehand and backhand target drills, movement patterns, and live cross-court points.", "Practise inside-out forehands and backhands under pressure, then play points starting cross-court.", "Use depth targets, recovery steps, and a change of direction after a short ball."],
                    notes: ["Create racket-head speed with a smooth swing and clear contact point.", "Apply topspin to keep the ball deep while maintaining a safe net clearance.", "Split step as the opponent hits and use small steps to arrive balanced."]
                }
            },
            "12-15": {
                beginner: {
                    warmUps: ["12 minutes of mini tennis, dynamic movement, and relaxed rallying from the baseline.", "Combine shadow swings, split steps, and gentle feeds to both forehand and backhand.", "Start with cooperative rallies, building from service boxes to the baseline."],
                    miniTennis: ["Touch tennis in the service boxes with a focus on a clean contact point.", "Mini tennis inside the service boxes, aiming for six shots with controlled height.", "Rally in the service boxes, adding a recovery step after each forehand and backhand."],
                    mainSessions: ["Build basic forehand and backhand patterns before playing simple rally-based points.", "Alternate forehand and backhand feeds, then play cross-court rallies to a target.", "Practise rally tolerance from the baseline, keeping shape and balance through each shot."],
                    notes: ["Use a complete low-to-high swing and finish with the racket over the shoulder.", "Keep the contact point in front and recover to the middle after the shot.", "Prioritise height and control before adding more speed."]
                },
                intermediate: {
                    warmUps: ["14 minutes of progressive rallying, footwork patterns, and controlled changes of direction.", "Warm up with mini tennis, then add split-step reactions and movement to wide feeds.", "Use baseline rallies that build from cross-court control to moderate pace."],
                    miniTennis: ["Touch tennis in the service boxes with short angles and a low-to-high swing.", "Mini tennis with a three-shot cross-court pattern before changing direction.", "Rally inside the boxes while alternating a higher safety ball with a controlled attacking ball."],
                    mainSessions: ["Develop forehand and backhand consistency with depth targets, movement, and recovery patterns.", "Practise inside-out forehands, backhand control, and cross-court points with a directional change.", "Work on movement under pressure: wide ball, recovery, then a ball to the open court."],
                    notes: ["Maintain racket-head speed while keeping the contact point in front.", "Apply topspin to control depth and move the opponent back.", "Recover with quick crossover steps, then use a split step before the next shot."]
                },
                advanced: {
                    warmUps: ["15 minutes of progressive rallying with heavy spin, live movement, and changing targets.", "Use dynamic footwork, high-intensity shadow swings, and controlled attacking feeds.", "Begin with mini tennis, then build pace through heavy cross-court baseline rallies."],
                    miniTennis: ["Touch tennis in the service boxes with short angles, low contact, and quick recovery.", "Mini tennis with a soft angle followed by a firm ball through the middle.", "Use service-box touch tennis to rehearse approach preparation and racket control."],
                    mainSessions: ["Train heavy topspin forehands, attacking balls, and approach shots before playing directional points.", "Practise inside-out forehand patterns, backhand stability, and finishing into the open court.", "Play points that start cross-court, attack a short ball, and finish down the line."],
                    notes: ["Brush up the back of the ball while accelerating through contact.", "Recognise the short ball early and move forward with intent.", "Use court position and direction to create space before finishing the point."]
                }
            },
            "16-17": {
                beginner: {
                    warmUps: ["12 minutes of movement, mini tennis, and controlled baseline rallying.", "Combine split steps, shadow swings, and gentle feeds to establish timing.", "Start with cooperative rallies and gradually add movement to both sides."],
                    miniTennis: ["Mini tennis inside the service boxes, aiming for a consistent relaxed rally.", "Touch tennis in the service boxes with a focus on early preparation.", "Rally in the service boxes, changing direction only when balanced."],
                    mainSessions: ["Practise fundamental forehands and backhands, then play simple points built around rallying.", "Use forehand and backhand feeds with large targets before playing cross-court games.", "Build reliable baseline rallies and recover to the middle after every shot."],
                    notes: ["Complete the full swing motion, low to high, brushing the ball.", "Prepare early and keep the head still through contact.", "Choose height and control before trying to hit harder."]
                },
                intermediate: {
                    warmUps: ["15 minutes of dynamic movement, progressive baseline rallies, and directional changes.", "Use split-step reactions and alternating wide feeds before building rally pace.", "Warm up cross-court, then add a controlled change down the line."],
                    miniTennis: ["Touch tennis in the service boxes with short angles and quick recovery steps.", "Mini tennis with a high, safe ball followed by a controlled change of direction.", "Rally inside the boxes while varying height, spin, and target."],
                    mainSessions: ["Improve technique and consistency through depth targets, movement drills, and specific forehand patterns.", "Practise backhand control, inside-out forehands, and points that begin with a planned pattern.", "Work on wide-ball recovery and directional changes while maintaining rally quality."],
                    notes: ["Use a relaxed swing to create racket-head speed and reliable depth.", "Apply topspin to increase margin over the net and control the baseline.", "Move with a split step, adjust with small steps, and recover before the next ball."]
                },
                advanced: {
                    warmUps: ["16 minutes of high-quality rallying with heavy topspin, pace changes, and live movement.", "Progress from dynamic footwork to heavy cross-court rallies and attacking feeds.", "Use movement patterns, quick reactions, and controlled high-intensity baseline hitting."],
                    miniTennis: ["Touch tennis in the service boxes with short angles and approach-shot preparation.", "Mini tennis with alternating soft angles and firm balls through the middle.", "Use service-box touch tennis to sharpen feel before aggressive baseline patterns."],
                    mainSessions: ["Develop heavy topspin forehands, attacking shots, approach shots, and point-ending directional patterns.", "Practise serve-plus-one style patterns, inside-out forehands, and finishing down the line.", "Play live points that reward opening the court with width before attacking the open space."],
                    notes: ["Accelerate through contact to produce heavy topspin and depth.", "Step forward on a short ball and make the approach shot purposeful.", "Plan the next shot early and use direction to move the opponent before finishing."]
                }
            },
            "18-plus": {
                beginner: {
                    warmUps: ["10 minutes of easy movement, mini tennis, and comfortable baseline rallies.", "Use gentle shadow swings, mobility movements, and controlled feeds to both sides.", "Begin with service-box rallies, then move back while keeping the pace relaxed."],
                    miniTennis: ["Mini tennis inside the service boxes, focusing on touch and a relaxed swing.", "Touch tennis in the service boxes with a target of five comfortable shots.", "Rally inside the boxes, using height and control rather than power."],
                    mainSessions: ["Practise basic forehand and backhand drills, then play simple cooperative rallies.", "Build forehand and backhand confidence with coach feeds before playing short points.", "Rally from the baseline with large targets and recover calmly to the middle."],
                    notes: ["Complete the full swing motion, low to high, brushing the ball.", "Keep the grip relaxed and make contact in front of the body.", "Slow the movement down so the ball lands safely in the opposite service box."]
                },
                intermediate: {
                    warmUps: ["12 minutes of mobility, mini tennis, and progressive baseline rallying.", "Start with controlled movement, then add split steps and alternating side feeds.", "Build from service-box touch to consistent cross-court baseline rallies."],
                    miniTennis: ["Touch tennis in the service boxes with short angles and a focus on balance.", "Mini tennis with three cross-court shots before changing direction.", "Rally inside the boxes, varying height and spin while keeping the feet active."],
                    mainSessions: ["Work on forehand and backhand technique, depth, consistency, and movement into cross-court points.", "Practise specific forehand and backhand targets, then add recovery and a directional change.", "Use movement drills and rally patterns to improve control under moderate pressure."],
                    notes: ["Create racket-head speed with a smooth low-to-high swing.", "Apply topspin to improve net clearance and control depth.", "Use efficient adjustment steps and recover in balance after each shot."]
                },
                advanced: {
                    warmUps: ["15 minutes of progressive rallying, dynamic movement, and heavy topspin exchanges.", "Combine mobility, quick feet, and high-quality baseline patterns before live points.", "Build pace gradually through cross-court rallies, changes of direction, and attacking feeds."],
                    miniTennis: ["Touch tennis in the service boxes with short angles and approach-shot preparation.", "Mini tennis with alternating soft touch and firm controlled acceleration.", "Use service-box patterns to rehearse low contact, feel, and quick transition forward."],
                    mainSessions: ["Train heavy topspin forehands, attacking shots, approach shots, and directional point patterns.", "Practise serve-plus-one patterns, short-ball attacks, and a deep approach followed by a volley.", "Play tactical points that open the court with cross-court pressure before a down-the-line finish."],
                    notes: ["Brush up the back of the ball and accelerate through contact for heavy topspin.", "Read the short ball early, move forward, and attack with a clear target.", "Use depth, width, and court position to create the next attacking opportunity."]
                }
            }
        };

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
            const session = sessions[selectedAge][selectedLevel];
            const sessionKey = selectedAge + "-" + selectedLevel;
            const warmUp = chooseRandom(session.warmUps, sessionKey + "-warm-up");
            const miniTennis = chooseRandom(session.miniTennis, sessionKey + "-mini-tennis");
            const mainSession = chooseRandom(session.mainSessions, sessionKey + "-main-session");
            const coachNotes = chooseRandom(session.notes, sessionKey + "-coach-notes");

            document.getElementById("session").innerHTML = `
                <h2>${selectedAge.replace("-plus", "+")} ${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Session</h2>
                <h3>1. Warm Up</h3>
                <p>${warmUp}</p>
                <h3>2. Mini Tennis</h3>
                <p>${miniTennis}</p>
                <h3>3. Main Session</h3>
                <p>${mainSession}</p>
                <h3>4. Coach's Notes</h3>
                <ul><li>${coachNotes}</li></ul>
            `;
        }

        document.getElementById("player-age").addEventListener("change", updateLevelOptions);
        updateLevelOptions();