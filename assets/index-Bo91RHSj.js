(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,name:`Wireless Headphones`,category:`Electronics`,price:3499,image:`https://images.unsplash.com/photo-1505740420928-5e560c06d30e`,description:`Premium wireless headphones with clear sound and comfortable design.`,rating:4.5,stock:12},{id:2,name:`Smart Watch`,category:`Electronics`,price:4999,image:`https://images.unsplash.com/photo-1523275335684-37898b6baf30`,description:`Modern smartwatch with fitness tracking and stylish design.`,rating:4.4,stock:12},{id:3,name:`Running Shoes`,category:`Footwear`,price:4299,image:`https://images.unsplash.com/photo-1542291026-7eec264c27ff`,description:`Lightweight running shoes designed for everyday comfort.`,rating:4.6,stock:12},{id:4,name:`Classic Backpack`,category:`Accessories`,price:2499,image:`https://images.unsplash.com/photo-1553062407-98eeb64c6a62`,description:`Durable backpack with a spacious interior for everyday use.`,rating:4.3,stock:12},{id:5,name:`Casual T-Shirt`,category:`Clothing`,price:1499,image:`https://images.unsplash.com/photo-1521572163474-6864f9cf17ab`,description:`Comfortable cotton t-shirt with a clean casual style.`,rating:4.2,stock:12},{id:6,name:`Sunglasses`,category:`Accessories`,price:1999,image:`https://images.unsplash.com/photo-1511499767150-a48a237f0083`,description:`Stylish sunglasses with a modern frame and classic look.`,rating:4.5,stock:12},{id:7,name:`Leather Wallet`,category:`Accessories`,price:1299,image:`https://images.unsplash.com/photo-1627123424574-724758594e93`,description:`Compact leather wallet with multiple card slots.`,rating:4.4,stock:12},{id:8,name:`Coffee Mug`,category:`Home`,price:799,image:`https://images.unsplash.com/photo-1514228742587-6b1558fcca3d`,description:`Minimal ceramic coffee mug perfect for your daily coffee.`,rating:4.1,stock:12}],t=document.querySelector(`.ContainerCardSections`),n=document.querySelector(`#SearchProduct`),r=document.querySelector(`.cart-count`),i=JSON.parse(localStorage.getItem(`cart`))||[],a=e=>{t.innerHTML=``,e.forEach(e=>{let n=document.createElement(`div`);n.classList.add(`card`),n.setAttribute(`data-id`,e.id),n.innerHTML=`
        <span class="category">${e.category}</span>
        <img src="${e.image}" alt="" class="proImg">
        <div>
          <p class="productName">${e.name}</p>
          <div class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
          </div>
        </div>
        <p class="descriptions">${e.description}</p>
       <div>
         <div><p class="price">${e.price}</p></div>
         <div class="quantity-box">
          <span class="increament">+</span>
          <p>0</p>
          <span class="decreament">-</span>
         </div>
         <p class="stock">${e.stock}</p>
       </div>
        <button><span><i class="fa-solid fa-cart-arrow-down"></i></span>Add-to-Cart</button>`,t.appendChild(n)})};n.addEventListener(`input`,()=>{let t=n.value.toLowerCase();a(e.filter(e=>e.name.toLowerCase().includes(t)))}),a(e),t.addEventListener(`click`,t=>{let n=t.target.closest(`button`);if(console.log(n),n){let t=n.closest(`.card`).dataset.id,r=e.find(e=>e.id===Number(t)),a=i.find(e=>e.id===r.id);a?a.cartQuantity++:(r.cartQuantity=1,i.push(r)),o(),s()}});var o=()=>{r.textContent=i.reduce((e,t)=>e+=t.cartQuantity,0)};o();var s=()=>{localStorage.setItem(`cart`,JSON.stringify(i))};