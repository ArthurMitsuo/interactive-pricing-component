const toggleSwitch = document.querySelector(".checkbox");
const toggleSwitchChecked = document.querySelector(".checkbox").checked;
const rangeSlider = document.querySelector("#slider");

const pageViewsNumber = document.querySelector(".quantity-number");
const priceValue = document.querySelector(".price");
const montOrYear = document.querySelector(".month-year");

toggleSwitch.addEventListener('input', ()=>{
    console.log(toggleSwitchChecked);
})