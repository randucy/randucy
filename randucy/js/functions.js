var functionList;
const url = 'https://randucy.netlify.app/assets/functionList.json';
var functionName;

fetch(url).then(
  function(u){ return u.json();}
  ).then(
  function(json){
    functionList = json;
  }
)

function runFunction() {
  let args = input.value.split(/ +/g);
  let command = args.shift().toLowerCase();

  functionName = functionList.find( ({ name }) => name == command );

  console.log(functionName.requestFunction)
  this[functionName.requestFunction]()
}
