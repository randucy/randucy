var functionList;
const url = 'https://randucy.netlify.app/assets/functionList.json';

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

  const functionName = moduleList.find( ({ function }) => function == command );

  console.log(functionName)
}

  /*
  switch (input.value) {

    // ping command
    case 'ping':
      ping();
      break;

    // help help command
    case 'help':
      help();
      break;

    default:
      newCmdNotFoundLine('ran:' + ' ' + 'Command not found' + ' ' + input.value);
  }
  */
