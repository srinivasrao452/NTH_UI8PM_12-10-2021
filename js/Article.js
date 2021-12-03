
function validateOfferCode(){
    var offer_code = document.getElementById("offerCode").value;

    if(offer_code.length==0){
        document.getElementById("demo2").innerHTML="";
        document.getElementById("demo3").innerHTML="";
        document.getElementById("demo4").innerHTML="";
        document.getElementById("demo").innerHTML="Please enter offer code";
        document.getElementById("demo").style.color="red";
    }

    else if (offer_code != "EXTRA20"){
        document.getElementById("demo2").innerHTML="";
        document.getElementById("demo3").innerHTML="";
        document.getElementById("demo4").innerHTML="";
        document.getElementById("demo").innerHTML="Please enter valid offer code";
        document.getElementById("demo").style.color="red";
    }
    else {
         document.getElementById("demo").innerHTML="";
        document.getElementById("demo2").innerHTML="Actual Price :<b>Rs400</b>";
        document.getElementById("demo3").innerHTML="Discount Price :<b>Rs80</b>";
        document.getElementById("demo4").innerHTML="Payable Price :<b>Rs320</b>";
    }


}