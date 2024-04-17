let container = document.getElementById("container"),
    form = document.querySelector("form"),
    input = document.querySelector("input");


container.addEventListener("click", (eo) => {

    switch (eo.target.className) {
        case "icon-star":
            eo.target.classList.add("stared");
            container.prepend(eo.target.parentElement);
            break;

        case "icon-star stared":
            eo.target.classList.remove("stared");
            break;

        case "icon-trash":
            eo.target.parentElement.parentElement.remove();
            break;

        case "icon-heart":
            eo.target.parentElement.parentElement.querySelector("p").classList.add("finish");
            eo.target.parentElement.parentElement.querySelector(".icon-angry").style.display = "inline";
            eo.target.style.display = "none";
            break;

        case "icon-angry":
            eo.target.parentElement.parentElement.querySelector("p").classList.remove("finish");
            eo.target.parentElement.parentElement.querySelector(".icon-heart").style.display = "inline";
            eo.target.style.display = "none";
            break;
    }
})


form.addEventListener("submit", (eo) => {
    eo.preventDefault();
    const myTask = `<article class="task"><span class="icon-star"></span><p lang="ar"> ${input.value} </p><div><span class="icon-trash"></span><span class="icon-angry"></span><span class="icon-heart"></span></div></article>`;
    container.innerHTML += myTask;
    input.value = "";
})