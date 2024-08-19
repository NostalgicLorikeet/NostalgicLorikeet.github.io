//Constants and vars
const notifHolder = document.getElementById("notifHolder");
const styleChooser = document.getElementById("styleDropdown");
const stylesheets = [];
const stylenames = [];
const styletag = document.getElementById("styletag");
let styleCurrent = styletag.getAttribute("href").replace(".css","").replace("/assets/styles/","");
const toolbar = document.getElementById("toolbar");
const toolbarAddButton = document.getElementById("toolbarAdd");
const toolbarDeleteButton = document.getElementById("toolbarDelete");
let toolbarFloat = "true";
let timeout = window.setTimeout("",0);
const logo = document.getElementById("logoHolder");
const sidesplash = document.getElementById("rightbarText");
const activities = [];
const sidelinks = [];
const rightbarLinkList = document.getElementById("rightbarLinkList");
let activityPosition = 0;
const activityList = document.getElementById("activityList");
let activityLoaded = 0;
const guestbook = document.getElementById("guestbookLinkA");
const cone = document.getElementById("cone");
let coneClick = 0.01;

//Do these after page load
function pageload() {
	styletag.setAttribute("href","/assets/styles/default.css");
	/*if (typeof localStorage.styleCurrent == 'undefined') {
		localStorage.setItem('styleCurrent', styleCurrent);
	} else {
		styleChange(localStorage.getItem('styleCurrent'));
	}
	stylesList();
	styleListBuild();
	let styleLoading = document.getElementById("styleLoading");
	if (typeof localStorage.toolbarFloat == 'undefined') {
		localStorage.setItem('toolbarFloat', "true");
	} else {
		toolbarFloat = localStorage.getItem('toolbarFloat');
	}
	if (toolbarFloat != "true") {
		toolbar.setAttribute("class","toolbarNoFloat");
		toolbarAddButton.style.display = "grid";
	} else {
		toolbarDeleteButton.style.display = "grid";
	}*/
	if (window.location.href == "https://www.hitscan.org/" || window.location.href == "https://www.hitscan.org/index.html/" || window.location.href == "https://www.hitscan.org/index/") {
		logo.setAttribute("id","logoHolderHome");
	} else {
		logo.setAttribute("id","logoHolder");
	}
	reloadWeights();
	bannerSelector().set();
	/*function reloadSideSplash() {
		sidesplash.innerHTML = sidesplashList[Math.floor(Math.random() * (sidesplashList.length))]+"...";
	}
	reloadSideSplash();*/
	loadNavLinks();
	for (let i = 0; i < sidelinks.length; i++) {
		let img = document.createElement("img");
		img.setAttribute("src",sidelinks[i].icon);
		let a = document.createElement("a");
		a.setAttribute("href",sidelinks[i].url);
		a.appendChild(img);
		rightbarLinkList.appendChild(a);
	}
	//loadActivity();
	buildSidebar();
	
	function getColor() {
		return Math.floor(Math.random() * 255);
	}
	
	function guestbookLinkChangeColor() {
		r = getColor();
		g = getColor();
		b = getColor();
		rB = r + 25;
		gB = g + 25;
		bB = b + 25;
		guestbook.setAttribute("style","color: rgb(" + r + "," + g + "," + b + "); text-shadow: 0px 0px 8px rgb(" + rB +","+gB+"," + bB +");");
		window.setTimeout(guestbookLinkChangeColor, 2000);
	}
	guestbookLinkChangeColor();
	
	/*function coneFlicker() {
		op = (Math.random() * 0.2) + 0.6;
		cone.setAttribute("style","filter: opacity(" + op + ");");
		window.setTimeout(coneFlicker, 80);
	}
	coneFlicker();*/
}

//Toolbar copy and notif remove
function copy() {
	navigator.clipboard.writeText(window.location.href);
	notif("Copied!");
}

function removeNotif() {
	if (document.body.contains(document.getElementById("copyNotif"))) {
		let notifNode = document.getElementById("copyNotif");
		notifNode.remove();
	}
}

function notif(text) {
	removeNotif();
	console.log("Toolbar notif: " + text);
	let notifNode = document.createElement("span");
	notifNode.appendChild(document.createTextNode(text));
	notifNode.setAttribute("id","copyNotif");
	notifHolder.appendChild(notifNode);
	
	window.clearTimeout(timeout);
	timeout = window.setTimeout(removeNotif, 1500);
}

//Style settings functions
function styleOpen() {
	if (styleChooser.style.display === "none") {
		styleChooser.style.display = "flex";
	  } else {
		styleChooser.style.display = "none";
	}
}

function styleButton(sheet) {
	notif("Set style to " + stylenames[stylesheets.indexOf(sheet)]);
	styleChange(sheet);
}

function styleAdd(name, sheet) {
	stylesheets.push(sheet);
	stylenames.push(name);
}

function styleChange(sheet) {
	//styletag.setAttribute("href", "/assets/styles/" + sheet + ".css");
	styletag.setAttribute("href","/assets/styles/default.css");
	styleCurrent = sheet;
	styleListBuild();
	//localStorage.setItem('styleCurrent', sheet);
	localStorage.setItem('styleCurrent', "default");
}

function styleListBuild() {
	while (styleChooser.firstChild) {
		styleChooser.removeChild(styleChooser.lastChild);
	}
	for (let i = 0; i < stylesheets.length; i++) {
		if (styleCurrent != stylesheets[i]) {
			let styleLink = document.createElement("a");
			styleLink.setAttribute("href","javascript:void(0);");
			let onclickcode = "styleButton(" + "\"" + stylesheets[i] + "\")";
			styleLink.setAttribute("onclick", onclickcode);
			let styleDiv = document.createElement("div");
			styleDiv.setAttribute("class","dropdownOption");
			styleLink.appendChild(styleDiv);
			styleDropdown.appendChild(styleLink);

			let styleLabel = document.createTextNode(stylenames[i]);
			styleDiv.appendChild(styleLabel);
		} else {
			let styleLink = document.createElement("p");
			styleLink.setAttribute("href","javascript:void(0);");
			let styleDiv = document.createElement("div");
			styleDiv.setAttribute("class","dropdownOptionSelected");
			styleLink.appendChild(styleDiv);
			styleDropdown.appendChild(styleLink);
			let styleLabel = document.createTextNode(stylenames[i]);
			styleDiv.appendChild(styleLabel);
		}
	}
}

/*Toolbar follow toggle
function followToggle() {
	if (toolbarFloat == "true") {
		toolbarFloat = "false";
		localStorage.setItem('toolbarFloat', "false");
		toolbar.setAttribute("class","toolbarNoFloat");
		toolbarAddButton.style.display = "grid";
		toolbarDeleteButton.style.display = "none";
		notif("Toolbar will no longer follow page");
	} else {
		toolbarFloat = "true";
		localStorage.setItem('toolbarFloat', "true");
		toolbar.setAttribute("class","toolbarFloat");
		toolbarDeleteButton.style.display = "grid";
		toolbarAddButton.style.display = "none";
		notif("Toolbar will now follow page");
	}
}*/

//activity
class post {
	constructor (year,month,day,content) {
		this.year = year;
		this.month = month;
		this.day = day;
		this.content = content;
		activities.push(this);
	}
}

//buttons copy
function copyButton(number) {
	navigator.clipboard.writeText("<a href=\"https://hitscan.org\"><img src=\"https://hitscan.org/assets/buttons/button" + number + ".png\"></a>");
}

class sidelink {
	constructor(url) {
		this.url = url;
		this.icon = this.url.substring(this.url.indexOf('//')+2);
		this.icon = this.icon.substring(0,this.icon.indexOf('/'));
		this.icon = "https://" + this.icon + "/favicon.ico";
		sidelinks.push(this);
	}
	
	setIcon(icon) {
		if (icon.indexOf("https://") == -1) {
			this.icon = "/assets/favicons/" + icon;
		} else {
			this.icon = icon;
		}
	}
}

	function loadActivity() {
		activityLoaded = 0;
		activityList.innerHTML = '';
		for (let i = activityPosition*4; i < (activityPosition*4) + 4; i++) {
			activityLoaded++;
			let section = document.createElement("div");
			section.setAttribute("class","activitySection");
			let date = document.createElement("div");
			date.setAttribute("class","activityDate");
			let month;
			switch(activities[i].month) {
				case 1:
					month = "January";
					break;
				case 2:
					month = "February";
					break;
				case 3:
					month = "March";
					break;
				case 4:
					month = "April";
					break;
				case 5:
					month = "May";
					break;
				case 6:
					month = "June";
					break;
				case 7:
					month = "July";
					break;
				case 8:
					month = "August";
					break;
				case 9:
					month = "September";
					break;
				case 10:
					month = "October";
					break;
				case 11:
					month = "November";
					break;
				case 12:
					month = "December";
					break;
			}
			dateText = document.createTextNode(month + " " + activities[i].day + ", " + activities[i].year);
			date.appendChild(dateText);
			section.appendChild(date);
			let content = document.createElement("div");
			content.setAttribute("class","activityContent");
			content.innerHTML = activities[i].content;
			section.appendChild(content);
			activityList.appendChild(section);
		}
	}
