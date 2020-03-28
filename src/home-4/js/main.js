var right = document.getElementById('right');
var left = document.getElementById('left');
var slider = document.getElementById('slider');
var imgli = document.getElementsByClassName('slide');
var dot = document.getElementById('navs');
var liwidth,nextTimer,lastTimer,timer,nextTimer2;
var ko = false;

console.log(dot.children[0])
right.onclick = function(){
   clearInterval(nextTimer);
   clearInterval(timer);
   ko = true;
   liwidth = 0;
   nextTimer = setInterval(nextImg,10);
   changeColor(dot.children[imgli[0].getAttribute('index')]);
}
function nextImg(){
    slider.style.left = '-'+liwidth+'px';
    liwidth+=10;
    if(liwidth>=1200){
        clearInterval(nextTimer);
        slider.appendChild(imgli[0])
        slider.style.left = 0;
    }
    
}
left.onclick = function(){
    changeColor2(dot.children[imgli[0].getAttribute('index')]);
    slider.insertBefore(imgli[4],imgli[0]);
    clearInterval(lastTimer)
    clearInterval(timer)
    ko=true
    liwidth = 1200;
    lastTimer = setInterval(lastImg,10);
}
function lastImg(){
    slider.style.left = '-'+liwidth+'px';
    liwidth-=10;
    if(liwidth<=-1){
        clearInterval(lastTimer);
        
        slider.style.left = 0;
    }
}

function lun(){
    clearInterval(nextTimer2)
    liwidth = 0;
    
    nextTimer2 = setInterval(nextImg2,10);
    changeColor(dot.children[imgli[0].getAttribute('index')]);
 }
 function nextImg2(){
     slider.style.left = '-'+liwidth+'px';
     liwidth+=10;
     if(liwidth>=1200){
         clearInterval(nextTimer2);
         slider.appendChild(imgli[0])
         slider.style.left = 0;
     }
     
 }


dot.onclick = function(ev){
    clearInterval(timer);
    ko=true;
    var ev = ev ||window.event;
    var target = ev.target||ev.srcElement;
    if(target.nodeName.toLowerCase() == 'li'){
        showImg(target.getAttribute('index'));
        changeColor3(target);
    }
}

function showImg(inde){
    console.log(inde)
    var this_li = imgli[0].getAttribute('index');
    if(inde>this_li){
        var x = inde-this_li;
        for(var y=0;y<x;y++){
            slider.appendChild(imgli[0])
        }
    }

    if(inde<this_li){
        var x = this_li-inde;
        for(var g=0;g<x;g++){
            slider.insertBefore(imgli[4],imgli[0])
        }
    }
}

function changeColor(target){
    var num = Number(target.getAttribute('index'));
    var real = num === 4 ?0:num+=1
    console.log("num",real)
    for(var j=0;j<5;j++){
        dot.children[j].id=''
    }
    dot.children[real].id='active'
}
function changeColor2(target){
    var num = Number(target.getAttribute('index'));
    var real = num === 0 ?4:num-=1
    console.log("num",real)
    for(var j=0;j<5;j++){
        dot.children[j].id=''
    }
    dot.children[real].id='active'
}

function changeColor3(target){
    var num = Number(target.getAttribute('index'));
    console.log("num",num)
    for(var j=0;j<5;j++){
        dot.children[j].id=''
    }
    dot.children[num].id='active'
}
setInterval(function(){
    console.log(ko)
    if(ko){
        timer = setInterval(lun,5000);
        ko=false
    }
}, 5000);
timer = setInterval(lun,5000);