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
randucy.functionList;
fetch('https://randucy.netlify.app/assets/functionList.json').then(
  function(u){ return u.json();}
  ).then(
  function(json){
    randucy.functionList = json;
  }
)
randucy.runFunction = function() {
  let args = randucy.input.value.split(/ +/g);
  let command = args.shift().toLowerCase();
  let functionName = randucy.functionList.find( ({ name }) => name == command );
  if (functionName == undefined) { randucy.newLine('RanDucy: Command not found'); return }
  console.log(functionName.requestFunction)
  eval(functionName.requestFunction + '()')
}
randucy.help = function() {
  randucy.newLine('||========[ RanDucy Help ]========||')
  for (let i = 0; i < randucy.data.help.length; i++) {
    randucy.newLine(randucy.data.help[i].name + ': ' + randucy.data.help[i].description + ' ' +  '[' + randucy.data.help[i].usage + ']')
  }
  randucy.newLine('||================================||')
}
randucy.data = {}
randucy.data.help = [
  {
    name: "help",
    description: "shows this screen",
    usage: "help"
  }
]
