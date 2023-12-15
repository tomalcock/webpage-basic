function checkmob() {
    const mobileNumber = document.getElementById('mobile-number')
    const correctNum = /^07[072568][0-9]{7}$/;
    const check = correctNum.test(mobileNumber.value);
    
     if(!check) alert("Mobile Number is Incorrect");
}

function createBill() {

    let items = [];
    let option1 = document.getElementById('item1')
    let option2 = document.getElementById('item2')
    let option3 = document.getElementById('item3')
    let option4 = document.getElementById('item4')
    let q1 = document.getElementById('q1')
    let q2 = document.getElementById('q2')
    let q3 = document.getElementById('q3')
    let q4 = document.getElementById('q4')
    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')
    let p3 = document.getElementById('p3')
    let p4 = document.getElementById('p4')
    let total = document.getElementById('total-bill')

    const prices = {
        'Chicken pizza' : 8.5,
        'Vegetable Pizza' : 7.5,
        'BBQ Pizza' : 9.5,
        'Tom Lacy-Alcock Special Pizza' : 10,
        'nothing' : 0,
        'Water' : 2
    }

    option1.value.length > 1 ? items.push(option1.value)  : items.push('nothing');
    option2.value.length > 1 ? items.push(option2.value) : items.push('nothing');
    option3.value.length > 1 ? items.push(option3.value) : items.push('nothing');
    option4.value.length > 1 ? items.push(option4.value) : items.push('nothing');

    p1.value = prices[items[0]]*q1.value;
    p2.value = prices[items[1]]*q2.value;
    p3.value = prices[items[2]]*q3.value;
    p4.value = prices[items[3]]*q4.value;
    

    total.innerText = "Total Bill : " + `${+p1.value + +p2.value + +p3.value + +p4.value}`


    
}