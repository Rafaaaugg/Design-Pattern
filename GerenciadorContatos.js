class GerenciadorContatos {
    constructor() {
        this.listaContatos = [];
    }

    adicionarContato(contato) {
        this.listaContatos.push(contato);
    }

    removerContato(nome) {
        this.listaContatos = this.listaContatos.filter(contato => contato.nome !== nome);
    }

    listarContatos() {
        return this.listaContatos;
    }
}

module.exports = GerenciadorContatos;