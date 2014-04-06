mkCustomNumberInputs
====================

A simple jquery plugin to create custom input  fields of type number

#Code:

##HTML Structure:

```
<div class="custom-number"> <!-- custom number input wrap -->
  <a href="#sub" class="btn-number sub">-</a> <!-- substraction  button-->
  <input type="number" id="amount" min="0" max="20" value="3"> <!-- custom number input -->
  <a href="#add" class="btn-number add">+</a> <!-- addition button -->
</div>
```


##jQuery plugin source:

```
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

```

##Initailize:

```
$('.custom-number').mkCustomNumberInputs(); // initialize 
```

#Properties:

##addButton 

Default is '.add'

##subButton

default is '.sub'

