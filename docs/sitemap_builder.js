const content = document.getElementById("content")
function navListBuilder() {
	for (let i = 0; i < entries.length; i++) {
		if (entries[i].onSitemap == "true") {
			
			let currentList = document.createElement("div");
			currentList.setAttribute("class","navList");
			
			let currentListImage = document.createElement("img");
			currentListImage.setAttribute("src","assets/navicons/" + entries[i].sitemapImage);
			currentList.appendChild(currentListImage);
			
			let currentListTitle = document.createElement("h2");
			let currentListTitleText = document.createTextNode(entries[i].name);

			currentListTitle.appendChild(currentListTitleText);
			currentList.appendChild(currentListTitle);
			
			let currentListList = document.createElement("ul");
			currentList.appendChild(currentListList);
			
			for (let a = 0; a < entries[i].entries.length; a++) {
				if (entries[i].entries[a].onSitemap == "true") {
					let currentListListEntry = document.createElement("li");
					currentListList.appendChild(currentListListEntry);
					let currentListListEntryLink = document.createElement("a");
					currentListListEntryLink.setAttribute("href",entries[i].entries[a].url);
					currentListListEntryLink.setAttribute("style","font-weight:bold;");
					let currentListListEntryLinkText = document.createTextNode(entries[i].entries[a].name);
					currentListListEntryLink.appendChild(currentListListEntryLinkText);
					currentListListEntry.appendChild(currentListListEntryLink);
					let currentListListEntryDesc = document.createElement("span");
					if (entries[i].entries[a].sitemapDescription.length > 0) {
						let currentListListEntryDescText = document.createTextNode(" - " + entries[i].entries[a].sitemapDescription);
						currentListListEntryDesc.appendChild(currentListListEntryDescText);
						currentListListEntry.appendChild(currentListListEntryDesc);
					}
				}
			content.appendChild(currentList);
			}
		}
	}
}