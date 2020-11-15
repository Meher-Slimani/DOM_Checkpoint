var plusElement = document.querySelectorAll('.btn.btn-success');
var minusElement = document.querySelectorAll('.btn.btn-danger');
var input = document.querySelectorAll('.input-number');
var totalProduct = document.querySelectorAll('.tot');
var priceProduct = document.querySelectorAll('.product-price');
var totalPrice = document.getElementById('general-total');
var row = document.querySelectorAll('.item-row');
var removeItem = document.querySelectorAll('.btn.btn-outline-danger');
var favorit = document.querySelectorAll('.btn.btn-outline-success')


function decrement () {
    for (let i=0; i < minusElement.length; i++) {

        minusElement[i].addEventListener('click', () => {
            
            if (input[i].value > 0 && input[i].value < 99) {
    
                input[i].value -= 1;
                
                totalProduct[i].innerHTML = (parseInt(input[i].value) * parseInt(priceProduct[i].textContent)).toString();
                
                totalPrice.textContent = (parseInt(totalPrice.textContent) - parseInt(priceProduct[i].textContent)).toString();
            }
        })
    }
}

function increment () {
    for (let j=0; j < plusElement.length; j++) {

        plusElement[j].addEventListener('click', () => {
    
            if (input[j].value >= 0 && input[j].value < 99) {
    
                input[j].value  = (parseInt(input[j].value) + 1).toString();
    
                totalProduct[j].innerHTML = (parseInt(input[j].value) * parseInt(priceProduct[j].textContent)).toString();
    
                    totalPrice.textContent = (parseInt(totalPrice.textContent) + parseInt(priceProduct[j].textContent)).toString();
                
            }
        })
    }
}


function removeItems () {
    for(let k=0; k < removeItem.length; k++) {

        removeItem[k].addEventListener('click', () => {
            
            row[k].remove();
    
            totalPrice.textContent = (parseInt(totalPrice.textContent) - parseInt(totalProduct[k].textContent)).toString();
            
            })
    }
}

function like () {
    for (let h=0; h < favorit.length; h++) {

        favorit[h].addEventListener('click', () => {
    
            row[h].style.background = 'white';
    
            if (row[h].style.background === 'white') {
    
                row[h].style.background = '#d1ffdb';
    
            }
            else if (row[h].style.background === '#d1ffdb') {
    
                row[h].style.background = 'white';
    
            }
            
            
        })
    }
}

increment();
decrement();
removeItems();
like();