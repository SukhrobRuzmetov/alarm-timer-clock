function convertToCyrillic() {
    const inputText = document.getElementById('input-text').value;
    const convertedText = latinToCyrillic(inputText);
    document.getElementById('output-text').value = convertedText;
  }

  function latinToCyrillic(text) {
    const latinAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const cyrillicAlphabet = 'абцдефгхижклмнопярстувшжызАБЦДЕФГХИЖКЛМНОПЯРСТУВШЖЫЗ';

    return text.split('').map(char => {
      const index = latinAlphabet.indexOf(char);
      return index !== -1 ? cyrillicAlphabet.charAt(index) : char;
    }).join('');
  }

  function swapText() {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text').value;
    document.getElementById('input-text').value = outputText;
    document.getElementById('output-text').value = inputText;
  }

  function modifyCase(type) {
    const outputText = document.getElementById('output-text');
    switch (type) {
      case 'uppercase':
        outputText.value = outputText.value.toUpperCase();
        break;
      case 'lowercase':
        outputText.value = outputText.value.toLowerCase();
        break;
      case 'capitalize':
        outputText.value = outputText.value.replace(/(^|\s)\S/g, char => char.toUpperCase());
        break;
    }
  }

  function copyToClipboard() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Copied to clipboard!');
  }