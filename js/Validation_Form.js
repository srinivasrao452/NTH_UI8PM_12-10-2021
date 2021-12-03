
// defining a function to display error message
function printError(elemId,errorMsg){
    document.getElementById(elemId).innerHTML = errorMsg;
}

// defining a function to validate form
function validateForm(){
    // read the values if form elemts
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];

    var checkboxes = document.getElementsByName("hobbies[]")//[e1,e2,e3]
    for(var i=0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            hobbies.push(checkboxes[i].value);
        }
    }

    // create some error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    // validate name field
    if(name==""){
        printError("nameErr", "Please enter your name");
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) == false){
            printError("nameErr","Please enter a valid name");
        }
        else {
            printError("nameErr","");
            nameErr = false;
        }
    }



    // validate email field
    if(email==""){
        printError("emailErr", "Please enter your email address");
    }
    else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) == false){
            printError("emailErr","Please enter a valid email address");
        }
        else {
            printError("emailErr","");
            emailErr = false;
        }
    }

    if(mobile==""){
        printError("mobileErr", "Please enter your mobile number");
    }
    else {
        var regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) == false){
            printError("mobileErr","Please enter a valid 10 digit number");
        }
        else {
            printError("mobileErr","");
            mobileErr = false;
        }
    }


    // validate country value
    if(country=="Select"){
        printError("countryErr", "Please select your country name");
    }
    else {
        printError("countryErr","");
        countryErr = false;
    }

    // validate gender value
    if(gender==""){
        printError("genderErr", "Please select your gender value");
    }
    else {
        printError("genderErr","");
        genderErr = false;
    }

    // prevent the form from being submited if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    }
    else {
       var dataPreview = "You have entered the following details :\n"+
           "Full Name : "+name + "\n"+
           "Email Address : "+email + "\n"+
           "Mobile Number : "+mobile + "\n"+
           "Country Name : "+country + "\n"+
           "Gender Name : "+gender + "\n";

       if(hobbies.length){
           dataPreview +=  "Hobbies : " + hobbies.join(",")
       }
       // display input data in a alert dialog box before submitting the form
        alert(dataPreview);
    }
}

