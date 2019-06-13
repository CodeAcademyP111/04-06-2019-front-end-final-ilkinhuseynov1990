$(document).ready(function(){
    // toogle button;
    $(".button").click(function(){
         
        if(!($("#header ul.menu").hasClass("toggle"))){

            
            $("#header ul.menu").hide();
            $("#header ul.menu").addClass("toggle");

        }else{
            $("#header ul.menu").show();
            $("#header ul.menu").removeClass("toggle");
        }

    })



    $(".accardionbutton").click(function(){
        $(this).next().hide(1000); 
        
        if(!$(this).next().hasClass("stop")){

            $(this).next().addClass("stop");
            $(this).next().hide(1000);
        }else{
            $(this).next().removeClass("stop");
            $(this).next().show(1000);
        }
        

    })






})