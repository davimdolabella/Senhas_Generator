window.onload = () =>{
    var gerar_button = document.getElementById('gerar_button');
    var tamanho = document.getElementById('tamanho');
    var display = document.getElementById('senha');
    var check_letras = document.getElementById('letras');
    var check_numeros = document.getElementById('numeros');
    var check_simbolos = document.getElementById('simbolos');
    var senha = '';
    function gerar_senha(){
        //tudo 
        if(check_simbolos.checked && check_numeros.checked  && check_letras.checked){
            for(let i = 0; i < tamanho.value;i++){
                let n = Math.floor((Math.random() + 1/3) * 3);
                let s;
                switch (n){
                    case 3:
                        s = Math.floor((Math.random() + 4.8) * 10)
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 97/29) * 29)
                        break;
                    case 1 :
                        s = Math.floor((Math.random() + 33/63) * 63)
                        break;
                }
                if (s >= 32 && s <= 126) { // Garantir que s seja um caractere ASCII visível
                    senha += String.fromCharCode(s);
                }
            }
        }else if(check_simbolos.checked && check_numeros.checked){
            for(let i = 0; i < tamanho.value;i++){
                let n = Math.floor((Math.random() + 1/4) * 4 );
                let s;
                switch (n){
                    case 4:
                        s = Math.floor((Math.random() + 4.8) * 10)
                        break;
                    case 3:
                        s = Math.floor((Math.random() + 5.5) * 6)
                        break;
                    case 2 :
                        s = Math.floor((Math.random() + 1.6) * 25)
                        break;
                    case 1:
                        s = Math.floor((Math.random() + 18.2) * 5)
                        break;
                }
                if (s >= 32 && s <= 126) { 
                    senha += String.fromCharCode(s);
                }   
            }
        }else if(check_simbolos.checked && check_letras.checked){
            for(let i = 0; i < tamanho.value;i++){
                let n = Math.floor((Math.random() + 1/3) * 3 );
                let s;
                switch (n){
                    case 3:
                        s = Math.floor((Math.random() + 33/15) * 15)
                        console.log(n);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 58/38) * 38)
                        console.log(n);
                        break;
                    case 1 :
                        s = Math.floor((Math.random() + 97/29) * 29)
                        console.log(n);
                        break;
                }
                if (s >= 32 && s <= 126) { 
                    senha += String.fromCharCode(s);
                }   
            }
        }else if(check_simbolos.checked){
            for(let i = 0; i < tamanho.value;i++){
                let n = Math.floor((Math.random() + 1/4) * 4 );
                let s;
                switch (n){
                    case 4:
                        s = Math.floor((Math.random() + 33/15) * 15)
                        break;
                    case 3:
                        s = Math.floor((Math.random() + 58/7) * 7)
                        break;
                    case 2 :
                        s = Math.floor((Math.random() + 91/5) * 5)
                        break;
                    case 1:
                        s = Math.floor((Math.random() + 123/3) * 3)
                        break;
                }
                if (s >= 32 && s <= 126) { 
                    senha += String.fromCharCode(s);
                }  
            }
        }else if(check_numeros.checked && check_letras.checked){
            for(let i = 0; i < tamanho.value;i++){
                let n = Math.floor((Math.random() + 1/3) * 3 );
                let s;
                switch (n){
                    case 3:
                        s = Math.floor((Math.random() + 65/26) * 26)
                        console.log(s,n);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 4.8) * 10)
                        console.log(s,n);
                        break;
                    case 1 :
                        s = Math.floor((Math.random() + 97/26) * 26)
                        console.log(s,n);
                        break;
                }
                if (s >= 32 && s <= 126) { 
                    senha += String.fromCharCode(s);
                }  
            }
        }else if(check_numeros.checked){
            for(let i = 0; i < tamanho.value;i++){
                let s;
                s = Math.floor((Math.random() + 4.8) * 10)
                if (s >= 32 && s <= 126) { 
                    senha += String.fromCharCode(s);
                }  
            }
        }else if(check_letras.checked){
            for(let i = 0;i < tamanho.value; i++){
                let n = Math.floor((Math.random() + 1/3) * 3 );
                let s;
                switch (n){
                    case 3:
                        s = Math.floor((Math.random() + 65/26) * 26)
                        console.log(s,n);
                        break;
                    case 2:
                        s = Math.floor((Math.random() + 65/26) * 26)
                        console.log(s,n);
                        break;
                    case 1 :
                        s = Math.floor((Math.random() + 97/26) * 26)
                        console.log(s,n);
                        break;
                }
                if (s >= 32 && s <= 126) { 
                    senha += String.fromCharCode(s);
                } 
            }
        }
        
        console.log(senha);
        display.innerHTML = senha;
        senha = '';
    }
    for(let i = 1; i < 51;i++){
        tamanho.innerHTML += `
        <option>${i}</option>`
    }
    display.onclick = () =>{
        gerar_senha();
    }
    

};