$(document).ready(function(){
    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
    });
    
    $("#reserveButton").click(function(){
        $('#reserveModal').modal('show');
    });
    
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else if($("#carouselButton").children("span").hasClass("fa-play")){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });

});



    // $("#carousel-pause").click(function(){
    //     $("#mycarousel").carousel('pause');
    // });
    // $("#carousel-play").click(function(){
    //     $("#mycarousel").carousel('cycle');
    // });
    // $(document).ready(function(){
    //     $('[data-toggle="tooltip"]').tooltip();
    // });