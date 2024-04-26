var tm = gsap.timeline();
tm.from("#nav h3", {
  y: -100,
  duration: 1.2,
  stagger: 0.5,
  opacity: 0,
});
tm.from("#center img", {
  x: 100,
  duration: 1,
  stagger: 0.5,
  opacity: 0,
  rotate: 45,
});
tm.from("#center h2", {
  x: -200,
  duration: 2,
  stagger: 0.5,
  opacity: 0,
});
