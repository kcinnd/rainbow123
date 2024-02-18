function showRainbow() {
    const stripes = document.querySelectorAll('.rainbow-stripe');
    let delay = 0;

    stripes.forEach((stripe) => {
        setTimeout(() => {
            stripe.style.opacity = 1; // Gradually show each stripe
        }, delay);
        delay += 500; // Increment delay for each stripe
    });

    // Show the pot of gold after the last stripe appears
    setTimeout(showPotOfGold, delay);
}

function showPotOfGold() {
    const potOfGold = document.getElementById('potOfGold');
    potOfGold.style.display = 'block'; // Reveal the pot of gold
}

// Start the rainbow animation when the page is clicked
document.body.addEventListener('click', showRainbow);
