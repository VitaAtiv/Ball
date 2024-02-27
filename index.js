const refs = {
  box: document.querySelector(".box"),
  ball: document.querySelector(".ball"),
};

refs.box.addEventListener("click", onClickEvent);

function onClickEvent(event) {
  const boxFields = event.currentTarget.getBoundingClientRect();

  let x = event.clientX - boxFields.left - 10 - refs.box.clientWidth / 2;
  let y = event.clientY - boxFields.top - 10 - refs.box.clientHeight / 2;

  const maxLeftCors = boxFields.right - boxFields.left - 20 - refs.box.clientWidth;
  const maxBottomCors = boxFields.bottom - boxFields.top - 20 - refs.box.clientHeight;

  console.log(boxFields);
  console.log("event.clientX", event.clientX);
  console.log("event.clientY", event.clientY);
  console.log("y", y);
  console.log("x", x);

  if (x < 0) {
    x = 0;
  } else if (x > maxLeftCors) {
    x = maxLeftCors;
  }
  if (y < 0) {
    y = 0;
  } else if (y > maxBottomCors) {
    y = maxBottomCors;
  }

  refs.ball.style.transform = `translate(${x}px, ${y}px)`;
}

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
