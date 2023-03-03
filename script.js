const cart = document.querySelector("#cart")
const cartDiv = document.querySelector('.cart-div')
console.log(cart);

cart.addEventListener("click", () => {
    if(cartDiv.classList.contains('open')){
        gsap.to(cartDiv, {right:'-50%', duration:2})
        cartDiv.classList.remove('open')
    }else{
        gsap.to(cartDiv, {right:'0%', duration:1.5})
        cartDiv.classList.add('open')
    }
})