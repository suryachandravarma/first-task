alert("Best View In Small Devices")


function addListeners() { document.getElementById("far").addEventListener("input",ToC);
  document.getElementById("celsius").addEventListener("input",ToF);
}

function ToC() {
  var f = parseFloat(document.getElementById('far').value);
  var c = (f - 32) * (5 / 9);
  document.getElementById('celsius').value = (c.toFixed(2));;
}

function ToF() {
  var c = parseFloat(document.getElementById('celsius').value) ;
  var f = (c * (9 / 5)) + 32;
  document.getElementById('far').value = (f.toFixed(2));
}