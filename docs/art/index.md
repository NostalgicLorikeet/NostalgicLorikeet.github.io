---
title: Art
script: putTheseInDiv();
---

A selection of some things I've drawn. The things here range from being drawn from 2022-2024.

For a more thorough set of things, check [Newgrounds](https://nostalgiclorikeet.newgrounds.com), [Twitter](https://twitter.com/Nosstalgic/media), or

For OCs/characters, see [here](/art/characters).

I use [Krita](https://krita.org/en/) to draw.

<style>
#soulja {
	border: var(--border);
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	overflow: hidden;
	img {
		width: 168px;
		height: auto;
	}
}
</style>

<div id="soulja">

</div>

<script>
let count = 40;

function putTheseInDiv() {
	for (let i = 1; i <= count; i++) {
		img = document.createElement("img");
		img.setAttribute("src","art_index/"+i+".png");
		a = document.createElement("a");
		a.setAttribute("href","art_index/"+i+".png");
		a.appendChild(img);
		document.getElementById("soulja").appendChild(a);
	}
}
</script>