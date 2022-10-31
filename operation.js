const moneyList = [100, 500, 1000];
const pricelist = {
    cider: 500,
    cola: 1000,
    vita: 300
}
const priceList = [500, 1000, 300];
const backEl    = document.getElementById('il_back');
const ohBackEl  = document.getElementById('oh_back');
const tenBackEl = document.getElementById('ten_back');
const buttonEl  = document.getElementById('result');
const muchEl    = document.getElementById('howMuch');

let currentMoney = 0;
let beverage=[0,0,0];

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
let isEmpty=1;
buttonEl.addEventListener('click', () => {
//   muchEl.textContent(`${currentMoney}`)
if(isEmpty===1)
{
    // for(i=0 ; i<=currentMoney;i=i+priceList[0])
    // {
    //     if(currentMoney>=0)
    //     {
    //         for(j=0; j<=currentMoney;j=j+priceList[1])
    //         {
    //             if(currentMoney>=0)
    //             {
    //                 for(k=0; k<=currentMoney;k=k+priceList[2])
    //                 {
    //                     if(currentMoney>=0)
    //                     {
    //                         currentMoney=currentMoney-priceList[2] ;
    //                         beverage[2]=beverage[2]+1;
    //                         console.log(currentMoney);
    //                     }
    //                 }
    //                 currentMoney=currentMoney-priceList[1] ;
    //                 beverage[1]=beverage[1]+1;
    //                 console.log(currentMoney);
    //             }
                
    //         }
    //         currentMoney=currentMoney-priceList[0] ;
    //         beverage[0]=beverage[0]+1;
    //         console.log(currentMoney);
    //     }
    // }
    muchEl.innerHTML = "사이다는 " + parseInt(currentMoney/pricelist.cider).toString() + "개 살 수 있어요.<br>";
    muchEl.innerHTML = muchEl.innerHTML + "콜라는 " + parseInt(currentMoney/pricelist.cola).toString()+ "개 살 수 있어요.<br>";
    muchEl.innerHTML = muchEl.innerHTML + "비타민음료는 " +parseInt(currentMoney/pricelist.vita).toString() +"개 살 수 있어요.<br>";
    isEmpty = 0;
    currentMoney=0;

}
else
{
    muchEl.innerHTML = "";
    isEmpty =1;
}
})




