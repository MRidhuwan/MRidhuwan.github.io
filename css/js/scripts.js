const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".navbar__links a");
let loader = document.querySelector(".loader");

const backtoTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


///hero
const triangleBase = 48;

const container = document.querySelector(".triangle-container");

const instantiateGrid = () => {
  container.innerHTML = "";
  const width = document.body.clientWidth;
  const heigth = document.body.clientHeight * 0.4;

  let columns = Math.ceil(width / (triangleBase * 2)) + 1;
  let rows = Math.ceil((heigth / triangleBase) * 1.733);
  container.style.setProperty("--columns", columns);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      createTriangleSet(x + y * columns, x, y);
    }
  }
};

const createTriangleSet = (index, column, row) => {
  let el = document.createElement("div");
  el.classList.add("triangle-set");
  if (row % 2 == 0) el.classList.add("triangle-set--offset");

  container.appendChild(el);
};

window.onresize = () => {
  instantiateGrid();
};

instantiateGrid();
const glow = document.body.querySelector("#glow");

window.addEventListener("mousemove", (event) => {
  glow.style.top = event.pageY + "px";
  glow.style.left = event.pageX + "px";
});

// Burger link
burger.addEventListener("click", () => {
  navLinks.classList.toggle("navbar__links__active");
  burger.classList.toggle("navbar__links__active");
  body.classList.toggle("hidden");
});

window.onscroll = () => {
  // Highlight link
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      // console.log(current);
    }

    navLink.forEach((li) => {
      li.classList.remove("navbar__highlight");
      if (li.classList.contains(current)) {
        li.classList.add("navbar__highlight");
      }
      // console.log(li);
    });
  });

  // Shadow navbar
  if (window.pageYOffset > 10) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
};

// Lightbox
lightbox.option({
  maxHeight: 400,
});

// Jquery
$(".owl-carousel").owlCarousel({
  margin: 23,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    300: {
      items: 2,
      nav: false,
      autoWidth: true,
    },
    900: {
      items: 5,
      nav: false,
      autoWidth: true,
    },
  },
});
