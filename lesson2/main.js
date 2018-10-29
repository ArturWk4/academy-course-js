let money,
    name;

function start() {
    money = prompt('Каков ваш бюджет?');
    while (isNaN(money) || money === '' || money == null) {
        money = prompt('Каков ваш бюджет?');
    }
    name = prompt('Имя вашего магазина?').toUpperCase();
}
start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
};

function addGoods() {
    for (let i = 0; i < 5; ++i) {
        let answer = prompt('Какой товар будем продавать?');
        if (typeof(answer) === 'string' && typeof(answer) != null && answer !== '') {
            mainList.shopGoods.push(answer);
        } else {
            --i;
        }
    }
}
addGoods();

function workTime(time) {
    if (time < 0 && time > 24) {
        console.log('такого не может быть!');
    } else if (time > 8 && time < 20) {
        console.log('Время работать!');
    } else if (time < 24) {
        console.log('Уже слишком поздно!')
    }
}
workTime(18);

document.getElementById('budget').innerHTML += money / 30;
console.log(mainList);