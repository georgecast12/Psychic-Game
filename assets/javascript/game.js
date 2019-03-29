



// Random Letter (Lower & Upper Cap)

function randomLetter(length) {
    var text = "";
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
        text += letters.charAt(Math.floor(Math.random() * letters.length));

    return text;

}

console.log(randomLetter(1));

// Variables to hold letter and outcomes

var wins = 0;
var losses = 0;
var countdown = 9;
var letter = " ";



// On key down compare letter to random letter.


function myFunction() {
    var x = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML = x;
}


    // if pressed letter = random letter add 1 to your guesses so far



    //  else add 1 to guesses left (start @9).

    // if guesses left =0  add 1 to Losses 

    // your guesses so far  = register the attempts until you either win  or loose.





