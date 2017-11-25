$(document).ready( function() {

// IF SMALLER HEADER WAS DESIRED
/*  $(window).resize( function () {
    var target = $('div.div2.style_b')      
    var sWidth = $(window).width();
        if (sWidth > 380) {
          target.height(160);
          $('header').css("font-size", "200%")
        }
        else {
          target.height(200)
          $('header').css("font-size", "133%")
        }
    });
*/

//    $('.clockReturn').toggleClass('hide')
 
    $('div.div1').hover(function() {
    $(this).toggleClass('style_a');

    $('.clockLink').click(function(){
      $('div.div1 > p').text("For test purposes. DoubleClick to remove this.");
      });
      
    $('.clockLink').dblclick(function(){
      $('div.div1 > p').hide();
      $(this).remove();
      });
    $(this).mouseleave(function(){$(this).removeClass('style_a');}); //additional ico render flaw for hover in chrome
      });

    $('div.tints').hover(function() {
    $(this).toggleClass('tint');
      });

// General Button Onlick behaviours      
    $('button').click(function() {
    $(this).click(function() { $(this).text('Processing');$(this).effect('bounce','fast');});
    $(this).fadeTo(1, .3, function() { $(this).fadeTo(1,.9); });
    $(this).mouseleave(function(){ $(this).text('Button Text')});
    $('.clockLink').mouseleave(function(){
      $(this).text('Proceed');
    });
    $('.clockReturn').mouseleave(function(){
      $(this).text('Clock [on/off]')
    });
    });
    
// Hiding and Revealing Canvas Element      
    $('.clockLink').click(function() {
    $('.canvas').addClass('hide');
    $('.clockReturn').removeClass('hide');
      });
      
    $('.clockReturn').text('Clock [on/off]')

    $('.clockReturn').click(function() {
    $('.clockReturn').addClass('hide');
    $('.canvas').toggleClass('hide');
    });
    
//      $('.clockReturn').click(function() {  });

});