const refs = {
  box: document.querySelector(".box"),
  ballImg: document.querySelector(".ball-img"),
};

  
  refs.box.addEventListener("click", function (event) {
    
    // const x = event.clientX - refs.box.getBoundingClientRect().left;
    // const y = event.clientY - refs.box.getBoundingClientRect().top;
      const x = event.clientX;
      const y = event.clientY;
    
    refs.ballImg.style.transform = `translate(${x}px, ${y}px)`;
  });


