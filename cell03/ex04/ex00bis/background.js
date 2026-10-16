// const button = document.getElementById('bg-button');
// let scale = 1;

// const genColorFn = () => {
//   let randomColor = Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0');
  
//   let hexColor = `#${randomColor}`;
  
//   const bgTarget = document.getElementById('background-color');
//   if (bgTarget) {
//     bgTarget.style.backgroundColor = hexColor;
//   }
// };

// const scaleBtn = () => {
//   scale += 0.2;
//   button.style.transformOrigin = 'left top';
//   button.style.transform = `scale(${scale})`;
// };

// button.addEventListener('click', genColorFn);
// button.addEventListener('click', scaleBtn);
// button.addEventListener('click', () => {
//   console.log('Button clicked!');
// });

$(function () {
    const button = $("#bg-button");
    let scale = 1;

    button.on("click", function () {
        const color = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
        $("#background-color").css("background-color", `#${color}`);
        scale += 0.2;
        button.css({
            "transform-origin": "left top",
            transform: `scale(${scale})`,
        });
        console.log("Button clicked!");
    });
});