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

function displayItems(collection, containerId) {
  var container = document.getElementById(containerId);
  container.innerHTML = "";
  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];

    var itemDiv = document.createElement("div");
    itemDiv.className = "item";
    var inneritemDiv = document.createElement("div");
    inneritemDiv.className = "inneritem";

    var itemName = document.createElement("h3");
    itemName.textContent = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.textContent = "Price: $" + item.price;

    var itemDescription = document.createElement("p");
    itemDescription.textContent = "Description: " + item.description;

    var itemColor = document.createElement("p");
    itemColor.textContent = "Color: " + item.color;

    var itemSize = document.createElement("p");
    itemSize.textContent = "Size: " + item.size;

    var itemQuantity = document.createElement("p");
    itemQuantity.textContent = "Quantity: " + item.quantity;

    var itemImage = document.createElement("img");
    itemImage.src = item.image;

    itemDiv.appendChild(itemImage);
    inneritemDiv.appendChild(itemName);
    inneritemDiv.appendChild(itemPrice);
    inneritemDiv.appendChild(itemColor);
    inneritemDiv.appendChild(itemSize);
    inneritemDiv.appendChild(itemQuantity);
    inneritemDiv.appendChild(itemDescription);
    itemDiv.appendChild(inneritemDiv);
    container.appendChild(itemDiv);
  }
}

function showCollection(collectionName) {
  var collection;

  if (collectionName === "mensCollection") {
    collection = mensCollection;
  } else if (collectionName === "womensCollection") {
    collection = womensCollection;
  } else if (collectionName === "stockCollection") {
    collection = stockCollection;
  } else {
    collection = [];
  }

  displayItems(collection, "itemsContainer");
}

function addItem() {
  var itemName = document.getElementById("addItemName").value;
  addItemToCollection(stockCollection, itemName);
  displayItems(stockCollection, "itemsContainer");
}

function addItemToCollection(collection, itemName) {
  for (var i = 0; i < stockCollection.length; i++) {
    if (stockCollection[i].name === itemName) {
      collection.push(stockCollection[i]);
      return;
    }
  }
}

function removeItem() {
  var itemName = document.getElementById("removeItemName").value;
  removeItemFromCollection(mensCollection, itemName);
  displayItems(mensCollection, "itemsContainer");
}

function removeItemFromCollection(collection, itemName) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].name === itemName) {
      collection.splice(i, 1);
    }
  }
}

function editItem() {
  var itemName = document.getElementById("editItemName").value;
  var newPrice = document.getElementById("editItemPrice").value;
  var newQuantity = document.getElementById("editItemQuantity").value;

  editItemInCollection(mensCollection, itemName, newPrice, newQuantity);
  displayItems(mensCollection, "itemsContainer");
}

function editItemInCollection(collection, itemName, newPrice, newQuantity) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].name === itemName) {
      collection[i].price = newPrice;
      collection[i].quantity = newQuantity;
      return;
    }
  }
}

function searchItems() {
  var search = document.getElementById("search").value;
  var result = searchItem(mensCollection, search);
  displayItems(result, "itemsContainer");
}

function searchItem(collection, search) {
  return collection.filter(function (item) {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
}

function addToFavorites() {
  var itemName = document.getElementById("favoriteItemName").value;

  for (var i = 0; i < mensCollection.length; i++) {
    console.log(mensCollection[i]);

    if (mensCollection[i].name === itemName) {
      favoriteCollection.push(mensCollection[i]);
      return;
    }
  }

  for (var j = 0; j < womensCollection.length; j++) {
    if (womensCollection[j].name === itemName) {
      favoriteCollection.push(womensCollection[j]);
      return;
    }
  }
  console.log(favoriteCollection);

  displayItems(favoriteCollection, "favoritesContainer");
}
