function main(){
	$('.projects').hide();
  $('.button').on('click',function(){
    //$(this).next().toggle();
    $(this).next().slideToggle(200)
  });
}

$(document).ready(main);
