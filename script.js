// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it


// Get the balloon element
const balloon = document.getElementById('balloon');

// Set initial size of the balloon (in px)
let currentSize = 100; // This corresponds to 100% size, changeable based on keypresses


// Function to update the size of the balloon
function updateBalloonSize() {
    balloon.style.fontSize = currentSize + 'px'; // Set the font size (in px)
} 

// Event listener for keydown to detect arrow keys
document.addEventListener('keydown', function (event) {
    // Check which key was pressed
    if (event.key === 'ArrowUp') {
        // Inflate balloon (increase size by 10%)
        const currentSize = parseFloat(balloon.style.fontSize);
        balloon.style.fontSize = (currentSize * 1.1) + "px";
    } else if (event.key === "ArrowDown")  {
        // Deflate the balloon by 10%
        const currentSize = parseFloat(balloon.style.fontSize);
        balloon.style.fontSize = (currentSize * 0.9) + "px";
    }
});


// When a tab link is clicked, display the corresponding tab's content and hide the others.

const tabLinks = document.querySelectorAll("#tabbed-layout ul li a");
const tabs = document.querySelectorAll("#tabbed-contents div");

// Function to hide all tabs and then show the active tab
function showTab(index) {
    tabs.forEach((tab, i) => {