const HOMEURL = "http://127.0.0.1:5000/";

function createHeader() {
  var cellHeaders = ["Title","Author","Age Rating","Genre","My Rating", "Cover", "My Review"]

  var row = document.createElement('tr');
  for (var i=0; i < cellHeaders.length; i++) {
    var cell = document.createElement('td');
    var cellData = cellHeaders[i];
    cell.appendChild(document.createTextNode(cellData));
    cell.style.fontWeight = 'bold';
    row.appendChild(cell);
  }
  return row;
}

function createTable(tableData) {
    var table = document.getElementById('bookTable');

    var tableHeader = document.createElement('thead');
    tableHeader.appendChild(createHeader());
    table.appendChild(tableHeader);

    var tableBody = document.createElement('tbody');


    tableData.forEach(function (rowData) {
        var bookID = rowData[0];

        var row = document.createElement('tr');
        for (var i = 1; i < rowData.length; i++) {
            var cellData = rowData[i];
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        }
        bookImg = document.createElement("img");
        bookImg.src="static/img/"+bookID+".jpg";
        bookImg.height=100;
        bookImg.align="middle";

        var penultCell = document.createElement('td');
        penultCell.appendChild(bookImg);
        row.appendChild(penultCell);

        var finalCell = document.createElement('td');

        var hyperlink = document.createElement('a');
        var linktext = document.createTextNode("Read more");
        hyperlink.appendChild(linktext);
        hyperlink.title = "More info";
        hyperlink.href = HOMEURL + "book" + bookID;
        finalCell.appendChild(hyperlink);

        row.appendChild(finalCell);

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
}
