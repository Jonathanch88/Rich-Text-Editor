//function to enable edit Mode. 

function enableEditMode(){
  richTextField.document.designMode = "on";
 }

 function execCmd(command){
  richTextField.document.execCommand(command, false , null);
  console.log(command);
 }
function execCommandWithArg(command, arg){
  richTextField.document.execCommand(command, false, arg);
}