let input = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let articles = document.getElementsByTagName("article")
input.focus();

for (let i = 0; i < window.localStorage.length; i++) {
    let art = document.createElement("article")
    let ph = document.createElement("p")
    let btn = document.createElement("button")
    let tex = document.createTextNode(`${articles.length +1}| ${window.localStorage.getItem(i+1)}`)
    tasks.append(art)
    art.append(ph)
    ph.append(tex)
    art.append(btn)
    btn.innerText = 'Delete'
}

function create(text) {
    let art = document.createElement("article")
    let ph = document.createElement("p")
    let btn = document.createElement("button")
    let tex = document.createTextNode(`${articles.length +1}| ${text}`)
    tasks.append(art)
    art.append(ph)
    ph.append(tex)
    art.append(btn)
    btn.innerText = 'Delete'
}

function save(key, value) {
    window.localStorage.setItem(key, value)
}

addBtn.addEventListener("click", (eo) => {
    eo.preventDefault()
    if (input.value.trim().length > 0) {
        create(input.value.trim())
        save(articles.length, input.value.trim())
    }
    input.value = "";
})

document.body.addEventListener("click", (eo) => {
    if (eo.target.tagName === "BUTTON" && eo.target.innerText === "Delete") {
        let eoKey = eo.target.parentElement.innerText.toString().slice(0,1)
        window.localStorage.removeItem(eoKey)
        eo.target.parentElement.remove()
        window.localStorage.clear()
        for (let i = 0; i < articles.length; i++) { 
            articles[i].firstElementChild.innerText = `${i+1}${articles[i].firstElementChild.innerText.slice(1)}`
            save(articles[i].firstElementChild.innerText.slice(0,1), articles[i].firstElementChild.innerText.slice(2).trim())
        }
    }
})

// window.localStorage.clear()