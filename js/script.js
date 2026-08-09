const carousels = document.querySelectorAll(".carousel-wrapper");

carousels.forEach(wrapper => {
    const track = wrapper.querySelector(".songs, .artists");
    const leftBtn = wrapper.querySelector(".arrow-left");
    const rightBtn = wrapper.querySelector(".arrow-right");

    const scrollAmount = 500;

    leftBtn.addEventListener("click", () => { 
        track.scrollBy({ left: -scrollAmount, behavior: "smooth"});
    });
    rightBtn.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount, behavior: "smooth"});
    })

    leftBtn.style.opacity = "0";
    leftBtn.style.pointerEvents = "none";

    track.addEventListener("scroll", () => {
        const atStart = track.scrollLeft <= 0;
        leftBtn.style.opacity = atStart ? "0" : "1";
        leftBtn.style.pointerEvents = atStart ? "none" : "auto";
    });
});