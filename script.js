let home = document.querySelector("#home");
let cursor1 = document.querySelector("#cursor1");
let cursor2 = document.querySelector("#cursor2");
let mode = document.querySelector(".page-mode");

home.addEventListener("mousemove", (e) => {
  gsap.to(cursor1, {
    top: e.clientY,
    left: e.clientX,
    scale: 1,
  });
  gsap.to(cursor2, {
    top: e.clientY,
    left: e.clientX,
    scale: 1,
  });
});
home.addEventListener("mouseleave", (e) => {
  gsap.to(cursor1, {
    scale: 0,
  });
  gsap.to(cursor2, {
    scale: 0,
  });
});

let count = 0;

mode.addEventListener("click", () => {
  if (count == 0) {
    document.documentElement.style.setProperty("--bg-color", "#000");
    document.documentElement.style.setProperty("--text-color", "#fff");
    mode.innerHTML = `<i class='bx bxs-sun' ></i>`;

    count = 1;
  } else {
    document.documentElement.style.setProperty("--bg-color", "#fff");
    document.documentElement.style.setProperty("--text-color", "#000");
    count = 0;
    mode.innerHTML = `<i class='bx bxs-moon'></i>`;
  }
});
