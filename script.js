const addProduct = () => {
    const product = document.getElementById("product").value;
    const quentity = document.getElementById("quentity").value;
    // console.log(product, quentity);
    const cart = {};
    cart[product] = quentity;
    localStorage.setItem("cart", JSON.stringify(cart))


};
// const cart = { pen: 4, tripod: 2, handSanitizer: 2 }