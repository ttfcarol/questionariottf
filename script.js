function submitForm(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const satisfacao = document.getElementById('satisfacao').value;
    const melhorias = document.getElementById('melhorias').value;

    // Cria o objeto de dados para enviar
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('satisfacao', satisfacao);
    formData.append('melhorias', melhorias);

    // Envia os dados para o Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycby2L3J7To5cVQbSn_q0kKMRfJe60yLYVrdKfL9njoY6Gt-zVRWpCC5j_k9DhHLEdnXN7Q/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'sucesso') {
            showPopup(); // Exibe o pop-up de sucesso
        }
    })
    .catch(error => console.error('Erro:', error));
}

function showPopup() {
    document.getElementById("popup").style.display = "flex"; // Esconde o formulário
    document.getElementById("popup").style.display = "flex"; // Exibe o pop-up
}

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Fecha o pop-up
}
