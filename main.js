// let imgs = document.querySelectorAll(".switch img");
// let changImg = document.querySelector(".con img");
// let chanBack = document.querySelector(".container");
// console.log(changImg);
// imgs.forEach((ele) => {
//   ele.onclick = function () {
//     if (this.id === "w") {
//       changImg.src = `${this.src}`;
//       chanBack.style.background = "linear-gradient(to left, #000, #222)";
//     } else if (this.id === "b") {
//       changImg.src = `${this.src}`;
//       chanBack.style.background =
//         "linear-gradient(to left, rgb(0, 0, 0), rgb(85, 85, 85))";
//     } else if (this.id === "f") {
//       changImg.src = `${this.src}`;
//       chanBack.style.background =
//         "linear-gradient(to right, rgb(68, 68, 68), rgb(172, 141, 114))";
//     }
//   };
// });

let imgs = document.querySelectorAll(".switch img");
let changImg = document.querySelector(".con img");
let chanBack = document.querySelector(".container");

if (localStorage.color) {
  imgs.forEach((ele) => {
    if (ele.id === `${localStorage.getItem("color")}`) {
      changImg.src = `${ele.src}`;
    }
  });
  if (localStorage.color === "w") {
    chanBack.style.background = "linear-gradient(to left, #000, #222)";
  } else if (localStorage.color === "b") {
    chanBack.style.background =
      "linear-gradient(to left, rgb(0, 0, 0), rgb(85, 85, 85))";
  } else if (localStorage.color === "f") {
    chanBack.style.background =
      "linear-gradient(to right, rgb(68, 68, 68), rgb(172, 141, 114))";
  }
}

imgs.forEach((ele) => {
  ele.onclick = function () {
    if (this.id === "w") {
      window.localStorage.setItem("color", this.id);
      changImg.src = `${this.src}`;
      chanBack.style.background = "linear-gradient(to left, #000, #222)";
    } else if (this.id === "b") {
      window.localStorage.setItem("color", this.id);
      changImg.src = `${this.src}`;
      chanBack.style.background =
        "linear-gradient(to left, rgb(0, 0, 0), rgb(85, 85, 85))";
    } else if (this.id === "f") {
      window.localStorage.setItem("color", this.id);
      changImg.src = `${this.src}`;
      chanBack.style.background =
        "linear-gradient(to right, rgb(68, 68, 68), rgb(172, 141, 114))";
    }
  };
});
