const moneyList = [100, 500, 1000];
const priceList = [500, 1000, 300];
const backEl    = document.getElementById('il_back');
const ohBackEl  = document.getElementById('oh_back');
const tenBackEl = document.getElementById('ten_back');
const buttonEl  = document.getElementById('result');
const muchEl    = document.getElementById('howMuch');

let currentMoney = 0;
let beverage=[];

backEl.addEventListener('click', () => {
    if(((currentMoney + moneyList[0])) <= 10000){
        currentMoney = currentMoney + moneyList[0];
    }
    muchEl.innerHTML = currentMoney.toString();
})

ohBackEl.addEventListener('click', () => {
    if((currentMoney + moneyList[1]) <= 10000){
        currentMoney = currentMoney + moneyList[1];
    }
    muchEl.innerHTML = currentMoney.toString();
})

tenBackEl.addEventListener('click', () => {
    if((currentMoney + moneyList[2]) <= 10000){
        currentMoney = currentMoney + moneyList[2];
    }
    muchEl.innerHTML = currentMoney.toString();
})
let flag=0;
buttonEl.addEventListener('click', () => {
//   muchEl.textContent(`${currentMoney}`)
if(flag===0)
{
    for(i=0 ; i<=currentMoney;i=i+priceList[0])
    {
        for(j=0; j<=currentMoney;j=j+priceList[1])
        {
            for(k=0; k<=currentMoney;k=k+priceList[2])
            {
                currentMoney=currentMoney-priceList[2] ;
                beverage[0]=beverage[0]+1;
            }
            currentMoney=currentMoney-priceList[1] ;
            beverage[1]=beverage[1]+1;
        }
        currentMoney=currentMoney-priceList[0] ;
        beverage[2]=beverage[2]+1;
    }
    muchEl.innerHTML = currentMoney.toString();
}
    flag = 1;
    muchEl.innerHTML = "";
})




