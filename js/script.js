var slideInterval = 3500;

startPlayback();

function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}

function nextImg(){
    var curPic;
    var figures = getFigures();
    for(var i = 0; i < figures.length; i ++){
            if(figures[i].className == 'visible'){
                figures[i].className = ''
                curPic = i + 1;
            }
        }    
    if (curPic == figures.length) {
        curPic = 0;
    }
    figures[curPic].className = 'visible';
    setTimeout(nextImg, slideInterval);
}   

function startPlayback() {    
    setTimeout(nextImg, slideInterval);
}