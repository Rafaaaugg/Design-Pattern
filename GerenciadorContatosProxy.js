class GerenciadorContatosProxy {
    constructor(gerenciador) {
        this.gerenciador = gerenciador;
    }

    adicionarContato(contato) {
        console.log("Verificando permissões...");
        this.gerenciador.adicionarContato(contato);
        console.log("Contato adicionado com sucesso.");
    }

    removerContato(nome) {
        console.log("Verificando permissões...");
        this.gerenciador.removerContato(nome);
        console.log("Contato removido com sucesso.");
    }

    listarContatos() {
        console.clear();
        console.log("Lista de Contatos:");
        this.gerenciador.listarContatos().forEach(contato => {
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });
    }
}

module.exports = GerenciadorContatosProxy;