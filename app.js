

const sidebar=document.getElementById('sidebar')
sidebar.style.left= "-250px";

function opensidebar(){
    sidebar.style.left="0";
    document.querySelector('.open-btn').style.display ="none"
    document.querySelector('.close-btn').style.display="inline";
}

function closesidebar(){
    sidebar.style.left="-250px";
    document.querySelector('.open-btn').style.display ="inline"
    document.querySelector('.close-btn').style.display="none";
}



function scrollt(){
    var left =document.querySelector('.slideshow-container');
    left.scrollBy(-350, 0)
}

function scrollr(){
    var right=document.querySelector('.slideshow-container');
    right.scrollBy(350,0)
}

function scrolltop(){
    var left =document.querySelector('.slideshow-container');
    left.scrollBy(-350, 0)
}

function scrollrr(){
    var right=document.querySelector('.slideshow-container');
    right.scrollBy(350,0)
}

function scrolltop1(){
    var left =document.querySelector('.slideshow-container1');
    left.scrollBy(-350, 0)
}

function scrollrr2(){
    var right=document.querySelector('.slideshow-container1');
    right.scrollBy(350,0)
}

function scrollto(){
    var left =document.querySelector('.slideshow-containerr');
    left.scrollBy(-350, 0)
}

function scrollro(){
    var right=document.querySelector('.slideshow-containerr');
    right.scrollBy(350,0)
}







   