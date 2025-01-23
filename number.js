function myfunction(){
    var first= document.getElementById("first_input").value;
    var secand= document.getElementById("secand_input").value;
    var i=Number(first);
    var j=Number(secand);
    if((i>100 || i<1) && (j>100 ||j<1)){
        alert("The first and second number must be between 1-100.");
        return;
    }
    if (i > j) {
        alert("The first number must be less than or equal to the second number.");
        return;
    }

    for (i; i <= j; i++) {
        if (i % 3 === 0 && i % 5 === 0) { 
            document.getElementById("result").innerHTML+="InfinteTiers  ";
        } else if (i % 3 === 0) {       
             document.getElementById("result").innerHTML+="Infinte   ";
        } else if (i % 5 === 0) {
          document.getElementById("result").innerHTML+="Tiers  ";
        } else {
          document.getElementById("result").innerHTML+=i+"  ";
        }
    }
}