const form = document.getElementById('form');
const nombre_input = document.getElementById('nombre');
const apellido_m_input = document.getElementById('apellido_m');
const apellido_p_input = document.getElementById('apellido_p');
const fecha = document.getElementById('nacimiento');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombresMayusculas = nombre_input.value.toUpperCase();
    const apellido_mMayusculas = apellido_m_input.value.toUpperCase();
    const apellido_pMayusculas = apellido_p_input.value.toUpperCase();
    const nombres = nombresMayusculas.trim();
    const apellido_m = apellido_mMayusculas.trim();
    const apellido_p = apellido_pMayusculas.trim();
    const fechaNacimiento = fecha.value;
    let nombres_rfc = nombres.slice(0, 1);
    let apellido_m_rfc = apellido_m.slice(0, 2);
    let apellido_p_rfc = apellido_p.slice(0, 1);

    if (apellido_m.length <= 2) {
        apellido_m_rfc = apellido_m.slice(0, 1);
        apellido_p_rfc = apellido_p.slice(0, 1);
        nombres_rfc = nombres.slice(0, 2);
    };

    if (apellido_m.slice(0, 5) === "DE LA") {
        apellido_m_rfc = apellido_m.slice(6);
        apellido_m_rfc = apellido_m_rfc.slice(0, 1);
        apellido_p_rfc = apellido_p.slice(0, 1);
        nombres_rfc = nombres.slice(0, 2);
    };
    
    if (apellido_m_rfc === 'CH' || apellido_m_rfc === 'LL') {
        apellido_m_rfc = apellido_m.slice(0, 1) + apellido_m.slice(2, 3);
    };

    if (nombres.slice(0, 5) === 'MARIA' && nombres.length > 5) {
        nombres_rfc = nombres.slice(6);
        nombres_rfc = nombres_rfc.slice(0, 1);
    };

    if (nombres.slice(0, 4) === 'JOSE' && nombres.length > 4) {
        nombres_rfc = nombres.slice(5);
        nombres_rfc = nombres_rfc.slice(0, 1);
    };

    if (nombres.slice(0, 4) === 'JUAN' && nombres.length > 4) {
        nombres_rfc = nombres.slice(5);
        nombres_rfc = nombres_rfc.slice(0, 1);
    };

    if (nombres.slice(0, 4) === 'MA.' && nombres.length > 4) {
        nombres_rfc = nombres.slice(5);
        nombres_rfc = nombres_rfc.slice(0, 1);
    };

    if (apellido_m === '') {
        apellido_p_rfc = apellido_p.slice(0, 2);
        nombres_rfc = nombres.slice(0, 2);
    }

    if (apellido_p === '') {
        apellido_m_rfc = apellido_m.slice(0, 2);
        nombres_rfc = nombres.slice(0, 2);
    }

    const año = fechaNacimiento.slice(2, 4);
    const mes = fechaNacimiento.slice(5, 7);
    const dia = fechaNacimiento.slice(8, 10);
    const nombreCompleto = `${apellido_m} ${apellido_p} ${nombres}`;


    const anexo1 = {
        ' ': '0',
        '0': '0',
        '1': '1', '2': '2', '3': '3', '4': '4', '5': '5',
        '6': '6', '7': '7', '8': '8', '9': '9', '&': '10',
        'A': '11', 'B': '12', 'C': '13', 'D': '14', 'E': '15', 'F': '16', 'G': '17', 'H': '18', 'I': '19', 'J': '21', 'K': '22', 'L': '23', 'M': '24',
        'N': '25', 'O': '26', 'P': '27', 'Q': '28', 'R': '29', 'S': '32', 'T': '33', 'U': '34', 'V': '35', 'W': '36', 'X': '37', 'Y': '38', 'Z': '39', 'Ñ': '40'
    };

    const anexo2 = {
        0: '1', 1: '2', 2: '3', 3: '4', 4: '5',
        5: '6', 6: '7', 7: '8', 8: '9',
        9: 'A', 10: 'B', 11: 'C', 12: 'D', 13: 'E', 14: 'F', 15: 'G', 16: 'H', 17: 'I', 18: 'J', 19: 'K', 20: 'L', 21: 'M',
        22: 'N', 23: 'P', 24: 'Q', 25: 'R', 26: 'S', 27: 'T', 28: 'U', 29: 'V', 30: 'W', 31: 'X', 32: 'Y', 33: 'Z'
    };

    const anexo3 = {
        '0': '00',
        '1': '01', '2': '02', '3': '03', '4': '04', '5': '05',
        '6': '06', '7': '07', '8': '08', '9': '09', 'A': '10',
        'B': '11', 'C': '12', 'D': '13', 'E': '14', 'F': '15', 'G': '16', 'H': '17', 'I': '18', 'J': '19', 'K': '20', 'L': '21', 'M': '22', 'N': '23', '&': '24',
        'O': '25', 'P': '26', 'Q': '27', 'R': '28', 'S': '29', 'T': '30', 'U': '31', 'V': '32', 'W': '33', 'X': '34', 'Y': '35', 'Z': '36', ' ': '37', 'Ñ': '38'
    };

    const anexoPalabrasInconvenientes = {
        'BUEI': "BUEX", 'BUEY': "BUEX", 'CACA': "CACX", 'CACO': "CACX", 'CAGA': "CAGX", 'CAGO': "CAGX", 'CAKA': "CAKX",
        'COGE': "COGX", 'COJA': "COJX", 'COJE': "COJX", 'COJI': "COJX", 'COJO': "COJX", 'CULO': "CULX", 'FETO': "FETX",
        'GUEY': "GUEX", 'JOTO': "JOTX", 'KACA': "KACX", 'KACO': "KACX", 'KAGA': "KAGX", 'KAGO': "KAGX", 'KOGE': "KOGX",
        'KOJO': "KOJX", 'KAKA': "KAKX", 'KULO': "KULX", 'MAME': "MAMX", 'MAMO': "MAMX", 'MEAR': "MEAX", 'MEON': "MEOX",
        'MION': "MIOX", 'MOCO': "MOCX", 'MULA': "MULX", 'PEDA': "PEDX", 'PEDO': "PEDX", 'PENE': "PENX", 'PUTA': "PUTX",
        'PUTO': "PUTX", 'QULO': "QULX", 'RATA': "RATX", 'RUIN': "RUIX"
    };


    let serieNumerica = '0';

    for (let i = 0; i < nombreCompleto.length; i++) {
        const letra = nombreCompleto[i];
        console.log(letra);
        const numero = anexo1[letra];
        serieNumerica = serieNumerica + numero;
    }

    let productoFinal = 0;

    for (let a = 0; a < serieNumerica.length; a++) {
        const factor1String = serieNumerica.slice(a, a + 2);
        const factor2String = serieNumerica.slice(a + 1, a + 2);
        const factor1 = Number(factor1String);
        const factor2 = Number(factor2String);
        if (factor2 === 0)
            console.log(factor1);
        console.log(factor2);
        const producto = factor1 * factor2;
        console.log(producto);
        productoFinal = productoFinal + producto;
    }

    const ultimos3 = productoFinal.toString().slice(-3);
    const dividendo = Number(ultimos3);
    const cociente = Math.floor(dividendo / 34);
    const residuo = dividendo % 34;
    const homoclaveDigito1 = anexo2[cociente];
    const homoclaveDigito2 = anexo2[residuo];

    let rfcPrimerasLetras = apellido_m_rfc + apellido_p_rfc + nombres_rfc
    
    if(rfcPrimerasLetras in anexoPalabrasInconvenientes){
        rfcPrimerasLetras = anexoPalabrasInconvenientes[rfcPrimerasLetras];
        console.log('Hola');
    }

    const rfcIncompleto = rfcPrimerasLetras + año + mes + dia + homoclaveDigito1 + homoclaveDigito2;

    let serieNumericaRFC = '';

    for (let b = 0; b < rfcIncompleto.length; b++) {
        const letraRFC = rfcIncompleto[b];
        const numeroRFC = anexo3[letraRFC];
        serieNumericaRFC += numeroRFC;
    }
    console.log(rfcIncompleto);
    console.log(serieNumericaRFC);

    let suma = 0;

    for (let c = 0; c < rfcIncompleto.length; c++) {
        const doble = serieNumericaRFC.slice(c * 2, (c * 2) + 2);
        const dobleNumero = Number(doble);
        const formula = dobleNumero * (13 - c);
        suma += formula;
    }

    let digitoVerificador = '';

    const residuoRFC = suma % 11;
    if (residuoRFC === 0) {
        digitoVerificador = 0;
    } else if (residuoRFC === 10) {
        digitoVerificador = 'A';
    } else {
        digitoVerificador = 11 - residuoRFC;
    }

    console.log(digitoVerificador);
    const RFC = rfcIncompleto + String(digitoVerificador);
    console.log(RFC);
});