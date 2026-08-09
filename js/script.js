const carousels = document.querySelectorAll(".carousel-wrapper");

carousels.forEach(wrapper => {
    const track = wrapper.querySelector(".songs, .artists");
    const leftBtn = wrapper.querySelector(".arrow-left");
    const rightBtn = wrapper.querySelector(".arrow-right");

    const card = track.querySelector(".music-card, .artist-card");
    const gap = parseFloat(getComputedStyle(track).gap);
    const scrollAmount = (card.offsetWidth + gap) * 3;

    leftBtn.addEventListener("click", () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    const updateArrows = () => {
        const atStart = track.scrollLeft <= 0;
        const atEnd =
            track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

        leftBtn.style.opacity = atStart ? "0" : "1";
        leftBtn.style.pointerEvents = atStart ? "none" : "auto";

        rightBtn.style.opacity = atEnd ? "0" : "1";
        rightBtn.style.pointerEvents = atEnd ? "none" : "auto";
    };

    updateArrows();

    track.addEventListener("scroll", updateArrows);
});

const playButtons = document.querySelectorAll(".music-play-btn");

playButtons.forEach(button => {
    button.addEventListener("click", () => {
        const icon = button.querySelector("i");

        const isPlaying = icon.classList.contains("fa-circle-pause");

        playButtons.forEach(otherButton => {
            const otherIcon = otherButton.querySelector("i");

            otherIcon.classList.remove("fa-circle-pause");
            otherIcon.classList.add("fa-circle-play");
        });

        if (!isPlaying) {
            icon.classList.remove("fa-circle-play");
            icon.classList.add("fa-circle-pause");
        }
    });
});