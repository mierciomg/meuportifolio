function contarAcessos() {
    // Recupera o valor atual de acessos do localStorage, ou define como 0 se não existir
    let acessos = localStorage.getItem('contadorAcessos') || 0;

    // Incrementa o contador
    acessos++;

    // Armazena o novo valor no localStorage
    localStorage.setItem('contadorAcessos', acessos);

    // Exibe o número de acessos
    document.getElementById("contador").innerText = `Número de acessos: ${acessos}`;
}

// Chama a função ao carregar a página
contarAcessos();