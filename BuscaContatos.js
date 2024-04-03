class BuscaContatos {
    constructor(gerenciador) {
        this.gerenciador = gerenciador;
    }

    buscarContato(nome) {
        console.log("Buscando contato...");
        this.gerenciador.listarContatos().forEach(contato => {
            if (contato.nome === nome) {
                console.log(`Contato encontrado - Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
            }
        });
        console.log("Busca concluída.");
    }
}

module.exports = BuscaContatos;