function dataGet(){
  let name = document.querySelector("#User").value;
  if (name == "") {
    alert("Ievadiet savu vārdu!");
  }
  else {
    window.location = "game#"+name;
  }
}