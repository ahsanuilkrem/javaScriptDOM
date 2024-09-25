document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
const addmoney = getInputFieldValueById('amount-case');

    
if(isNaN(addmoney)){
    alert('Failed to add money');
    return
}
if(addmoney <= 0){
    alert('failed to add money');
    return
}

if(addmoney !== 'number'){
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
     const newBalance = balanceNumber + addmoney;
     document.getElementById('account-balance').innerText = newBalance; 

    //  const p = document.createElement('p');
    //  p.innerText = `${addmoney} Taka is Donated for famine-2024 at Feni Bangladesh  `;

    //  document.getElementById('add-section-history').appendChild(p);

    // const time = document.createElement('p');
    //   time.innerText = `${new Date(). toString()} `;

    //   document.getElementById('add-section-history').appendChild(time);

    const historyItem = document.createElement('div');
       historyItem.className = 'bg-white p-3 rounded-md  w-1/2'
       
       historyItem.innerHTML = `
       
       <p class = 'text-xl font-normal'>${addmoney} Taka is Donated for famine-2024 at Feni Bangladesh </p>
       <p>${new Date(). toString() }</p> `;

       const historyContainer = document.getElementById('add-section-history');
       historyContainer.insertBefore(historyItem, historyContainer.firstChild);       
    
}
else{
    alert('falied to add money')
}
});


document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const rejavMoney = getTextFieldValueById('total-amount');
  
    if(rejavMoney !== 'number'){
        const inputMoney = getInputFieldValueById('amount-case');
        const newMoney = rejavMoney - inputMoney;
        document.getElementById('total-amount').innerText = newMoney;

    }
    else{
        alert('falied to add money');
    }
});





  


