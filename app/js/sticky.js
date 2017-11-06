var h = document.getElementById("header-container");
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
    var topDist = h.offsetTop;
    return topDist;
}

window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
    if ( (distance <= 0) && !stuck) {
        h.style.position = 'fixed';
        h.style.top = '0px';
        stuck = true;
    } else if (stuck && (offset <= stickPoint)){
        h.style.position = 'static';
        stuck = false;
    }
}