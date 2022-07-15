var a = true;
	function show(sidebar){
if(a==true){
		sidebar.style.left = "0px";
		sidebar.style.transition  = "left 0.6s linear";
		a=false;
	}
	else{
		sidebar.style.left = "-260px";
		sidebar.style.transition  = "left 0.6s linear";
		a=true;
	}
	}



$(document).ready(function(){

	$(".sidebar-menu > li.have-children a").on("click", function(i){
		  i.preventDefault();
    if( ! $(this).parent().hasClass("active") ){
      $(".sidebar-menu li ul").slideUp();
      $(this).next().slideToggle();
      $(".sidebar-menu li").removeClass("active");
      $(this).parent().addClass("active");
    }
    else{
      $(this).next().slideToggle();
      $(".sidebar-menu li").removeClass("active");
        }
    });
});