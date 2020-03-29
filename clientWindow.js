
carDATA = [
    {
        make: "Honda",
        model: "Civic",
        year: "2005",
        type: "Sedan",
    },
    {
        make: "BMW",
        model: "X5",
        year: "2019",
        type: "SUV",
    },
    {
        make: "Toyota",
        model: "Camry",
        year: "2015",
        type: "Sedan",
    }
];

rowDATA = [
    {
        agency: "FBI",
        date: "03/28/20",
        timeframe: "6pm - 8pm",
    },
    {
        agency: "NSA",
        date: "03/24/20",
        timeframe: "5pm - 8pm",
    },
    {
        agency: "NYPD",
        date: "03/31/20",
        timeframe: "7pm - 8pm",
    }
];

function addRow(agency, date, timeframe) {
    var bound = document.getElementById('rows');
    var newRow = document.createElement('tr');
    newRow.id = "extraRow";
    bound.appendChild(newRow);
    var agencycell = document.createElement('td');
    agencycell.classList.add() = "agencycolum";
    var datecell = document.createElement('td');
    datecell.classList.add() = "datecolum";
    var timeframecell = document.createElement('td');
    timeframecell.classList.add() = "timecolum";
    var upload = document.createElement('button');
    agencycell.innerText = agency;
    datecell.innerText = date;
    timeframecell.innerText = timeframe;
    var uploadcell = document.createElement('td');
    uploadcell.classList.add() = "uploadbuttons";
    uploadcell.innerHTML = upload;
    upload.onclick = ""; 
    upload.innerText = "Upload";

    for (i = 0; i < rowDATA.length; i++) {

        addRow(rowDATA[i]['agency'], rowDATA[i]['date'], rowDATA[i]['timeframe']);

    };
    window.onload = function what() {
        document.getElementById('accuracy').innerHTML = 'Accuracy: ' + this.accuracy + "%";
        document.getElementById('model').innerHTML = 'Model: ' + this.model;
        document.getElementById('make').innerHTML = 'Make: ' + this.make;
        document.getElementById('year').innerHTML = 'Year: ' + this.year;
        document.getElementById('color').innerHTML = 'Color: ' + this.color;
        document.getElementById('license_number').innerHTML = 'License Plate: ' + this.licensePlate;
    };
}