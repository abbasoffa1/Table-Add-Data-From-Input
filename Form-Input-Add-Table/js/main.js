var qab = document.querySelector(".myInputs");
function Select(selector) {
    var elem = document.querySelector(selector)
    return elem;
}
function Create() {

    var row = document.createElement("div");
    row.className = "row sil";
    qab.appendChild(row);

    var col = document.createElement("div");
    col.setAttribute("class", "col-lg-5");
    row.appendChild(col);

    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-lg-5");
    row.appendChild(col2);


    var label = document.createElement("label");
    label.innerText = "Exam";
    col.appendChild(label);

    var label2 = document.createElement("label");
    label2.innerText = "Point";
    col2.appendChild(label2);

    var iDiv1 = document.createElement("div");
    iDiv1.className = "input-group mb-3";
    col.appendChild(iDiv1);

    var iDiv2 = document.createElement("div");
    iDiv2.className = "input-group mb-3";
    col2.appendChild(iDiv2);

    var silDiv = document.createElement("button");
    silDiv.className = "btn btnSil btn-danger";
    silDiv.innerText = "-";
    silDiv.addEventListener("click", function () {
        qab.removeChild(row);
    });
    row.appendChild(silDiv);

    var input1 = document.createElement("input");
    input1.className = "form-control";
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "Exam");
    iDiv1.appendChild(input1);

    var input2 = document.createElement("input");
    input2.className = "form-control";
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "Point");
    iDiv2.appendChild(input2);
}


var tbody = Select("tbody");


function Add() {

    var Name1 = Select('input[name="Name1"]').value;
    var Surname = Select('input[name="Surname"]').value;

    var Exams = document.querySelectorAll('input[name="Exam"]');
    var Points = document.querySelectorAll('input[name="Point"]');

    for (var i = 0; i < Exams.length; i++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerText = Name1;
        var td2 = document.createElement("td");
        td2.innerText = Surname;
        var td3 = document.createElement("td");
        td3.innerText = Exams[i].value;
        var td4 = document.createElement("td");
        td4.innerText = Points[i].value;


        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tbody.appendChild(tr);
       
    }
}
