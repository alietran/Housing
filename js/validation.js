var checkValidation = function (){
    valid = true;
    valid = kTraRong("#name","#error_Name")
    &kTraRong("#lastname","#error_LastName")
    &kTraRong("#email","#error_Email")
    &kTraRong("#phone","#error_Phone")
    &kTraRong("#message","#error_Message");
   
    valid &= kTraChu("#name","#error_Name_all_leter")
    &kTraChu("#lastname","#error_Last_Name_all_leter");

    valid &= kTraEmail("#email","#error_Email");
    valid &= ktraSDT("#phone","#error_Phone");
    
    if(!value){
        return false;
    }
    return true;
}
var kTraRong = function (selectorValue,selectorError){
    var inputText = document.querySelector(selectorValue);
    if(inputText.value.trim() === ""){
        document.querySelector(selectorError).innerHTML = inputText.name  + " không được để trống! " ;
        document.querySelector(selectorError).style.dislay = "block";
        return false;
    }
    else 
    {
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.dislay = "none";
        return true;
    }
};
var kTraChu = function(selectorValue,selectorError){
    var inputText = document.querySelector(selectorValue);
    var regexChu = /^[A-Za-z ]+$/;
    if(regexChu.test(inputText.value)){
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.dislay = "none";
        return true;
    }
    else{
        document.querySelector(selectorError).innerHTML = inputText.name  + " phải là chữ ";
        document.querySelector(selectorError).style.dislay = "block";
        return false;
    }
};

var kTraEmail = function(selectorValue,selectorError){
    var inputText = document.querySelector(selectorValue);
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regexEmail.test(inputText.value)){
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.dislay = "none";
        return true;
    }
    else{
        document.querySelector(selectorError).innerHTML = inputText.name  + " không hợp lệ ";
        document.querySelector(selectorError).style.dislay = "block";
        return false;
    }
};
var ktraSDT = function (selectorValue, selectorError) {
    var regexSo = /^[0-9]+$/;
    var inputText = document.querySelector(selectorValue);
  
    if (regexSo.test(inputText.value)) {
      document.querySelector(selectorError).innerHTML = "";
      document.querySelector(selectorError).style.display = "none";
      return true;
    } else {
      document.querySelector(selectorError).innerHTML =
        inputText.name + " phải là số";
      document.querySelector(selectorError).style.display = "block";
      return false;
    }
  };


document.getElementById("btnsubmit").onclick = checkValidation;