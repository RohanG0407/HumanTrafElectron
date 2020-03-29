var realFileBtn = document.getElementById("real-file");
var realReqBtn = document.getElementById("submitRequests");
var customBtn = document.getElementById("custom-button");
var customTxt = document.getElementById("custom-text");
var customRequestBtn = document.getElementById("custom-requestbutton");
var requestTxt = document.getElementById("request-text");
var fs = require('fs');
var path = require('path');
customBtn.addEventListener("click", function () {
    realFileBtn.click();
});

realReqBtn.addEventListener("click", function(){
    document.getElementById("car_color").value = "";
    document.getElementById("car_model").value = "";
    document.getElementById("address").value = "";
    document.getElementById("radius").value = "";
    
    requestTxt.innerHTML = "Request Sending...";
    
        setTimeout(function(){
          requestTxt.innerHTML = "Request Sent";
            }, 3000);

});

realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1]
        customTxt.innerHTML += " uploaded successfully!";

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