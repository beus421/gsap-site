
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

tl.from(
    '.logo',
    {
        opacity: 0,
        duration: 0.5,
        x: -10
    }
)

tl.from(
    '.nav-links',
    {
        opacity: 0,
        duration: 0.5,
        y: 10,
        stagger: 0.2
    }
)

tl.from(
    '.primary-btn',
    {
        opacity: 0,
        duration: 0.5,
        x: 10
    }
)

gsap.from('.tablet-wrapper', {
    yPercent: 30, // Starts completely pushed down (hidden by sleeve)
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top", // When the top of hero section hits top of viewport
        end: "+=1000", // Keep scrolling for 1000px before unpinning
        scrub: true, // Smooth scrubbing linked to scroll position
        pin: true, // PIN the hero section to the screen!
        markers: true
    }
});