function togglePotOfGold() {
    var potOfGold = document.getElementById('potOfGold');

    // Check if the pot of gold is currently hidden
    if (potOfGold.classList.contains('hidden')) {
        // Remove the 'hidden' class to make the pot of gold visible
        potOfGold.classList.remove('hidden');

        // Add the animation classes
        potOfGold.classList.add('dancing', 'sparkling');

        // Optional: Remove the animation classes after a certain time
        setTimeout(function() {
            potOfGold.classList.remove('dancing', 'sparkling');
        }, 5000); // Adjust the time as needed
    } else {
        // Add the 'hidden' class to hide the pot of gold
        potOfGold.classList.add('hidden');

        // Optionally, remove the animation classes immediately
        potOfGold.classList.remove('dancing', 'sparkling');
    }
}
