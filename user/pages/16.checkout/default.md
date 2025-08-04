---
title: Checkout
menu: Checkout
---

<div class="checkout-hero-section">
<div class="checkout-hero-content">
<div class="checkout-hero-text">
<h1>Checkout</h1>
<p>Complete your order securely</p>
</div>
</div>
</div>

---

<div class="checkout-section">
<div class="checkout-content">
<div class="checkout-form">
<form id="checkout-form">
<!-- Customer Information -->
<div class="form-section">
<h2>Customer Information</h2>
<div class="form-row">
<div class="form-group">
<label for="email">Email address *</label>
<input type="email" id="email" name="email" required>
<p class="form-note">We'll send your order confirmation to this email</p>
</div>
</div>

<div class="form-row">
<div class="form-group">
<label for="phone">Phone number *</label>
<input type="tel" id="phone" name="phone" required>
<p class="form-note">For delivery updates</p>
</div>
</div>
</div>

<!-- Shipping Address -->
<div class="form-section">
<h2>Shipping Address</h2>
<div class="form-row">
<div class="form-group">
<label for="first-name">First name *</label>
<input type="text" id="first-name" name="first_name" required>
</div>
<div class="form-group">
<label for="last-name">Last name *</label>
<input type="text" id="last-name" name="last_name" required>
</div>
</div>

<div class="form-row">
<div class="form-group">
<label for="address">Address *</label>
<input type="text" id="address" name="address" required>
</div>
</div>

<div class="form-row">
<div class="form-group">
<label for="city">City *</label>
<input type="text" id="city" name="city" required>
</div>
<div class="form-group">
<label for="postcode">Postcode *</label>
<input type="text" id="postcode" name="postcode" required>
</div>
</div>

<div class="form-row">
<div class="form-group">
<label for="country">Country *</label>
<select id="country" name="country" required>
<option value="">Select country</option>
<option value="GB" selected>United Kingdom</option>
<option value="US">United States</option>
<option value="CA">Canada</option>
<option value="AU">Australia</option>
<option value="DE">Germany</option>
<option value="FR">France</option>
</select>
</div>
</div>
</div>

<!-- Shipping Method -->
<div class="form-section">
<h2>Shipping Method</h2>
<div class="shipping-options">
<div class="shipping-option">
<input type="radio" id="standard" name="shipping" value="standard" checked>
<label for="standard">
<div class="shipping-info">
<h3>Standard Delivery</h3>
<p>3-5 business days</p>
</div>
<div class="shipping-price">FREE</div>
</label>
</div>
<div class="shipping-option">
<input type="radio" id="express" name="shipping" value="express">
<label for="express">
<div class="shipping-info">
<h3>Express Delivery</h3>
<p>1-2 business days</p>
</div>
<div class="shipping-price">£5.00</div>
</label>
</div>
</div>
</div>

<!-- Payment Method -->
<div class="form-section">
<h2>Payment Method</h2>
<div class="payment-options">
<div class="payment-option">
<input type="radio" id="card" name="payment" value="card" checked>
<label for="card">
<div class="payment-info">
<h3>Credit or Debit Card</h3>
<p>Visa, Mastercard, American Express</p>
</div>
<div class="payment-icons">
💳
</div>
</label>
</div>
<div class="payment-option">
<input type="radio" id="paypal" name="payment" value="paypal">
<label for="paypal">
<div class="payment-info">
<h3>PayPal</h3>
<p>Pay with your PayPal account</p>
</div>
<div class="payment-icons">
PayPal
</div>
</label>
</div>
</div>

<!-- Card Details (shown when card is selected) -->
<div class="card-details" id="card-details">
<div class="form-row">
<div class="form-group">
<label for="card-number">Card number *</label>
<input type="text" id="card-number" name="card_number" placeholder="1234 5678 9012 3456">
</div>
</div>

<div class="form-row">
<div class="form-group">
<label for="expiry">Expiry date *</label>
<input type="text" id="expiry" name="expiry" placeholder="MM/YY">
</div>
<div class="form-group">
<label for="cvv">CVV *</label>
<input type="text" id="cvv" name="cvv" placeholder="123">
</div>
</div>

<div class="form-row">
<div class="form-group">
<label for="card-name">Name on card *</label>
<input type="text" id="card-name" name="card_name">
</div>
</div>
</div>
</div>

<!-- Billing Address -->
<div class="form-section">
<h2>Billing Address</h2>
<div class="billing-option">
<input type="checkbox" id="same-billing" name="same_billing" checked>
<label for="same-billing">Same as shipping address</label>
</div>

<div class="billing-address" id="billing-address" style="display: none;">
<div class="form-row">
<div class="form-group">
<label for="billing-first-name">First name *</label>
<input type="text" id="billing-first-name" name="billing_first_name">
</div>
<div class="form-group">
<label for="billing-last-name">Last name *</label>
<input type="text" id="billing-last-name" name="billing_last_name">
</div>
</div>

<div class="form-row">
<div class="form-group">
<label for="billing-address">Address *</label>
<input type="text" id="billing-address-input" name="billing_address">
</div>
</div>

<div class="form-row">
<div class="form-group">
<label for="billing-city">City *</label>
<input type="text" id="billing-city" name="billing_city">
</div>
<div class="form-group">
<label for="billing-postcode">Postcode *</label>
<input type="text" id="billing-postcode" name="billing_postcode">
</div>
</div>
</div>
</div>

<!-- Order Notes -->
<div class="form-section">
<h2>Order Notes (Optional)</h2>
<div class="form-row">
<div class="form-group">
<label for="notes">Special instructions</label>
<textarea id="notes" name="notes" rows="3" placeholder="Any special instructions for delivery..."></textarea>
</div>
</div>
</div>

<!-- Terms and Conditions -->
<div class="form-section">
<div class="terms-checkbox">
<input type="checkbox" id="terms" name="terms" required>
<label for="terms">I agree to the <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a> *</label>
</div>
</div>
</form>
</div>

<div class="checkout-summary">
<div class="summary-content">
<h3>Order Summary</h3>
<div class="order-items" id="order-items">
<!-- Order items will be dynamically populated -->
</div>

<div class="summary-details">
<div class="summary-row">
<span>Subtotal:</span>
<span id="checkout-subtotal">£0.00</span>
</div>
<div class="summary-row">
<span>Shipping:</span>
<span id="checkout-shipping">FREE</span>
</div>
<div class="summary-row total">
<span>Total:</span>
<span id="checkout-total">£0.00</span>
</div>
</div>

<div class="free-gift-notice" id="checkout-free-gift">
<p>🎁 You qualify for a FREE bestseller!</p>
</div>

<div class="checkout-actions">
<button class="btn-place-order" id="btn-place-order" disabled>Place Order</button>
<a href="/cart" class="btn-back-to-cart">Back to Cart</a>
</div>

<div class="checkout-benefits">
<div class="benefit-item">
<div class="benefit-icon">🔒</div>
<div class="benefit-text">
<h4>Secure Checkout</h4>
<p>SSL encrypted payment</p>
</div>
</div>
<div class="benefit-item">
<div class="benefit-icon">🚚</div>
<div class="benefit-text">
<h4>Free Delivery</h4>
<p>On orders over £35</p>
</div>
</div>
<div class="benefit-item">
<div class="benefit-icon">🔄</div>
<div class="benefit-text">
<h4>Easy Returns</h4>
<p>30-day return policy</p>
</div>
</div>
</div>
</div>
</div>
</div>

---

<footer class="footer">
<div class="footer-content">
<div class="footer-section">
<h4>About</h4>
<a href="#">Contact Us</a>
<a href="#">Help Centre & FAQs</a>
<a href="#">About Us</a>
<a href="#">e-Gift Cards</a>
<a href="#">Student Beans Discount</a>
<a href="#">Affiliate Program</a>
<a href="#">Klarna</a>
<a href="#">2024 Impact Report</a>
<a href="#">Digital Accessibility Statement</a>
<a href="#">Modern Slavery Statement</a>
<a href="#">No Animal Testing Policy</a>
<a href="#">Sitemap</a>
<a href="#">Reviews</a>
<a href="#">Skincare Gifts</a>
<a href="#">NEW Exosome Hydro-Glow Complex</a>
</div>

<div class="footer-section">
<h4>Privacy & Terms</h4>
<a href="#">Terms & Conditions</a>
<a href="#">Promotion Terms & Conditions</a>
<a href="#">Privacy Notice</a>
<a href="#">Update cookies preferences</a>
</div>

<div class="footer-section">
<h4>Knowledge</h4>
<a href="#">About us</a>
<a href="#">#askINKEY</a>
<a href="#">Blog</a>
<a href="#">Skincare Concerns</a>
<a href="#">Haircare Concerns</a>
<a href="#">Knowledge powers change</a>
<a href="#">Changemaker Knowledge Hub</a>
</div>

<div class="footer-section">
<h4>Follow Us</h4>
<a href="#">TikTok</a>
<a href="#">Facebook</a>
<a href="#">X</a>
<a href="#">Instagram</a>
</div>
</div>

<div class="footer-bottom">
<div class="footer-rewards">
<p>Rewards</p>
<p>B Corporation Certified for social and environmental performance</p>
</div>
<div class="footer-copyright">
<p>© Copyright 2025, The Inkey List. All rights reserved</p>
</div>
</div>
</footer>

---

<div class="brand-tagline">
*Complete your beauty routine with Silbele's premium skincare products.*
</div> 