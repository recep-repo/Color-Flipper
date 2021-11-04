const button = document.getElementById("button");
const color = document.querySelector(".color")

button.addEventListener('click', () => {
    let rgb_1 = Math.floor(Math.random() * 256);
    let rgb_2 = Math.floor(Math.random() * 256);
    let rgb_3 = Math.floor(Math.random() * 256);
    let newColor = `${rgb_1}, ${rgb_2}, ${rgb_3}`;
    color.innerHTML = `rgb(${newColor})`;
    document.body.style.backgroundColor = `rgb(${newColor})`;


} )