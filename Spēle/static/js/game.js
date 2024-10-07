let ad = window.location.hash;
ad = decodeURI(ad);
ad = ad.replace("#", "");
ad = ad.split(",");
nm = ad[0];
const area = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const acont = ["🤣", "🙃", "😶", "🤣", "🤌", "👍", "🙀", "🙃", "🤌", "😶", "🙀", "👍"];
let opa = [];
let ltwo = [];
let clicks = 0;
function doTurn(area) {
  console.log("Klikšķis uz laukuma"+area);
  clicks++;
  let opna = false;
  if (opa.indexOf(area) == -1){
    opna = true;
    console.log("Atvērt jauns laukums");
  }
  if (opna = true){
    document.querySelector('#'+area+'div').style.visibility = "visible";
    ltwo.push(area);
  }
  if (ltwo.length == 2){
    console.log("2 laukumi ir atverti");
    open1i = area.indexOf(ltwo[0]);
    open2i = area.indexOf(ltwo[1]);
    if (acont[open1i] == acont[open2i]){
      console.log("Atverti divi vienādi laukumi");
      opa.push(ltwo[0], ltwo[1]);
      ltwo = [];
    }
    else{
      console.log("Atvērt divi atšķirīgi laukumi");
      let ltwo2 = ltwo;
      setTimeOut(function(){
        close(ltwo2[0],500);
      });
      setTimeOut(function(){
        close(ltwo2[1],500);
      });
      document.querySelector('#'+ltwo[0]+'div').style.visibility = "hidden";
      document.querySelector('#'+ltwo[1]+'div').style.visibility = "hidden";
      ltwo = [];
    }
  }
  if (area.length == opa.length){
    console.log("Spēle ir beigusies");
    alert("Apsveicam! Jūs uzvarējāt! \nKlikšķi:"+clicks+"\nLaiks:"+time);
    window.location = "score#";
  }
}