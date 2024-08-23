//default styles
document.querySelector(':root').style.setProperty('--image-bg', "url(\"\")");
document.querySelector(':root').style.setProperty('--splashTextColorPrimary', "rgba(255,255,255,1)");
document.querySelector(':root').style.setProperty('--splashTextColorSecondary', "rgba(0,0,0,1)");
document.querySelector(':root').style.setProperty('--logoDropShadowSetting', "rgba(0,0,0,1)");
document.querySelector(':root').style.setProperty('--gradientSetting', "0,0,0");

//banner list 
const banners = [];
const styleTag = document.getElementById("bannerSelector");
let totalWeights = 0;
let currentBanner;
let last;
let prev;
let black = "0,0,0";
let white = "255,255,255";

/*color code class
class colorRGB {
	constructor(r,g,b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}
	
	//this has to be getRGB instead of toString because doing toString causes the invert function's code to be shoved into the style sheet
	getRGB() {
		return this.r + "," + this.g + "," + this.b;
	}
	
	getInvertedRGB() {
		let iR = 255-this.r;
		let iG = 255-this.g;
		let iB = 255-this.b;
		return iR + "," + iG + "," + iB;
	}
}

//default colors
colorBlack = new colorRGB(0,0,0);
colorWhite = new colorRGB(255,255,255);*/

//banner classes
//image, url, splashtext, splash color, drop shadow color, gradient color, weight
class banner {
	constructor(image) {
		this.image = image;
		this.dropShadowColor = "0,0,0";
		this.gradientColor = "0,0,0";
		this.weight = 1;
		banners.push(this);
		if (banners.length > 1) {
			prev = last;
		}
		last = this;
	}

	setImage(image) {
		this.image = image;
	}
	
	setDropShadow(color) {
		this.dropShadowColor = color;
	}
	
	setGradient(color) {
		this.gradientColor = color;
	}
	
	setWeight(weight) {
		this.weight = weight;
	}
	
	docChange() {
		document.getElementById("splashHolderWordless").style.display = "none";
		document.getElementById("splashHolder").style.display = "none";
		document.getElementById("splashSpan").style.display = "none";	
	}
	
	set() {
		currentBanner = this;
		this.docChange();
		styleDefault();
		document.querySelector(':root').style.setProperty('--image-bg', "url(\"/assets/banners/" + this.image + "\")");
		document.querySelector(':root').style.setProperty('--logoDropShadowSetting', "rgba(" + this.dropShadowColor + ",1)");
		document.querySelector(':root').style.setProperty('--gradientSetting', this.gradientColor);
	}
	
	disable() {
		this.weight = 0;
	}
	
	copy(target) {
		this.image = target.image;
		this.url = target.url;
		this.dropShadowColor = target.dropShadowColor;
		this.gradientColor = target.gradientColor;
		this.weight = target.weight;
		this.splashText = target.splashText;
		this.splashColor = target.splashColor;
	}
}

class bannerClickable extends banner {
	constructor(image,url) {
		super(image);
		this.url = "";
		this.url = url;
	}
	
	setURL(url) {
		this.url;
	}

	docChange() {
		document.getElementById("splashHolderWordless").style.display = "grid";
		document.getElementById("splashSpan").style.display = "grid";
		document.getElementById("splashHolder").style.display = "none";
		document.getElementById("splashLinkWordless").setAttribute("href",this.url);
	}
	
	set() {
		super.set();
	}
}

class bannerSplash extends bannerClickable {
	constructor(image,url,text,color) {
		super(image,url);
		this.splashText = "Missing text.";
		this.splashText = text;
		this.splashColor = "255,255,255";
		this.splashColor = color;
	}
	
	setSplash(text) {
		this.splashText = text;
	}
	
	setSplashColor(color) {
		this.splashColor = color;
	}
	
	docChange() {
		document.getElementById("splashHolderWordless").style.display = "none";
		document.getElementById("splashHolder").style.display = "grid";
		//document.getElementById("splashLink").setAttribute("href",this.url);
		document.getElementById("splashHolder").innerHTML =  '<a href=\"'+this.url+'\" id="splashLink">' + this.splashText + '</a>';
		document.getElementById("splashSpan").style.display = "none";	
	}
	
	set() {
		super.set();
		document.querySelector(':root').style.setProperty('--splashTextColorPrimary', "rgba(" + this.splashColor + ",1)");
		document.querySelector(':root').style.setProperty('--splashTextColorSecondary', "rgba(" + invert(this.splashColor) + ",1)");
	}
}

class bannerUnclickableSplash extends bannerSplash {
	constructor(image,text,color) {
		super(image,"",text,color);
	}
	
	docChange() {
		document.getElementById("splashHolderWordless").style.display = "none";
		document.getElementById("splashHolder").style.display = "grid";
		document.getElementById("splashHolder").innerHTML = this.splashText;
		document.getElementById("splashSpan").style.display = "none";	
		//document.getElementById("splashLink").setAttribute("href","");
	}
	
	set() {
		super.set()
	}
}

//functions that actually modify the webpage
function styleDefault() {
	styleTag.innerHTML = ':root { --image-bg: url(\"\"); --splashTextColorPrimary: rgba(255,255,255,1); --splashTextColorSecondary: rgba(0,0,0,1); --logoDropShadowSetting: rgba(0,0,0,1); --gradientSetting: 255,255,255; }\";'
}

//other functions
function reloadWeights() {
	totalWeights = 0;
	for (let i = 0; i < banners.length; i++) {
		totalWeights+=banners[i].weight;
	}
}

function bannerSelector() {
	let selectionPoint = (Math.random() * totalWeights);
	let weightPoint = 0;
	
	for (let i = 0; i < banners.length; i++) {
		weightPoint += banners[i].weight;
		if (weightPoint >= selectionPoint) {
			//i will shoot you in the face
			return banners[i];
		}
	}
}

function invert(color) {
	this.r = 255 - parseInt(color.substring(0, color.indexOf(',')));
	this.g = 255 - parseInt(color.substring(color.indexOf(',')+1).substring(0, color.substring(color.indexOf(',')+1).indexOf(',')));
	this.b = 255 - parseInt(color.substring(color.indexOf(',')+1).substring(color.substring(color.indexOf(',')+1).indexOf(',') + 1));
	return this.r+","+this.g+","+this.b;
}