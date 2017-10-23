const colorsArray = ['#3a82f4', '#00ff08','#ff00c3', '#ff6100', '#ff0000', '#000cFP', '#47474c', '#6ee6ed', '#3d1a3c', '#e08fb5', '#600f0f', '#ecff42', '#31079b', '#fcac00', '#124f15',  '#d64f4f', '#668462'];

export default function changeColor(){
    let num = Math.floor(Math.random() * (17 - 1) + 1);
    let newColor = colorsArray[num];
    console.log(num, newColor)
    return newColor;

}