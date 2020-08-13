let showingSourceCode = false;
let isInEditMode = true;

const enableEditMode = ()=> {
  richTextField.document.designMode = "on";
}

const execCmd = (command) => {
  richTextField.document.execCommand(command, false, null);
  console.log(command);
}

const execCommandWithArg = (command, arg)=> {
  richTextField.document.execCommand(command, false, arg);
}

const toggleSource = ()=> {
  if (showingSourceCode) {
    richTextField.document.getElementsByTagName('body')[0].innerHtml = richTextField.document.getElementsByTagName('body')[0].textContent;
    showingSourceCode = false;
  }
  else {
    richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHtml;
    showingSourceCode = true;
  }

}

const toggleEdit = () => {
  if(isInEditMode){
    richTextField.document.designMode = "off";
    isInEditMode = false;
  }else {
    richTextField.document.designMode = "on";
    isInEditMode = true;
  }
}

