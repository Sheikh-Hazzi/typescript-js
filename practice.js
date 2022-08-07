var obj = {
    firstName: 'hamza',
    lastName: 'mujahid'
}


function printName(data) {
    console.log('my name is' , data.firstName)
}

printName(obj)


var tips = [];
var tipBill = [];

function tipCal(bill) {
    if(bill < 50) {
        let tip1 = bill * 20/100;
        let tipB1 = tip1 + bill;
        tips.push(tip1)
        tipBill.push(tipB1)
    }
    else if(bill > 50 && bill < 100) {
        let tip2 = bill * 40/100;
        let tipB2 = tip2 + bill;
        tips.push(tip2)
        tipBill.push(tipB2)
    }
    else if(bill > 100) {
        let tip3 = bill * 60/100;
        let tipB3 = tip3 + bill;
        tips.push(tip3)
        tipBill.push(tipB3)
    }
}

tipCal(30)
tipCal(60)
tipCal(120)


console.log(tips)
console.log(tipBill)
