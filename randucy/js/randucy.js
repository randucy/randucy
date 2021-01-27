const randucy = {
  "input": document.querySelector('#input'),
}

function newLine(cmdOut) {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode(cmdOut);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log(cmdOut)
};

document.getElementById("input").onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                    newLine('>' + ' ' + randucy.input);
                    runFunction();
                    window.scrollTo(0,document.body.scrollHeight);
                    document.querySelector('#input').value = '';
                }
            }
