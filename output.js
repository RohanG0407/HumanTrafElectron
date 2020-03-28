    var count = 1;
    var max = 5;
    var player=document.getElementById('myVideo');
    var mp4Vid = document.getElementById('mp4Source');

function nextVideo() {
    count++;
    if (count==max) {
        var button = document.getElementById('next');
        button.disabled = true;
    }
    $(mp4Vid).attr('src', "video/video"+count+".mp4");
    player.load();
    player.play();
}
function preVideo() {
    count--;
    if (count == 0) {
        button = document.getElementById('previous');
        button.disabled = true;
    }
    $(mp4Vid).attr('src', "video/video" + count + ".mp4");
    player.load();
    player.play();
}
