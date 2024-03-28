function performSearch() {
    // Get the search input value
    var searchTerm = document.getElementById('search-input').value;

    // You can replace the code below with your actual search logic
    var searchResults = fetchSearchResults(searchTerm);

    // Display the search results
    displaySearchResults(searchResults);
}

function fetchSearchResults(searchTerm) {
    // This is a placeholder for your actual search logic.
    // You might want to make an AJAX request to a server or perform some other search operation.
    // For simplicity, this example just returns a mock array of results.
    if(x="FAST FOOD")
    return ['PIZZA', 'BURGER', 'FRIES','PASTA'];
    elif(x="SOUTH INDIAN")
    return ['MASALA DOSA', 'UPMA', 'BIRYANI','IDLI'];
    elif(x="CHICKEN")
    return ['BUTTER CHICKEN', 'GRAVY CHICKEN', 'FRIED CHICKEN','TANDOORI CHICKEN'];
    elif(x="SEA FOOD")
    return ['Seasoned Pan-Fried Cod', 'Homemade Fish Sticks', 'Firecracker Shrimp','Air Fryer Tilapia'];
}

function displaySearchResults(results) {
    var resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Display each result in a new paragraph
    results.forEach(function (result) {
        var resultParagraph = document.createElement('p');
        resultParagraph.textContent = result;
        resultsContainer.appendChild(resultParagraph);
    });
}
