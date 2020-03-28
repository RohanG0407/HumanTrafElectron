const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
var fs = require('fs');
var path = require('path');
customBtn.addEventListener("click", function () {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {


    if (realFileBtn.value) {

        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
        const thePath = path.join(document.getElementById('real-file').files[0].path);
        const newPath = path.join(__dirname, '/test/hello.png');
        fs.copyFile(thePath, newPath, function (err) {
            if (err) throw err;
            console.log('Move complete.');
        });

    } else {
        customTxt.innerHTML = "No file chosen.";
    }

})