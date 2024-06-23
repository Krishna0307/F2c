const readmorebtns = document.querySelectorAll(".ourfeaturesContent button");
readmorebtns.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(para.classList.contains('line-clamp')){
            para.classList.remove('line-clamp')
        }else{
            para.classList.add('line-clamp')
        }
    })

 })



 // -------------banner button starts--------------
let bannerbtn = document.querySelector('.banner .bannerContent button')
bannerbtn.addEventListener("click",function(){
    window.location = "./products.html"
})

// let bannerbtn1 = document.querySelector('.banner .bannerbutton1 ')
// bannerbtn1.addEventListener("click",function(){
//     window.location = "./products.html"
// })



// --------------------banner button ends here--------------











// ----------------------search page-----------
let search = document.querySelector('#Search-btn')
let search1 = document.querySelector(".search-form")
search.addEventListener("click",()=>{
    search1.classList.toggle("hide")
})
// ----------search page ends------------
let searchbtn = document.querySelectorAll("#iconsbtn")
searchbtn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        window.location = "./cartpage.html"
    })
})
// ----------------cart button------------
// let cartbutton = document.querySelector("#cartbtn");
// cartbutton.addEventListener("click",function(){
//     window.location = "./blogs.html"
// })
let checkbtn = document.querySelector("#checkoutbtn");
checkbtn.addEventListener("click",function(){
    window.location = "./blogs.html"
})