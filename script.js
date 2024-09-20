
let page=document.getElementById("page")
let page1=document.getElementById("page1")
let newpage=document.getElementById("page3")
let close1=document.getElementById("page2")
let prev1=document.getElementById("prev")
let next1=document.getElementById("next")


page.addEventListener("click",()=>{
    // location.assign("https://github.com/Prasadk1226")
    window.open("https://github.com/Prasadk1226")
})

page1.addEventListener("click",()=>{
    // location.assign("https://prasadk1226.github.io/BOM-in-JavaScript/")
    window.open("https://prasadk1226.github.io/BOM-in-JavaScript/")

})
newpage.addEventListener("click",()=>{
    location.assign("https://prasadk1226.github.io/BOM-in-JavaScript/")

})

close1.addEventListener("click",()=>{
    window.close()
})
prev1.addEventListener("click",()=>{
    history.back()
})

next1.addEventListener("click",()=>{
    history.forward()

})








// window.alert("Hey Hi! Welcome.")
// let wish= window.prompt("Enter your Name")
// window.confirm("Is your  name "+wish+"?")
// alert("Hello "+wish+"!")


