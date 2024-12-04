// Collections
var mensCollection = [
  ClothingItem(
    "Men's Jeans",
    49.99,
    "Slim fit denim jeans.",
    "Black",
    "32",
    5,
    "menimages/jean.jpg"
  ),
  ClothingItem(
    "Men's Jacket",
    89.99,
    "Warm winter jacket.",
    "Grey",
    "L",
    8,
    "menimages/men's jacket.jpg"
  ),
  ClothingItem(
    "Men's Shorts",
    29.99,
    "Casual summer shorts.",
    "grey",
    "M",
    12,
    "menimages/short.jpg"
  ),
  ClothingItem(
    "Men's Hoodie",
    39.99,
    "Cozy fleece hoodie.",
    "Red",
    "XL",
    6,
    "menimages/hoodie.jpg"
  ),
  ClothingItem(
    "Men's Shoes",
    69.99,
    "Stylish running shoes.",
    "White",
    "10",
    7,
    "menimages/shoes.jpg"
  ),
];

var womensCollection = [
  ClothingItem(
    "Women's Dress",
    39.99,
    "A stylish summer dress.",
    "Red",
    "S",
    8,
    "womanimages/dress.jpg"
  ),
  ClothingItem(
    "Women's Blouse",
    29.99,
    "A silk blouse for casual wear.",
    "White",
    "M",
    12,
    "womanimages/blouse.jpg"
  ),
  ClothingItem(
    "Women's Skirt",
    24.99,
    "A trendy A-line skirt.",
    "Black",
    "S",
    10,
    "womanimages/skirt.jpg"
  ),
  ClothingItem(
    "Women's Cardigan",
    34.99,
    "Soft knit cardigan.",
    "Beige",
    "M",
    9,
    "womanimages/cardigan.jpg"
  ),
  ClothingItem(
    "Women's Sandals",
    29.99,
    "Comfortable summer sandals.",
    "Brown",
    "8",
    15,
    "womanimages/sandals.jpg"
  ),
];

var stockCollection = [
  ClothingItem(
    "Unisex Hoodie",
    25.99,
    "Warm and cozy hoodie.",
    "Green",
    "L",
    15,
    "stock/hoodiestock.jpg"
  ),
  ClothingItem(
    "Winter Jacket",
    79.99,
    "Waterproof winter jacket.",
    "Navy",
    "XL",
    7,
    "stock/jacketstock.jpg"
  ),
  ClothingItem(
    "Running Shoes",
    55.99,
    "Comfortable running shoes.",
    "Black",
    "9",
    10,
    "stock/shoesstock.jpg"
  ),
  ClothingItem(
    "Summer Dress",
    45.99,
    "Lightweight summer dress.",
    "Yellow",
    "M",
    13,
    "stock/dressstock.jpg"
  ),
  ClothingItem(
    "Casual T-Shirt",
    18.99,
    "Soft cotton t-shirt.",
    "Orange",
    "M",
    18,
    "stock/t-shirtstock.jpg"
  ),
  ClothingItem(
    "Formal Pants",
    39.99,
    "Tailored formal pants.",
    "Charcoal",
    "32",
    9,
    "stock/pantsstock.jpg"
  ),
];

var favoriteCollection = [];

// ClothingItem constructor
function ClothingItem(name, price, description, color, size, quantity, image) {
  return {
    name: name,
    price: price,
    description: description,
    color: color,
    size: size,
    quantity: quantity,
    image: image,
  };
}

// Display items
function displayItems(collection, containerId) {
  var container = document.getElementById(containerId);
  container.innerHTML = "";
  collection.forEach(function (item) {
    var itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML =
      '<img src="' +
      item.image +
      '" alt="' +
      item.name +
      '">' +
      '<div class="inneritem">' +
      "<h3>" +
      item.name +
      "</h3>" +
      "<p>Price: $" +
      item.price.toFixed(2) +
      "</p>" +
      "<p>Color: " +
      item.color +
      "</p>" +
      "<p>Size: " +
      item.size +
      "</p>" +
      "<p>Quantity: " +
      item.quantity +
      "</p>" +
      "<p>Description: " +
      item.description +
      "</p>" +
      "</div>";
    container.appendChild(itemDiv);
  });
}

// Show collection
function showCollection(collectionName) {
  var collection;
  switch (collectionName) {
    case "mensCollection":
      collection = mensCollection;
      break;
    case "womensCollection":
      collection = womensCollection;
      break;
    case "stockCollection":
      collection = stockCollection;
      break;
    default:
      collection = [];
  }
  displayItems(collection, "itemsContainer");
}

// Add item
function addItem() {
  var itemName = document.getElementById("addItemName").value;
  var item = stockCollection.find(function (item) {
    return item.name === itemName;
  });
  if (item) {
    mensCollection.push(item);
    displayItems(mensCollection, "itemsContainer");
  } else {
    alert("Item not found in stock collection.");
  }
}

// Remove item
function removeItem() {
  var itemName = document.getElementById("removeItemName").value;
  var index = mensCollection.findIndex(function (item) {
    return item.name === itemName;
  });
  if (index !== -1) {
    mensCollection.splice(index, 1);
    displayItems(mensCollection, "itemsContainer");
  } else {
    alert("Item not found in men's collection.");
  }
}

// Edit item
function editItem() {
  var itemName = document.getElementById("editItemName").value;
  var newPrice = parseFloat(document.getElementById("editItemPrice").value);
  var newQuantity = parseInt(document.getElementById("editItemQuantity").value);

  var item = mensCollection.find(function (item) {
    return item.name === itemName;
  });
  if (item) {
    if (!isNaN(newPrice)) item.price = newPrice;
    if (!isNaN(newQuantity)) item.quantity = newQuantity;
    displayItems(mensCollection, "itemsContainer");
  } else {
    alert("Item not found in men's collection.");
  }
}

// Search items
function searchItems() {
  var search = document.getElementById("search").value.toLowerCase();
  var result = mensCollection.filter(function (item) {
    return (
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
    );
  });
  displayItems(result, "itemsContainer");
}

// Add to favorites
function addToFavorites() {
  var itemName = document.getElementById("favoriteItemName").value;
  var allItems = mensCollection.concat(womensCollection);
  var item = allItems.find(function (item) {
    return item.name === itemName;
  });
  if (item) {
    var isAlreadyFavorite = favoriteCollection.some(function (favItem) {
      return favItem.name === item.name;
    });
    if (!isAlreadyFavorite) {
      favoriteCollection.push(item);
      displayItems(favoriteCollection, "favoritesContainer");
    } else {
      alert("Item is already in favorites.");
    }
  } else {
    alert("Item not found in collections.");
  }
}

// Initial display
showCollection("mensCollection");
