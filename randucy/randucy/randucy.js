function randucyHelp() {
  newLine('||========[ RanDucy Help ]========||')
  for (let i = 0; i < randucyHelpData.length; i++) {
    newLine(randucyHelpData[i].name + ': ' + randucyHelpData[i].description + ' ' +  '[' + randucyHelpData[i].usage + ']')
  }
  newLine('||================================||')
}
