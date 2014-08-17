/**
 * 
 */
/*
var can1 = document.getElementById("CANVAS_1");
var context1 = can1.getContext("2d");
context1.fillStyle = "ffffff";
context1.fillRect(50, 50, 360, 240);
*/
var svgMap;
//svgMap = document.getElementById("Layer_1");
//alert("svgMap"+svgMap);

//var JeJuDo = document.getElementById("JeJuDo");
//var JeJuSi_1 = document.getElementById("JeJuSi_1");

var JeJuSi = document.getElementById("JeJuSi");
//alert("JeJuSi"+JeJuSi);

function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);

    var rgb = blue | (green << 8) | (red << 16);
    
//    alert (digits[1] + '#' + rgb.toString(16));
    return digits[1] + '#' + rgb.toString(16);
};

function funcFill()
{
	var style = window.getComputedStyle(JeJuSi, null).fill;
	var color = colorToHex(style);

	if (color == "#b9b9b9") {
//		alert("grey");
		JeJuSi.style.fill = "#ffff00";
	}
	else if (color == "#ffff00"){
//		alert("yellow");
		JeJuSi.style.fill = "#b9b9b9";
	}
	else
		alert("not grey, yellow");
}
function funcUnFill()
{
	JeJuSi.style.fill = "#B9B9B9";
}

JeJuSi.onclick = funcFill();
JeJuSi.ondblclick = funcUnFill();
JeJuSi.addEventListener("click", funcFill, false);
JeJuSi.addEventListener("dblclick", funcUnFill, false);

window.onload=function(){
//	JeJuSi.style.fill = "yellow";
//	var style1 = window.getComputedStyle(JeJuSi, null);
//	alert(colorToHex(style1.fill));
	
}