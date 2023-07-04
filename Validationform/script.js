function validate()
{
    var uname = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var phone = document.getElementById("phone");
//For Name Validation

    if(uname.value!="")
    {
        if(uname.value.length<3)
        {
            alert("Name must be greater than 3 characters");
            return false;
        }
        else if(uname.value.length>20)
        {
            alert("Name must be less than 20 characters");
            return false;
        }
        else if(!isNaN(uname.value))
        {
            alert("Name must be in characters");
            return false;
        }
        return true;
   
    }
//For Email Validation
   if(email.value!=""){
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(email.value.match(pattern))
            {
                return true;
            }
        else
            {
                alert("Invalid Email");
                return false;
            }
   }

   //For Password Validation

   if(password.value!=""){
        if(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))
            {
                return true;
            }
         else if(password.value.length<6)
            {
                alert("Password must be greater than 6 characters");
                return false;
            }
         else if(password.value.length>20)
            {
                alert("Password must be less than 20 characters");
                return false;
            }   
        return true;
   }

   //For Phone Number Validation

if(phone.value!=""){
    if(phone.value.length!=10)
    {
        alert("Phone Number must be of 10 digits");
        return false;
    }
  else  if(phone.value.charAt(0)!=9 && phone.value.charAt(0)!=8 && phone.value.charAt(0)!=7 && phone.value.charAt(0)!=6)
    {
        alert("Phone Number must start with 9,8,7 or 6");
        return false;
    }
   
    return true;
    
}
    
}