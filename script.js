
let page=document.getElementById("page")
let page1=document.getElementById("page1")
let close1=document.getAnimations("page2")
let prev=document.getAnimations("prev")
let next=document.getAnimations("next")


page.addEventListener("click",()=>{
    location.assign("https://github.com/Prasadk1226")
    // window.open("https://github.com/Prasadk1226")
})

page1.addEventListener("click",()=>{
    location.assign("https://prasadk1226.github.io/BOM-in-JavaScript/")
})

close1.addEventListener("click",()=>{
    window.close()
})
prev.addEventListener("click",()=>{
    history.back()
})

next.addEventListener("click",()=>{
    history.forward()
})








// window.alert("Hey Hi! Welcome.")
// let wish= window.prompt("Enter your Name")
// window.confirm("Is your  name "+wish+"?")
// alert("Hello "+wish+"!")


