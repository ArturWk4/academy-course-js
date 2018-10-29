// EXTRA №1.1
// in loop I'm set 'currentDate.getDay() - 1' because
// in the UK week starts from Sunday and not from Monday
// and method getDay() returned day of UK week

function prepareWeek(week) {
    let str = '';
    let currentDate = new Date();
    for (let i = 0; i < week.length; ++i) {
        if (i === currentDate.getDay() - 1) {
            str += '<i>' + week[i] + '</i>';
        } else if (week[i] === 'Sa' || week[i] === 'Su') {
            str += '<strong>' + week[i] + '</strong>';
        } else {
            str += week[i];
        }
        str += '<br>'
    }
    return str;
}

let week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

document.getElementById('root').innerHTML = prepareWeek(week);

// EXTRA №2.2

function getFirstDigit(value) {
    return value.toString()[0];
}

function completeTask(arr) {
    for (let i of arr) {
        if (getFirstDigit(i) == 3 || getFirstDigit(i) == 7) {
            console.log(i);
        }
    }
}

let arr = [923, 711, 320, 31, 17, 201, 700];

completeTask(arr);




