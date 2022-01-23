// DETECTING Button CLICK
numberOfDrumButtons = document.querySelectorAll(".drum").length;
//in case we add more drum buttons in future

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        makeSound(this.innerHTML); //calls makeSound function below,
        //passing innerHTML of clicked button as its argument

        buttonAnimation(this.innerHTML); //also want the button to animate when clicked
        //we will be passing in the letter of innerHTML into the 'currentKey' paramater
        //of this function when its created below
    });
};

// DETECTING Keyboard Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key); //calls function below whenever any key is pressed

    buttonAnimation(event.key); //passing same paramater (a keydown press)
    //in button Animation function below
});

// CREATING Sound Function
function makeSound(key) {
    //will only make a sound if key is in one of the Switch cases:

    var soundSource = "";

    switch (key) {
        case "w":
            soundSource = "sounds/tom-1.mp3";
            break;

        case "a":
            soundSource = "sounds/tom-2.mp3";
            break;

        case "s":
            soundSource = "sounds/tom-3.mp3";
            break;

        case "d":
            soundSource = "sounds/tom-4.mp3";
            break;

        case "j":
            soundSource = "sounds/snare.mp3";
            break;

        case "k":
            soundSource = "sounds/crash.mp3";
            break;

        case "l":
            soundSource = "sounds/kick-bass.mp3";
            break;

        default: console.log(key + " is not a valid key to make a sound");
            //in case a different key is pressed, show key that was pressed
            break;
    }

    if (soundSource.length > 1) {
        new Audio(soundSource).play();
        //creating audio for each button
    }
}

// CREATING Button Animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    //adding "." bcz querySelector is selecting for the class .w, or class .k, etc.
    activeButton.classList.add("pressed"); //See styles.css

    setTimeout(removeAnimation, 100);

    function removeAnimation() {
        activeButton.classList.remove("pressed");
    }
}