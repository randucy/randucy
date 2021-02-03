randucy.help = function() {
  newLine('||========[ RanDucy Help ]========||')
  for (let i = 0; i < randucy.data.help.length; i++) {
    newLine(randucy.data.help[i].name + ': ' + randucy.data.help[i].description + ' ' +  '[' + randucy.data.help[i].usage + ']')
  }
  newLine('||================================||')
}
