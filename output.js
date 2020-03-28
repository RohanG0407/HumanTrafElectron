    var count = 1;
    var max = 2;


function nextVideo() {
    
    
    if (count!=max) {
        count++;
        document.getElementById('mp4Source').setAttribute('src', 'video'+count+'.mp4');
        document.getElementById('video').load();
        document.getElementById('video').play();
    }
    
}
function previousVideo() {
    
    if (count != 1) {
        count--;
        document.getElementById('mp4Source').setAttribute('src', 'video'+count+'.mp4');
        document.getElementById('video').load();
        document.getElementById('video').play(); 
    }
    
}
