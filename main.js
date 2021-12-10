function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="ali"&&password=="welcom"){
        window.location.href="sucsess.html"
        // document.getElementById("print").innerHTML = "welcom"
    }else if(username!="ali"&&password=="welcom"){
    document.getElementById("print").innerHTML = "username fout"
    
    // else if
}else if(username=="ali"&&password!="welcom"){
    document.getElementById("print").innerHTML = "password fout"
    
// else if
}else if (username!="ali"&&password!="welcom"){
    document.getElementById("print").innerHTML = "username en password fout"
   
}
// else if 
else if(username=="ali"&&password!=""){
    document.getElementById("print").innerHTML = "gelieve een paswoord in te geven "
    
// else if
}
// else if
else if(username==""&&password!="welcom"){
    document.getElementById("print").innerHTML = "gelieve een gebruikersnaam in te geven "
    
}
}
