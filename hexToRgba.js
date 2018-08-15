hexToRgbA = function(hex, alpha) {

  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {

    var c = hex.substring(1).split('')

    if (c.length == 3) {

      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }

    c = '0x' + c.join('')

    return `rgba(${(c>>16)&255},${(c>>8)&255},${c&255},${alpha})`
  }

  throw new Error('Bad Hex Number: ' + hex)
}

// 调用
hexToRgbA('#f50',0.6)
