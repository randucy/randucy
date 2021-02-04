let randucy = {}
randucy.input = document.querySelector('#input'),

randucy.newLine = function(cmdOut) {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode(cmdOut);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log(cmdOut)
};

document.getElementById("input").onkeypress = function(event){
  if (event.keyCode == 13 || event.which == 13){
    randucy.newLine('>' + ' ' + randucy.input.value);
    randucy.runFunction();
    window.scrollTo(0,document.body.scrollHeight);
    document.querySelector('#input').value = '';
    }
}
