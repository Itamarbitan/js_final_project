const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
let newColor;
let colorName;
let newHex;



btn1.addEventListener('click' , function() {   

    createColor()

    document.getElementById('first').style.backgroundColor = newColor

    setTimeout(function(){
        colorName = prompt("give the color a name");
        document.getElementById('firstLabel').innerText = colorName;
    }, 1000);

    setTimeout(saveFavColor, 1000);

})



btn2.addEventListener('click' , function() {

    createColor()

    document.getElementById('second').style.backgroundColor = newColor

    setTimeout(function(){
        colorName = prompt("give the color a name");
        document.getElementById('secondLabel').innerText = colorName;
    }, 1000);

    setTimeout(saveFavColor, 1000);
})

function createColor() {   
    let x = prompt('insert a number between 0-256');
    let y = prompt('insert a number between 0-256');
    let z = prompt('insert a number between 0-256');
    if (!0<=x>=256|| !0<=y>=256 || !0<=z>=256) {
        alert("You must pick a number between 0-256");
        return
    }

    rgbToHex(+x , +y , +z)

    return newColor = `rgb(${x} , ${y}, ${z})`
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
      newHex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      return newHex

  }


  
function saveFavColor(){

    if (confirm('Do you want to save the color to your favorites?')){
        document.getElementById('favs').innerHTML += `<div  class="favcontainer">
        <div id="${colorName}" class="sq"> </div>
        <p id="${newColor}">${colorName} , ${newColor} , ${newHex} </p>
        </div>`;
        document.getElementById(`${newColor}`).style.color = `${newColor}`;
        document.getElementById(`${colorName}`).style.backgroundColor = `${newColor}`;
    }

}

  


