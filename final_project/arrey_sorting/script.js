let arr = [];

const getNumber = () => {
    let inputValue = document.getElementById('text').value;
    arr.push(+inputValue);
    document.getElementById('text').value = ''
}

const sortArr = () => {
    for (let i in arr) {
        if (arr[i - 1] > arr[i]) {
            let x = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = x;
        }
        
    }
    document.getElementById('results').innerHTML += `<br> ${arr}`;
    arr = [];
    return (arr)
    
}

const randomNumber = () => {
    let rand = (Math.floor(Math.random()  * 100))
    arr.push(rand);
    console.log(arr)
    return arr;
}



let btn = document.getElementById('btn')
btn.addEventListener('click' , getNumber)

let submit = document.getElementById('submit');
submit.addEventListener('click' , sortArr)

let randNum = document.getElementById('random');
randNum.addEventListener('click' , randomNumber)


