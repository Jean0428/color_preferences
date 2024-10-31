// Initialize an empty array to store the colors
let favoriteColors = [];

// This variable controls whether the loop should continue running
let addMore = true;

// Run the loop as long as addMore is true
while (addMore) {
    // Prompt the user to enter a favorite color
    let color = prompt("Enter your favorite color");

    // Check if the user typed 'stop' (case insensitive)
    if (color.toLowerCase() === 'stop') {
        // If 'stop' was entered, set addMore to false to exit the loop
        addMore = false;
    } else {
        // Otherwise, add the entered color to the favoriteColors array
        favoriteColors.push(color);

        // Log the updated array to the console
        console.log("Updated color list: ", favoriteColors);
    }
}
