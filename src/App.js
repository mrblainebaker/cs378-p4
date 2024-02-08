import './App.css';
import MenuItem from './components/MenuItem';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
// Create a container div element
var containerDiv = document.createElement("div");
containerDiv.id = "output"; // Set an id for the container div
container
// Loop through each element of the array
menuItems.forEach(function(element) {
    var menuItemContainer = document.createElement("div");
    // Create a new div element for each array element
    var name = document.createElement("h1");
    // Set the text content of the div to the current array element
    name.textContent = element.title;
    menuItemContainer.appendChild(name);

    var image = document.createElement("img");
    image.alt = element.imageName;
    image.src = "./images/" +  String(element.imageName);
    menuItemContainer.appendChild(image);



    var desc = document.createElement("p");
    desc.textContent = element.description;
    menuItemContainer.appendChild(desc);

    var price = document.createElement("p");
    price.textContent = element.price;
    menuItemContainer.appendChild(price);

    var button = document.createElement("button");
    button.textContent = "Add";
    menuItemContainer.appendChild(button);


    // Append the div to the container div
    containerDiv.appendChild(menuItemContainer);
});

// Append the container div to the body of the HTML document
document.body.appendChild(containerDiv);
}

export default App;
