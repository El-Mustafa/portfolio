// global style
document.body.style.backgroundColor = '#f0f0f0'

//header
let myHeader = document.createElement("header")
let myHeaderH1 = document.createElement("h1")
let myHeaderH1Text = document.createTextNode("Musta")
myHeaderH1.append(myHeaderH1Text)
myHeader.append(myHeaderH1)
let myUlist = document.createElement("ul")
let myLists1 = document.createElement("li")
let myLists2 = document.createElement("li")
let myLists3 = document.createElement("li")
let myLists4 = document.createElement("li")
myLists1.innerText = "Home"
myLists2.innerText = "About"
myLists3.innerText = "Service"
myLists4.innerText = "Contact"
myUlist.append(myLists1, myLists2, myLists3, myLists4)
myHeader.append(myUlist)
document.body.append(myHeader)

//header style
myHeader.style.display = "flex"
myHeader.style.backgroundColor = "white"
myHeader.style.justifyContent = "space-between"
myHeader.style.alignItems = "center"
// myHeader.style.padding = '10px 20px'
myHeader.style.padding = '0px 20px'
myHeader.style.height = '50px'


//header > h1 style
myHeaderH1.style.letterSpacing = '0'
myHeaderH1.style.color = 'rgb(35, 169, 110)'

//lists style
myUlist.style.listStyle = 'none'
myUlist.style.display = 'flex'
myUlist.style.alignItems = 'center'
myUlist.style.fontSize = '14px'
myUlist.style.height = '100%'
myUlist.style.width = '50%'
myUlist.style.textAlign = 'center'

let lists = document.getElementsByTagName("li")
Array.from(lists).forEach(function (ele) {
    ele.style.padding = '0 5px'
    ele.style.color = '#444'
    ele.style.fontWeight = 'bold'
    ele.style.padding = '16.5px 0'
    ele.style.width = '25%'
    ele.onmouseenter = function() {
        ele.style.cursor = 'pointer'
        ele.style.backgroundColor = '#f0f0f0'
    }
    
    ele.onmouseleave = function() {
        if (this.innerText !== "Home") {
            ele.style.backgroundColor = 'white'
        }
    }
})
document.querySelector("li").style.backgroundColor = '#f0f0f0'

// content
let myContainer = document.createElement("div")
myContainer.className = 'container'
myContainer.style.display = 'flex'
myContainer.style.flexWrap = 'wrap'
myContainer.style.justifyContent = 'center'
myContainer.style.margin = '5px 0'



for (let i = 0; i < 18; i++) {

    let myProduct = document.createElement('div')
    myProduct.className = 'product'
    let productTitle = document.createElement("h3")
    productTitle.innerText = i + 1 // test
    let productDiscription = document.createElement("p")
    let discriptionText = document.createTextNode("Product")

    document.body.append(myContainer)
    myContainer.append(myProduct)
    myProduct.append(productTitle)
    myProduct.append(productDiscription)
    productDiscription.appendChild(discriptionText)

    myProduct.style.textAlign = 'center'
    myProduct.style.backgroundColor = 'white'
    myProduct.style.padding = '15px 0'
    myProduct.style.margin = '5px'
    myProduct.style.width = '30%'

    productTitle.style.fontSize = '26px'
    productDiscription.style.fontSize = '14px'
    productDiscription.style.color = '#444'
}

let myFooter = document.createElement("footer")
let mySpan = document.createElement("span")
let footerText = document.createTextNode("devolop by Mustafa Ahmed with vanilla js")


document.body.append(myFooter)
myFooter.append("devolop by ")
myFooter.append(mySpan)
mySpan.append("Mustafa Ahmed ")
myFooter.append("with vanilla js")

mySpan.style.color = 'rgb(35, 169, 110)'

myFooter.style.backgroundColor = '#fff'
myFooter.style.textAlign = 'center'
myFooter.style.padding = '15px 0'
myFooter.style.position = 'fixed'
myFooter.style.bottom = '0'
myFooter.style.width = '100%'
myFooter.style.fontSize = '16px'
