function encodeText(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    const shiftAmount = parseInt(document.getElementById('shiftAmount').value, 10);
    let encodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + shiftAmount) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + shiftAmount) % 26) + 97;
      }
      encodedMessage += String.fromCharCode(charCode);
    }
    document.getElementById('result').innerHTML = `Encoded message: ${encodedMessage}`;
    document.getElementById('result').style.display = 'block';
  }