$(".photo").click(function() {
  let photo = $(this).attr('data-src');
  let taille = this.width + 50;
  console.log(this.width);
  $(".modal-content").css("width", taille);
  $(".modal-body").html("<img class=photoMod src=" + photo + "> </img>");
});
