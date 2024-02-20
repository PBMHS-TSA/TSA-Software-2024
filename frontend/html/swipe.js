let currentCardIndex = 1;
let dislikeCount = 0;
let likeCount = 0;
const cardContainer = document.getElementById('card-container');

function swipe(action) {
    if (action === 'dislike') {
        dislikeCount++;
    } else if (action === 'like') {
        likeCount++;

        if (likeCount === 3) {
            window.location.href = 'chat';
            return;
        }
    }

    showNextCard();
}

function showNextCard() {
    const currentCard = document.getElementById(`card${currentCardIndex}`);
    currentCardIndex++;

    const nextCard = document.getElementById(`card${currentCardIndex}`);
    if (nextCard) {
        currentCard.style.display = 'none';

        nextCard.style.display = 'block';
    } else {
        window.location.href = 'chat';
    }
}
