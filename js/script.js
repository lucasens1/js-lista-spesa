const shop = ["mela", "pera", "banane", "macinato", "pasta", "ragù"];
const btnElem = document.getElementById('send-btn');
console.log(btnElem);
const inputElem = document.getElementById('meal');   
console.log(inputElem);

const liElem = document.querySelector('.shopping');
console.log(liElem);

//Aggiungo quello che scrive lo User
btnElem.addEventListener("click", function(){
    const inputVal = inputElem.value;
    console.log(inputVal);

    shop.push(inputVal);
    console.log(shop);

})

const genElem = document.getElementById('shop-list');
let cont = 0;
genElem.addEventListener("click", function(){
    
    let i = 0;

    while(i < shop.length){
        if(cont >= 1){
            alert("stop it isn't funny");
            break;
        }else {
            let curItem = "";
            curItem = shop[i];
            console.log(curItem);
            liElem.innerHTML += `<li> ${curItem} </li>`;
            i++;
        }
        
    }
    cont++
    console.log(cont);
});
