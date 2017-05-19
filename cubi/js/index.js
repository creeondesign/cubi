$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/Qpk4sh0BMYk" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};




 var options = [
	                 
	                {selector: '#staggered-test', offset: 70, callback: function(el) {
	                  Materialize.showStaggeredList($(el));
	                  $("#call-1").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500});
	                } },      
                      
	                {selector: '#image-test', offset: 30, callback: function(el) {
	                  Materialize.fadeInImage($(el));
	                  $("#call-2").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 100});
	                } },
                      
                      {selector: '#image-test22', offset: 20, callback: function(el) {
	                  Materialize.fadeInImage($(el));
	                  $("#call-4").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 200});
	                } },
                      {selector: '#staggered-test22', offset: 100, callback: function(el) {
	                  Materialize.showStaggeredList($(el));
	                  $("#call-3").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500});
	                } }
	              ];
	              Materialize.scrollFire(options);