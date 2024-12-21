const products = [
    {
        id: "1",
        name: "Air Jordan 1",
        price: 1000,
        category: "Nike",
        img: "https://th.bing.com/th?id=OPHS.luNHgaXinTiJxA474C474&w=248&h=248&c=17&o=5&pid=21.1",
        stock: 25,
        description: "descripción Jordan 1",
    },
    {
        id: "2",
        name: "Air",
        price: 1000,
        category: "Adidas",
        img: "https://th.bing.com/th?id=OPHS.luNHgaXinTiJxA474C474&w=248&h=248&c=17&o=5&pid=21.1",
        stock: 25,
        description: "descripción Jordan 1",
    },
    {
        id: "3",
        name: "Aire",
        price: 1000,
        category: "Jaguar",
        img: "https://th.bing.com/th?id=OPHS.luNHgaXinTiJxA474C474&w=248&h=248&c=17&o=5&pid=21.1",
        stock: 25,
        description: "descripción Jordan 1",
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })

}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })

}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1000);
    });
};
