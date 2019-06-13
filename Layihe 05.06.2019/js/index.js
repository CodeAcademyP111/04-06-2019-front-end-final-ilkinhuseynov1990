$(document).ready(function () {

    var positioncountertop = Math.floor($("#counter").position()) - 29;

    
    //scale image on load

    $("#slider img").css({
        "transform": "scale(1.1,1.1)",
        "transition": "5s"
    });

    //box shadow onload

    if (window.scrollY != 0) {
        $("#header").css({
            "box-shadow": "0 10px 20px #ccc"
        })

    } else {
        $("#header").css({
            "box-shadow": "0 0 0"
        })
    }

    // slider show and hide

    $(window).scroll(function () {

        var top = 300;

        var changelogo = $("#header").data("src");

        var img = $("#header img");

        if (window.scrollY == 0) {

            $("#header").slideDown("1000");

            img.attr("src", "img/logo-dark.png");

            $("#header a").css({
                "color": "#fff",

            }); // buna bax link caralmalidir

            $("#header").css({
                "box-shadow": "0 0 0"
            })


        } else {

            if (window.scrollY < top) {

                $("#header").hide();

                img.attr("src", `img/${changelogo}`);

                $("#header a").css("color", "black");

                $("#header").css({
                    "box-shadow": "0 10px 20px #ccc"
                })

                $("#header").css({
                    "position": "fixed",
                    "width": "100%",
                    "background-color": ""
                })


            } else {
                $("#header").slideDown("fast");

                img.attr("src", `img/${changelogo}`);

                $("#header").css({
                    "position": "fixed",
                    "width": "100%",
                    "background-color": "#fff"
                })

            }
        }


        // counter count begin;


        if (positioncountertop == window.scrollY) {
            number($(".number1"), 15);

            number($(".number2"), 15);

            numberthound($(".number"), 20);

            numberthound($(".number3"), 10);
        
        }

    })



    function number(elm, interval) {

        var datato = elm.data("to");
        var datafrom = elm.data("from");

        var inter = setInterval(function () {

            if (datafrom < datato) {

                datafrom += 1;

                elm.text(datafrom);

            } else {

                clearInterval(inter);
            }

        }, interval)

    }


    function numberthound(elm, interval) {

        var datato = elm.data("to");
        var datafrom = elm.data("from");

        var inter = setInterval(function () {

            if (datafrom < datato) {

                datafrom += 20;

                elm.text(datafrom);

            } else {

                clearInterval(inter);
            }

        }, interval)

    }



    $("#left").click(function () {

        var slide = $(".slider-content").children(".anim");

        if (slide.next().length != 0) {

            slide.animate({ "margin-right": "0" });

            slide.animate({ "margin-left": "-=1140px" }, 2000);

            slide.next().animate({ "margin-left": "0" }, 2000)

            slide.next().addClass("anim");

            slide.removeClass("anim");

        }

    })


    $("#right").click(function () {

        var slide = $(".slider-content").children(".anim");

        if (slide.prev().length != 0) {


            slide.animate({ "margin-right": "0" });

            slide.animate({ "margin-left": "+=1140px" }, 2000);

            slide.prev().animate({ "margin-left": "+=1140" }, 2000)

            slide.prev().addClass("anim");

            slide.removeClass("anim");
        }

    })



    // toggle menu;

   



})