const New_Products = [
{
    image:"Image/menu/Beverage/Coconut Coffee.png",
    title:"Coconut Latte",
    Introduction:"Fresh coconut milk with premium Arabica coffee.\nEnjoy the clash between sweet and bitter"
},

{
    image:"Image/menu/Beverage/Pistachio Latte.png",
    title:"Pistachio Latte",
    Introduction:"The nutty aroma of pistachios combined with \nthe richness of a latte makes every bite a comforting experience."
},

{
    image:"Image/menu/Beverage/Peppermint Mocha.png",
    title:"Peppermint Mocha",
    Introduction:"Cool mint meets rich mocha, one bite is refreshing, \nthe next is fragrant."
},

{
    image:"Image/menu/Beverage/Sea Salt Caramel Latte.png",
    title:"Sea Salt Caramel Latte",
    Introduction:"Sea salt brings out the rich aroma of caramel, \ncreating a perfect balance of salty and sweet with a lingering aftertaste."
},

{
    image:"Image/menu/Beverage/Spanish Latte.png",
    title:"Spanish Latte",
    Introduction:"The rich aroma of coffee blends perfectly with the delicate fragrance of milk, \ncreating a mellow and lingering taste that is elegant in its own right."
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
        image: "Image/menu/Beverage/Coconut Coffee for normal menu.png",
        name: "Coconut Coffee",
        price: "RM8.80",
        description: "Fresh coconut milk with premium Arabica coffee.Enjoy the clash between sweet and bitter"
    },
    {
        image: "Image/menu/Beverage/Pistachio Latte for normal menu.png",
        name: "Pistachio Latte",
        price: "RM13.90",
        description: "The nutty aroma of pistachios combined with the richness of a latte makes every bite a comforting experience.."
    },
    {
        image: "Image/menu/Beverage/Peppermint Mocha for normal menu.png",
        name: "Peppermint Mocha",
        price: "RM8.50",
        description: "Cool mint meets rich mocha, one bite is refreshing, the next is fragrant."
    },
    {
        image: "Image/menu/Beverage/Sea Salt Caramel Latte for normal menu.png",
        name: "Sea Salt Caramel Latte",
        price: "RM12.00",
        description: "Sea salt brings out the rich aroma of caramel, creating a perfect balance of salty and sweet with a lingering aftertaste."
    },
    {
        image: "Image/menu/Beverage/Spanish Latte.png",
        name: "Spanish Latte",
        price: "RM12.00",
        description: "The rich aroma of coffee blends perfectly with the delicate fragrance of milk, creating a mellow and lingering taste that is elegant in its own right."
    },
    {
        image: "Image/menu/Beverage/White Chocolate Mocha for normal menu.png",
        name: "White Chocolate Mocha",
        price: "RM8.80",
        description: "The delicate sweetness of white chocolate blends perfectly with the rich aroma of mocha."
    },
    {
        image: "Image/menu/Beverage/Hazelnut Latte.png",
        name: "Hazelnut Latte",
        price: "RM6.60",
        description: "The rich aroma of hazelnut blends perfectly with the latte, leaving a lingering aftertaste."
    },
    {
        image: "Image/menu/Beverage/Rose Latte.png",
        name: "Rose Latte",
        price: "RM8.80",
        description: "The fragrance of flowers blends with the mellow taste, creating a unique and elegant flavor."
    },
    {
        image: "Image/menu/Beverage/Flat White.png",
        name: "Flat White",
        price: "RM9.00",
        description: "Coffee as the base, milk as the flavor."
    },
    {
        image: "Image/menu/Beverage/Espresso Macchiato.png",
        name: "Espresso Macchiato",
        price: "RM10.00",
        description: "A touch of milky aroma awakens the rich, concentrated flavor."
    },
    {
        image: "Image/menu/Beverage/Café au Lait.png",
        name: "Café au Lait",
        price: "RM11.20",
        description: "Coffee at heart, milk in harmony,simple."
    },
    {
        image: "Image/menu/Beverage/Espresso.png",
        name: "Espresso",
        price: "RM12.40",
        description: "Bold in character, pure in essence."
    },
    {
        image: "Image/menu/Beverage/Doppio.png",
        name: "Doppio",
        price: "RM11.00",
        description: "Twice the intensity, crafted with timeless depth."
    },
    {
        image: "Image/menu/Beverage/Vietnamese coffee.png",
        name: "Vietnamese coffee",
        price: "RM4.00",
        description: "Boldly brewed, richly sweetened—Vietnamese tradition in every sip."
    },
    {
        image: "Image/menu/Beverage/Tiramisu Latte.png",
        name: "Tiramisu Latte",
        price: "RM5.80",
        description: "A taste of timeless indulgence, crowned with tiramisu elegance."
    },
    {
        image: "Image/menu/Beverage/Honey Latte.png",
        name: "Honey Latte",
        price: "RM7.70",
        description: "Golden honey, mellow espresso,a harmony of sweetness."
    },
    {
        image: "Image/menu/Beverage/Ristretto.png",
        name: "Ristretto",
        price: "RM4.00",
        description: "Short in measure, profound in character."
    },
    {
        image: "Image/menu/Beverage/Lungo.png",
        name: "Lungo",
        price: "RM4.00",
        description: "Longer in pour, lingering in character."
    },
    {
        image: "Image/menu/Beverage/Long Black.png",
        name: "Long Black",
        price: "RM5.00",
        description: "Bold in essence, smooth in every lingering sip."
    },
    {
        image: "Image/menu/Beverage/Japanese coffee.png",
        name: "Japanese coffee",
        price: "RM12.90",
        description: "Brewed with precision, savoured in quiet harmony."
    },
    {
        image: "Image/menu/Beverage/Piccolo Latte.png",
        name: "Piccolo Latte",
        price: "RM6.90",
        description: "Small in stature, rich in character."
    },
    {
        image: "Image/menu/Beverage/Café Cubano.png",
        name: "Café Cubano",
        price: "RM9.90",
        description: "Café Cubano"
    },
    {
        image: "Image/menu/Beverage/Qahwa.png",
        name: "Qahwa",
        price: "RM5.00",
        description: "A fragrant tradition, graced with warmth and hospitality."
    },
    {
        image: "Image/menu/Beverage/Coffee Frappé.png",
        name: "Coffee Frappé",
        price: "RM7.90",
        description: "Boldly chilled, effortlessly smooth."
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
        price: "RM5.00",
        description: "Floral in essence, serene in every sip."
    },
    {
        image: "Image/menu/Beverage/Peach Oolong Tea.png",
        name: "Peach Oolong Tea",
        price: "RM5.00",
        description: "Fragrant oolong, graced with the gentle sweetness of peach."
    },
    {
        image: "Image/menu/Beverage/Grapefruit Green Tea.png",
        name: "Grapefruit Green Tea",
        price: "RM7.00",
        description: "Zesty grapefruit, gracefully balanced with mellow green tea."
    },
    {
        image: "Image/menu/Beverage/Apple Cinnamon Hot Fruit Tea.png",
        name: "Apple Cinnamon Hot Fruit Tea",
        price: "RM7.50",
        description: "Warm apple, gentle spice,a comforting embrace in every sip."
    },
    {
        image: "Image/menu/Beverage/White Peach Oolong Tea.png",
        name: "White Peach Oolong Tea",
        price: "RM8.00",
        description: "White peach in bloom, gracefully embraced by fragrant oolong."
    },
    {
        image: "Image/menu/Beverage/Jasmine Green Tea.png",
        name: "Jasmine Green Tea",
        price: "RM4.00",
        description: "Jasmine in bloom, steeped in the quiet elegance of green tea."
    },
    {
        image: "Image/menu/Beverage/Rose Tea.png",
        name: "Rose Tea",
        price: "RM4.50",
        description: "Rose petals in bloom, steeped in timeless grace."
    },
    {
        image: "Image/menu/Beverage/Longjing Tea.png",
        name: "Longjing Tea",
        price: "RM5.00",
        description: "Verdant and refined, steeped in timeless tranquillity."
    },
    {
        image: "Image/menu/Beverage/Oolong Tea.png",
        name: "Oolong Tea",
        price: "RM5.00",
        description: "Fragrant and layered, steeped in timeless elegance."
    },
    {
        image: "Image/menu/Beverage/Pu-erh Tea.png",
        name: "Pu-erh Tea",
        price: "RM5.00",
        description: "Mellow with age, profound in every infusion."
    },
    {
        image: "Image/menu/Beverage/Black Tea.png",
        name: "Black Tea",
        price: "RM6.00",
        description: "Bold in character, timeless in every sip."
    },
    {
        image: "Image/menu/Beverage/Earl Grey Tea.png",
        name: "Earl Grey Tea",
        price: "RM6.50",
        description: "Bergamot in bloom, steeped in timeless elegance."
    },
    {
        image: "Image/menu/Beverage/Ceylon Black Tea.png",
        name: "Ceylon Black Tea",
        price: "RM8.50",
        description: "Bright in character, richly steeped with timeless elegance."
    },
    {
        image: "Image/menu/Beverage/Assam Black Tea.png",
        name: "Assam Black Tea",
        price: "RM8.50",
        description: "Bold and malty, steeped in timeless warmth."
    },
    {
        image: "Image/menu/Beverage/Lychee Black Tea.png",
        name: "Lychee Black Tea",
        price: "RM7.50",
        description: "Fragrant lychee, gracefully entwined with rich black tea."
    },
    {
        image: "Image/menu/Beverage/Caramel Milk Tea.png",
        name: "Caramel Milk Tea",
        price: "RM5.50",
        description: "Velvety milk tea, enriched with the golden warmth of caramel."
    },
    {
        image: "Image/menu/Beverage/Rose Milk Tea.png",
        name: "Rose Milk Tea",
        price: "RM5.90",
        description: "Fragrant rose, gracefully steeped in velvety milk tea."
    },
    {
        image: "Image/menu/Beverage/Osmanthus Oolong Milk Tea.png",
        name: "Osmanthus Oolong Milk Tea",
        price: "RM7.20",
        description: "Fragrant osmanthus, gracefully woven into velvety oolong milk tea."
    },
    {
        image: "Image/menu/Beverage/Purple Sweet Potato Milk Tea.png",
        name: "Purple Sweet Potato Milk Tea",
        price: "RM7.00",
        description: "Earthy sweetness, gracefully blended into velvety milk tea."
    },
    {
        image: "Image/menu/Beverage/Taro Milk Tea.png",
        name: "Taro Milk Tea",
        price: "RM5.90",
        description: "Mellow taro, gracefully blended into velvety milk tea."
    },
    {
        image: "Image/menu/Beverage/Passion Fruit Soda.png",
        name: "Passion Fruit Soda",
        price: "RM10.00",
        description: "Tropical brightness, sparkling with vibrant elegance."
    },
    {
        image: "Image/menu/Beverage/Peach Soda.png",
        name: "Peach Soda",
        price: "RM6.00",
        description: "Luscious peach, sparkling with graceful freshness."
    },
    {
        image: "Image/menu/Beverage/Plum Soda.png",
        name: "Plum Soda",
        price: "RM6.00",
        description: "Tart plum, sparkling with timeless elegance."
    },
    {
        image: "Image/menu/Beverage/Vanilla Smoothie.png",
        name: "Vanilla Smoothie",
        price: "RM7.50",
        description: "Classic vanilla, blended into velvety perfection."
    },
    {
        image: "Image/menu/Beverage/Chocolate Smoothie.png",
        name: "Chocolate Smoothie",
        price: "RM8.00",
        description: "Rich chocolate, blended into velvety indulgence."
    },
    {
        image: "Image/menu/Beverage/Matcha Smoothie.png",
        name: "Matcha Smoothie",
        price: "RM8.00",
        description: "Refined matcha, blended into velvety serenity."
    },
    {
        image: "Image/menu/Beverage/Oreo Flavored Smoothie.png",
        name: "Oreo Flavored Smoothie",
        price: "RM9.90",
        description: "Classic cookies and cream, blended into velvety indulgence."
    },
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
        price: "RM2.50",
        description: "Golden layers, delicately crisp, timelessly refined."
    },
    {
        image: "Image/menu/FOOD/Butter Croissant.png",
        name: "Butter Croissant",
        price: "RM3.00",
        description: "Rich butter, folded into golden layers of timeless elegance."
    },
    {
        image: "Image/menu/FOOD/Almond Croissant.png",
        name: "Almond Croissant",
        price: "RM4.00",
        description: "Toasted almonds, folded into golden layers of refined indulgence."
    },
    {
        image: "Image/menu/FOOD/Chocolate Croissant.png",
        name: "Chocolate Croissant",
        price: "RM5.50",
        description: "Rich chocolate, wrapped in golden layers of delicate pastry."
    },
    {
        image: "Image/menu/FOOD/Ham and Cheese Croissant.png",
        name: "Ham and Cheese Croissant",
        price: "RM6.00",
        description: "Savoury ham and melted cheese, embraced by golden, flaky layers."
    },
    {
        image: "Image/menu/FOOD/Sausage Croissant.png",
        name: "Sausage Croissant",
        price: "RM6.00",
        description: "Savoury sausage, wrapped in golden layers of buttery perfection."
    },
    {
        image: "Image/menu/FOOD/Maple Syrup Pecan Danish Pastry.png",
        name: "Maple Syrup Pecan Danish Pastry",
        price: "RM9.90",
        description: "Golden maple and toasted pecans, layered in buttery elegance."
    },
    {
        image: "Image/menu/FOOD/Plain Bagel.png",
        name: "Plain Bagel",
        price: "RM3.00",
        description: "Simple in form, timeless in every bite."
    },
    {
        image: "Image/menu/FOOD/Whole Wheat Bagel.jpg",
        name: "Whole Wheat Bagel",
        price: "RM3.50",
        description: "Wholesome grains, baked into hearty, golden perfection."
    },
    {
        image: "Image/menu/FOOD/Sesame Bagel.png",
        name: "Sesame Bagel",
        price: "RM6.00",
        description: "Toasted sesame, baked into golden, savoury perfection."
    },
    {
        image: "Image/menu/FOOD/Tuna Bagel.png",
        name: "Tuna Bagel",
        price: "RM6.00",
        description: "Savoury tuna, nestled within a perfectly chewy bagel."
    },
    {
        image: "Image/menu/FOOD/Smoked Salmon Cream Cheese Bagel.png",
        name: "Smoked Salmon Cream Cheese Bagel",
        price: "RM8.00",
        description: "Smoked salmon and cream cheese, elegantly layered in a perfectly chewy bagel."
    },
    {
        image: "Image/menu/FOOD/Avocado Egg Bagel.png",
        name: "Avocado Egg Bagel",
        price: "RM7.50",
        description: "Creamy avocado and tender egg, layered in wholesome harmony."
    },
    {
        image: "Image/menu/FOOD/Peanut Butter Banana Bagel.png",
        name: "Peanut Butter Banana Bagel",
        price: "RM4.50",
        description: "Peanut Butter Banana Bagel"
    },
    {
        image: "Image/menu/FOOD/Butter Toast.png",
        name: "Butter Toast",
        price: "RM4.00",
        description: "Golden toast, graced with the timeless richness of butter."
    },
    {
        image: "Image/menu/FOOD/Honey Toast.png",
        name: "Honey Toast",
        price: "RM8.90",
        description: "Golden toast, gently sweetened with the warmth of honey."
    },
    {
        image: "Image/menu/FOOD/French Toast.png",
        name: "French Toast",
        price: "RM4.00",
        description: "Golden and tender, graced with timeless sweetness."
    },
    {
        image: "Image/menu/FOOD/Garlic Toast.png",
        name: "Garlic Toast",
        price: "RM4.50",
        description: "Golden toast, enriched with the savoury warmth of garlic."
    },
    {
        image: "Image/menu/FOOD/Cheese Toast.png",
        name: "Cheese Toast",
        price: "RM5.50",
        description: "Golden toast, crowned with the rich warmth of melted cheese."
    },
    {
        image: "Image/menu/FOOD/Beef Floss Bread.png",
        name: "Beef Floss Bread",
        price: "RM8.00",
        description: "Savoury beef floss, folded into soft, golden bread."
    },
    {
        image: "Image/menu/FOOD/Curry Bread.png",
        name: "Curry Bread",
        price: "RM7.50",
        description: "Aromatic curry, wrapped in soft, golden bread."
    },
    {
        image: "Image/menu/FOOD/Blueberry Cheesecake.png",
        name: "Blueberry Cheesecake",
        price: "RM8.90",
        description: "Luscious blueberries, crowned upon velvety cheesecake."
    },
    {
        image: "Image/menu/FOOD/Strawberry Cheesecake.png",
        name: "Strawberry Cheesecake",
        price: "RM8.90",
        description: "Luscious strawberries, crowned upon velvety cheesecake."
    },
    {
        image: "Image/menu/FOOD/Lemon Cheesecake.png",
        name: "Lemon Cheesecake",
        price: "RM6.90",
        description: "Bright lemon, folded into velvety cheesecake elegance."
    },
    {
        image: "Image/menu/FOOD/Matcha Cheesecake.png",
        name: "Matcha Cheesecake",
        price: "RM7.90",
        description: "Refined matcha, folded into velvety cheesecake elegance."
    },
    {
        image: "Image/menu/FOOD/Original Egg Tart.png",
        name: "Original Egg Tart",
        price: "RM2.00",
        description: "Golden pastry, filled with silky custard and timeless sweetness."
    },
    {
        image: "Image/menu/FOOD/Portuguese Egg Tart.png",
        name: "Portuguese Egg Tart",
        price: "RM2.50",
        description: "Caramelised to perfection, with a heart of silky custard."
    },
    {
        image: "Image/menu/FOOD/Apple Pie.png",
        name: "Apple Pie",
        price: "RM10.90",
        description: "Tender apples and gentle spice, embraced by golden pastry."
    },
    {
        image: "Image/menu/FOOD/Blueberry Pie.png",
        name: "Blueberry Pie",
        price: "RM12.90",
        description: "Luscious blueberries, embraced by golden, buttery pastry."
    },
    {
        image: "Image/menu/FOOD/Cherry Pie.png",
        name: "Cherry Pie",
        price: "RM12.90",
        description: "Luscious cherries, embraced by golden, buttery pastry."
    },
    {
        image: "Image/menu/FOOD/Tiramisu.png",
        name: "Tiramisu",
        price: "RM10.00",
        description: "Layers of coffee and mascarpone, finished with timeless Italian elegance."
    },
    {
        image: "Image/menu/FOOD/Caramel Pudding.png",
        name: "Caramel Pudding",
        price: "RM10.00",
        description: "Silken custard, crowned with golden caramel elegance."
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