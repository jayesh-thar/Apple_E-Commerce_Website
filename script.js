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

function hoverAndMoveImage() {
    const allContainer = gsap.utils.toArray(".container-item");
    const venueImageWrap = document.querySelector(".container-img-wrap");
    const venueImage = document.querySelector(".container-img");

    function moveVenueImage(e) {
        gsap.to(venueImageWrap, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "power2.out"
        });
    }

    function venueHover(e) {
        const tl = gsap.timeline();
        if (e.type === "mouseenter") {
            const targetImage = e.target.dataset.img;
            tl.set(venueImage, {
                backgroundImage: `url(${targetImage})`
            }).to(venueImageWrap, {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        } else {
            tl.to(venueImageWrap, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    }

    allContainer.forEach((link) => {
        link.addEventListener("mouseenter", venueHover);
        link.addEventListener("mouseleave", venueHover);
        link.addEventListener("mousemove", moveVenueImage);
    });
}

function initNavAndHeaderAnimations() {
    gsap.timeline()
        .from(".navbar > div", { opacity: 0, y: 60, duration: 1.6, ease: "expo.out", delay: 0.6 })
        .from(".site-logo", { opacity: 0, y: 40, duration: 1.6, ease: "expo.out" }, "-=1.6")
        .staggerFrom(".site-menu > div", 1, { opacity: 0, y: 60, ease: "power2.out" }, 0.2)
        .staggerFrom(".header > div", 1, { opacity: 0, y: 60, ease: "power2.out", delay: -1.4 }, 0.2)
        .staggerFrom(".item a h3", 1, { opacity: 0, y: 60, ease: "power2.out", delay: -1.4 }, 0.2);
}

function scrollTriggeredAnimations() {
    gsap.utils.toArray([".left1", ".right1", ".left2", ".right2"]).forEach((box, index) => {
        const direction = box.classList.contains('left1') || box.classList.contains('left2') ? -300 : 300;
        gsap.from(box, {
            scrollTrigger: {
                trigger: box,
                start: "top 80%"
            },
            duration: 1.2,
            x: direction,
            opacity: 0,
            ease: "power2.out",
            delay: index * 0.3
        });
    });
}

function storeCardAnimations() {
    gsap.utils.toArray(".store-cards .card").forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },
            duration: 1,
            y: 100,
            opacity: 0,
            delay: index * 0.2
        });
        gsap.registerPlugin(ScrollTrigger);

    });
}

function headingAnimations() {
    gsap.from(".newHeading", {
        scrollTrigger: {
            trigger: ".newHeading",
            start: "top 60%"
        },
        duration: 1,
        opacity: 0,
        x: 200
    });

    gsap.from(".newPhone", {
        scrollTrigger: {
            trigger: ".newPhone",
            start: "top 60%"
        },
        duration: 1,
        opacity: 0,
        x: -200
    });

    gsap.from(".OfferHeading", {
        scrollTrigger: {
            trigger: ".OfferHeading",
            start: "top 70%"
        },
        duration: 1.2,
        opacity: 0,
        scale: 0.9
    });
}

function galleryAnimations() {
    gsap.utils.toArray(".gal").forEach((img) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 85%"
            },
            duration: 1.2,
            opacity: 0,
            scale: 0.9,
            y: 100
        });
    });
}

function animateTextOnScroll() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".storePage h1", {
        opacity: 0,
        x: 500,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".storePage",
            start: "top 80%", 
            end: "bottom 60%", 
        }
    });
}

animateTextOnScroll();


function init() {
    navAnimation();
    wheelScrollMarquee();
    hoverAndMoveImage();
    initNavAndHeaderAnimations();
    scrollTriggeredAnimations();
    storeCardAnimations();
    headingAnimations();
    galleryAnimations();
}

window.addEventListener("load", init);


document.getElementById("learnMoreBtn").addEventListener("click", function() {
    window.location.href = "iphone.html";
});
