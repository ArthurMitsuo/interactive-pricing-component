const toggleSwitch = document.querySelector(".checkbox");
const rangeSlider = document.querySelector("#slider");

const pageViewsNumber = document.querySelector(".quantitity-number");
const priceValue = document.querySelector("#price");
const letter = document.querySelector(".quantity-letter");

let toggle = false;

const pageViews = [10, 50, 100, 500, 1];
const valuesMonth = [8, 12, 16, 24, 36];

initial();


toggleSwitch.addEventListener("change", ()=>{
    if(toggleSwitch.checked){
        toggle = true;
        applyDiscount();
    }else{
        toggle = false;
        transformRangeValues();
    }
})

rangeSlider.addEventListener('input', ()=>{
    transformRangeValues();
    setTimeout(applyDiscount(), 10);
    
});

//initial numbers are put inside the page;
function initial(){
    pageViewsNumber.textContent = 100;
    priceValue.textContent = parseFloat(16).toFixed(2);
    letter.textContent = 'K';
}


function applyDiscount(){
    if(toggle){
        const discount = percentageDiscount(priceValue.textContent);
        priceValue.textContent = parseFloat(priceValue.textContent - discount).toFixed(2);   
    }
}
function percentageDiscount(number){
    return (number / 100) * 25;
}

//apply in the page, according to the values per pageviews given
function transformRangeValues(){

    for(let i=0; i < pageViews.length; i++){
        if(rangeSlider.value == i){
            if(i===4){
                pageViewsNumber.textContent = pageViews[i];
                priceValue.textContent = parseFloat(valuesMonth[i]).toFixed(2);
                letter.textContent = "M";
            }else{
                pageViewsNumber.textContent = pageViews[i];
                priceValue.textContent = parseFloat(valuesMonth[i]).toFixed(2);
                letter.textContent = "K";
            }
            
        }
    }
}
