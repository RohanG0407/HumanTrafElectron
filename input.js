const realFileBtn = document.getElementById("real-file");
const realReqBtn = document.getElementById("real-requestbutton");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
const customRequestBtn = document.getElementById("custom-requestbutton");
var fs = require('fs');
var path = require('path');
customBtn.addEventListener("click", function () {
    realFileBtn.click();
});

//customRequestBtn.addEventListener("click", function () {
//    realReqBtn.click();
//});
//realReqBtn.addEventListener("change", function () {
//     let requestInfo = new String[4];
//   if (realReqBtn.value) {
//        requestInfo[0] = document.getElementById("carColor").value;
//        requestInfo[1] = document.getElementById("carModel").value;
//        requestInfo[2] = document.getElementById("carAdress").value;
//        requestInfo[3] = document.getElementById("carRadius").value;
//        document.setElementById("carColor").innerHTML("");
//        document.setElementById("carModel").innerHTML = "";
//        document.setElementById("carAdress").innerHTML = "";
//        document.setElementById("carRadius").innerHTML = "";
//    }
//});

realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];

        const thePath = path.join(document.getElementById('real-file').files[0].path);
        const newPath = path.join(__dirname, '/uploads/test.mp4');
        fs.copyFile(thePath, newPath, function (err) {
            if (err)
                throw err;
            console.log('Move complete.');
        });
    } else {
        customTxt.innerHTML = "No file chosen.";
    }

});