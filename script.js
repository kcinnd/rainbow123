function togglePotOfGold() {
    var potOfGold = document.getElementById('potOfGold');

    // This toggles the 'visible' class which controls the visibility and animations
    potOfGold.classList.toggle('visible');

    // If you want the pot of gold to hide automatically after some time, uncomment below
    /*
    setTimeout(function() {
        potOfGold.classList.remove('visible');
    }, 5000); // Adjust time as needed, 5000ms = 5 seconds
    */
}

// Ensure the rainbow element has an event listener for clicks that invokes togglePotOfGold
document.getElementById('rainbow').addEventListener('click', togglePotOfGold);
