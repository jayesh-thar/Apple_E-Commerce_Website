function navAnimation() {
    const menu = document.querySelector('#nav i');
    const cross = document.querySelector('#full i');
    const tl = gsap.timeline({ paused: true });

    tl.to('#full', {
        right: 0,
        duration: 0.5,
        ease: "power2.out"
    })
    .from('#full h4', {
        x: 150,
        duration: 0.6,
        stagger: 0.1,
        opacity: 0,
        ease: "power2.out"
    }, '-=0.3')
    .from('#full i', {
        opacity: 0,
        duration: 0.3
    }, '-=0.2');

    menu.addEventListener('click', () => tl.play());
    cross.addEventListener('click', () => tl.reverse());
}
navAnimation();

function wheelScrollMarquee() {
    window.addEventListener('wheel', function(dets) {
    const direction = dets.deltaY > 0 ? -200 : 0;
    const rotate = dets.deltaY > 0 ? 180 : 0;
        gsap.to("#marque", {
            xPercent: direction,
            repeat: -1,
            duration: 2,
            ease: "none"
        });
        gsap.to("#marque img", {
            rotate,
            duration: 1
        });
    });
}

wheelScrollMarquee();

// JavaScript to handle Add to Cart functionality

// Function to add product to localStorage when +Cart button is clicked
document.querySelectorAll('.custom-card button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = {
            image: button.closest('.custom-card').querySelector('img').src,
            title: button.closest('.custom-card').querySelector('h3').innerText,
            chip: button.closest('.custom-card').querySelector('h4').innerText,
            price: button.closest('.custom-card').querySelector('p').innerText,
        };

        // Get existing cart items from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Add the selected product to cart
        cartItems.push(product);

        // Save the updated cart items back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert(`${product.title} has been added to your cart.`);
    });
});
