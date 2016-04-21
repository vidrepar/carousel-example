$("#carousel-ul li:first").before($("#carousel-ul li:last"));

$("#right-scroll img").click(function(){

    var itemWidth = $("#carousel-ul li").outerWidth() + 10;
    var leftIndent = parseInt($("#carousel-ul").css('left')) - itemWidth;

    $("#carousel-ul").animate({'left' : leftIndent}, {queue:false, duration:500}, function(){

       $("#carousel-ul li:last").after($("#carousel-ul li:first"));
        $("#carousel-ul").css({'left' : '-210px'});

    });

});

$("#left-scroll img").click(function(){

    var itemWidth = $("#carousel-ul li").outerWidth() + 10;
    var leftIndent = parseInt($("#carousel-ul").css('left')) + itemWidth;

    $("#carousel-ul").animate({'left' : leftIndent}, {queue:false, duration:500}, function(){

        $("#carousel-ul li:first").after($("#carousel-ul li:last"));
        $("#carousel-ul").css({'left' : '-210px'});

    });

});
