
function formatarNomeDog(nome) {

    let nomeFormatado = nome.trim().toLowerCase().replace(/\b\w/g, letra => letra.toUpperCase());
    return nomeFormatado;
  }
  
  let nomesDogs = [
    "   thor ",
    "nanuke ",
    "   chico ",
    " BANDITE ",
    "   Feroz  "
  ];
  

  nomesDogs.forEach(nomeOriginal => {
    let nomeFormatado = formatarNomeDog(nomeOriginal);
    console.log(`Nome Original: "${nomeOriginal}", Nome Formatado: "${nomeFormatado}"`);
  });