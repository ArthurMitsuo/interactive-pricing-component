# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

(/design/my-screenshot(desktop version).jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Started out coding the HTML part and CSS, got way too much time trying to solve the range slide but could understand a lot of things about it. I did the JavaScript part, such as getting the range values and changing the price and pageviews, the slider as well, implementing the 25% discount when checked. For the rangeslider Chrome edition I used an array with the same length as the values of the range slider, matching in percentages for the "progress" bar, when changed, through JavaScript I changed the linear-gradient value of the background for the track.
Another tricky part was making it responsive, maybe there are some things there aren't aligned, but I did my best.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Raw JavaScript

### What I learned

Learned even more about CSS Grid, as well as learned the basics and maybe more about the inputs (range and checkbox slider). Did discover the way the checkbox slider is made and how to customize the range slider, which was really tricky to me.

To see how you can add code snippets, see below:

```css
#slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 2.4rem;
  width: 2.4rem;
  align-self: center;

  background-image: url("/images/icon-slider.svg");
  background-repeat: no-repeat;
  background-position: center;

  background-color: hsl(174, 86%, 45%);
  border-radius: 25px;

  z-index: 5;
}
```

```js
function changeBackground() {
  let valuesPercentage = [0, 25, 50, 75, 100];
  for (let i = 0; i < valuesPercentage.length; i++) {
    if (parseInt(rangeSlider.value) == i) {
      rangeSlider.style.background =
        "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
        valuesPercentage[i] +
        "%, hsl(224, 65%, 95%) " +
        valuesPercentage[i] +
        "%, hsl(224, 65%, 95%) 100%";
    }
  }
}
```

### Continued development

I want to get better at responsive Design as well as begin to code as Mobile First type of programmer. I already knew that, but realized how tricky it can get to make it mobile size when starting as a desktop version.

Want to use more the inputs as well, I'm pretty proud of learning more about them, if you couldn't notice hahaha.

### Useful resources

- [StackOverflow](https://stackoverflow.com/questions/51491118/css-how-to-get-screen-height-in-css/51494657) - This helped me to use calc to calculate, sorta, the monitor height.
- [CSS tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - This is an amazing article which helped me with display:grid.
- [StackOverflow](https://stackoverflow.com/questions/22179094/list-style-image-svg-smaller-in-webkit/22179481) - This helped me on placing the check icon ::before the li.
- [W3 Schools](https://www.w3schools.com/howto/howto_js_rangeslider.asp) - It helped me in making an input type="range".
- [CSS tricks, Geeks for Geeks](https://css-tricks.com/sliding-nightmare-understanding-range-input/, https://www.geeksforgeeks.org/creating-range-slider-html-using-javascript/) - This helped me understand better the input range and the possibilities within it.
- [CodePen](https://codepen.io/duplich/pen/qjYQEZ?editors=1010) - This helped me stylize the input range in Chrome.

## Author

- Linkedin - [Arthur Mitsuo](https://www.linkedin.com/in/arthur-mitsuo-matsuzaka-ferreira-11b174116/)
- GitHub - [ArthurMitsuo](https://github.com/ArthurMitsuo)
- Frontend Mentor - [@ArthurMitsuo](https://www.frontendmentor.io/profile/ArthurMitsuo)
- Twitter - [@arthur_mitsuo](https://twitter.com/arthur_mitsuo)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
