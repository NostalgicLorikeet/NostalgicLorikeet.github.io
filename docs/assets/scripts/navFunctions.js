const navbarLinks = [];
const navbarLinkHolder = document.getElementById("navbarLinkHolder");
const entries = [];
const sidebar = document.getElementById("leftbar");
let lastSection;
let lastEntry;

class navLink {
	constructor(title,url) {
		this.title = title;
		this.url = url;
		navbarLinks.push(this);
	}
}

function loadNavLinks() {
	for (let i = 0; i < navbarLinks.length; i++) {
		let navbarSection = document.createElement("div");
		navbarSection.setAttribute("class","navbarLink");
		let navbarSectionLink = document.createElement("a");
		navbarSectionLink.setAttribute("href",navbarLinks[i].url);
		let navbarSectionLinkTextNode = document.createTextNode(navbarLinks[i].title);
		let navbarSectionLinkSpan = document.createElement("span");
		let navbarSectionLinkSpanText = document.createTextNode(">");
		navbarSectionLinkSpan.setAttribute("style","font-size: 50%");
		navbarSectionLinkSpan.appendChild(navbarSectionLinkSpanText);
		navbarSectionLink.appendChild(navbarSectionLinkSpan);
		navbarSectionLink.appendChild(navbarSectionLinkTextNode);
		navbarSection.appendChild(navbarSectionLink);
		navbarLinkHolder.appendChild(navbarSection);
	}
}

class sbSection {
	constructor(name,sitemapImage,onSidebar,onSitemap) {
		this.name = name;
		this.sitemapImage = sitemapImage;
		this.onSidebar = onSidebar;
		this.onSitemap = onSitemap;
		this.entries = [];
		entries.push(this);
		lastSection = this;
	}
}

class sbLink {
	constructor(name,url,sitemapDescription,onSidebar,onSitemap) {
		this.name = name;
		this.url = url;
		this.sitemapDescription = sitemapDescription;
		this.onSidebar = "true";
		this.onSidebar = onSidebar;
		this.onSitemap = "true";
		this.onSitemap = onSitemap;
		if (url.indexOf("https://") == 0) {
			this.urlProcessor = new URL(this.url);
			this.altIcon = "https://" + this.urlProcessor.hostname + "/favicon.ico";
		}
		this.externals = [];
		lastEntry = this;
		lastSection.entries.push(this);
	}
}

class sbELink {
	constructor(name,url,sitemapDescription,onSidebar,onSitemap,altIcon) {
		this.name = name;
		this.url = url;
		this.sitemapDescription = sitemapDescription;
		this.onSidebar = onSidebar;
		this.onSitemap = onSitemap;
		if (url.indexOf("https://") == 0) {
			this.urlProcessor = new URL(this.url);
			this.altIcon = "https://" + this.urlProcessor.hostname + "/favicon.ico";
		}
		lastEntry.externals.push(this);
	}
}

function buildSidebar() {
	for (let i = 0; i < entries.length; i++) {
		if (entries[i].onSidebar == "true") {
			let currentSectionHeading = document.createElement("div");
			currentSectionHeading.setAttribute("class","sidebarHeading");
			let currentSectionHeadingLink = document.createElement("a");
			currentSectionHeadingLink.setAttribute("href","javascript:void(0);");
			currentSectionHeadingLink.appendChild(document.createTextNode(entries[i].name));
			currentSectionHeading.appendChild(currentSectionHeadingLink);
			sidebar.appendChild(currentSectionHeading);
			let currentSection = document.createElement("div");
			currentSection.setAttribute("class","sidebarSection");
			sidebar.appendChild(currentSection);
			for (let a = 0; a < entries[i].entries.length; a++) {
				if (entries[i].entries[a].onSidebar == "true") {
					let currentLinkTile = document.createElement("div");
					let currentLink = document.createElement("a");
					if (entries[i].entries[a].url.indexOf("https://") != 0) {
						currentLinkTile.setAttribute("class","sidebarTile");
						currentLink.setAttribute("href","/" + entries[i].entries[a].url);
					} else {
						currentLinkTile.setAttribute("class","sidebarTileIcon");
						let currentLinkIcon = document.createElement("img");
						currentLinkIcon.setAttribute("src",entries[i].entries[a].altIcon);
						currentLink.appendChild(currentLinkIcon);
						currentLink.setAttribute("href",entries[i].entries[a].url);
					}
					compareLink = "https://www.hitscan.org/" + entries[i].entries[a].url;
					if (window.location.href == compareLink || window.location.href == compareLink + "/") {
						currentLinkTile.setAttribute("id","sidebarTileCurrent");
					}
					currentLink.appendChild(document.createTextNode(entries[i].entries[a].name));
					currentLinkTile.appendChild(currentLink);
					currentSection.appendChild(currentLinkTile);
					if (entries[i].entries[a].externals.length > 0) {
						let currentLinkTileExternalList = document.createElement("div");
						currentLinkTileExternalList.setAttribute("class","sidebarTileOtherLinks");
						currentLinkTile.appendChild(currentLinkTileExternalList);
						for (let b = 0; b < entries[i].entries[a].externals.length; b++) {
							if (entries[i].entries[a].externals[b].onSidebar == "true") {
								let currentExternalLinkTile = document.createElement("div");
								currentExternalLinkTile.setAttribute("class","sidebarTileIcon");
								let currentExternalLinkImage = document.createElement("img");
								currentExternalLinkImage.setAttribute("src",entries[i].entries[a].externals[b].altIcon);
								let currentExternalLinkA = document.createElement("a");
								currentExternalLinkA.setAttribute("href","/" + entries[i].entries[a].externals[b].url);
								currentExternalLinkTile.appendChild(currentExternalLinkImage);
								currentExternalLinkTile.appendChild(currentExternalLinkA);
								let currentExternalLinkAText = document.createTextNode(entries[i].entries[a].externals[b].name);
								currentExternalLinkA.appendChild(currentExternalLinkAText);
								currentLinkTileExternalList.appendChild(currentExternalLinkTile);
							}
						}
					}
				}
			}
		}
	}
}