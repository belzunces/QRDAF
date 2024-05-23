document.getElementById('qr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const qrText = document.getElementById('qr-input').value;
    const qrResult = document.getElementById('qr-result');
    qrResult.innerHTML = ''; // Limpiar el resultado anterior

    const qrCode = new QRCode(qrResult, {
        text: qrText,
        width: 128,
        height: 128
    });
});
