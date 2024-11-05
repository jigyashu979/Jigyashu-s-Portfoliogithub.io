let currentIndex = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

function showReview(index) {
    reviews.forEach((review, i) => {
        if (i === index) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });
}

function nextReview() {
    currentIndex = (currentIndex + 1) % totalReviews;
    showReview(currentIndex);
}

setInterval(nextReview, 3000); // Change review every 3 seconds
showReview(currentIndex);
