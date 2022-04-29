"use strict"

var button = document.getElementsByClassName('butt')

var sc = document.getElementById('screen');


for(var i = 0 ; i < button.length ; i++){

      button[i].addEventListener('click' , display);


     function display(){

      var value = this.getAttribute('value');

      if( value == '='){
        
           sc.innerHTML = eval(sc.innerText);

       }
    
     else{
           
            if( value == 'AC'){

                 sc.innerHTML = "";
            }
         
            else{
            
                  sc.innerHTML += value;
         }  
      }


}
}


    