let cart = JSON.parse(localStorage.getItem("cart")) || []
const cartProducts = document.querySelector(".cart-products")


const showAddToCartProducts = () => {

    cart.forEach((curElem) => {

        let cartItem = document.createElement("div")

        cartItem.classList.add("cart-item")

        const totalPrice = curElem.price * curElem.cartQuantity

        cartItem.innerHTML = `
            <span class="cart-category">
                ${curElem.category}
            </span>

            <img 
                src="${curElem.image}" 
                class="cart-image"
            >

            <div class="cart-info">
                <h3>${curElem.name}</h3>

                <p class="cart-price">
                    Rs. ${curElem.price}
                </p>
            </div>

            <p class="cart-total">
                Rs. ${totalPrice}
            </p>

            <button class="remove-btn">
                Remove
            </button>
        `

        cartProducts.appendChild(cartItem)
    })
}

showAddToCartProducts()
