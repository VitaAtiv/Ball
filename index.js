const refs = {
  box: document.querySelector(".box"),
  ball: document.querySelector(".ball"),
};

refs.box.addEventListener("click", onClickEvent);

function onClickEvent(event) {
  const boxFields = event.currentTarget.getBoundingClientRect();

  let x = event.clientX - boxFields.left - 10 - refs.ball.clientWidth / 2;
  let y = event.clientY - boxFields.top - 10 - refs.ball.clientHeight / 2;

  const maxLeftCors = boxFields.right - boxFields.left - 20 - refs.ball.clientWidth;
  const maxBottomCors = boxFields.bottom - boxFields.top - 20 - refs.ball.clientHeight;

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


