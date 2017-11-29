//event pada saat di klik
/*$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');

	

	//tangkap element
	var elemenTujuan=$(tujuan);


	//pindah eleman
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50 },1250 , 'easeInOutExpo');


	e.preventDefault();
});*/
$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 });

 e.preventDefault();
});﻿