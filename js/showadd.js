document.getElementById('show-add-text').addEventListener('click', function(){
   
    ShowScctionById('add-section-bolg');
});

document.getElementById('denotion-button').addEventListener('click', function(){
    
    ShowScctionById('add-money-forme');
});

document.getElementById('historyAmound').addEventListener('click', function(){
  
    ShowScctionById('add-section-history');
});

// button color chac

const historyTab = document.getElementById('historyAmound');
const donationbutton = document.getElementById('denotion-button');

historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-lime-300');

    donationbutton.classList.remove('bg-lime-300');
});

donationbutton.addEventListener('click', function(){
    donationbutton.classList.add('bg-lime-300');
    historyTab.classList.remove('bg-lime-300');
});



