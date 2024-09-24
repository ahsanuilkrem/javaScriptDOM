
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getTextFieldValueById(id){
    const textvalue = document.getElementById(id).innerText;
    const textNumbe = parseFloat(textvalue);
    return textNumbe;
};
function ShowScctionById(id){
    document.getElementById('add-money-forme').classList.add('hidden');
    document.getElementById('add-section-bolg').classList.add('hidden');
    document.getElementById('add-section-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
    
};