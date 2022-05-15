
let heart = `<img  src="./image/299063_heart_icon.png" alt="heart">`
let diamond = `<img src="./image/9023428_diamond_fill_icon.png" alt="diamond">`
let spade = `<img src="./image/9023788_spade_fill_icon.png" alt="spade">`
let club = `<img src="./image/9023474_club_fill_icon.png" alt="club">`
let shapes = [heart , diamond , spade , club] 
let houseOfcards1 = [];
let houseOfcards2 = [];


function randomArray1(){
    let num;
    var arr = [];
    while (arr.length < 13) {
        num = Math.ceil((Math.random()) * 13);
        if (!arr.includes(num)) {
            arr.push(num);
        }
    }
    console.log(arr);

    for (let i = 0 ; i < shapes.length; i++) {
        for (let z = 0; z < arr.length; z++ ) {
            let newCard = {
                number : arr[z],
                photo : shapes[i]
            }
            houseOfcards1.push(newCard)

        }

    }
    
}

function randomArray2(){
    let num;
    var arr = [];
    while (arr.length < 13) {
        num = Math.ceil((Math.random()) * 13);
        if (!arr.includes(num)) {
            arr.push(num);
        }
    }
    console.log(arr);

    for (let i = 0 ; i < shapes.length; i++) {
        for (let z = 0; z < arr.length; z++ ) {
            let newCard = {
                number : arr[z],
                photo : shapes[i]
            }
            houseOfcards2.push(newCard)

        }

    }
    
}
randomArray1()
randomArray2()



let objCard1 = {};
let objCard2 = {};

function pickAcard(){
    houseOfcards1 = outOfcards(houseOfcards1 , winPot1);
    let num = Math.floor((Math.random())* (houseOfcards1.length));
    objCard1 = houseOfcards1[num];
    console.log(objCard1)
    document.getElementById('first').innerHTML = objCard1.number + houseOfcards1[num].photo;
    let index = houseOfcards1.indexOf(objCard1);
    houseOfcards1.splice(houseOfcards1[index] , 1)
    console.log(houseOfcards1.length)
    return objCard1;
}

function pickAcard2(){
    houseOfcards2 = outOfcards(houseOfcards2 , winPot2);
    let num = Math.floor((Math.random())* (houseOfcards2.length))
    objCard2 = houseOfcards2[num]
    console.log(objCard2)
    document.getElementById('second').innerHTML = objCard2.number + houseOfcards2[num].photo;
    let index = houseOfcards2.indexOf(objCard2);
    houseOfcards2.splice(houseOfcards2[index] , 1)
    setTimeout(win, 1000);
    return objCard2;
}

let pack1card1 , pack1card2 , pack1card3 , pack2card1 , pack2card2 , pack2card3;

function tie() {
    alert('its a tie ! every player will pull three card and the stronger last card will win it all');
    pack1card1 = houseOfcards1[Math.floor((Math.random())*(houseOfcards1.length))];
    let index1 = houseOfcards1.indexOf(pack1card1);
    houseOfcards1.splice(houseOfcards1[index1] , 1);
    pack1card2 = houseOfcards1[Math.floor((Math.random())*(houseOfcards1.length))];
    let index2 = houseOfcards1.indexOf(pack1card2);
    houseOfcards1.splice(houseOfcards1[index2] , 1);
    pack1card3 = houseOfcards1[Math.floor((Math.random())*(houseOfcards1.length))];
    document.getElementById('first').innerHTML = pack1card3.number + pack1card3.photo;
    let index3 = houseOfcards1.indexOf(pack1card3);
    houseOfcards1.splice(houseOfcards1[index3] , 1);
    pack2card1 = houseOfcards2[Math.floor((Math.random())*(houseOfcards2.length))];
    let index4 = houseOfcards2.indexOf(pack2card1);
    houseOfcards2.splice(houseOfcards2[index4] , 1);
    pack2card2 = houseOfcards2[Math.floor((Math.random())*(houseOfcards2.length))];
    let index5 = houseOfcards2.indexOf(pack2card2);
    houseOfcards2.splice(houseOfcards2[index5] , 1);
    pack2card3 = houseOfcards2[Math.floor((Math.random())*(houseOfcards2.length))];
    document.getElementById('second').innerHTML = pack2card3.number + pack2card3.photo;
    let index6 = houseOfcards2.indexOf(pack2card3);
    houseOfcards2.splice(houseOfcards2[index6] , 1);

    if (pack1card3.number > pack2card3.number){
        alert('player one wins');
        winPot1.push(pack1card1,pack1card2,pack1card3,pack2card1,pack2card2,pack2card3);
        return winPot1;
    }
    else if (pack2card3.number > pack1card3.number){
        alert('player two wins');
        winPot2.push(pack1card1,pack1card2,pack1card3,pack2card1,pack2card2,pack2card3);
        return winPot2;
    }
    else {
        tie()
    }

}

let winPot1 = [];
let winPot2 = [];



    function win() {
    
        if (houseOfcards1 == 0) { 
            alert ('you run out of cards , start playing with your winners pot');
            houseOfcards1 = winPot1;
            return houseOfcards1 
        }
    
        else if (houseOfcards2 == 0) { 
            alert ('you run out of cards , start playing with your winners pot');
            houseOfcards2 = winPot2;
            return houseOfcards2 
        }
        else if (objCard1['number'] > objCard2['number']){
            alert ('player 1 wins!');
            winPot1.push(objCard1, objCard2)
            return winPot1;
        }
    
        else if (objCard1['number'] < objCard2['number']){
            alert('player 2 wins!');
            winPot2.push(objCard1, objCard2)
            return winPot2;
    
        }
        else if (objCard1.number == objCard2.number){
            tie()
    
        }
    


    
    }

    function outOfcards(houseOfcards , winpot){
        if (houseOfcards == 0){
            alert ('you run out of cards , start playing with your winners pot');
            houseOfcards = winpot
            console.log(houseOfcards)
        }   
        console.log(houseOfcards)
        return houseOfcards
    }



document.getElementById('btn1').addEventListener('click' , pickAcard);
document.getElementById('btn2').addEventListener('click' , pickAcard2, win)

