

async function verif(){
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var score = document.getElementById("score").value;
    var classe = document.getElementById("classe").value;
    if(fName.length == 0){
        alert("Erreur Nom")
        return false;
    }
    if(lName.length == 0){
        alert("Erreur Prénom")
        return false;
    }
    if(score<0 || score>20){
        alert("Erreur moyenne!");
        return false;
    }
    if(classe == 0){
        alert("Erreur choix de classe");
        return false;
    }
    //check Data base
    const Data = {
        name:fName+" "+lName,
        moyenne: Number(score),
        classe: Number(classe)
    }
    console.log(Data)
    
    const URL = "http://localhost:3000/api/v1/ranks"
    const response = await axios.post(URL, Data);
    console.log(response.data)
    if(response){
        alert("Registation complete.")
        document.location.href = "/front/htmlPages/rankings.html"
    }
}