
    function inputToNum (inputId){
        const catchId = document.getElementById(inputId);
        const stringInputToNum=parseFloat(catchId.value);
        if(stringInputToNum >0){
        catchId.value = '';
        return stringInputToNum;
        }
        else{
            alert('enter a valid number!!');
            return parseFloat('0');
            
        }
    }

    function tagToNum(inputId,inputNo){
        const catchId = document.getElementById(inputId);
        const stringTagToNum= parseFloat(catchId.innerText);
        catchId.innerText = '';
        catchId.innerText=stringTagToNum+inputNo;
            
    }

    document.getElementById('deposite_btn').addEventListener('click',function(){
     const catch_return_input = inputToNum('deposite_field');
     tagToNum('update_deposite',catch_return_input);
     tagToNum('update_balance',catch_return_input);
    })

    document.getElementById('withdraw_btn').addEventListener('click',function(){
    const withdraw_inpit_return= inputToNum('withdraw_field');
    tagToNum('update_withdraw',withdraw_inpit_return);
    tagToNum('update_balance',-withdraw_inpit_return);
    })