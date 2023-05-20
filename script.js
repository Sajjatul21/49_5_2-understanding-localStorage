const addProduct = () => {
    const product = document.getElementById("product").value;
    const quentity = document.getElementById("quentity").value;
    // console.log(product, quentity);
    const cart = {};
    cart[product] = quentity;
    localStorage.setItem("cart", JSON.stringify(cart))


};
const getStoredCart = (){
    const storedCart = localStorage.getItem("cart");
    let cart = {};
    if (storedCart) {

    }
    else {
        return cart;
    }
}