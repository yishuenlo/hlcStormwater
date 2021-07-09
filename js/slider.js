const slider = document.querySelector('#slider');
const foregroungImg = document.querySelector(".foreground-img");


//link & assign slider value to foreground image width
slider.addEventListener('input', event =>{
    const sliderPos = event.target.value;
    console.log(event.target.value);

    foregroungImg.style.width = `${sliderPos}%`;
})
















// //select DOM element
// const imageComparisonContainers = document.querySelector(".slider-container");

// let dragging = false,
//   scrolling = false,
//   resizing = false;

// //check if the .slider-container is in the viewport
// //if yes, animate it
// // function checkPosition(container) {
// //   container.forEach(function () {
// //     var actualContainer = this;
// //     if (
// //       window.scrollY + window.innerHeight * 0.5 >
// //       offset(actualContainer).top
// //     ) {
// //       actualContainer.classList.add("is-visible");
// //     }
// //   });

// //   scrolling = false;
// // }

// function checkPosition(container) {
//     if (
//       window.scrollY + window.innerHeight * 0.5 >
//       offset(container).top
//     ) {
//       console.log("I am visible");
//       //   actualContainer.classList.add("is-visible");
//     }

//   scrolling = false;
// }

// function offset(el) {
//   var rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
// }

// checkPosition(imageComparisonContainers);
