let btn = document.querySelector(".to-top-btn")

window.onscroll = () => {
    if (window.scrollY >= 500) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

btn.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
})