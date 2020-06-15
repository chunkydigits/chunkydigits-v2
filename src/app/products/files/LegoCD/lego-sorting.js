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

		var $lego = $('.lego-brick');

		var x1, x2,
		y1, y2,
		t1, t2;  // Time

		var minDistance = 40; // Minimum px distance object must be dragged to enable momentum.

		function onMouseMove(e, x) {
			var mouseEvents = $(x).data("mouseEvents");
			if (e.timeStamp - mouseEvents[mouseEvents.length - 1].timeStamp > 40) {
				mouseEvents.push(e);
				if (mouseEvents.length > 2) {
					mouseEvents.shift();
				}
			}
		}

		var onMouseUp = function () {
			$(document).unbind("mousemove mouseup");
		}

		$lego
		.draggable({
			start: function (e, ui) {
				$(this).data("mouseEvents", [e]);
				$(document)
					.mousemove(onMouseMove(e, $(this)))
					.mouseup(onMouseUp);
			},
			stop: function (e, ui) {
				$(this).stop();
				$(this).css("text-indent", 100);

				var lastE = $(this).data("mouseEvents").shift();

				x1 = lastE.pageX;
				y1 = lastE.pageY;
				t1 = lastE.timeStamp;
				x2 = e.pageX;
				y2 = e.pageY;
				t2 = e.timeStamp;

				// Deltas
				var dX = x2 - x1,
					dY = y2 - y1,
					dMs = Math.max(t2 - t1, 1);

				// Speeds
				var speedX = Math.max(Math.min(dX / dMs, 1), -1),
					speedY = Math.max(Math.min(dY / dMs, 1), -1);

				// Distance moved (Euclidean distance)
				var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

				if (distance > minDistance) {
					// Momentum
					var lastStepTime = new Date();
					$(this).animate({ textIndent: 0 }, {
						duration: Math.max(Math.abs(speedX), Math.abs(speedY)) * 2000,
						step: function (currentStep) {
							speedX *= (currentStep / 100);
							speedY *= (currentStep / 100);

							var now = new Date();
							var stepDuration = now.getTime() - lastStepTime.getTime();

							lastStepTime = now;

							var position = $(this).position();

							var newLeft = (position.left + (speedX * stepDuration / 4)),
								newTop = (position.top + (speedY * stepDuration / 4));

							$(this).css({
								left: newLeft + "px",
								top: newTop + "px"
							});
						}
					});
				}
			},
			containment: [0, 33, doc.width() - 160, doc.height() - 120]
		})
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