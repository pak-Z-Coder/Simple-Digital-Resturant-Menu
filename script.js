const appetizers = [
  {
    name: "Bruschetta",
    price: "9.99",
    img: "https://www.lifeasastrawberry.com/wp-content/uploads/2012/11/warm-bruschetta-1.jpg",
  },
  {
    name: "Caprese Salad",
    price: "11.99",
    img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
  },
  {
    name: "Garlic Bread",
    price: "10.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uwFShkKiXsxcVQaW13tRMTeyQbZvUJnsPIevNjNxtg&s",
  },
  {
    name: "Chicken Wings",
    price: "15.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRn1K9UosfaQGblAi8NKHnnFK6-2zwnMUmZSt7_K5G5Q&s",
  },
  {
    name: "Cheese Platter",
    price: "7.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznm_K5PKIpOfpoqWdSOKaY9esPEIyvGWS0aFnFWwkzQ&s",
  },
];
const entrees = [
  {
    name: "Spaghetti Carbonara",
    price: "9.99",
    img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg",
  },
  {
    name: "Grilled Salmon",
    price: "11.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOmEEO-FcFa2WUDXUq-m-x49pWBO2aVj9-kO3fAAhFw&s",
  },
  {
    name: "Vegetarian Stir-Fry",
    price: "10.99",
    img: "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3.jpg",
  },
  {
    name: "Beef Bourguignon",
    price: "17.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuld5Rs4jPSOGwpSeMXMu76Rff4L9G1OODeiWijPMujw&s",
  },
  {
    name: "Shrimp Scampi",
    price: "8.99",
    img: "https://recipes.net/wp-content/uploads/2021/09/shrimp-scampi-olive-garden-recipe-copycat.jpg",
  },
];
const desserts = [
  {
    name: "Fruit Sorbet",
    price: "5.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_t05xW3DfhdMKQpO3CSvsSzkXAm6oAoMl_CZHC8hFAg&s",
  },
  {
    name: "Apple Pie",
    price: "4.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dnlterecB_QhOrOr5ToVKBfLZInXeXGgMCJXi-vV7A&s",
  },
  {
    name: "Creme Brulee",
    price: "4.99",
    img: "https://richanddelish.com/wp-content/uploads/2022/04/creme-brulee-1-683x1024.jpg",
  },
  {
    name: "Gelato",
    price: "6.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8DrG-ef5ns8QfdK775XzfmN0F2DlnuHWNy57DH0vbA&s",
  },
  {
    name: "Chocolate Fondant",
    price: "5.99",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/fondant-6afb94b.jpg",
  },
];
const drinks = [
  {
    name: "Soft Drink",
    price: "1.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylAzeer_upKfP8H0IYs_n3lcppyBUGhmLctXFf0tSjw&s",
  },
  {
    name: "Coffee",
    price: "3.99",
    img: "https://texashillcountryoliveco.com/cdn/shop/articles/is-olive-oil-in-coffee-a-new-trend-worth-trying-158746.jpg?v=1682382832",
  },
  {
    name: "Tea",
    price: "2.99",
    img: "https://images.everydayhealth.com/images/heart-health/teas-that-can-help-or-harm-your-heart-black-tea-1440x810.jpg?w=720",
  },
  {
    name: "Smoothies",
    price: "3.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7i-eViAXXljccxMrScOSDgeC72v2p6sX9SfQ-NkqiCA&s",
  },
];
let trayItems = [];
const appetizersCarousel = document.getElementById("appetizers-carousel");
const entreesCarousel = document.getElementById("entrees-carousel");
const dessertsCarousel = document.getElementById("desserts-carousel");
const totalBill = document.getElementById("totalBill");
const drinksCarousel = document.getElementById("drinks-carousel");
const items = document.getElementById("items");
const emptyBtn = document.getElementById("emptyBtn");
const orderBtn = document.getElementById("orderBtn");
const hideShowBtn = () => {
  trayItems.length == 0
    ? (orderBtn.style.display = "none")
    : (orderBtn.style.display = "inline-block");
};
const populate = () => {
  appetizers.forEach((appetizer) => {
    appetizersCarousel.innerHTML += `<div class="item-card">
    <img
      src="${appetizer.img}"
    />
    <h3>${appetizer.name}</h3>
    <span class="price">${appetizer.price}$</span>
    <button onclick="addtoTray('${appetizer.name}','${appetizer.price}')" class="takeBtn">+</button>
    <button onclick="removeFromTray('${appetizer.name}')" class="takeBtn">-</button>
  </div>`;
  });
  entrees.forEach((entree) => {
    entreesCarousel.innerHTML += `<div class="item-card">
    <img
      src="${entree.img}"
    />
    <h3>${entree.name}</h3>
    <span class="price">${entree.price}$</span>
    <button onclick="addtoTray('${entree.name}','${entree.price}')" class="takeBtn">+</button>
    <button onclick="removeFromTray('${entree.name}')" class="takeBtn">-</button>
  </div>`;
  });
  desserts.forEach((dessert) => {
    dessertsCarousel.innerHTML += `<div class="item-card">
    <img
      src="${dessert.img}"
    />
    <h3>${dessert.name}</h3>
    <span class="price">${dessert.price}$</span>
    <button onclick="addtoTray('${dessert.name}','${dessert.price}')" class="takeBtn">+</button>
    <button onclick="removeFromTray('${dessert.name}')" class="takeBtn">-</button>
  </div>`;
  });
  drinks.forEach((drink) => {
    drinksCarousel.innerHTML += `<div class="item-card">
    <img
      src="${drink.img}"
    />
    <h3>${drink.name}</h3>
    <span class="price">${drink.price}$</span>
    <button onclick="addtoTray('${drink.name}','${drink.price}')" class="takeBtn">+</button>
    <button onclick="removeFromTray('${drink.name}')" class="takeBtn">-</button>
  </div>`;
  });
};
emptyTray = () => {
  trayItems = [];
  calculateTotalBill();
  populateItems();
  hideShowBtn();
};
const addtoTray = (name, price) => {
  trayItems.push({ name, price });
  calculateTotalBill();
  populateItems();
  hideShowBtn();
};
const removeFromTray = (name) => {
  const indexToRemove = trayItems.findIndex((item) => item.name === name);
  if (indexToRemove !== -1) {
    trayItems.splice(indexToRemove, 1);
    calculateTotalBill();
    populateItems();
    hideShowBtn();
  }
};
calculateTotalBill = () => {
  let total_bill = 0;
  trayItems.forEach((item) => (total_bill += Number(item.price)));
  totalBill.innerText = total_bill.toFixed(2) + "$";
};
populateItems = () => {
  let html = trayItems.length > 0 ? "" : "  No Items";
  trayItems.forEach((item) => {
    html += `<li style="display: flex; align-items: center">
    <button onclick="removeFromTray('${item.name}')" class="takeBtn">
      x
    </button>
    <div
      style="
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
      "
    >
      <p>${item.name}</p>
      <p>${item.price}$</p>
    </div>
  </li>`;
  });
  items.innerHTML = html;
};
populate();
calculateTotalBill();
populateItems();
hideShowBtn();
