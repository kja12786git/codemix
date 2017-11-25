/**
 * The Rotat-o-clock
 * by Dan Forys
 *
 * Easing functions from http://gsgd.co.uk/sandbox/jquery/easing/
 *
*/

window.onload = function(){

	context = document.getElementById('pixelCanvas').getContext('2d');
	context.textBaseline = 'middle';
	sound = true;
	tickSound = true;
	wobble = false;
	wobbleTime = 0;
	captureMouse = false;
	mouseX = 0;
	mouseY = 0;
	reset = null;
	
	
	var canvasW = window.innerWidth;

    var hoursNumbers = [];
    for (var i = 0; i <= 23; i++) { hoursNumbers.push(i) }
/*	var hoursNumbers = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 ];*/
	hours = new Face( context, hoursNumbers, 800, 50 );

	minutesNumbers = [ 00,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59 ];
	minutes = new Face( context, minutesNumbers, 670, 25 );
	minutes.fontSize = 25;
	minutes.direction = -1;

	secondsNumbers = [ 00,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
	seconds = new Face( context, secondsNumbers, 600, 15 );
	seconds.fontSize = 20;
	seconds.link = minutes;
	minutes.link = hours;

	pendulum = new Pendulum( context );

	// Set up sounds
	minutes.events[15] = function() {
		quarterAudio.play();
	}

	minutes.events[30] = function() {
		halfAudio.play();
	}

	minutes.events[45] = function() {
		threeQuarterAudio.play();
	}

	minutes.events[0] = function() {
		hourAudio.play();
	}

	// Set up current time
	currentTime = new Date();
	hours.init( currentTime.getHours() );
	minutes.init( currentTime.getMinutes() );
	seconds.init( currentTime.getSeconds() );

	tickAudio = new Audio("sound/tick.mp3");
	tockAudio = new Audio("sound/tock.mp3");
	quarterAudio = new Audio("sound/quarter.mp3");
	halfAudio = new Audio("sound/half.mp3");
	threeQuarterAudio = new Audio("sound/3quarter.mp3");
	hourAudio = new Audio("sound/hour.mp3");
	chimeAudio = new Audio("sound/chime.mp3");
	// Set up the hourly chimes
	hourAudio.addEventListener("ended", function() {
		var numChimes = hours.numberIndex;
		if (numChimes > 12) numChimes = numChimes - 12;
		if (numChimes == 0) numChimes = 12; // special case for midnight
		chimes = new Chimes(numChimes);
	}, false);

	// Event listener for the chime sound
	// every time it plays, it will wobble the numerals
	chimeAudio.addEventListener("play", function() {
		wobble = 10;
		wobbleTime = 166;
	}, false);

	// 30msec time interval for drawing the screen
	i = setInterval(function() {
		tick();
	}, 30);

	s = setInterval(function() {
		seconds.tick();
		if (sound) {
			if (tickSound) {
				tickAudio.play();
				pendulum.initialRotation = 30;
				pendulum.rotationDelta = -60;
				pendulum.frame = 1;
				pendulum.text = 'tick';
			}
			else {
				tockAudio.play();
				pendulum.initialRotation = -30;
				pendulum.rotationDelta = 60;
				pendulum.frame = 1;
				pendulum.text = 'tock';
			}
			tickSound = !tickSound;
		}
	}, 1000);

	document.getElementById('pixelCanvas').addEventListener('mousedown', function(e) {
		reset = null;
		captureMouse = true;
		mouseX = e.pageX;
		mouseY = e.pageY;
	}, true);

	document.getElementById('pixelCanvas').addEventListener('mouseup', function() {
		captureMouse = false;
	}, true);

	document.getElementById('reset').addEventListener('click', function(e) {
		reset = new Reset;
		e.preventDefault();
	}, false);

	document.getElementById('chime').addEventListener('click', function(e) {
		hourAudio.play();
		e.preventDefault();
	}, true);

	document.getElementById('pixelCanvas').addEventListener('mousemove', function(e) {
		if (captureMouse) {
			xDiff = e.pageX - mouseX;
			yDiff = e.pageY - mouseY;

			seconds.scale += xDiff * (0.002);
			minutes.scale += xDiff * (0.003);
			hours.scale += xDiff * (0.004);
			pendulum.scale += xDiff * (0.001);

			if (seconds.scale > 2) seconds.scale = 0;
			if (minutes.scale > 2) minutes.scale = 0;
			if (hours.scale > 2) hours.scale = 0;
			if (pendulum.scale > 2) pendulum.scale = 0;
			if (seconds.scale < 0) seconds.scale = 2;
			if (minutes.scale < 0) minutes.scale = 2;
			if (hours.scale < 0) hours.scale = 2;
			if (pendulum.scale < 0)  pendulum.scale = 2;

			seconds.userRotation += yDiff * (0.1);
			minutes.userRotation += yDiff * (0.2);
			hours.userRotation += yDiff * (0.3);
			pendulum.userRotation += yDiff * (0.4);
			mouseX = e.pageX;
			mouseY = e.pageY;
		}
	}, true);
};


var tick = function() {
	if (reset !== null) {
		reset.tween();
	}

	if (wobbleTime > 0) {
		wobbleTime --;
		wobble = easeOutSine((166 - wobbleTime), 10, -10, 166);
	}
	
	context.clearRect(0,0, 800, 800);
	hours.draw();
	minutes.draw();
	seconds.draw();
	pendulum.draw();
};

var Pendulum = function( context ) {
	this.context = context;
	this.rotation = 0;
	this.intialRotation = 0;
	this.rotationDelta = 0;
	this.width = 480;
	this.size = 50;
	this.radian = Math.PI / 360; //180;
	this.text = 'tick';
	this.colour = new Colour( 255, 255, 255 );
	this.frame = 0;
	this.maxFrames = 30;
	this.alpha = 0;
	this.scale = 1;
	this.userRotation = 0;
	this.draw = function() {
		if (this.frame > 0) this.animate();
		this.context.save();
		var halfWidth = Math.round( this.width / 2 );
		this.context.translate( 400  , 400);
		this.context.scale( this.scale, this.scale );
		this.context.rotate( this.radian * this.rotation );
		this.context.rotate( this.radian * this.userRotation );
		this.context.font = this.size + 'px serif';
		this.context.fillStyle = this.colour.toRgba(this.alpha);
		this.context.strokeStyle = this.colour.toRgba(this.alpha);
		// Find out how wide the text is
		// we take off half the width to keep it all nicely centred
		var textProps = this.context.measureText( this.text );
		this.context.translate(0, halfWidth);
		this.context.fillText( this.text, - Math.round(textProps.width / 2), 0);
		this.context.restore();
	}

	this.animate = function() {
		this.rotation = (this.easing(this.frame, this.initialRotation, this.rotationDelta, this.maxFrames));

		if (this.frame <= 15) this.alpha = this.easing(this.frame, 0, 1, 15);
		if (this.frame > 15) this.alpha = this.easing(this.frame, 1, -1, 30);

		if (this.frame == this.maxFrames) this.frame = 0;
		else this.frame ++;
	}

	this.easing = function( t, b, c, d ) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	}
}


// Object definitions
var Face = function( context, numbers, width, fontSize ) {
	this.rotation = 0;
	this.targetRotation = 0;
	this.rotationDiff = 0;
	this.numbers = numbers;
	this.rotation = 0;
	this.initialRotation = 0;
		this.userRotation = 0;
	this.width = width;
	this.context = null;
	this.numberIndex = 0;
	this.numberIndexPrevious = 0;
	this.targetIndex = 0;
	this.context = context;
	this.fontSize = fontSize;
	this.frame = 0;
	this.maxFrames = 30;
	this.direction = 1;
	this.link = null;
	this.numerals = [];
	this.interval = null;
	this.events = [];
	this.scale = 1;

	for ( var index = 0; index < numbers.length; index ++ ) {
		var numeral = new Numeral(numbers[index]);
		numeral.context = context;
		numeral.size = fontSize;
		this.numerals[index] = numeral;
	}


	// Get some maths out the way to make things faster later
	this.spacing = Math.round( 360 / this.numbers.length ); // No. of degrees per number to rotate
	this.radian = Math.PI / 180;
	this.halfWidth = Math.round( this.width / 2 );

	this.draw = function () {
		if (this.frame > 0) this.tween();
		this.context.save();
		var halfWidth = Math.round( this.width / 2 );
		this.context.translate( 400  , 400);
		context.scale( this.scale, this.scale );
		this.context.rotate( this.direction * this.radian * this.rotation );
		this.context.rotate( this.direction * this.radian * this.userRotation );
		for ( var i = 0; i < this.numbers.length; i ++ ) {
			this.context.save();
			this.context.rotate( this.direction * this.radian * this.spacing * i );
			this.context.translate(0, -halfWidth + this.fontSize);
			this.numerals[i].draw();
			this.context.restore();
		}
		this.context.restore();
	}

	this.tween = function() {
		this.rotation = (this.easeOutBounce(null, this.frame, this.initialRotation, -Math.round( 360 / this.numbers.length ), this.maxFrames));
		if (this.step == this.maxFrames) {
			this.frame = 0;
			if (this.rotation == 360) {
				this.rotation = 0;
				this.initialRotation = 0;
			}
			return;
		}
		this.frame ++;
	}

	this.tick = function() {
		this.initialRotation = this.rotation;
		this.numberIndexPrevious = this.numberIndex;
		this.numberIndex ++;
		if (this.numberIndex == (this.numbers.length)) {
			this.numberIndex = 0;
			if (this.link !== null) {
				// tick a linked object, eg seconds ticks minutes
				this.link.tick();
			}
		}

		// See if there is an event to execute at this 'tick'
		// e.g. playing a chime
		if (typeof this.events[this.numberIndex] != 'undefined') {
			this.events[this.numberIndex]();
		}

		// Highlight the current numeral
		this.numerals[this.numberIndexPrevious].colour.set( 100,100,100);
		this.numerals[this.numberIndexPrevious].size = this.fontSize;
		this.numerals[this.numberIndexPrevious].active = false;
		this.numerals[this.numberIndex].colour.set( 255,255,255 );
		this.numerals[this.numberIndex].size = this.fontSize + 10;
		this.numerals[this.numberIndex].active = true;
		this.frame = 1;
	}

	/**
	 * Set the initial rotation of the face
	 *
	 */
	this.init = function( index ) {
		this.rotation = -Math.round( 360 / this.numbers.length ) * index;
		this.numberIndex = index;
		this.numberIndexPrevious = index - 1;
		if (this.numberIndexPrevious == -1) this.numberIndexPrevious = this.numerals.length - 1;
		this.numerals[index].colour.set( 255, 255, 255 );
		this.numerals[index].active = true;
		

		// Fade in the other numbers
		var fadeIndex = 0;
		var that = this;
		this.interval = setInterval(function() {
			that.numerals[fadeIndex].targetColour = new Colour( 100, 100, 100 );
			fadeIndex++;
			if (fadeIndex == that.numerals.length) {
				clearInterval(that.interval);
			} 
		}, 100)
	}

	this.easeOutBounce = function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
			if (t==0) return b;if ((t/=d)==1) return b+c;if (!p) p=d*.3;
			if (a < Math.abs(c)) {a=c;var s=p/4;}
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}


}


var Numeral = function( label ) {
	this.label = label;
	this.colour = new Colour( 0, 0, 0 );
	this.size = 30;
	this.sizeTarget = 30;
	this.sizeInitial = 30;
	this.context = null;
	this.frame = 0;
	this.maxFrames = 30;
	this.targetColour = null;
	this.active = false;

	this.draw = function() {

		// Is the colour changing?
		if (this.targetColour !== null && !this.active) {
			if (this.targetColour.r > this.colour.r) this.colour.r ++;
			if (this.targetColour.r < this.colour.r) this.colour.r --;
			if (this.targetColour.g > this.colour.g) this.colour.g ++;
			if (this.targetColour.g < this.colour.g) this.colour.g --;
			if (this.targetColour.b > this.colour.b) this.colour.b ++;
			if (this.targetColour.b < this.colour.b) this.colour.b --;
			if (this.targetColour.equals( this.colour )) {
				this.targetColour = null;
			}
		}

		this.context.font = this.size + 'px serif';
		this.context.fillStyle = this.colour.toRgba(255);
		this.context.strokeStyle = this.colour.toRgba(255);
		// Find out how wide the text is
		// we take off half the width to keep it all nicely centred
		var textProps = this.context.measureText( this.label );
		//this.context.strokeText( this.label, - Math.round(textProps.width / 2), 0);
		if (wobble > 0) {
			this.context.fillText( this.label, - Math.round(textProps.width / 2), Math.round(Math.random() * wobble));
		}
		else this.context.fillText( this.label, - Math.round(textProps.width / 2), 0);
	}

}


function Colour( r, g, b ) {
	
	this.add = function( num ) {
		this.r += num;
		this.g += num;
		this.b += num;
		if (this.r > 255) r = 255;
		if (this.g > 255) g = 255;
		if (this.b > 255) b = 255;
	}

	this.toRgba = function( alpha ) {
		return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + alpha + ')';
	}

	this.set = function( r, g, b ) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	this.equals = function( colour ) {
		if ((this.r == colour.r) && (this.g == colour.g) && (this.b == colour.b)) return true;
		return false;
	}

	this.set( r, g, b );
}

function Chimes( numChimes ) {
	this.numChimes = numChimes;
	parent = this;
	chimeAudio.play();
	parent.numChimes--;
	this.interval = setInterval(function() {
		chimeAudio.pause();
		chimeAudio.currentTime = 0;
		chimeAudio.play();
		parent.numChimes--;
		if (parent.numChimes == 0) clearInterval(parent.interval);
	}, 5000)
}

function Reset() {
	this.hoursScale = hours.scale;
	this.hoursRotation = hours.userRotation;
	this.minutesScale = minutes.scale;
	this.minutesRotation = minutes.userRotation;
	this.secondsScale = seconds.scale;
	this.secondsRotation = seconds.userRotation;
	this.penScale = pendulum.scale;
	this.penRotation = pendulum.userRotation;
	this.frame = 0;
	this.maxFrame = 200;
	this.tween = function () {
		if (this.frame > this.maxFrame) return;
		hours.scale = this.easeOutBounce(this.frame, this.hoursScale, 1-this.hoursScale, this.maxFrame);
		hours.userRotation = this.easeOutElastic(this.frame, this.hoursRotation, -this.hoursRotation, this.maxFrame);
		minutes.scale = this.easeOutBounce(this.frame, this.minutesScale, 1-this.minutesScale, this.maxFrame);
		minutes.userRotation = this.easeOutElastic(this.frame, this.minutesRotation, -this.minutesRotation, this.maxFrame);
		seconds.scale = this.easeOutBounce(this.frame, this.secondsScale, 1-this.secondsScale, this.maxFrame);
		seconds.userRotation = this.easeOutElastic(this.frame, this.secondsRotation, -this.secondsRotation, this.maxFrame);
		pendulum.scale = this.easeOutBounce(this.frame, this.penScale, 1-this.penScale, this.maxFrame);
		pendulum.userRotation = this.easeOutElastic(this.frame, this.penRotation, -this.penRotation, this.maxFrame);
		this.frame++;
		
	}

	this.easeOutElastic = function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;if ((t/=d)==1) return b+c;if (!p) p=d*.3;
		if (a < Math.abs(c)) {a=c;var s=p/4;}
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}

	this.easeOutBounce = function (t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	}
}

function easeOutSine(t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
}