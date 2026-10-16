// const balloon = document.getElementById("balloon");
// let height = 200;
// let width = 200;
// const colors = ["red", "green", "blue"];
// let colorIndex = 0;

// const changeColor = () => {
//     colorIndex = (colorIndex + 1) % colors.length;
//     balloon.style.backgroundColor = colors[colorIndex];
// };

// const grownBalloon = () => {
//     if (height >= 420 || width >= 420) {
//         height = 200;
//         width = 200;
//         colorIndex = 0;
//     } else {
//         height += 10;
//         width += 10;
//         changeColor();
//     }

//     balloon.style.height = `${height}px`;
//     balloon.style.width = `${width}px`;
//     balloon.style.backgroundColor = colors[colorIndex];
// };

// const shrinkBalloon = () => {
//     if (height <= 200 || width <= 200) {
//         height = 200;
//         width = 200;
//         colorIndex = 0;
//     } else {
//         height = Math.max(200, height - 5);
//         width = Math.max(200, width - 5);
//         changeColor(-1);
//         balloon.style.height = `${height}px`;
//         balloon.style.width = `${width}px`;
//         balloon.style.backgroundColor = colors[colorIndex];
//     }
// };

// balloon.style.backgroundColor = colors[colorIndex];
// balloon.addEventListener("click", grownBalloon);
// balloon.addEventListener("mouseleave", shrinkBalloon);

$(function () {
    const balloon = $("#balloon");
    const colors = ["red", "green", "blue"];
    let size = 200;
    let colorIndex = 0;

    function updateBalloon() {
        balloon.css({
            width: `${size}px`,
            height: `${size}px`,
            "background-color": colors[colorIndex],
        });
    }

    balloon.on("click", function () {
        size += 10;
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        updateBalloon();
    });

    balloon.on("mouseleave", function () {
        size = Math.max(200, size - 5);
        colorIndex = (colorIndex + colors.length - 1) % colors.length;
        updateBalloon();
    });
});