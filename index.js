const refs = {
  box: document.querySelector(".box"),
  ballImg: document.querySelector(".ball-img"),
};

  
  refs.box.addEventListener("click", function (event) {
    
    // const x = event.clientX - refs.box.getBoundingClientRect().left;
    // const y = event.clientY - refs.box.getBoundingClientRect().top;
      const x = event.clientX;
      const y = event.clientY;

     refs.ballImg.style.transform = `translate(${x - 30}px, ${y - 30}px)`;
  });


//   document.addEventListener("DOMContentLoaded", function () {
//     // Отримати елементи DOM
//     const box = document.querySelector(".box");
//     const ballImg = document.querySelector(".ball-img");

//     // Додати подію click на елемент .box
//     box.addEventListener("click", function (event) {
//       // Отримати координати кліку відносно .box
//       const x = event.clientX - box.getBoundingClientRect().left;
//       const y = event.clientY - box.getBoundingClientRect().top;

//       // Перемістити м'яч на нові координати
//       ballImg.style.top = y - ballImg.offsetHeight / 2 + "px";
//       ballImg.style.left = x - ballImg.offsetWidth / 2 + "px";
//     });
//   });


