---
title: Tast
---
![image](/art/index/1.png)
*empghasis help i cat see ny keboard*

This is a test page. It may awesome or it may not idk.

# Paragraph wait no heading
Lorem ipsum. lorem siesimesifmeim gog. You’ve gone Incognito
Others who use this device won’t see your activity, so you can browse more privately. This won't change how data is collected by websites you visit and the services they use, including Google. Downloads, bookmarks and reading list items will be saved. Learn more

Chrome won’t save:
Your browsing history
Cookies and site data
Information entered in forms
Your activity might still be visible to:
Websites you visit
Your employer or school
Your internet service provider

## yet again
Lorem ipsum. lorem siesimesifmeim gog. You’ve gone Incognito
Others who use this device won’t see your activity, so you can browse more privately. This won't change how data is collected by websites you visit and the services they use, including Google. Downloads, bookmarks and reading list items will be saved. Learn more

# YOOO
I just love **bold text**.
![image](about_icon.png)
This is the website of **Nostalgic**, or **NostalgicLorikeet**, or **miles**. I can [draw](/art), [model](/art/3d), and [map](/gmod/maps).

# To-do
1. Make sidebar collapsible
2. Fix banner captions being broken and horrible
![image](/art/index/2.png)

>block quort
>>block quote
>block quart
>>block quote=;e

``
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
	}
	if (window.location.href == "https://www.hitscan.org/" || window.location.href == "https://www.hitscan.org/index.html/" || window.location.href == "https://www.hitscan.org/index/") {
		logo.setAttribute("id","logoHolderHome");
	} else {
		logo.setAttribute("id","logoHolder");
	}*/
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
		if (sidelinks[i].url.includes("discord")) {
			a.setAttribute("title","If profile doesn't load, username is \"NostalgicLorikeet\"");
		}
		a.setAttribute("href",sidelinks[i].url);
		a.appendChild(img);
		rightbarLinkList.appendChild(a);
	}
	//loadActivity();
	buildSidebar();
	
	function getColor(shade) {
		if (shade == 0) {
			return Math.floor(155 + Math.random() * 100);
		} else {
			return Math.floor(Math.random() * 100);
		}
	}
	
	function guestbookLinkChangeColor() {
		if (glowingText%2 == 0) {
			r = getColor(0);
			g = getColor(0);
			b = getColor(0);
			rB = r + 25;
			gB = g + 25;
			bB = b + 25;
			guestbook.setAttribute("style","color: rgb(" + r + "," + g + "," + b + "); text-shadow: 0px 0px 8px rgb(" + rB +","+gB+"," + bB +");");
			r = getColor(1);
			g = getColor(1);
			b = getColor(1);
			rB = r + 25;
			gB = g + 25;
			bB = b + 25;
			textworld.setAttribute("style","color: rgb(" + r + "," + g + "," + b + "); text-shadow: 0px 0px 8px rgb(" + rB +","+gB+"," + bB +");");
		} else {
			//i dont care
			r = getColor(1);
			g = getColor(1);
			b = getColor(1);
			rB = r + 25;
			gB = g + 25;
			bB = b + 25;
			guestbook.setAttribute("style","color: rgb(" + r + "," + g + "," + b + "); text-shadow: 0px 0px 8px rgb(" + rB +","+gB+"," + bB +");");
			r = getColor(0);
			g = getColor(0);
			b = getColor(0);
			rB = r + 25;
			gB = g + 25;
			bB = b + 25;
			textworld.setAttribute("style","color: rgb(" + r + "," + g + "," + b + "); text-shadow: 0px 0px 8px rgb(" + rB +","+gB+"," + bB +");");
		}
		glowingText++;
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
``

# have function
This page is mostly related to mirrors of things that I did *not* make. For archives of stuff that I did make or was involved with, check out the "Old stuff" section on the [sitemap](/sitemap).

For downloading the more complicated directories, I recommend using a program like [wget](https://www.gnu.org/software/wget/) or [HTTrack](https://www.httrack.com/).

- [Gamemaker: Studio 1.4 manual](https://files.hitscan.org/files_two/archives/gms1.4/) - Archive of the old manual from Gamemaker: Studio 1.4, taken from the program's files rather than the website. Web viewable in the "dadiospice" directory.
- [Half-Life 2 Random Map Creator](https://files.hitscan.org/files_two/archives/hl2rmcinstall.zip) - An old HL2 map generator from like 2006. I haven't been able to get it working IIRC, and although its source code was once available it appears to be lost. Original site accessible [here](https://web.archive.org/web/20061009132348/http://hl2rmc.hl2files.com).
- [Verizon FiOS Game Pack](https://files.hitscan.org/files_two/archives/Verizon%20FiOS%20Game%20Pack.iso) - A rip of a game disc from Verizon with a bunch of games on it. As far as I can tell I'm probably the only person to have ripped this and put it online.
- [Zero-G Datafiles](https://files.hitscan.org/files_two/samples/Zero-G%20Datafiles/) - Old classic discontinued set of sample discs by Zero-G. Used in a lot of songs from around the 90s-2000s, itself including a lot of uncleared/unauthorized samples.
- [X-Static Goldmine](https://files.hitscan.org/files_two/samples/X-Static%20Goldmine/) - Another old, classic, discontinued, and uncleared set of sample discs. This time a set by the company Polestar Magnetics.
- [X-Pert Media Morbid Minds](https://files.hitscan.org/files_two/samples/X-pert.Media.Morbid.Minds.WAV-ALFiSO/) - A *really* obscure sample CD. Another thing that I'm probably one of the only people hosting an archive of. Found this through a torrent with one really slow seeder I found on some random site.
- [OE Cake](https://files.hitscan.org/files_two/archives/OE-CAKE!.zip) - A 2D physics simulator from around 2008 by the company Prometech Software. Simple but with a surprising amount of depth and a bit of a cult following behind it as well.
- [Unfavorable Semicircle archive](https://files.hitscan.org/files_two/archives/Unfavorable%20Semicircle%20Archive) - Archive of videos from the mysterious Unfavorable Semicircle channel, and the various related ones.
- [morphtargets bao](https://files.hitscan.org/files_two/archives/morphtargets%20bao.rar) - An old 3D animation project for Gamemaker: Studio 1.4 that I found,
- [More Gamemaker stuff](https://files.hitscan.org/files_two/archives/gamemaker/) - More old Gamemaker stuff, usually for GMS 1.4 or older,
- [Undertale reversing](https://files.hitscan.org/files_two/archives/undertale/) - Mirror of undertale.rawr.rs (or more specifically, [tomat.dev's (actually updated) copy](https://tomat.dev/undertale/)).
- [Drawball archive](https://files.hitscan.org/files_two/archives/drawball/) - Mirror of videos of drawball recorded by HDF, whose channel has been terminated from YouTube. Also available [here](https://smaert.com/chaos).
- [Nem's Tools](https://files.hitscan.org/files_two/archives/nem's%20tools/) - Archive of Nem's Source Engine tools from nemesis.thewavelength.net.

---

exterminate

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

what