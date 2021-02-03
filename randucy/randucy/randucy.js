help = function() {
  randucy.newLine('||========[ RanDucy Help ]========||')
  for (let i = 0; i < randucy.data.help.length; i++) {
    randucy.newLine(randucy.data.help[i].name + ': ' + randucy.data.help[i].description + ' ' +  '[' + randucy.data.help[i].usage + ']')
  }
  randucy.newLine('||================================||')
}
