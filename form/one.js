function myForm(){
    let one=document.getElementById("userName").value 
    if (one== ""){
        document.getElementById("errorMsg").innerHTML ="Please enter your name."
    }
    return false
}