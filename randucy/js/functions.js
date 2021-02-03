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
