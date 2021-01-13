var input = document.querySelector('#input');
var cmdOut;
var cmdQuestion;
var questionLine = false;

function newUserLine () {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode('>' + '' + input.value);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log('>' + ' ' + input.value)
}

function newCommandLine(cmdOut) {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode(cmdOut);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log('ran' + ' ' + cmdOut)
};

  function newCommandQuestion(cmdQuestion) {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode(cmdQuestion);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log('ranAsk' + ' ' + cmdQuestion)
  questionLine = true;
};

function newCmdNotFoundLine(cmdNotFound) {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode(cmdNotFound);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log('ran' + ' ' + input.value + ':' + ' ' + 'command not found')
}

document.getElementById("input").onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                  if (questionLine == false) {
                    newUserLine();
                    runFunction();
                  }
                  else if (questionLine == true) {
                    // do question code
                  }
                    window.scrollTo(0,document.body.scrollHeight);
                    document.querySelector('#input').value = '';
                }
            }
