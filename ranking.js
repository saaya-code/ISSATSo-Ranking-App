
function compare( a, b ) {
    if ( a.moyenne > b.moyenne ){
      return -1;
    }
    if ( a.moyenne < b.moyenne ){
      return 1;
    }
    return 0;
  }


async function provoke(){
const URL = "https://diligent-scrawny-cord.glitch.me/api/v1/ranks"
const response = await axios.get(URL);
const etudArray = response.data.etud
etudArray.sort(compare)
console.log(etudArray)
var table = document.getElementById("myTable");
for(i = 1 ; i<=etudArray.length;i++){
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = `${i}) ${etudArray[i-1].name}`;
    cell2.innerHTML = `Prépa A1-0${etudArray[i-1].classe}`;
    cell3.innerHTML = etudArray[i-1].moyenne
    
}
}


provoke()