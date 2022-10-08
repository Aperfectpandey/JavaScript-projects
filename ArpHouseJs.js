var mysong=document.getElementById("mySong");
var icon=document.getElementById("Icon");

icon.onclick=function(){    
    if(mysong.paused){
        mysong.play();
        icon.src="off.JPG";
    }
    else{
        mysong.pause();
        icon.src="on.jpg";
    }
    
}