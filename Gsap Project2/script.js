function scl() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
function txtt() {
  var txt = document.querySelectorAll("#page2 h1");
  txt.forEach(function (elem) {
    var countxt = "";
    var txtcont = elem.textContent;
    var splittx = txtcont.split("");
    splittx.forEach(function (e) {
      countxt += `<span>${e}</span>`;
    });
    elem.innerHTML = countxt;
    console.log(elem);
  });
}
function Anima() {
  gsap.to("#page2 h1 span", {
    color: "rgb(170, 170, 241)",
    stagger: 5,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      start: "top 70%",
      end: "top -20%",
      scrub: 2,
    },
  });
}
scl();
txtt();
Anima();
