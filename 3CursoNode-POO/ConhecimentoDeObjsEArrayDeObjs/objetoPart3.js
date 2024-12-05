// Objeto representando um usuário com permissões
const usuario = {
  nome: "Alice",
  idade: 25,
  isAdmin: true, // Propriedade booleana indicando se o usuário é um administrador
  apelido: "Lice"
};

console.log(usuario);
delete usuario.apelido;
console.log(usuario);

// Exemplo de uso em uma condição
if (usuario.isAdmin) {
  console.log(`${usuario.nome} tem permissões de administrador.`);
} else {
  console.log(`${usuario.nome} não é um administrador.`);
}
