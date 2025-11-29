/*
    You need to filter out those items whose price is 5000 or more than 5000, and
    then make their price half after filteration and display in the output
*/

shoppingItems = [
    {
        item: "Shirt",
        price: 2000,
        from: "H&M"
    },

    {
        item: "Jeans",
        price: 3500,
        from: "Zara"
    },

    {
        item: "Watch",
        price: 12000,
        from: "Maserati"
    },

    {
        item: "Shoes",
        price: 8500,
        from: "Nike"
    },

    {
        item: "Jacket",
        price: 5000,
        from: "UCB"
    },

    {
        item: "Glasses",
        price: 4300,
        from: "Titan"
    }
]

const newShop = shoppingItems.filter( (e) => e.price >= 5000)
                .map( (e) => e.price / 2)

console.log(newShop);
// result = newShop % 2;
// console.log(result);

