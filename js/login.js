document.getElementById('sub').addEventListener('click',function(){
  const emailid =  document.getElementById('mail').value ;
  const password=document.getElementById('pass').value;
  if(emailid=='dipmollik7@gmail.com' && password=='kolakhaba'){
      window.location.href='bank.html';
  }
  else{
      document.body.style.backgroundColor='red';
  }
  
})

