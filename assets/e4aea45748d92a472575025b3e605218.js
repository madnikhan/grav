(function($){$.fn.treemenu=function(options){options=options||{};options.delay=options.delay||0;options.openActive=options.openActive||!1;options.closeOther=options.closeOther||!1;options.activeSelector=options.activeSelector||".active";this.addClass("treemenu");if(!options.nonroot){this.addClass("treemenu-root")}
options.nonroot=!0;this.find("> li").each(function(){e=$(this);var subtree=e.find('> ul');var button=e.find('.toggler').eq(0);if(button.length==0){var button=$('<span>');button.addClass('toggler');e.prepend(button)}
if(subtree.length>0){subtree.hide();e.addClass('tree-closed');e.find(button).click(function(){var li=$(this).parent('li');if(options.closeOther&&li.hasClass('tree-closed')){var siblings=li.parent('ul').find("li:not(.tree-empty)");siblings.removeClass("tree-opened");siblings.addClass("tree-closed");siblings.removeClass(options.activeSelector);siblings.find('> ul').slideUp(options.delay)}
li.find('> ul').slideToggle(options.delay);li.toggleClass('tree-opened');li.toggleClass('tree-closed');li.toggleClass(options.activeSelector)});$(this).find('> ul').treemenu(options)}else{$(this).addClass('tree-empty')}});if(options.openActive){var cls=this.attr("class");this.find(options.activeSelector).each(function(){var el=$(this).parent();while(el.attr("class")!==cls){el.find('> ul').show();if(el.prop("tagName")==='UL'){el.show()}else if(el.prop("tagName")==='LI'){el.removeClass('tree-closed');el.addClass("tree-opened");el.show()}
el=el.parent()}})}
return this}})(jQuery);var isTouch=window.DocumentTouch&&document instanceof DocumentTouch;function scrollHeader(){var zvalue=$(document).scrollTop();if(zvalue>75)
$("#header").addClass("scrolled");else $("#header").removeClass("scrolled")}
function parallaxBackground(){$('.parallax').css('background-positionY',($(window).scrollTop()*0.3)+'px')}
jQuery(document).ready(function($){scrollHeader();if(!isTouch){$(document).scroll(function(){scrollHeader();parallaxBackground()})};$(document).on({'touchmove':function(e){scrollHeader()}});$('#to-start').click(function(){var start_y=$('#start').position().top;var header_offset=45;window.scroll({top:start_y-header_offset,left:0,behavior:'smooth'});return!1});$('#to-top').click(function(){window.scroll({top:0,left:0,behavior:'smooth'});return!1});$('#toggle').click(function(){$(this).toggleClass('active');$('#overlay').toggleClass('open');$('body').toggleClass('mobile-nav-open')});$(".tree").treemenu({delay:300})});document.addEventListener('DOMContentLoaded',function(){const hamburgerToggle=document.getElementById('hamburger-toggle');const sidebarMenu=document.getElementById('sidebar-menu');const sidebarBackdrop=document.getElementById('sidebar-backdrop');const closeSidebar=document.getElementById('close-sidebar');if(hamburgerToggle){hamburgerToggle.addEventListener('click',function(){sidebarMenu.classList.add('active');sidebarBackdrop.classList.add('active');document.body.style.overflow='hidden'})}
if(closeSidebar){closeSidebar.addEventListener('click',function(){sidebarMenu.classList.remove('active');sidebarBackdrop.classList.remove('active');document.body.style.overflow='auto'})}
if(sidebarBackdrop){sidebarBackdrop.addEventListener('click',function(){sidebarMenu.classList.remove('active');sidebarBackdrop.classList.remove('active');document.body.style.overflow='auto'})}
const cartToggle=document.getElementById('cart-toggle');const cartOverlay=document.getElementById('cart-overlay');const closeCart=document.getElementById('close-cart');if(cartToggle){cartToggle.addEventListener('click',function(){cartOverlay.classList.add('active');document.body.style.overflow='hidden'})}
if(closeCart){closeCart.addEventListener('click',function(){cartOverlay.classList.remove('active');document.body.style.overflow='auto'})}
document.addEventListener('click',function(e){if(cartOverlay.classList.contains('active')&&!cartOverlay.contains(e.target)&&!cartToggle.contains(e.target)){cartOverlay.classList.remove('active');document.body.style.overflow='auto'}});document.addEventListener('click',function(e){if(sidebarMenu.classList.contains('active')&&!sidebarMenu.contains(e.target)&&!hamburgerToggle.contains(e.target)&&!sidebarBackdrop.contains(e.target)){sidebarMenu.classList.remove('active');sidebarBackdrop.classList.remove('active');document.body.style.overflow='auto'}});updateScrollIndicators();updateTestimonialScrollIndicators();const productGrid=document.querySelector('.product-grid');if(productGrid){productGrid.addEventListener('scroll',updateScrollIndicators);productGrid.addEventListener('touchstart',handleTouchStart,{passive:!1});productGrid.addEventListener('touchmove',handleTouchMove,{passive:!1});productGrid.addEventListener('touchend',handleTouchEnd)}
const testimonialGrid=document.querySelector('.testimonial-grid');if(testimonialGrid){testimonialGrid.addEventListener('scroll',updateTestimonialScrollIndicators)}
window.addEventListener('resize',function(){updateScrollIndicators();updateTestimonialScrollIndicators()});const searchToggle=document.getElementById('search-toggle');const searchOverlay=document.getElementById('search-overlay');const closeSearch=document.getElementById('close-search');if(searchToggle){searchToggle.addEventListener('click',function(){searchOverlay.classList.add('active');document.getElementById('search-input').focus()})}
if(closeSearch){closeSearch.addEventListener('click',function(){searchOverlay.classList.remove('active')})}
const userToggle=document.getElementById('user-toggle');const userOverlay=document.getElementById('user-overlay');const closeUser=document.getElementById('close-user');if(userToggle){userToggle.addEventListener('click',function(){userOverlay.classList.add('active')})}
if(closeUser){closeUser.addEventListener('click',function(){userOverlay.classList.remove('active')})}
document.addEventListener('click',function(e){if(searchOverlay.classList.contains('active')&&!searchOverlay.contains(e.target)&&!searchToggle.contains(e.target)){searchOverlay.classList.remove('active')}
if(userOverlay.classList.contains('active')&&!userOverlay.contains(e.target)&&!userToggle.contains(e.target)){userOverlay.classList.remove('active')}
if(cartOverlay.classList.contains('active')&&!cartOverlay.contains(e.target)&&!cartToggle.contains(e.target)){cartOverlay.classList.remove('active')}});document.addEventListener('keydown',function(e){if(e.key==='Escape'){sidebarMenu.classList.remove('active');sidebarBackdrop.classList.remove('active');searchOverlay.classList.remove('active');userOverlay.classList.remove('active');cartOverlay.classList.remove('active');document.body.style.overflow='auto'}});const addToCartButtons=document.querySelectorAll('.btn-primary');const cartCount=document.querySelector('.cart-count');let cartItems=0;addToCartButtons.forEach(button=>{if(button.textContent.includes('Add to Cart')){button.addEventListener('click',function(e){e.preventDefault();cartItems++;if(cartCount){cartCount.textContent=cartItems}
const originalText=button.textContent;button.textContent='Added!';button.style.background='var(--inkey-secondary)';setTimeout(()=>{button.textContent=originalText;button.style.background='var(--inkey-primary)'},2000)})}});document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth',block:'start'})}})});const productCards=document.querySelectorAll('.product-card');productCards.forEach(card=>{card.addEventListener('mouseenter',function(){this.style.transform='translateY(-8px)'});card.addEventListener('mouseleave',function(){this.style.transform='translateY(0)'})});const userForm=document.querySelector('.user-form');if(userForm){userForm.addEventListener('submit',function(e){e.preventDefault();const email=this.querySelector('input[type="email"]').value;const password=this.querySelector('input[type="password"]').value;if(email&&password){const submitBtn=this.querySelector('button[type="submit"]');const originalText=submitBtn.textContent;submitBtn.textContent='Logging in...';submitBtn.disabled=!0;setTimeout(()=>{submitBtn.textContent='Success!';setTimeout(()=>{userOverlay.classList.remove('active');submitBtn.textContent=originalText;submitBtn.disabled=!1;this.reset()},1000)},1500)}})}
const searchInput=document.getElementById('search-input');if(searchInput){searchInput.addEventListener('keypress',function(e){if(e.key==='Enter'){e.preventDefault();const searchTerm=this.value.trim();if(searchTerm){searchOverlay.classList.remove('active');this.value='';console.log('Searching for:',searchTerm)}}})}});window.addEventListener('load',function(){const elements=document.querySelectorAll('.product-card, .category-card');elements.forEach((el,index)=>{el.style.animationDelay=`${index * 0.1}s`;el.classList.add('fade-in')})});function scrollProducts(direction){const productGrid=document.querySelector('.product-grid');const scrollAmount=320;if(direction==='left'){productGrid.scrollBy({left:-scrollAmount,behavior:'smooth'})}else{productGrid.scrollBy({left:scrollAmount,behavior:'smooth'})}
updateScrollIndicators()}
function scrollTestimonials(direction){const testimonialGrid=document.querySelector('.testimonial-grid');const scrollAmount=440;if(direction==='left'){testimonialGrid.scrollBy({left:-scrollAmount,behavior:'smooth'})}else{testimonialGrid.scrollBy({left:scrollAmount,behavior:'smooth'})}
updateTestimonialScrollIndicators()}
function updateTestimonialScrollIndicators(){const testimonialGrid=document.querySelector('.testimonial-grid');const leftIndicator=document.querySelector('.testimonial-grid-container .scroll-left');const rightIndicator=document.querySelector('.testimonial-grid-container .scroll-right');if(!testimonialGrid||!leftIndicator||!rightIndicator)return;const scrollLeft=testimonialGrid.scrollLeft;const scrollWidth=testimonialGrid.scrollWidth;const clientWidth=testimonialGrid.clientWidth;if(scrollLeft<=0){leftIndicator.classList.add('hidden')}else{leftIndicator.classList.remove('hidden')}
if(scrollLeft>=scrollWidth-clientWidth-10){rightIndicator.classList.add('hidden')}else{rightIndicator.classList.remove('hidden')}}
function updateScrollIndicators(){const productGrid=document.querySelector('.product-grid');const leftIndicator=document.querySelector('.scroll-left');const rightIndicator=document.querySelector('.scroll-right');if(!productGrid||!leftIndicator||!rightIndicator)return;const scrollLeft=productGrid.scrollLeft;const scrollWidth=productGrid.scrollWidth;const clientWidth=productGrid.clientWidth;if(scrollLeft<=0){leftIndicator.classList.add('hidden')}else{leftIndicator.classList.remove('hidden')}
if(scrollLeft>=scrollWidth-clientWidth-10){rightIndicator.classList.add('hidden')}else{rightIndicator.classList.remove('hidden')}}
let isScrolling=!1;let startX=0;let scrollLeft=0;function handleTouchStart(e){isScrolling=!0;startX=e.touches[0].pageX-e.target.offsetLeft;scrollLeft=e.target.scrollLeft}
function handleTouchMove(e){if(!isScrolling)return;e.preventDefault();const x=e.touches[0].pageX-e.target.offsetLeft;const walk=(x-startX)*2;e.target.scrollLeft=scrollLeft-walk}
function handleTouchEnd(){isScrolling=!1};class SilbeleEcommerce{constructor(){this.cart=JSON.parse(localStorage.getItem('silbele_cart'))||[];this.user=JSON.parse(localStorage.getItem('silbele_user'))||null;this.init()}
init(){this.bindEvents();this.updateCartDisplay();this.updateCartCount()}
bindEvents(){document.addEventListener('click',(e)=>{if(e.target.classList.contains('btn-add-to-bag')){e.preventDefault();const productId=e.target.dataset.productId;const productName=e.target.dataset.productName;const productPrice=parseFloat(e.target.dataset.productPrice);const productImage=e.target.closest('.shop-product-card')?.querySelector('img')?.src||'';this.addToCart({id:productId,name:productName,price:productPrice,image:productImage,quantity:1})}});if(window.location.pathname==='/cart'){this.initCartPage()}
if(window.location.pathname==='/checkout'){this.initCheckoutPage()}
const signinForm=document.getElementById('signin-form');if(signinForm){signinForm.addEventListener('submit',(e)=>{e.preventDefault();this.handleSignIn()})}
const signupForm=document.getElementById('signup-form');if(signupForm){signupForm.addEventListener('submit',(e)=>{e.preventDefault();this.handleSignUp()})}}
addToCart(product){const existingItem=this.cart.find(item=>item.id===product.id);if(existingItem){existingItem.quantity+=1}else{this.cart.push(product)}
this.saveCart();this.updateCartDisplay();this.updateCartCount();this.showAddToCartMessage(product.name)}
removeFromCart(productId){this.cart=this.cart.filter(item=>item.id!==productId);this.saveCart();this.updateCartDisplay();this.updateCartCount()}
updateQuantity(productId,quantity){const item=this.cart.find(item=>item.id===productId);if(item){if(quantity<=0){this.removeFromCart(productId)}else{item.quantity=quantity;this.saveCart();this.updateCartDisplay();this.updateCartCount()}}}
saveCart(){localStorage.setItem('silbele_cart',JSON.stringify(this.cart))}
getCartTotal(){return this.cart.reduce((total,item)=>total+(item.price*item.quantity),0)}
getCartCount(){return this.cart.reduce((count,item)=>count+item.quantity,0)}
updateCartCount(){const cartCount=document.querySelector('.cart-count');if(cartCount){cartCount.textContent=this.getCartCount()}
this.updateCartOverlay()}
updateCartDisplay(){const cartItems=document.getElementById('cart-items');const cartEmpty=document.getElementById('cart-empty');const cartSummary=document.getElementById('cart-summary');const subtotal=document.getElementById('subtotal');const total=document.getElementById('total');const btnCheckout=document.getElementById('btn-checkout');const freeGiftNotice=document.getElementById('free-gift-notice');if(this.cart.length===0){if(cartEmpty)cartEmpty.style.display='block';if(cartSummary)cartSummary.style.display='none'}else{if(cartEmpty)cartEmpty.style.display='none';if(cartSummary)cartSummary.style.display='block';if(cartItems){cartItems.innerHTML=this.cart.map(item=>`
                    <div class="cart-item" data-product-id="${item.id}">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}" />
                        </div>
                        <div class="cart-item-details">
                            <h3>${item.name}</h3>
                            <p class="cart-item-price">£${item.price.toFixed(2)}</p>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn minus" onclick="ecommerce.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn plus" onclick="ecommerce.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            </div>
                        </div>
                        <div class="cart-item-total">
                            <p>£${(item.price * item.quantity).toFixed(2)}</p>
                            <button class="remove-item" onclick="ecommerce.removeFromCart('${item.id}')">Remove</button>
                        </div>
                    </div>
                `).join('')}
const cartTotal=this.getCartTotal();if(subtotal)subtotal.textContent=`£${cartTotal.toFixed(2)}`;if(total)total.textContent=`£${cartTotal.toFixed(2)}`;if(btnCheckout)btnCheckout.disabled=!1;if(freeGiftNotice){if(cartTotal>=35){freeGiftNotice.innerHTML='<p>🎁 You qualify for a FREE bestseller!</p>'}else{const remaining=(35-cartTotal).toFixed(2);freeGiftNotice.innerHTML=`<p>🎁 Add £${remaining} more to get a FREE bestseller!</p>`}}}}
initCartPage(){const btnCheckout=document.getElementById('btn-checkout');if(btnCheckout){btnCheckout.addEventListener('click',()=>{if(this.cart.length>0){window.location.href='/checkout'}})}
const btnContinueShopping=document.querySelector('.btn-continue-shopping-secondary');if(btnContinueShopping){btnContinueShopping.addEventListener('click',()=>{window.location.href='/products'})}}
initCheckoutPage(){this.updateCheckoutDisplay();const checkoutForm=document.getElementById('checkout-form');if(checkoutForm){checkoutForm.addEventListener('submit',(e)=>{e.preventDefault();this.handleCheckout()})}
const sameBilling=document.getElementById('same-billing');const billingAddress=document.getElementById('billing-address');if(sameBilling&&billingAddress){sameBilling.addEventListener('change',(e)=>{billingAddress.style.display=e.target.checked?'none':'block'})}
const paymentOptions=document.querySelectorAll('input[name="payment"]');const cardDetails=document.getElementById('card-details');if(paymentOptions&&cardDetails){paymentOptions.forEach(option=>{option.addEventListener('change',(e)=>{cardDetails.style.display=e.target.value==='card'?'block':'none'})})}
const shippingOptions=document.querySelectorAll('input[name="shipping"]');if(shippingOptions){shippingOptions.forEach(option=>{option.addEventListener('change',()=>{this.updateCheckoutTotals()})})}}
updateCheckoutDisplay(){const orderItems=document.getElementById('order-items');const checkoutSubtotal=document.getElementById('checkout-subtotal');const checkoutTotal=document.getElementById('checkout-total');const checkoutFreeGift=document.getElementById('checkout-free-gift');if(orderItems){orderItems.innerHTML=this.cart.map(item=>`
                <div class="order-item">
                    <div class="order-item-image">
                        <img src="${item.image}" alt="${item.name}" />
                    </div>
                    <div class="order-item-details">
                        <h4>${item.name}</h4>
                        <p>Qty: ${item.quantity}</p>
                    </div>
                    <div class="order-item-price">
                        £${(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            `).join('')}
const cartTotal=this.getCartTotal();if(checkoutSubtotal)checkoutSubtotal.textContent=`£${cartTotal.toFixed(2)}`;if(checkoutTotal)checkoutTotal.textContent=`£${cartTotal.toFixed(2)}`;if(checkoutFreeGift){if(cartTotal>=35){checkoutFreeGift.innerHTML='<p>🎁 You qualify for a FREE bestseller!</p>'}else{checkoutFreeGift.style.display='none'}}}
updateCheckoutTotals(){const cartTotal=this.getCartTotal();const expressShipping=document.getElementById('express');const checkoutShipping=document.getElementById('checkout-shipping');const checkoutTotal=document.getElementById('checkout-total');let shippingCost=0;if(expressShipping&&expressShipping.checked){shippingCost=5.00}
const total=cartTotal+shippingCost;if(checkoutShipping){checkoutShipping.textContent=shippingCost===0?'FREE':`£${shippingCost.toFixed(2)}`}
if(checkoutTotal){checkoutTotal.textContent=`£${total.toFixed(2)}`}}
async handleCheckout(){const form=document.getElementById('checkout-form');const formData=new FormData(form);if(!this.validateCheckoutForm(formData)){return}
const btnPlaceOrder=document.getElementById('btn-place-order');if(btnPlaceOrder){btnPlaceOrder.textContent='Processing...';btnPlaceOrder.disabled=!0}
try{await this.processPayment(formData);const order=this.createOrder(formData);this.cart=[];this.saveCart();window.location.href=`/thank-you?order=${order.id}`}catch(error){console.error('Checkout error:',error);alert('There was an error processing your order. Please try again.');if(btnPlaceOrder){btnPlaceOrder.textContent='Place Order';btnPlaceOrder.disabled=!1}}}
validateCheckoutForm(formData){const requiredFields=['email','phone','first_name','last_name','address','city','postcode','country'];for(const field of requiredFields){if(!formData.get(field)){alert(`Please fill in the ${field.replace('_', ' ')} field.`);return!1}}
const terms=formData.get('terms');if(!terms){alert('Please agree to the Terms and Conditions.');return!1}
return!0}
async processPayment(formData){return new Promise((resolve,reject)=>{setTimeout(()=>{if(Math.random()>0.05){resolve({success:!0,transactionId:'txn_'+Math.random().toString(36).substr(2,9)})}else{reject(new Error('Payment failed'))}},2000)})}
createOrder(formData){const order={id:'SIL-'+Date.now(),date:new Date().toISOString(),items:this.cart,total:this.getCartTotal(),customer:{email:formData.get('email'),phone:formData.get('phone'),firstName:formData.get('first_name'),lastName:formData.get('last_name'),address:formData.get('address'),city:formData.get('city'),postcode:formData.get('postcode'),country:formData.get('country')},shipping:{method:formData.get('shipping'),cost:formData.get('shipping')==='express'?5.00:0.00},payment:{method:formData.get('payment'),status:'paid'},status:'processing'};const orders=JSON.parse(localStorage.getItem('silbele_orders'))||[];orders.push(order);localStorage.setItem('silbele_orders',JSON.stringify(orders));return order}
handleSignIn(){const email=document.getElementById('email').value;const password=document.getElementById('password').value;if(email&&password){this.user={email:email,name:email.split('@')[0],id:'user_'+Date.now()};localStorage.setItem('silbele_user',JSON.stringify(this.user));const redirectUrl=new URLSearchParams(window.location.search).get('redirect')||'/account';window.location.href=redirectUrl}else{alert('Please enter your email and password.')}}
handleSignUp(){const email=document.getElementById('email').value;const password=document.getElementById('password').value;const confirmPassword=document.getElementById('confirm-password').value;const firstName=document.getElementById('first-name').value;const lastName=document.getElementById('last-name').value;if(!email||!password||!firstName||!lastName){alert('Please fill in all required fields.');return}
if(password!==confirmPassword){alert('Passwords do not match.');return}
if(password.length<8){alert('Password must be at least 8 characters long.');return}
this.user={email:email,name:`${firstName} ${lastName}`,id:'user_'+Date.now(),createdAt:new Date().toISOString()};localStorage.setItem('silbele_user',JSON.stringify(this.user));window.location.href='/account'}
updateCartOverlay(){const cartItemsOverlay=document.getElementById('cart-items-overlay');const cartEmptyOverlay=document.getElementById('cart-empty-overlay');const cartSummaryOverlay=document.getElementById('cart-summary-overlay');const cartOverlayTotal=document.getElementById('cart-overlay-total');if(this.cart.length===0){if(cartItemsOverlay)cartItemsOverlay.style.display='none';if(cartEmptyOverlay)cartEmptyOverlay.style.display='block';if(cartSummaryOverlay)cartSummaryOverlay.style.display='none'}else{if(cartItemsOverlay){cartItemsOverlay.style.display='block';cartItemsOverlay.innerHTML=this.cart.map(item=>`
                    <div class="cart-item-overlay">
                        <div class="cart-item-image-overlay">
                            <img src="${item.image}" alt="${item.name}" />
                        </div>
                        <div class="cart-item-details-overlay">
                            <h4>${item.name}</h4>
                            <p>Qty: ${item.quantity}</p>
                            <p class="cart-item-price-overlay">£${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <button class="remove-item-overlay" onclick="ecommerce.removeFromCart('${item.id}')">
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                `).join('')}
if(cartEmptyOverlay)cartEmptyOverlay.style.display='none';if(cartSummaryOverlay)cartSummaryOverlay.style.display='block';if(cartOverlayTotal)cartOverlayTotal.textContent=`£${this.getCartTotal().toFixed(2)}`}}
showAddToCartMessage(productName){const message=document.createElement('div');message.className='add-to-cart-message';message.innerHTML=`
            <div class="message-content">
                <span>✅ ${productName} added to bag</span>
                <a href="/cart" class="view-cart">View Bag</a>
            </div>
        `;document.body.appendChild(message);setTimeout(()=>{message.remove()},3000)}
logout(){this.user=null;localStorage.removeItem('silbele_user');window.location.href='/'}}
const ecommerce=new SilbeleEcommerce();window.ecommerce=ecommerce