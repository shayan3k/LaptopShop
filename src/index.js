// const background = getBackground();
// document.getElementById("background-svg").innerHTML = background;

const navbarToggler = document.querySelector(".navbar-toggler");
const bannerTitle = document.querySelector(".banner-title");

console.log(bannerTitle);

navbarToggler.addEventListener("click", () => {
  bannerTitle.classList.toggle("opacity-0");
});

function bannerAnimation() {
  const element = document.querySelectorAll("#background-svg > g > path");

  var tl = new TimelineMax({ paused: true, repeat: -1 });

  tl.to(element, 0, { strokeDashoffset: 0 })

    .to(element, 10, {
      strokeDashoffset: 50
    })
    .to(element, 10, { strokeDashoffset: 0 });

  tl.play();
}

// bannerAnimation();

function carouselInit() {
  // Get Control Elements
  let carouselControlOne = document.getElementById("carousel-control-one");
  let carouselControlTwo = document.getElementById("carousel-control-two");
  let carouselControlThree = document.getElementById("carousel-control-three");

  //Get the relative Images

  let carouselImageOne = document.getElementById("carousel-image-one");
  let carouselImageTwo = document.getElementById("carousel-image-two");
  let carouselImageThree = document.getElementById("carousel-image-three");

  carouselControlOne.addEventListener("click", () => {
    resetOpacity();
    TweenMax.to("#carousel-image-one", 1, { delay: 1, css: { opacity: 1 } });
  });

  carouselControlTwo.addEventListener("click", () => {
    resetOpacity();
    TweenMax.to("#carousel-image-two", 1, { delay: 1, css: { opacity: 1 } });
  });

  carouselControlThree.addEventListener("click", () => {
    resetOpacity();
    TweenMax.to("#carousel-image-three", 1, { delay: 1, css: { opacity: 1 } });
  });

  function resetOpacity() {
    return TweenMax.to(
      ["#carousel-image-one", "#carousel-image-two", "#carousel-image-three"],
      1,
      { css: { opacity: 0 } }
    );
  }
}
// Calling the Function to Start
carouselInit();

// ///////////////////////////////////////////////////////////////////////////////

// TweenMax.fromTo(
//   "#mynavbar",
//   1,
//   { css: { left: 100, top: 100 } },
//   { css: { left: 130, top: 130 } }
// );

// TweenMax.fromTo(
//   background,
//   4,
//   { css: { opacity: 0 } },
//   { css: { opacity: 1 } }
// );

// const background = document.querySelector("#background-svg > g > path");

// animation.to(background, 3, {
//   ease: Power2.easeOut,
//   strokeDashoffset: 62.84,
//   strokeDashArray: 12
// });
