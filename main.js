document.addEventListener('DOMContentLoaded', function() {
    // Get the navigation button container
    var navBtnContainer = document.querySelector('.nav-btn-container');

    // Add an event listener to the navigation button container
    navBtnContainer.addEventListener('click', function() {
        // Toggle a class to show or hide the navigation menu
        document.querySelector('.nav-items').classList.toggle('show');
    });
});
