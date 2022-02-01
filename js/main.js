const {body} = document

try{
    body.style.backgroundColor = lumiance('#2b77e4', -0.8);
}catch(e){
    console.log("HOUVE UM ERRO: ", e.message)
}

function lumiance   (hex, luminosity = 0){
    // hexadecimal é um valor que vao de 0 a f
    // contém 16 digitos
    // 0 = f
    // f = white

    // lógica para converter o hexadecimal em uma cor mais clara ou mais escura
    // aceitar valores do hex com 3 ou 6 digitos
    hex = hex.replace(/[^0-9a-f]/gi, '')
    const isValidHex = hex.length === 6 || hex.length === 3
    if(!isValidHex) throw new Error("Invallid HEX")

    // se for 3 digitos, transformar para 6
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2]
        + hex[2]
    }

    // aplicar a formula matemática para aumentar ou diminuir a luz

    // preciso transformar o hex em rgb
    // r = (red) / g = (green) / b = (blue)
    // 0 = bleck
    // 255 = white
    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)

    for (let twoDigit of twoDigitGroup) {
        const numberForHex = parseInt(twoDigit, 16)
        const calculateLuminosity = numberForHex + (luminosity * 255)
        
        const blackOrLuminosity = Math.max(0, calculateLuminosity)
        const whiteOrLuminosity = Math.min(255, calculateLuminosity)

        console.log(blackOrLuminosity)
        console.log(whiteOrLuminosity)
    }
    return hex
}