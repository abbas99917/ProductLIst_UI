import products from "./products.json";

// console.log(products);

const ContainerCardSections = document.querySelector(".ContainerCardSections")
const SearchProduct = document.querySelector("#SearchProduct")
const cartCount = document.querySelector(".cart-count")



let cart = JSON.parse(localStorage.getItem("cart")) || []
// let addtocart = 0

const displayProducts = (poductsToDisplay) =>{
    ContainerCardSections.innerHTML = ""

    poductsToDisplay.forEach((curElem)=>{
        const cardElement = document.createElement("div")
        cardElement.classList.add("card")
        cardElement.setAttribute("data-id", curElem.id)
        cardElement.innerHTML = `
        <span class="category">${curElem.category}</span>
        <img src="${curElem.image}" alt="" class="proImg">
        <div>
          <p class="productName">${curElem.name}</p>
          <div class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
          </div>
        </div>
        <p class="descriptions">${curElem.description}</p>
       <div>
         <div><p class="price">${curElem.price}</p></div>
         <div class="quantity-box">
          <span class="increament">+</span>
          <p>0</p>
          <span class="decreament">-</span>
         </div>
         <p class="stock">${curElem.stock}</p>
       </div>
        <button><span><i class="fa-solid fa-cart-arrow-down"></i></span>Add-to-Cart</button>`
        ContainerCardSections.appendChild(cardElement)
    })
}


// Search-Products-Cart
const filterProducts = () =>{
SearchProduct.addEventListener("input",()=>{
    let filterText = SearchProduct.value.toLowerCase();
    const filterItem = products.filter((item)=>{
        return item.name.toLowerCase().includes(filterText)
    })
    displayProducts(filterItem)
})

}
filterProducts()
displayProducts(products)



// addtocard-functionality

ContainerCardSections.addEventListener("click",(event)=>{
    const button = event.target.closest("button")
    console.log(button)
    if(button){
       const card  = button.closest(".card")

       const productId = card.dataset.id
         const selectedProduct = products.find((item) => {
            return item.id === Number(productId)
        })

        // addtocart++
        // cartCount.textContent = addtocart;

        const existingProduct = cart.find((item) => {
            return item.id === selectedProduct.id
        })
        if(existingProduct){
             existingProduct.cartQuantity++;
        }else{
            selectedProduct.cartQuantity = 1;
            cart.push(selectedProduct);
        }
        // console.log(cart)
        updateCartCount()
        saveCartToLocalStorage();
        
        
    }


})


const updateCartCount = () => {

  const totalCartQuantity =   cart.reduce((total,item)=>{
        return total+= item.cartQuantity;
    },0)
    cartCount.textContent = totalCartQuantity;

}
updateCartCount()


// localStorage

const saveCartToLocalStorage = () => {
    
    localStorage.setItem("cart", JSON.stringify(cart))

}
