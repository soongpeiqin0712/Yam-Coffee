const New_Products = [
{
    image:"Image/menu/Beverage/Coconut Coffee.png",
    title:"Coconut Latte",
    Introduction:"Fresh coconut milk with premium Arabica coffee.\nEnjoy the clash between sweet and bitter"
},

{
    image:"Image/menu/Beverage/Pistachio Latte.png",
    title:"Pistachio Latte",
    Introduction:"Sweet caramel with smooth espresso."
},

{
    image:"Image/menu/Beverage/Peppermint Mocha.png",
    title:"Peppermint Mocha",
    Introduction:"Chocolate mixed with rich coffee."
},

{
    image:"Image/menu/Beverage/Sea Salt Caramel Latte.png",
    title:"Sea Salt Caramel Latte",
    Introduction:"Japanese matcha with fresh milk."
},

{
    image:"Image/menu/Beverage/Spanish Latte.png",
    title:"Spanish Latte",
    Introduction:"Roasted hazelnut aroma with creamy milk."
}

];

let Present = 0;

function showProduct(){

    document.getElementById("Product_Image_JS").src = New_Products[Present].image;

    document.getElementById("Product_Title_JS").textContent = New_Products[Present].title;

    document.getElementById("Product_Description_JS").textContent = New_Products[Present].Introduction;

    document.getElementById("Page").textContent =`${Present+1} / ${New_Products.length}`;

}

const nextButton = document.getElementById("Next_Botton");
const backButton = document.getElementById("Back_Botton");

nextButton.onclick = () => {
    let newPresent = Present + 1;

    if (newPresent >= New_Products.length) {
        newPresent = 0;
    }

    changeProduct(newPresent);
};

backButton.onclick = () => {
    let newPresent = Present - 1;

    if (newPresent < 0) {
        newPresent = New_Products.length - 1;
    }

    changeProduct(newPresent);
};

const image = document.getElementById("Product_Image_JS");
const info = document.querySelector(".Product_Info");

function changeProduct(New_Present){

    image.classList.add("hide");
    info.classList.add("hide");

    setTimeout(()=>{

        Present = New_Present;

        showProduct();

        image.classList.remove("hide");
        info.classList.remove("hide");

    },350);

}

const coffees = [
    {
        image: "Image/menu/Beverage/Coconut Coffee.png",
        name: "Coconut Coffee",
        price: "RM12.90",
        description: "Coffee mixed with fresh coconut milk."
    },
    {
        image: "Image/menu/Beverage/Pistachio Latte.png",
        name: "Pistachio Latte",
        price: "RM13.90",
        description: "Creamy latte with pistachio flavour."
    },
    {
        image: "Image/menu/Beverage/Peppermint Mocha.png",
        name: "Peppermint Mocha",
        price: "RM14.90",
        description: "Chocolate coffee with peppermint."
    },
    {
        image: "Image/menu/Beverage/Sea Salt Caramel Latte.png",
        name: "Sea Salt Caramel Latte",
        price: "RM15.90",
        description: "Caramel latte with sea salt."
    },
    {
        image: "Image/menu/Beverage/Spanish Latte.png",
        name: "Spanish Latte",
        price: "RM12.90",
        description: "Smooth and sweet milk coffee."
    },
    {
        image: "Image/menu/Beverage/Hazelnut Latte.png",
        name: "Hazelnut Latte",
        price: "RM10.90",
        description: "Latte with roasted hazelnut flavour."
    },
    {
        image: "Image/menu/Beverage/White Chocolate Mocha.png",
        name: "White Chocolate Mocha",
        price: "RM12.90",
        description: "Mocha mixed with white chocolate."
    },
    {
        image: "Image/menu/Beverage/Coconut Coffee.png",
        name: "Iced Coconut Coffee",
        price: "RM11.90",
        description: "Refreshing iced coconut coffee."
    }
];

const coffeeList = document.getElementById("Coffee_List");
const coffeePage = document.getElementById("Coffee_Page");
const coffeeBack = document.getElementById("Coffee_Back");
const coffeeNext = document.getElementById("Coffee_Next");

const ProductsPerPage_coffee = 6;
let CurrentPage_coffee = 0;

function showCoffee() {
    const start_Coffee = CurrentPage_coffee * ProductsPerPage_coffee;
    const PageProducts_Coffee = coffees.slice(start_Coffee, start_Coffee + ProductsPerPage_coffee);
    const TotalPages_Coffee = Math.ceil(coffees.length / ProductsPerPage_coffee);

    coffeeList.innerHTML = PageProducts_Coffee.map(coffee => `
        <div class="Coffee_Card">
            <img src="${coffee.image}">
            <h3>${coffee.name}</h3>
            <p class="Price">${coffee.price}</p>
            <p class="Introduce">${coffee.description}</p>
        </div>
    `).join("");

    coffeePage.textContent = `${CurrentPage_coffee + 1} / ${TotalPages_Coffee}`;
}

function changeCoffeePage(newPage) {
    const TotalPages_Coffee = Math.ceil(coffees.length / ProductsPerPage_coffee);

    if (newPage < 0) {
        newPage = TotalPages_Coffee - 1;
    }

    if (newPage >= TotalPages_Coffee) {
        newPage = 0;
    }

    coffeeList.classList.add("hide");

    setTimeout(() => {
        CurrentPage_coffee = newPage;
        showCoffee();
        coffeeList.classList.remove("hide");
    }, 350);
}

coffeeBack.onclick = () => {
    changeCoffeePage(CurrentPage_coffee - 1);
};

coffeeNext.onclick = () => {
    changeCoffeePage(CurrentPage_coffee + 1);
};

showCoffee();





const Beverage = [
    {
        image: "Image/menu/Beverage/Chrysanthemum Tea.png",
        name: "Chrysanthemum tea",
        price: "RM12.90",
        description: "Coffee mixed with fresh coconut milk."
    },
    {
        image: "Image/menu/Beverage/Peach Oolong Tea.png",
        name: "Peach Oolong Tea",
        price: "RM13.90",
        description: "Creamy latte with pistachio flavour."
    },
    {
        image: "Image/menu/Beverage/Grapefruit Green Tea.png",
        name: "Grapefruit Green Tea",
        price: "RM14.90",
        description: "Chocolate coffee with peppermint."
    },
    {
        image: "Image/menu/Beverage/Apple Cinnamon Hot Fruit Tea.png",
        name: "Apple Cinnamon Hot Fruit Tea",
        price: "RM15.90",
        description: "Caramel latte with sea salt."
    },
    {
        image: "Image/menu/Beverage/White Peach Oolong Tea.png",
        name: "White Peach Oolong Tea",
        price: "RM12.90",
        description: "Smooth and sweet milk coffee."
    },
    {
        image: "Image/menu/Beverage/Jasmine Green Tea.png",
        name: "Jasmine Green Tea",
        price: "RM10.90",
        description: "Latte with roasted hazelnut flavour."
    },
    {
        image: "Image/menu/Beverage/White Chocolate Mocha.png",
        name: "White Chocolate Mocha",
        price: "RM12.90",
        description: "Mocha mixed with white chocolate."
    },
    {
        image: "Image/menu/Beverage/Coconut Coffee.png",
        name: "Iced Coconut Coffee",
        price: "RM11.90",
        description: "Refreshing iced coconut coffee."
    }
];

const BeverageList = document.getElementById("Beverage_List");
const BeveragePage = document.getElementById("Beverage_Page");
const BeverageBack = document.getElementById("Beverage_Back");
const BeverageNext = document.getElementById("Beverage_Next");

const ProductsPerPage_Beverage = 6;
let CurrentPage_Beverage = 0;

function showBeverage() {

    const startBeverage =CurrentPage_Beverage * ProductsPerPage_Beverage;
    const pageProducts = Beverage.slice(startBeverage,startBeverage + ProductsPerPage_Beverage);
    const totalPagesBeverage = Math.ceil(Beverage.length / ProductsPerPage_Beverage);

    BeverageList.innerHTML = pageProducts.map(beverage => `
        <div class="Beverage_Card">
            <img src="${beverage.image}">
            <h3>${beverage.name}</h3>
            <p class="Price">${beverage.price}</p>
            <p class="Introduce">${beverage.description}</p>
        </div>
    `).join("");

    BeveragePage.textContent =
        `${CurrentPage_Beverage + 1} / ${totalPagesBeverage}`;
}

function changeBeveragePage(newPage) {
    const totalPages = Math.ceil(Beverage.length / ProductsPerPage_Beverage);

    if (newPage < 0) {
        newPage = totalPages - 1;
    }

    if (newPage >= totalPages) {
        newPage = 0;
    }

    BeverageList.classList.add("hide");

    setTimeout(() => {
        CurrentPage_Beverage = newPage;
        showBeverage();
        BeverageList.classList.remove("hide");
    }, 350);
}

BeverageBack.onclick = () => {
    changeBeveragePage(CurrentPage_Beverage - 1);
};

BeverageNext.onclick = () => {
    changeBeveragePage(CurrentPage_Beverage + 1);
};

showBeverage();





const Dessert = [
    {
        image: "Image/menu/FOOD/Original Croissant.png",
        name: "Original Croissant",
        price: "RM12.90",
        description: "Coffee mixed with fresh coconut milk."
    },
    {
        image: "Image/menu/FOOD/Butter Croissant.png",
        name: "Butter Croissant",
        price: "RM13.90",
        description: "Creamy latte with pistachio flavour."
    },
    {
        image: "Image/menu/FOOD/Almond Croissant.png",
        name: "Almond Croissant",
        price: "RM14.90",
        description: "Chocolate coffee with peppermint."
    },
    {
        image: "Image/menu/FOOD/Chocolate Croissant.png",
        name: "Chocolate Croissant",
        price: "RM15.90",
        description: "Caramel latte with sea salt."
    },
    {
        image: "Image/menu/FOOD/Ham and Cheese Croissant.png",
        name: "Ham and Cheese Croissant",
        price: "RM12.90",
        description: "Smooth and sweet milk coffee."
    },
    {
        image: "Image/menu/FOOD/Sausage Croissant.png",
        name: "Sausage Croissant",
        price: "RM10.90",
        description: "Latte with roasted hazelnut flavour."
    },
    {
        image: "Image/menu/Beverage/White Chocolate Mocha.png",
        name: "White Chocolate Mocha",
        price: "RM12.90",
        description: "Mocha mixed with white chocolate."
    },
    {
        image: "Image/menu/Beverage/Coconut Coffee.png",
        name: "Iced Coconut Coffee",
        price: "RM11.90",
        description: "Refreshing iced coconut coffee."
    }
];

const DessertList = document.getElementById("Dessert_List");
const DessertPage = document.getElementById("Dessert_Page");
const DessertBack = document.getElementById("Dessert_Back");
const DessertNext = document.getElementById("Dessert_Next");

const ProductsPerPage_Dessert = 6;
let CurrentPage_Dessert = 0;

function showDessert() {

    const startDessert =CurrentPage_Dessert * ProductsPerPage_Dessert;
    const pageProducts = Dessert.slice(startDessert,startDessert + ProductsPerPage_Dessert);
    const totalPagesDessert = Math.ceil(Dessert.length / ProductsPerPage_Dessert);

    DessertList.innerHTML = pageProducts.map(Dessert => `
        <div class="Dessert_Card">
            <img src="${Dessert.image}">
            <h3>${Dessert.name}</h3>
            <p class="Price">${Dessert.price}</p>
            <p class="Introduce">${Dessert.description}</p>
        </div>
    `).join("");

    DessertPage.textContent =
        `${CurrentPage_Dessert + 1} / ${totalPagesDessert}`;
}

function changeDessertPage(newPage) {
    const totalPages = Math.ceil(Dessert.length / ProductsPerPage_Dessert);

    if (newPage < 0) {
        newPage = totalPages - 1;
    }

    if (newPage >= totalPages) {
        newPage = 0;
    }

    DessertList.classList.add("hide");

    setTimeout(() => {
        CurrentPage_Dessert = newPage;
        showDessert();
        DessertList.classList.remove("hide");
    }, 350);
}

DessertBack.onclick = () => {
    changeDessertPage(CurrentPage_Dessert - 1);
};

DessertNext.onclick = () => {
    changeDessertPage(CurrentPage_Dessert + 1);
};

showDessert();