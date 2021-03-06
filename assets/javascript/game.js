$(document).ready(function () {

    //keep track of wins and losses
    var winCount = 0;
    var lossCount = 0;

    $('#wins').append(" " + winCount);
    $('#losses').append(" " + lossCount);
    //generates random number for user to guess (19-120)
    var numToGuess = Math.floor(Math.random() * 100) + 20;
    $('#randomNum').append("<h1>" + numToGuess + "</h1>");
    //generates 4 random numbers to correspond with crystals (1-12)
    var crys1 = Math.floor(Math.random() * 12) + 1;
    var crys2 = Math.floor(Math.random() * 12) + 1;
    var crys3 = Math.floor(Math.random() * 12) + 1;
    var crys4 = Math.floor(Math.random() * 12) + 1;

    //keep track of user's score
    var userScore = 0;

    //functions resets all the variables
    function reset() {
        //display new random number
        numToGuess = Math.floor(Math.random() * 100) + 20;
        $('#randomNum').html("<h3>Number to Guess: </h3><h1>" + numToGuess + "</h1>");
        //generates 4 new random numbers to correspond with crystals (1-12)
        crys1 = Math.floor(Math.random() * 12) + 1;
        crys2 = Math.floor(Math.random() * 12) + 1;
        crys3 = Math.floor(Math.random() * 12) + 1;
        crys4 = Math.floor(Math.random() * 12) + 1;
        userScore = 0;
        $('#totalScore').html("<h3>Your Total Score:</h3><h1>" + userScore + "</h1>");
        $('#wins').html("Wins: " + winCount);
        $('#losses').html("Losses: " + lossCount + "");
        $("#message").html("")

    };

    function check() {
        $('#totalScore').html("<h3>Your Total Score is:</h3><h1>" + userScore + "</h1>");
        if (userScore === numToGuess) {
            $("#message").html("<h1>YOU WIN!!</h1>");
            winCount++;
            setTimeout(reset, 1000);
        } else if (userScore >= numToGuess) {
            $("#message").html("<h1>YOU LOSE :(</h1>");
            lossCount++;
            setTimeout(reset, 1000);
        } else {
            console.log(userScore);
        }
    };

    //waits for user to click on crystals
    $('#amethyst').on("click", function () {
        //depending on which crystal the user clicks on, the random number is added to the user's score
        userScore = crys1 + userScore;
        //score is displayed after each click
        check();
    });

    $('#bismuth').on("click", function () {
        userScore = crys2 + userScore;
        check();
    });

    $('#diamond').on("click", function () {
        userScore = crys3 + userScore;
        check();
    });

    $('#titanium').on("click", function () {
        userScore = crys4 + userScore;
        check();
    });


});