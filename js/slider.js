//select DOM element
const imageComparisonContainers = document.querySelectorAll(".slider-container");

let dragging = false,
  scrolling = false,
  resizing = false;

//check if the .slider-container is in the viewport
//if yes, animate it
function checkPosition(container) {
  container.each(function () {
    var actualContainer = this;
    if (
        window.scrollTop() + window.height() * 0.5 > actualContainer.offset().top
    ) {
      actualContainer.classList.add("is-visible");
    }
  });

  scrolling = false;
}
