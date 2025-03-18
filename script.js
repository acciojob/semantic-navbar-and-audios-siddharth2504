//your code here
document.addEventListener("DOMContentLoaded", () => {
            // Approach 1: Using querySelectorAll and forEach
            let audioSources = [];
            document.querySelectorAll('audio source').forEach(source => {
                audioSources.push(source.getAttribute('src'));
            });
            console.log("Using forEach:", audioSources);

            // Approach 2: Using map (More concise)
            const audioSourcesMap = Array.from(document.querySelectorAll('audio source'))
                .map(source => source.getAttribute('src'));
            console.log("Using map:", audioSourcesMap);
        });