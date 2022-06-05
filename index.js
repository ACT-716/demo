function teamDivision() {

  const table = document.getElementById("divisionTable");
  const input = document.getElementsByTagName("input");
  var rndDiv = random(input.length)

  let loop = 0;
  for (let row of table.rows) {
    for (let cell of row.cells) {
      if (loop >= 2) {
        cell.innerText = input[rndDiv[loop - 2]].value;
      }
      loop++;
    }
  }
  loop = 0;
}

function addInput() {
  let inputAdd = [];
  const table = document.getElementById("divisionTable");
  const inputTag = document.getElementsByTagName("input");
  let charDiv = document.getElementById("charDiv");
  let br = document.createElement("br");

  let inputNum = inputTag.length;

  for (let i = 0; i < 2; i++) {
    inputAdd[i] = document.createElement("input");
    inputAdd[i].type = "text";
    inputAdd[i].id = "char" + inputNum;
    inputAdd[i].size = 10;
    inputAdd[i].className = "ms-4 mt-1 form-text";
    charDiv.appendChild(inputAdd[i]);
  }
  let tr = table.tBodies[0].insertRow(-1);
  let cell = tr.insertCell(0);
  let cell2 = tr.insertCell(1);

  charDiv.appendChild(br);
}


function random(maxNum) {
  var arr = [];
  var numArr = [];

  for (var i = 0; i < maxNum; i++) {
    arr[i] = i;
  }

  for (var j = 0, len = arr.length; j < maxNum; j++, len--) {
    rndNum = Math.floor(Math.random() * len);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[len - 1];
  }
  return numArr;
}
