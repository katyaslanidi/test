document.getElementById("open-popup-btn").addEventListener("click", () => {
    document.getElementById("menu").classList.add("overlay_opened")
})

document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("menu").classList.remove("overlay_opened")
})