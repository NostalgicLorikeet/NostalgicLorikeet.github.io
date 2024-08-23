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
new bannerSplash("guestbook_01.png","https://nostalgiclorikeet.atabook.org","Leave a message at the guestbook",white);
last.setGradient(white);
new bannerSplash("guestbook_01_shifted.png","https://nostalgiclorikeet.atabook.org","Leave a message at the guestbook",white);
last.setGradient(white);
last.setWeight(0.25);
new bannerSplash("geometry_01.png","/3d","Check out my awesome geometry...",white);
new bannerSplash("geometry_02.png","/3d","Check out my awesome geometry...",white);
new bannerSplash("geometry_03.png","/3d","Check out my awesome geometry...",white);
new banner("cones_01.png");
last.setGradient(white);
new banner("cones_02.png");
last.setGradient(white);
new banner("cones_03.png");
last.setGradient(white);
new banner("stars.png");
last.setGradient(white);
new banner("clay_cat.png");
new bannerUnclickableSplash("","Aaaaah! My textures... they're ACTUALLY gone...","255,255,255");
last.setWeight(0.05);
new bannerClickable("cat_clay_speech.png","/art/3d");
last.setWeight(0.5);