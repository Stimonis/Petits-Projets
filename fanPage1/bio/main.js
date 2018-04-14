$(".slider").slick();

$(document).ready(function() {
  $('.carriere').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
})

$(".movie-item").click(function() {
  let title = $(this).attr('data-title');
  let year = $(this).attr('data-year');
  let trailer = $(this).attr('data-trailer');
  let synopsis = $(this).attr('data-synopsis');
  $(".title").text(title);
  $(".year").text("year : " + year);
  $(".modal-body").html('<div class="embed-responsive embed-responsive-16by9"><<iframe width=450 height=250 src="' + trailer + '" frameborder="0" encrypted-media allowfullscreen></iframe></div>');
  $(".modal-body").append("<div class=synopsis>" + synopsis + "</div>");
});
