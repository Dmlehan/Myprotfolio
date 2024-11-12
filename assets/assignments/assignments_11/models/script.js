const homeSection = document.getElementById("pic");
const customerSection = document.getElementById("Customers");
const itemSection = document.getElementById("items");
const orderSection = document.getElementById("placeOrder");

document.getElementById("home").addEventListener('click', function() {
    // Show Home page, hide others
    homeSection.style.display = 'block';
    customerSection.style.display = 'none';
    itemSection.style.display = 'none';
    orderSection.style.display = 'none';
});

document.getElementById("customer").addEventListener('click', function() {
    // Show Customers page, hide others
    homeSection.style.display = 'none';
    customerSection.style.display = 'block';
    itemSection.style.display = 'none';
    orderSection.style.display = 'none';
});

document.getElementById("item").addEventListener('click', function() {
    // Show Items page, hide others
    homeSection.style.display = 'none';
    customerSection.style.display = 'none';
    itemSection.style.display = 'block';
    orderSection.style.display = 'none';
});

document.getElementById("order").addEventListener('click', function() {
    // Show Place Order page, hide others
    homeSection.style.display = 'none';
    customerSection.style.display = 'none';
    itemSection.style.display = 'none';
    orderSection.style.display = 'block';
});