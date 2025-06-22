document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Object to store scores
    let scores = {
        Kind: 0,
        Macho: 0,
        Arrogant: 0,
        Feminine: 0,
        Sensitive: 0
    };

    // Evaluate each question's selected answer
    for (let i = 1; i <= 12; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            switch(answer.value) {
                case 'A':
                    if([1,5,9].includes(i)) scores.Kind++;
                    if([2,8,10].includes(i)) scores.Macho++;
                    if([3,6,12].includes(i)) scores.Arrogant++;
                    if([11].includes(i)) scores.Macho++; // strong pose
                    break;

                case 'B':
                    if([4,7,11].includes(i)) scores.Feminine++;
                    if([3].includes(i)) scores.Kind++;
                    break;

                case 'C':
                    if([4,7].includes(i)) scores.Macho++;
                    if([5].includes(i)) scores.Arrogant++;
                    if([11].includes(i)) scores.Sensitive++;
                    break;

                case 'D':
                    if([1,4,6,9].includes(i)) scores.Sensitive++;
                    if([12].includes(i)) scores.Kind++;
                    break;
            }
        }
    }

    // Find the highest scored personality trait
    let maxScore = 0;
    let finalTrait = '';
    for (const trait in scores) {
        if (scores[trait] > maxScore) {
            maxScore = scores[trait];
            finalTrait = trait;
        }
    }

    // Define personality descriptions
    let descriptions = {
        Kind: "Kind / Introvert / Sensitive",
        Macho: "Macho / Manly / Brave",
        Arrogant: "Arrogant / Bold / Dominant",
        Feminine: "Kind / Feminine / Elegant",
        Sensitive: "Sensitive / Thoughtful / Empathetic"
    };

    // Show result in popup
    alert("Your Personality: " + descriptions[finalTrait]);
});
