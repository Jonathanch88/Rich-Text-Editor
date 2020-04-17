
var showingSourceCode = false;
var isInEditMode = true;



//function to enable edit Mode. 

function enableEditMode() {
  richTextField.document.designMode = "on";
}

function execCmd(command) {
  richTextField.document.execCommand(command, false, null);
  console.log(command);
}
function execCommandWithArg(command, arg) {
  richTextField.document.execCommand(command, false, arg);
}

function toggleSource() {
  if (showingSourceCode) {
    richTextField.document.getElementsByTagName('body')[0].innerHtml = richTextField.document.getElementsByTagName('body')[0].textContent;
    showingSourceCode = false;
  }
  else {
    richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHtml;
    showingSourceCode = true;
  }


}

function toggleEdit() {
  if(isInEditMode){
    richTextField.document.designMode = "off";
    isInEditMode = false;
  }else {
    richTextField.document.designMode = "on";
    isInEditMode = true;
  }
}

