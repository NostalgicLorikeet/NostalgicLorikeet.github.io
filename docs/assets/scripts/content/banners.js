/*
new banner(image)
new bannerClickable(image,url)
new bannerSplash(image,url,text,color)
new bannerUnclickableSplash(image,text,color)

setImage()
setURL()
setDropShadow()
setGradient()
setWeight()
setSplash()
setSplashColor()
copy()
last
prev
*/

new bannerUnclickableSplash("missing_texture.png","Aaaaah! My textures... they're gone...","255,255,255");
last.setWeight(0.1);
new banner("missing_texture.png");
new bannerClickable("guestbook_01.png","https://nostalgiclorikeet.atabook.org");
new bannerClickable("guestbook_01_shifted.png","https://nostalgiclorikeet.atabook.org");
last.setWeight(0.25);
new banner("geometry_01.png");
new banner("geometry_02.png");
new banner("geometry_03.png");
new banner("cones_01.png");
last.setGradient("255,255,255");
new banner("cones_02.png");
last.setGradient("255,255,255");
new banner("cones_03.png");
last.setGradient("255,255,255");