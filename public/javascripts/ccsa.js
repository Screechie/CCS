   function toggleCss (id,att){
       console.log($(id).css(atte);
	if ($(id).css(att) == 1)
	    {
		$(id).css(att , '1');
		console.log('auto');
	    }
	else{
	    $(id).css(att, '-1');
	    console.log('not auto');
	}
        $('.pservice').addClass('activetab');
   }


$(document).ready(function(){
	$('#tser1').click(toggleCss('#tbod1','z-index'));
	$('#tser2').click(toggleCss('#tbod2','z-index'));
    });


