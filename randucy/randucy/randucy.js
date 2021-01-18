function randucyHelp() {
  newCommandLine('||========[ RanDucy Help ]========||')
  for (let i = 0; i < randucyHelpData.length; i++) {
    newCommandLine(randucyHelpData[i].name + ': ' + randucyHelpData[i].description + ' ' +  '[' + randucyHelpData[i].usage + ']')
  }
  newCommandLine('||================================||')
}
