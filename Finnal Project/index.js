var tl = gsap.timeline();
function loadingAnimation() {
  tl.from(".line h1 ,#loader h4", {
    y: 150,
    stagger: 0.4,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    delay: 1,
  });
  tl.from(".line #counter", {
    opacity: 0,
    onStart: function () {
      var hcount = document.querySelector(".line #first");
      var count = 0;
      setInterval(function () {
        if (count < 100) {
          count++;
          hcount.innerHTML = count;
        } else {
          hcount.innerHTML = count;
        }
      }, 30);
    },
  });
  tl.to("#loader h3", {
    animationName: "h3anima",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    ease: "power4.out",
    delay: 3,
  });
}
loadingAnimation();
tl.from("#page1", {
  y: 1200,
  opacity: 0,
});
document.addEventListener("mousemove", function (post) {
  gsap.to("#crs", {
    left: post.x,
    top: post.y,
  });
});
Shery.makeMagnet("#nav3" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
