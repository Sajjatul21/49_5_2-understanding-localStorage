const addProduct = () => {
    const product = document.getElementById("product").value;
    const quentity = document.getElementById("quentity").value;

    addProductToDB(product, quentity);


};
const getStoredCart = () => {
    const storedCart = localStorage.getItem("cart");
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;
};
const addProductToDB = (product, quentity) => {
    const cart = getStoredCart();
    cart[product] = quentity;
    localStorage.setItem("cart", JSON.stringify(cart));
}