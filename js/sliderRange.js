var slider = document.getElementById("slider");

slider.addEventListener('input', ()=>{
    slider.style.background = `linear-gradient(to right, green 0%, green ${slider.value}%, hsl(224, 65%, 95%) ${slider.value}%, hsl(224, 65%, 95%) 100%')`;

})