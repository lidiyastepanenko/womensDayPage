$(document).ready(function() {
    $('.front').on('click', function(){
        $('.tree').removeClass('active');
        $(this).closest('.tree').addClass('active');
        $('.greeting').css('display', 'none');
        $('.greeting_text1').css('display', 'block');
        $('.first_img').removeClass('emersionBlock');
        // var audio = new Audio();
        // [].forEach.call(document.querySelectorAll('.tree'), function(item) {
        //     item.addEventListener('click', function() {
        //         audio.pause();
        //         var path = './sounds/';
        //         var audioName = item.querySelector('source').getAttribute('src');
        //         var fullPath = path+audioName;
        //         audio.src = fullPath;
        //         audio.loop = true;
        //         audio.play();
        //     });
        //
        // });
        if($(this).hasClass('one') == true){
            $(this).removeClass('one');
            $(this).addClass('two');
            $('.greeting').css('display', 'none');
            $('.greeting_text2').css('display', 'block');
            return;
        };
        // if($(this).hasClass('two') == true){
        //     $(this).removeClass('two');
        //     $(this).addClass('three');
        //     $('.greeting').css('display', 'none');
        //     $('.greeting_text3').css('display', 'block');
        //     return;
        // };
        // if($(this).hasClass('three') == true){
        //     $(this).removeClass('three');
        //     $('.greeting').css('display', 'none');
        //     $('.greeting_text4').css('display', 'block');
        //     return;
        // };
        // if($(this).hasClass('one') == false){
        //     $(this).addClass('one');
        //     return;
        // };
    });
    $(".back").on("click", function(e){
        $('.tree').removeClass('active');
        $(this).closest('.tree').remove('active');
    });

});
window.onload = function() {
    $('.first_img').addClass('emersionBlock');
    $('.showImg').addClass('emersionFlow');
    $('.page').addClass('openPostcard');
    $('.pomada_bottom').addClass('paintingPostcard');
    $('.painting').addClass('paintingPostcardTop');
};