function calculateProbability() {
    const factors = [
        'attachment-response', 'emotion-expression', 'sociability', 'mood-swings',
        'first-dates', 'conversation-initiation', 'pursuit-effort'
    ];

    let totalScore = 0;
    let answeredQuestions = 0;

    factors.forEach(factor => {
        const selectedOption = document.querySelector(`input[name="${factor}"]:checked`);
        if (selectedOption) {
            totalScore += parseInt(selectedOption.value);
            answeredQuestions++;
        }
    });

    if (answeredQuestions !== factors.length) {
        alert('Please answer all the questions to calculate your probability!');
        return;
    }

    const probability = 100 - (totalScore / answeredQuestions);

    let suggestionMessage = '';
    if (probability <= 30) {
        suggestionMessage = "It looks like you might be staying single this year. Try focusing more on relationships!";
    } else if (probability <= 60) {
        suggestionMessage = "You're in the middle! Maybe work on being more open or pursuing connections more actively.";
    } else {
        suggestionMessage = "You're doing great! It's likely you won't stay single this year. Keep it up!";
    }

    document.getElementById('probabilityMessage').innerHTML =
        `Your probability of staying single this year is approximately ${probability.toFixed(2)}%. ` +
        suggestionMessage;

    document.getElementById('resultModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}

document.getElementById('closeButton').addEventListener('click', closeModal);