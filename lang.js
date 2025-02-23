/*const lang =document.querySelector('.lang')
const btn =document.querySelector('.foosel')


btn.addEventListener('click',function(){
     lang.style.display="flex"

});*/

/*const lang=document.querySelector('.lang')
lang.style.display= "none";


function upp(){
    lang.style.display="flex";
    document.querySelector('.up').style.display ="none" ;
    document.querySelector('.down').style.display="inlne";
}

function downn(){
    lang.style.display="none";
    document.querySelector('.up').style.display ="inline"
    document.querySelector('.down').style.display="none";
}
*/
const lang = document.querySelector('.lang')
const up = document.querySelector('.up')
const down = document.querySelector('.down')


    up.addEventListener('click', function(){
        lang.style.display="flex"
    });

    down.addEventListener('click', function(){
        lang.style.display="none"
    });

/*('click', function(){
    lang.style.display="flex"
});

down.addEventListener('click', function(){
    lang.style.display="none"
})*/



  
