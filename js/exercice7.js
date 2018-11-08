function result(){
  var shoesize = document.getElementById('shoeSize').value;
  var yearofbirth = document.getElementById('yearOfBirth').value;
  var result = shoesize * 2;
  result +=5;
  result *=50;
  result -= yearofbirth;
  result +=1766;
  if(isNaN(shoesize) == false && isNaN(yearofbirth) == false){
    alert(result);
  }else{
    alert('merci de saisir un champs valide');
  }

}
