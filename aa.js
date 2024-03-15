const appId = 'YOUR_EDAMAM_APP_ID';
const appKey = 'YOUR_EDAMAM_APP_KEY';

function searchRecipes() {
    const searchTerm = document.getElementById('search').value;

    if (!searchTerm) {
        alert('Please enter ingredients to search for recipes.');
        return;
    }

    const apiEndpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${appKey}`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => displayResults(data.hits))
        .catch(error => console.error('Error fetching recipes:', error));
}

function displayResults(recipes) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (recipes.length === 0) {
        resultsContainer.innerHTML = '<p>No recipes found. Try a different search term.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const { label, image, url } = recipe.recipe;

        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <h3>${label}</h3>
            <img src="${image}" alt="${label}" />
            <p><a href="${url}" target="_blank">View Recipe</a></p>
        `;

        resultsContainer.appendChild(recipeCard);
    });
}
