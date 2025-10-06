function generarConsecutivo(dataconsecutivo) {
    var num = parseInt(dataconsecutivo, 10);
    if (isNaN(num)) num = 0;
    num += 1;
    var consecutivo = String(num);

    // Rellenar con ceros a la izquierda hasta 10 caracteres
    if (consecutivo.length < 10) {
        consecutivo = '0'.repeat(10 - consecutivo.length) + consecutivo;
    } else if (consecutivo.length > 10) {
        // Si excede, tomar los últimos 10 dígitos
        consecutivo = consecutivo.slice(-10);
    }
    return consecutivo;
}

function validarCedula(cedula) {
    cedula = cedula.replace(/[\s-]/g, '');
    const targetLen = 12;
    if (cedula.length > targetLen) {
        cedula = cedula.slice(-targetLen);
    } else if (cedula.length < targetLen) {
        cedula = cedula.padStart(targetLen, '0');
    }
    return cedula;
}

function generarFecha(fecha) {
    if (!fecha || typeof fecha !== 'string') return '';
    var m = fecha.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return '';
    var anio = m[1];
    var mes = m[2];
    var dia = m[3];
    return dia + mes + anio.slice(-2);
}


    