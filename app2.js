// let toggle = document.querySelector('#nav-toggle');
// let nav = document.querySelector('.nav-menu');
tsParticles.load("tsparticles", {
    fps_limit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: true, mode: "push" },
        onhover: {
          enable: true,
          mode: "attract",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 5 }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: {
          height: 100,
          replace_color: true,
          src: "images/github.svg",
          width: 100
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "#000000", width: 0 },
        type: "circle"
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true
  });

  // const intro = document.querySelector("#intro")


  // Intro slide in from left
  const introH = $('#intro').width();
  const parent = $('.flex').width();
  $('#intro').animate({'margin-left':(parent/2-introH/2)}, 1500);



  // intro.style.display = "none";

//  const timeout = setTimeout(myGreeting, 2000)



// window.onload(function () {
//   intro.style.display = "block";
// }
// )

//  const myGreeting = () => {
//    document.querySelector("#intro").textContent = "Hello Im";
  
//    }

//  const timeout = setTimeout(myGreeting, 3000)

const secondGreeting = () => {
    document.querySelector(".name").textContent = "Peter Ayad"
}

const timeout2 = setTimeout(secondGreeting, 2500)

const button = document.querySelector('button');

//back to top button
const topButton = document.querySelector('.bTop')
// const divButton = document.querySelector('.divButton');

// divButton.addEventListener('click', function () {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// })

// topButton.addEventListener('click', function () {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// })
// // divButton.addEventListener('click', topFunction)
//  window.onscroll = function() {
//   topFunction();
//  }

window.onscroll = function() {
    topFunction();
   }
  

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topButton = document.querySelector(".bTop");
