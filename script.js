var showButton = document.getElementById('showButton');

showButton.addEventListener('click', function() {
    var ingredients = document.querySelectorAll('.ingredients');
    
    ingredients.forEach(function(ingredients) {
        if (ingredients.style.display === 'none' || !ingredients.style.display) {
            ingredients.style.display = 'block';
            showButton.textContent = 'Hide Ingredients';
        } 
        
        else {
            ingredients.style.display = 'none';
            showButton.textContent = 'Show Ingredients';
        }

    });

});