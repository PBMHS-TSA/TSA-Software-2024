let currentCardIndex = 1;
let dislikeCount = 0;
let likeCount = 0;
let isDragging = false;
let startPosX = 0;
const cardContainer = document.getElementById('card-container');

function handleTouchStart(e) {
    startPosX = e.touches[0].clientX;
    isDragging = true;
}

function handleTouchMove(e) {
    if (!isDragging) return;

    const currentPosX = e.touches[0].clientX;
    const deltaX = currentPosX - startPosX;

    if (deltaX > 0) {
        swipe('like');
    } else if (deltaX < 0) {
        swipe('dislike');
    }

    isDragging = false;
}

function swipe(action) {
    if (action === 'dislike') {
        dislikeCount++;

        if (dislikeCount === 5) {
            window.location.href = 'Nomatches.html';
            return;
        }
    } else if (action === 'like') {
        likeCount++;

        if (likeCount === 3) {
            window.location.href = 'Chat.html';
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
        window.location.href = 'Chat.html';
    }
}

cardContainer.addEventListener('touchstart', handleTouchStart);
cardContainer.addEventListener('touchmove', handleTouchMove);
