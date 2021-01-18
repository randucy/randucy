var functionList;

fetch(url).then(
  function(u){ return u.json();}
  ).then(
  function(json){
    functionList = json;
  }
)

function runFunction() {



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
}
