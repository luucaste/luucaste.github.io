$(document).ready(function(){

    $('.btn-show1').on('click', function(){
      
        var passInput=$(".inputPassword1"); 
       if(passInput.attr('type')==='password')
         {
           passInput.attr('type','text');
       }else{
          passInput.attr('type','password');
       }
   })

   $('.btn-show2').on('click', function(){
    console.log('hace click')
      var passInput=$(".inputPassword2"); 
     if(passInput.attr('type')==='password')
       {
         passInput.attr('type','text');
     }else{
        passInput.attr('type','password');
     }
    })

 $('.btn-clearText').on('click', function(){
    $('.clearText').val('')
    
 })

 })
