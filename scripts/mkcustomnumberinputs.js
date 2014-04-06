$.fn.mkCustomNumberInputs = function(options) {

	$(document).on('click', function(event) {
		event.stopPropagation();
	});


	var settings = $.extend({
		// These are the defaults.
		addButton: '.add',
		subButton: '.sub',
		input: 'input[type=number]',
	}, options );

    return this.each(function() {
		var add = $(this).find(settings.addButton);
		var sub = $(this).find(settings.subButton);
		var item = $(this).find(settings.input);
		var min = parseInt(item.attr('min'));
		var max = parseInt(item.attr('max'));
		var value = parseInt(item.attr('value'));

		$(add).on('click',  function(event) {
			event.preventDefault();
			if( value < max ) {
				value++;
				item.attr('value', value);
			}
		})

		$(sub).on('click',  function(event) {
			event.preventDefault();
			if( value > min ) {
				value--;
				item.attr('value', value);
			}
		});
    });
 
};