$(document) .ready(function() {
  
  
  var g= true;
    $(".navbutton").hover(function(){
        
        if (g==true) {
            $(".navbutton").css("width", "85px");
            g=false;
        }
        else {
            $(".navbutton").css("width", "75px");
            g=true;
        }
    });  
  
  
   var gg= true;
    $(".navbutton").click(function(){
        if (gg==true) {
            $( ".nav" ).css("position", "fixed");
            $( ".nav" ).css("display", "inherit");
            
            gg=false;
        }
        else {

            $( ".nav" ).css("display", "none");

            gg=true;
            
        }   
    });
  
  
    var o= true;
    $("#termA").hover(function(){
        if (o==true) {
            
            $("#termA").html('C<a class="underline">aw</a>ffee');
            $(".underline").css("color", "#DE6E64");
            o=false;
        }
        else {
            $("#termA").html('Coffee');
            $(".underline").css("color", "#1D7FCA");
            o=true;
        }    
    });
  
  
  
     var termclick= true;
    $("#termA").click(function(){
        if (termclick==true) {
            
            $("#termA").css("top", "23%");
            $(this).unbind("mouseenter mouseleave");
            termclick=false;
        }
        else {
            $("#termA").css("top", "48%");
            
            termclick=true;
        }    
    });
  


  
  
  
       var termBclick= true;
    $(".term").click(function(){
        if (termBclick==true) {
          
          $( "#termB" ).animate({
              opacity: "1"
              }, 200);
            
            $("#termB").css("top", "64%");
            $("#termB").css("visibility", "visible");
            termBclick=false;
        }
        else {
          
          $( "#termB" ).animate({
              opacity: "0"
              }, 200);
          
            $("#termB").css("top", "40%");
            $("#termB").css("visibility", "hidden");
            
            termBclick=true;
        }    
    });
  
         var di= true;
    $(".term").click(function(){
        if (di==true) {
          
          $( ".dialect" ).animate({
              opacity: "1"
              }, 800);
      
            di=false;
        }
        else {
          
          $( ".dialect" ).animate({
              opacity: "0"
              }, 800);
          
           
            di=true;
        }    
    });
  
  
           var info= true;
    $(".term").click(function(){
        if (info==true) {
          
          $( ".infobutton" ).animate({
              opacity: "1"
              }, 300);
      
            info=false;
        }
        else {
          
          $( ".infobutton" ).animate({
              opacity: "0"
              }, 300);
          
           
            info=true;
        }    
    });
  
  

  jQuery(function( $ ) {
    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#prev";
    // RIGHT
    keymap[ 39 ] = "#next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});

         var photo= true;
    $(".termcontainer").hover(function(){
        if (photo==true) {
          
          $( ".termcontainer" ).animate({
              opacity: "1"
              }, 500);

          $( ".overlay" ).animate({
              opacity: "1"
              }, 100);

          
            photo=false;
        }
        else {
          
          // $( "#termB" ).animate({
          //     opacity: "0"
          //     }, 200);
          
            
            photo=true;
        }    
    });
  
  

  
  
}); 