const imagearray = [
    {
        url: "./images/main/fooditem7.png",
    },
    {
        url: "./images/main/fooditem8.png",
    },
    {
        url: "./images/main/fooditem9.png",
    },
    {
        url: "./images/main/fooditem10.png",
    },
    {
        url: "./images/main/fooditem11.png",
    },
    {
        url: "./images/main/fooditem12.png",
    },
];

const imagename = [
    {
        name: "Sushi Platter",
    },
    {
        name: "Tacos",
    },
    {
        name: "Carbonara",
    },
    {
        name: "BBQ Ribs",
    },
    {
        name: "Caesar Salad",
    },
    {
        name: "Lobster Bisque",
    },
];

function handleShowMore() {
    const itemContainer = document.getElementById("food-items");

    for (let i = 0; i < 6; i++) {
        const item = imagearray[i];
        const itemName = imagename[i];

        // Create a div for each item
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        // Set the inner HTML for itemDiv
        itemDiv.innerHTML = `
            <img src="${item.url}" alt="${itemName.name}">
            <div class="item-info">
                <div class="item-name-rating">
                    <h3>${itemName.name}</h3>
                    <div class="rating">
                        <div class="rating-img">
                                    <img src="./images/main/rating-sta.png">
                                </div>
                        <p>4.9</p>
                    </div>
                </div>
                <div class="price">
                    <button><p>Add to Cart</p></button>
                    <p>$15.00</p>
                </div>
            </div>
        `;

        // Append the itemDiv to the itemContainer
        itemContainer.appendChild(itemDiv);
    }

    const buttonContainer = document.getElementById("see-more");

    // Set the inner HTML for buttonContainer
    buttonContainer.innerHTML = `
        <button onclick="handleShowLess()">
            <p>See Less</p>
        </button>
    `;
    console.log("click", buttonContainer);
    console.log("click", itemContainer);
}

function handleShowLess() {
    const itemContainer = document.getElementById("food-items");

    for (let i = 0; i < 6; i++) {
        itemContainer.removeChild(itemContainer.lastChild);
    }

    const buttonContainer = document.getElementById("see-more");

    // Set the inner HTML for buttonContainer
    buttonContainer.innerHTML = `
        <button onclick="handleShowMore()">
            <p>See More Products</p>
            <img src="./images/main/see-moer.png">
        </button>
    `;

    console.log("click", buttonContainer);
    console.log("click", itemContainer);
}

// Subscribe button

function subscribefunction(event){

    event.preventDefault();

    const email=event.target.email.value;
    
    console.log(email);

    const subsbuttonDiv = document.getElementById("subs-button");

    console.log(subsbuttonDiv);
    
    const emailpara = document.createElement("p");
    emailpara.innerText = `Subscribed!!!`;

    console.log(emailpara);

    subsbuttonDiv.appendChild(emailpara);

}
