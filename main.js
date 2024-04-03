const readline = require('readline');
const Contato = require('./Contato');
const GerenciadorContatos = require('./GerenciadorContatos');
const GerenciadorContatosProxy = require('./GerenciadorContatosProxy');
const BuscaContatos = require('./BuscaContatos');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gerenciador = new GerenciadorContatos();
const gerenciadorProxy = new GerenciadorContatosProxy(gerenciador);
const buscaContatos = new BuscaContatos(gerenciador);

function exibirMenu() {
    console.log("\nEscolha uma opção:");
    console.log("1. Adicionar Contato");
    console.log("2. Remover Contato");
    console.log("3. Listar Contatos");
    console.log("4. Buscar Contato");
    console.log("5. Sair");
}

function iniciarInterface() {
    exibirMenu();

    rl.question("Opção: ", function(opcao) {
        switch (opcao) {
            case '1':
                adicionarContato();
                break;
            case '2':
                removerContato();
                break;
            case '3':
                listarContatos();
                break;
            case '4':
                buscarContato();
                break;
            case '5':
                rl.close();
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    });
}

function adicionarContato() {
    rl.question("Nome: ", function(nome) {
        rl.question("Telefone: ", function(telefone) {
            rl.question("Email: ", function(email) {
                const contato = new Contato(nome, telefone, email);
                gerenciadorProxy.adicionarContato(contato);
                iniciarInterface();
            });
        });
    });
}

function removerContato() {
    rl.question("Nome do contato a ser removido: ", function(nome) {
        gerenciadorProxy.removerContato(nome);
        console.log("Contato removido com sucesso.");
        iniciarInterface();
    });
}

function listarContatos() {
    gerenciadorProxy.listarContatos();
    iniciarInterface();
}

function buscarContato() {
    rl.question("Nome do contato a ser buscado: ", function(nome) {
        buscaContatos.buscarContato(nome);
        iniciarInterface();
    });
}

iniciarInterface();