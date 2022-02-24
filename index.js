//selectors 
let color = document.querySelectorAll(".color")
let watch = document.getElementById("watch")
let time = document.getElementById("time")
let feature = document.querySelectorAll(".feature")
let heart = document.querySelector(".heart")



setInterval(mytime, 1000)
function mytime(){
    let today = new Date();
    let currentTime = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
    time.innerText = currentTime
}
// event listeners

feature[0].addEventListener("click", function(){
    heart.classList.remove("show")
    heart.classList.add("hide")
    time.classList.remove("hide")
    time.classList.add("show")
    
})

feature[1].addEventListener("click", function(){
    time.classList.remove("show")
    time.classList.add("hide")
    heart.classList.add("show")
})
color[0].addEventListener("click", function(){
    watch.src = "./img/iOeUBV7.png"
})
color[1].addEventListener("click", function(){
    watch.src = "./img/PTgQlim.png"
})
color[2].addEventListener("click", function(){
    watch.src = "./img/xSIK4M8.png"
})
color[3].addEventListener("click", function(){
    watch.src = "./img/Mplj1YR.png"
})
color[4].addEventListener("click", function(){
    watch.src = "./img/Zygu7I3.png"
})
