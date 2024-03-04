//document.getElementById("displayBox").focus();

//global variables
var isCapsLockON = false;
var shiftPressed = false;

//take the text from the alphabet button
function getText(button) {
  var text = button.innerText;
  console.log(text);
  displayText(text);
}

//take the lower letter if shift is not pressed
function getUnShiftChar(button) {
  var text = button.children[1].innerText;
  displayText(text);
}

//take the upper letter if shift is pressed
function getShiftChar(button) {
  var text = button.children[0].innerText;
  displayText(text);
}

//display text in the display box
function displayText(text) {
  document.getElementById("displayBox").innerText += text;
}

// backspace functionality
function deleteText() {
  var text = getDisplayText();
  updateText = text.slice(0, text.length - 1);
  console.log(updateText);
  document.getElementById("displayBox").innerText = updateText;
}

// take the text from the display box
function getDisplayText() {
  return document.getElementById("displayBox").innerText;
}

// clear functionality
function clearText() {
  document.getElementById("displayBox").innerText = "";
  document.getElementById("box").value = "";
  document.getElementById("box").disabled = false;
}

//caps lock functionality
function makeUpperCase() {
  if (isCapsLockON == false) {
    isCapsLockON = true;
    document.getElementById("capslock").style.backgroundColor = "aqua";
  } else {
    isCapsLockON = false;
    document.getElementById("capslock").style.backgroundColor = "black";
  }
  var words = document.getElementsByClassName("letter");
  //console.log(words);
  if (isCapsLockON == true) {
    for (var i = 0; i < words.length; i++) {
      {
        words[i].innerText = words[i].innerText.toUpperCase();
      }
    }
  } else {
    for (var i = 0; i < words.length; i++) {
      {
        words[i].innerText = words[i].innerText.toLowerCase();
      }
    }
  }
}

//chartAt functionality
function displayCharAt() {
  document.getElementById("box").disabled = false;
  var text = getDisplayText();
  var id = parseInt(document.getElementById("box").value);
  if (text != "") {
    if (isNaN(id)) {
      alert("Input number first!");
    } else {
      var output = "The word at position " + id + " is: ";
      document.getElementById("message").innerText = output + text.charAt(id);
      showMessageBox();
    }
  } else {
    alert(
      "Make sure you input text on display box and then input the number in the small box"
    );
  }
}

//chartCodeAt functionality
function displayCharCodeAt() {
  document.getElementById("box").disabled = false;
  var text = getDisplayText();
  var id = parseInt(document.getElementById("box").value);
  if (text != "") {
    if (isNaN(id)) {
      alert("Input number first!");
    } else {
      var output = "The UTF-16 value of word at position " + id + " is: ";
      document.getElementById("message").innerText =
        output + text.charCodeAt(id);
      showMessageBox();
    }
  } else {
    alert(
      "Make sure you input text on display box and then input the number in the small box"
    );
  }
}

//display message box
function showMessageBox() {
  document.getElementById("messageBox").style.display = "block";
  // Set a timer to hide the box after 4 seconds
  setTimeout(function () {
    document.getElementById("messageBox").style.display = "none";
  }, 4000);
}

//toUpperCase function
function displayUpperCase() {
  var text = getDisplayText();
  var textInput = document.getElementById("box").value;
  //var output = "Capitalization of your text is: ";
  if (text == "") {
    if (textInput == "") {
      alert("Input text in a display box or text input box!");
    } else {
      document.getElementById("displayBox").innerText = "";
      document.getElementById("box").value = textInput.toUpperCase();
    }
  } else {
    document.getElementById("box").disabled = true;
    document.getElementById("displayBox").innerText = text.toUpperCase();
  }
}

//tolowerCase function
function displayLowerCase() {
  var text = getDisplayText();
  var textInput = document.getElementById("box").value;
  //var output = "Capitalization of your text is: ";
  if (text == "") {
    if (textInput == "") {
      alert("Input text in a display box or text input box!");
    } else {
      document.getElementById("box").value = textInput.toLowerCase();
    }
  } else {
    document.getElementById("box").disabled = true;
    document.getElementById("displayBox").innerText = text.toLowerCase();
  }
}

//trim function
function doTrim() {
  var text = getDisplayText();
  var textInput = document.getElementById("box").value;
  //var output = "Capitalization of your text is: ";
  if (text == "") {
    if (textInput == "") {
      alert("Input text in a display box or text input box!");
    } else {
      document.getElementById("box").value = textInput.trim();
    }
  } else {
    document.getElementById("box").disabled = true;
    document.getElementById("displayBox").innerText = text.trim();
  }
}

//includes function
function checkIncludes() {
  document.getElementById("box").disabled = false;
  var text = getDisplayText();
  var character = document.getElementById("box").value;
  if (text != "") {
    if (character == "") {
      alert("Enter a word in small box that you want to check first!");
    } else {
      var output = "The word you gave " + character + " is ";
      if (text.includes(character)) {
        document.getElementById("message").innerText =
          output + "found in the given text!";
        showMessageBox();
      } else {
        document.getElementById("message").innerText =
          output + "not found in the given text!";
        showMessageBox();
      }
    }
  } else {
    alert(
      "Make sure you input text on display box and then input a word in the small box."
    );
  }
}

//indexOf function
function checkIndexOf() {
  document.getElementById("box").disabled = false;
  var text = getDisplayText();
  var character = document.getElementById("box").value;
  if (text != "") {
    if (character == "") {
      alert("Enter a word in small box that you want to check first!");
    } else {
      var output = "The index number of the word " + character + " is ";
      if (text.includes(character)) {
        document.getElementById("message").innerText =
          output + text.indexOf(character);
        showMessageBox();
      } else {
        document.getElementById("message").innerText =
          "word " + character + " does not exist in the given text!";
        showMessageBox();
      }
    }
  } else {
    alert(
      "Make sure you input text on display box and then input a word in the small box."
    );
  }
}

//lastIndexOf function
function checkLastIndex() {
  document.getElementById("box").disabled = false;
  var text = getDisplayText();
  var word = document.getElementById("box").value;
  if (text != "") {
    if (word == "") {
      alert("Enter a word in small box that you want to check first!");
    } else {
      var output =
        "The last index number of your input word : " + word + " : ";
      if (text.lastIndexOf(word) != -1) {
        document.getElementById("message").innerText =
          output + text.lastIndexOf(word);
        showMessageBox();
      } else {
        document.getElementById("message").innerText =
          output + " is not found in the given text. "
        showMessageBox();
      }
    }
  } else {
    alert(
      "Make sure you input text on display box and then input a word in the small box."
    );
  }
}

//startsWith function
function checkStartsWith(){
  document.getElementById("box").disabled = false;
  var text = getDisplayText();
  var character = document.getElementById("box").value;
  if (text != "") {
    if (character == "") {
      alert("Enter a word in small box that you want to check first!");
    } else {
      if (text.startsWith(character)==true) {
        document.getElementById("message").innerText = " Your given text starts with: "+ character +" .";
        showMessageBox();
      } else {
        document.getElementById("message").innerText = " Your given text does not start with: "+ character +" .";
        showMessageBox();
      }
    }
  } else {
    alert(
      "Make sure you input text on display box and then input a word in the small box."
    );
  }
}

//EndsWith function
function checkEndsWith(){
  document.getElementById("box").disabled = false;
  var text = getDisplayText();
  var character = document.getElementById("box").value;
  if (text != "") {
    if (character == "") {
      alert("Enter a word in small box that you want to check first!");
    } else {
      if (text.endsWith(character)==true) {
        document.getElementById("message").innerText = " Your given text ends with: "+ character +" .";
        showMessageBox();
      } else {
        document.getElementById("message").innerText = " Your given text does not end with: "+ character +" .";
        showMessageBox();
      }
    }
  } else {
    alert(
      "Make sure you input text on display box and then input a word in the small box."
    );
  }
}


//shift functionality
function isShiftPressed(button) {
  if(shiftPressed==false){
    shiftPressed = true;
    button.style.backgroundColor = "aqua";
  }
  else{
    shiftPressed = false;
    button.style.backgroundColor = "black";
  }
}

//if shift pressed, upper character shows, otherwise lower character shows
function checkShiftChar(button){
  if (shiftPressed == true) {
    getShiftChar(button);
    //console.log("reache here pressed");
  }
  else{
    getUnShiftChar(button);
    //console.log("reach here unpressed");
  }
}