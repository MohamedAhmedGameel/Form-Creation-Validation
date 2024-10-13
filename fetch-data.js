// Define an async function to fetch user data
async function fetchUserData() {
    // API URL to fetch user data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is okay, otherwise throw an error
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display the user list
        const userList = document.createElement('ul');

        // Loop through the users array and create a <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as the text content
            userList.appendChild(listItem);   // Append <li> to <ul>
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors during the fetch operation
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Add an event listener to run fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
