(function (lego, $, undefined) {
	lego.init = function () {
		createLegoBricks(100);
		initClickHandlers();
	};

	function initClickHandlers(){
		$('.lego-brick').click(function () {
			$(this).zIndex = 2;
		}).after(function () {
			$(this).zIndex = 1;
		})
	}

	function createLegoBricks(amount)
	{
		// Create 100 lego bricks with different positions, rotations etc. 
		var container = $('#lego-bricks-initial-container');


		var brick = '<div class="lego-brick" style=""/>';
		var brickCollectionString = '';

		for (var i = 0; i < amount; i++) {
			var rotation = Math.floor(Math.random() * 360);
			var xCoord = Math.floor(Math.random() * (container.width() / 100 * 90));
			var yCoord = Math.floor(Math.random() * (container.height() / 100 * 90));

			var colour = Math.floor(Math.random() * 4);
			var colourClass = '';

			switch (colour) {
				case 0: colourClass = 'red-brick';
					break;
				case 1: colourClass = 'yellow-brick';
					break;
				case 2: colourClass = 'green-brick';
					break;
				case 3: colourClass = 'blue-brick';
					break;
			}

			var rotationString = 'transform:rotate(' + rotation + 'deg); -ms-transform:rotate(' + rotation + 'deg); -webkit-transform:rotate(' + rotation + 'deg)';

			var brick = '<div class="lego-brick ' + colourClass + '" style="' + rotationString + ';left:' + xCoord + 'px;top:' + yCoord + 'px;"><div class="circle"/><div class="circle"/><div class="circle"/><div class="circle"/><div class="circle"/><div class="circle"/><div class="circle"/><div class="circle"/></div>';

			brickCollectionString += brick;
		}
		// make them draggable
		container.append(brickCollectionString);
		var doc = $(document);

		$('.lego-brick')
		.draggable({ containment: [0, 33, doc.width() - 160, doc.height() - 120] })
		.touch({
			animate: false,
			sticky: false,
			dragx: true,
			dragy: true,
			rotate: false,
			resort: true,
			scale: false
		});
	}

}(window.lego = window.lego || {}, jQuery));
