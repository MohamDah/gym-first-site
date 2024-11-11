document.addEventListener("DOMContentLoaded", () => {

    document.body.querySelectorAll(".dropdown").forEach(d => {
        d.addEventListener("click", () => {
            toggleDropdown(d)
        })
    })
})

function toggleDropdown(dropdown) {
    
    const svg = dropdown.querySelector("img");
    if (svg.src.includes("/images/downarrow.svg")) {
        svg.src = svg.src.replace("/images/downarrow.svg", "/images/uparrow.svg")
    } else {
        svg.src = svg.src.replace("/images/uparrow.svg", "/images/downarrow.svg")
    }

    const toHide = dropdown.querySelector(".to_hide")
    toHide.classList.toggle("hidden")
    
}