function myForm(){

    let one=document.getElementById("user").value;
    if(one == ""){
        document.getElementById("userName").innerHTML="Please Enter Your Name"
    }



    let two=document.getElementById("coursee").value;
     if(two ==""){
        document.getElementById("course").innerHTML="Please Enter Your Combination "
     }
     

 


     let three=document.getElementById("branchh").value;
     if(three==""){
         document.getElementById("barnch").innerHTML="Please Select Your Combination "
     }
    
 


     let four=document.getElementById("rollnoo").value;
     if(four==""){
         document.getElementById("rollno").innerHTML="Please Enter Your Rollno "
     }
     

 


     let five=document.getElementById("emaill").value;
   if(five==""){
         document.getElementById("email").innerHTML="Please Enter Your Correct Email "
     }
     


    let six=document.getElementById("Phonenoo").value;
   if(six==""){
         document.getElementById("phone").innerHTML="Please Enter Your 10 Digit phone number "
     }
    

 

     let saven=document.getElementById("passwordd").value;
    let eight=document.getElementById("repasswordd").value;
     if(saven!==eight){
         document.getElementById("repasword").innerHTML="Please Enter Your correct password "
     }
     return false

 }


