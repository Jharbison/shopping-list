$(document).ready(function() {
	var right = '<div class="right"><ul> <li><i class="fa fa-trash"></i></li> <li><i class="fa fa-check"></i></li> </ul></div>';
        
        //Adds items to list
	$('form').submit(function(e) {
		e.preventDefault();
		var item = $('input').val();
		$('#list').append('<div class="list-item"><div class="left">'+item+'</div>'+right+'</div>');
		$('input').val('');
	});
		//Clear all items on list
	$("#clear").click(function() {
		$('.list-item').html("");
		$('input:text').val("");
	});
		//Reorder items in list
	$("#reorder").click(function() {	
		$('#list').sortable({axis: "y"});
		$(this).toggleClass("down");
		if (!$(this).hasClass("down")) {
			$('#list').sortable("disable");
		}
	});
		//Delete single item from list
	$(document).on('click', '.fa-trash', function() {
		$(this).parent().parent().parent().parent().remove();
	});
		//Check item on list
	$(document).on('click', '.fa-check', function() {
		$(this).toggleClass("finish");
	});

	$(document).on('click', '.fa-edit', function () {
		console.log("Yep")
	});

});