let car=document.querySelector("#car")
a=1
document.addEventListener("scroll", ()=>{
  gsap.to(car, {
    transform:"translate(20%,0)"
    
  })})
