
sheetProj.view.sheetLogic = {
  setupUserInterface: function () {

    console.log("sheetLogic");
    $("#canvas").click(clickSpin)

    }
};



// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function setWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    //theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.


    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}
// function resetWheel()
// {
//     theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
//     theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
//     theWheel.draw();                // Call draw to render changes to the wheel.
//
//     document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
//     document.getElementById('pw2').className = "";
//     document.getElementById('pw3').className = "";
//
//     wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
// }

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
// note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
// -------------------------------------------------------


function clickSpin(){
  // Ensure that spinning can't be clicked again while already running.


  if (wheelSpinning == false)
  {
      // Based on the power level selected adjust the number of spins for the wheel, the more times is has
      // to rotate with the duration of the animation the quicker the wheel spins.


      theWheel.animation.spins=ci.dieRoll(12)+3;

      // Disable the spin button so can't click again while wheel is spinning.
      //document.getElementById('spin_button').src       = "spin_off.png";
    //  document.getElementById('spin_button').className = "";

      // Begin the spin animation by calling startAnimation on the wheel object.
      theWheel.startAnimation();

      // Set to true so that power can't be changed and spin button re-enabled during
      // the current animation. The user will have to reset before spinning again.
      wheelSpinning = true;
      $("#resultBoard").html(`The wheel says....`);
  }
}
