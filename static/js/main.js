$(document).ready(function(){
    
    $("a").on('click', function(event) {
  
      
      if (this.hash !== "") {
        
        event.preventDefault();
  
        
        var hash = this.hash;
  
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          
          window.location.hash = hash;
        });
      } // End if
    });
    //Mensaje de evento cuando se hace clock sobre el boton submit del formulario
    $('#submit1').on('click',function(event){
        alert("Mensaje Enviado");
    });
  });
