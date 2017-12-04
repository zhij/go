window.onload = function(){
	//canvas init
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	//canvas dimensions
	var W = 250;
	var H = 400;
	canvas.width = W;
	canvas.height = H;

	//
	var colorArray = [
	    [255, 255, 255],
	    [255, 0, 0],
	    [0, 255, 0],
	    [0, 0, 255],
	    [145, 145, 145]
	];


	//generate random rbg color based on component limits from colorArray
	function color() {
	    return {
	        r: Math.floor(Math.random() * colorArray[0][0]),
	        g: Math.floor(Math.random() * colorArray[0][1]),
	        b: Math.floor(Math.random() * colorArray[0][2]),
	    }
	}

	function static() {
	    // create new canvas image data based on same width/height
	    var imageData = ctx.createImageData(W, H),
	        //get how many values we should need for a canvas of W width and H height
	        n = imageData.data.length,
	        //will hold all pixel data of our canvas [r,g,b,a,r,g,b,a,...] wow
	        components = [],
	        tmpComponent;

	    for (var i = 0; i < n; i += 4) {
	        tmpComponent = color();
	        //
	        components.push(tmpComponent.r, tmpComponent.g, tmpComponent.b, 255);
	    }

	    components = Uint8ClampedArray.from(components);
	    imageData.data.set(components);
	    ctx.putImageData(imageData, 0, 0);

	    requestAnimationFrame(static);
	}

	//change order of colorArray
	function colorSwap(e) {
	    e.preventDefault();
	    tmp = colorArray.pop();
	    colorArray.unshift(tmp);
	}

	function init() {
	    //add event listeners
	    // var staticToggle = document.getElementById('static-toggle');
	    // staticToggle.addEventListener('click', colorSwap, false);
	    //start animation
	    requestAnimationFrame(static);
	}

	init();
}