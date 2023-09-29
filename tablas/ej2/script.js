document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });


  function change() {
    document.getElementById("azul").style.backgroundColor = "blue";
    document.getElementById("rojo").style.backgroundColor = "red";
    document.getElementById("verde").style.backgroundColor = "green";
    document.getElementById("lila").style.backgroundColor = "purple";
    document.getElementById("amarillo").style.backgroundColor = "yellow";
    document.getElementById("naranja").style.backgroundColor = "orange";
   

   
}
    function reset(){
        location.reload();
    }