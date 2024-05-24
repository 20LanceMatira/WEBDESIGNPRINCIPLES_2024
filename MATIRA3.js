// Global array to store cart items
var cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".sliderWrapper");
    const menuItems = document.querySelectorAll(".menuItem");
    const sliderItems = document.querySelectorAll(".sliderItem");

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const itemWidth = sliderItems[0].clientWidth;
            wrapper.style.transform = `translateX(${-itemWidth * index}px)`;
        });
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    }

    document.querySelectorAll(".limitedOffer a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute("href").slice(1);
            scrollToSection(sectionId);
        });
    });

    document.getElementById("orderForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var name = document.getElementById("name").value;
        var contact = document.getElementById("contact").value;
        var address = document.getElementById("address").value;
        var payment = document.getElementById("payment").value;
        var paymentMethod = document.getElementById("paymentMethod").value;

        var summary = "Order Summary:\n\n" +
                      "Name: " + name + "\n" +
                      "Contact Number: " + contact + "\n" +
                      "Address: " + address + "\n" +
                      "Payment: " + payment + "\n" +
                      "Payment Method: " + paymentMethod + "\n\n" +
                      "Cart Items:\n";

        var totalPrice = 0;

        cartItems.forEach(function(item, index) {
            summary += `Item ${index + 1}:\n`;
            summary += `Product Name: ${item.productName}\n`;
            summary += `Product Price: ${item.productPrice}\n`;
            summary += `Product Size: ${item.selectedSize}\n\n`;
            totalPrice += parseFloat(item.productPrice.replace('PHP ', ''));
        });

        summary += `Total Price: PHP ${totalPrice}`;

        alert(summary);
        alert("THANKS FOR SHOPPING AT RADUCTS!");
    });
});

function scrollToBuyNowSection() {
    const buyNowSection = document.getElementById("productDetails");
    buyNowSection.scrollIntoView({ behavior: "smooth" });
}

function showProductDetails(product) {
    const productImg = document.getElementById("productImg");
    const productTitle = document.getElementById("productTitle");
    const productPrice = document.getElementById("productPrice");
    const productDesc = document.getElementById("productDesc");

    switch (product) {
        case "lapis":
            productImg.src = "./IMAGES/blue cap.jpg";
            productTitle.textContent = "CLOUD";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "This classic blue bucket cap with its cloud pattern is perfect for casual outings. Made with high-quality materials, it offers both style and comfort.";
            break;
        case "ruby":
            productImg.src = "./IMAGES/red cap.jpg";
            productTitle.textContent = "RUBY";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "Make a bold statement with this vibrant red bucket cap. Its striking color and durable design make it a must-have accessory.";
            break;
        case "spinel":
            productImg.src = "./IMAGES/gray cap.jpg";
            productTitle.textContent = "SPINEL";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "Add a touch of sophistication to your look with this sleek gray bucket cap. Crafted with premium materials, it's both stylish and practical.";
            break;
        case "seashore":
            productImg.src = "./IMAGES/blue hawaiian.jpg";
            productTitle.textContent = "SEASHORE";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "Embrace the beach vibes with this cool blue Hawaiian shirt. Its relaxed fit and breathable fabric make it ideal for sunny days.";
            break;
        case "sunset":
            productImg.src = "./IMAGES/red hawaiian.jpg";
            productTitle.textContent = "SUNSET";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "Capture the beauty of a sunset with this fiery red Hawaiian shirt. Whether you're lounging by the pool or hitting the beach, it's sure to turn heads.";
            break;
        case "floral":
            productImg.src = "./IMAGES/pink hawaiian.jpg";
            productTitle.textContent = "FLORAL";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "Channel tropical vibes with this pretty pink Hawaiian shirt. Featuring a vibrant floral pattern, it's perfect for summer adventures.";
            break;
        case "fauna":
            productImg.src = "./IMAGES/blue short.jpg";
            productTitle.textContent = "FAUNA";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "Stand out from the crowd with these unique blue shorts. Their eye-catching design is inspired by nature and sure to make a statement.";
            break;
        case "ethnic":
            productImg.src = "./IMAGES/red short.jpg";
            productTitle.textContent = "LEAVES";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "Make a fashion statement with these stylish red shorts. Featuring an ethnic-inspired print, they're perfect for adding a pop of color to your wardrobe.";
            break;
        case "palm":
            productImg.src = "./IMAGES/pink short.jpg";
            productTitle.textContent = "PALM";
            productPrice.textContent = "PHP 500";
            productDesc.textContent = "Get ready for summer with these cute pink shorts. Adorned with a playful palm tree pattern, they're both fun and fashionable.";
            break;
        default:
            break;
    }
    const buyNowSection = document.getElementById("productDetails");
    buyNowSection.style.display = "block";

    scrollToBuyNowSection();

    sizeSelect.innerHTML = "";

    if (product) {
        addSizeOption("XS");
        addSizeOption("S");
        addSizeOption("M");
        addSizeOption("L");
        addSizeOption("XL");
    } else {
        addSizeOption("no available size"); 
    }

    function addSizeOption(size) {
        const option = document.createElement("option");
        option.text = size;
        sizeSelect.add(option);
    }
}

function addToCart() {
    var productName = document.getElementById("productTitle").textContent;
    var productPrice = document.getElementById("productPrice").textContent;
    var selectedSize = document.getElementById('sizeSelect').value;

   
    cartItems.push({
        productName: productName,
        productPrice: productPrice,
        selectedSize: selectedSize
    });

    var cartItem = document.createElement('div');
    cartItem.classList.add('cartItem');

   
    cartItem.innerHTML = `
        <span class="cartProductName">${productName}</span>
        <span class="cartProductPrice">${productPrice}</span>
        <span class="cartProductSize">${selectedSize}</span>
    `;
   
    document.getElementById('cartSection').appendChild(cartItem);

    console.log(`Product Name: ${productName}, Product Price: ${productPrice}, Size: ${selectedSize}`);
    alert("Item has been added to cart!");
    
}
