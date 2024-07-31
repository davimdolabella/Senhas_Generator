window.onload = () => {
    // Seleciona os elementos da interface
    var gerar_button = document.getElementById('gerar_button');
    var tamanho = document.getElementById('tamanho');
    var display = document.getElementById('senha');
    var check_letras = document.getElementById('letras');
    var check_numeros = document.getElementById('numeros');
    var check_simbolos = document.getElementById('simbolos');
    var select_mmm = document.getElementById('mmm');
    var copiar = document.getElementById('copiar');
    var senha = '';

    // Função para gerar a senha com base nas opções selecionadas
    function gerar_senha() {
        // Senha com letras, números e símbolos
        if (check_simbolos.checked && check_numeros.checked && check_letras.checked) {
            for (let i = 0; i < tamanho.value; i++) {
                let n = Math.floor((Math.random() + 1 / 3) * 3);
                let s;
                switch (n) {
                    case 3:
                        s = Math.floor((Math.random() + 4.8) * 10);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 97 / 29) * 29);
                        break;
                    case 1:
                        s = Math.floor((Math.random() + 33 / 63) * 63);
                        break;
                }
                // Garante que o caractere é ASCII visível
                if (s >= 32 && s <= 126) {
                    senha += String.fromCharCode(s);
                }
            }
        }
        // Senha com números e símbolos
        else if (check_simbolos.checked && check_numeros.checked) {
            for (let i = 0; i < tamanho.value; i++) {
                let n = Math.floor((Math.random() + 1 / 4) * 4);
                let s;
                switch (n) {
                    case 4:
                        s = Math.floor((Math.random() + 4.8) * 10);
                        break;
                    case 3:
                        s = Math.floor((Math.random() + 5.5) * 6);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 1.6) * 25);
                        break;
                    case 1:
                        s = Math.floor((Math.random() + 18.2) * 5);
                        break;
                }
                if (s >= 32 && s <= 126) {
                    senha += String.fromCharCode(s);
                }
            }
        }
        // Senha com letras e símbolos
        else if (check_simbolos.checked && check_letras.checked) {
            for (let i = 0; i < tamanho.value; i++) {
                let n = Math.floor((Math.random() + 1 / 3) * 3);
                let s;
                switch (n) {
                    case 3:
                        s = Math.floor((Math.random() + 33 / 15) * 15);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 58 / 38) * 38);
                        break;
                    case 1:
                        s = Math.floor((Math.random() + 97 / 29) * 29);
                        break;
                }
                if (s >= 32 && s <= 126) {
                    senha += String.fromCharCode(s);
                }
            }
        }
        // Senha apenas com símbolos
        else if (check_simbolos.checked) {
            for (let i = 0; i < tamanho.value; i++) {
                let n = Math.floor((Math.random() + 1 / 4) * 4);
                let s;
                switch (n) {
                    case 4:
                        s = Math.floor((Math.random() + 33 / 15) * 15);
                        break;
                    case 3:
                        s = Math.floor((Math.random() + 58 / 7) * 7);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 91 / 5) * 5);
                        break;
                    case 1:
                        s = Math.floor((Math.random() + 123 / 3) * 3);
                        break;
                }
                if (s >= 32 && s <= 126) {
                    senha += String.fromCharCode(s);
                }
            }
        }
        // Senha com números e letras
        else if (check_numeros.checked && check_letras.checked) {
            for (let i = 0; i < tamanho.value; i++) {
                let n = Math.floor((Math.random() + 1 / 3) * 3);
                let s;
                switch (n) {
                    case 3:
                        s = Math.floor((Math.random() + 65 / 26) * 26);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 4.8) * 10);
                        break;
                    case 1:
                        s = Math.floor((Math.random() + 97 / 26) * 26);
                        break;
                }
                if (s >= 32 && s <= 126) {
                    senha += String.fromCharCode(s);
                }
            }
        }
        // Senha apenas com números
        else if (check_numeros.checked) {
            for (let i = 0; i < tamanho.value; i++) {
                let s;
                s = Math.floor((Math.random() + 4.8) * 10);
                if (s >= 32 && s <= 126) {
                    senha += String.fromCharCode(s);
                }
            }
        }
        // Senha apenas com letras
        else if (check_letras.checked) {
            for (let i = 0; i < tamanho.value; i++) {
                let n = Math.floor((Math.random() + 1 / 3) * 3);
                let s;
                switch (n) {
                    case 3:
                        s = Math.floor((Math.random() + 65 / 26) * 26);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 65 / 26) * 26);
                        break;
                    case 1:
                        s = Math.floor((Math.random() + 97 / 26) * 26);
                        break;
                }
                if (s >= 32 && s <= 126) {
                    senha += String.fromCharCode(s);
                }
            }
        }

        // Aplica as transformações de maiúsculas/minúsculas conforme a seleção
        if (select_mmm.value == 'mai') {
            display.innerHTML = senha.toUpperCase();
        } else if (select_mmm.value == 'min') {
            display.innerHTML = senha.toLowerCase();
        } else {
            display.innerHTML = senha;
        }

        // Limpa a variável senha para o próximo uso
        senha = '';
    }

    // Popula o dropdown de tamanhos com opções de 1 a 50
    for (let i = 1; i < 51; i++) {
        tamanho.innerHTML += `<option>${i}</option>`;
    }

    // Associa o clique no botão de gerar senha à função gerar_senha
    gerar_button.onclick = () => {
        gerar_senha();
    };

    // Função para copiar a senha gerada para a área de transferência
    copiar.onclick = () => {
        display.style.color = 'green';
        setTimeout(() => display.style.color = '', 1500);

        // Copia a senha para a área de transferência
        navigator.clipboard.writeText(display.innerHTML).then(() => {
            alert('Senha Copiada!');
        }).catch(err => {
            console.error('Erro ao copiar a senha:', err);
        });
    };
};