---
title: Stats
script: runStats();
---
<script>
function runStats() {
	document.getElementById("bannercount").innerHTML = " - " + banners.length;
	let sidebarEntriesCount = 0;
	let sidebarExternalsCount = 0;
	let sidebarMainsCount = 0;
	let sidebarHiddenCount = 0;
	let sidebarSectionsHiddenCount = 0;
	for (let i = 0; i < entries.length; i++) {
		sidebarEntriesCount+=entries[i].entries.length;
		sidebarMainsCount+=entries[i].entries.length;
		if (entries[i].onSidebar == "false") {
			sidebarSectionsHiddenCount++
		}
		for (let a = 0; a < entries[i].entries.length; a++) {
			if (entries[i].entries[a].onSidebar == "false" || entries[i].onSidebar == "false") {
				sidebarHiddenCount++;
			}
			sidebarEntriesCount+=entries[i].entries[a].externals.length;
			sidebarExternalsCount+=entries[i].entries[a].externals.length;
			for (let c = 0; c < entries[i].entries[a].externals.length; c++) {
				if (entries[i].entries[a].externals[c].onSidebar == "false" || entries[i].onSidebar == "false") {
					sidebarHiddenCount++;
				}
			}
		}
	}
	document.getElementById("sidebarcount").innerHTML = " - " + sidebarEntriesCount + " total (" + sidebarMainsCount + " non-dropdown links, " + sidebarExternalsCount + " dropdown links) with " + sidebarHiddenCount + " hidden from sidebar (" + entries.length + " sections, with "+sidebarSectionsHiddenCount+" hidden from sidebar)";
}
</script>
# The site
<ul>
	<li>Number of random <a href="/banners">banners</a><span id="bannercount"></span></li>
	<li>Number of <a href="/sitemap">sidebar entries</a><span id="sidebarcount"></span></li>
</ul>

# Server PC specs
- File server (and other stuff) runs off a **[Beelink SER5 Mini PC](https://www.amazon.com/Beelink-SER5-5560U-500GB-Computer/dp/B0B3WYVB2D)** with 32GB of RAM
- Drives (besides internal):
	- Seagate Portable 2TB External HDD (STGX2000400)