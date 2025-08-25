class Parquimetro {
  constructor(tabelaPrecos) {
    this.tabelaPrecos = tabelaPrecos; // tabela de preços e tempos
  }

  calcular(valorInserido) {
    if (valorInserido < 1) {
      return { mensagem: "Valor insuficiente", tempo: 0, troco: valorInserido };
    }

    let tempo = 0;
    let valorGasto = 0;

    // percorre a tabela e define o tempo
    for (let preco of this.tabelaPrecos) {
      if (valorInserido >= preco.valor) {
        tempo = preco.tempo;
        valorGasto = preco.valor;
      }
    }

    let troco = (valorInserido - valorGasto).toFixed(2);

    return {
      mensagem: `Tempo: ${tempo} min`,
      tempo: tempo,
      troco: troco
    };
  }
}

// tabela de preços do parquímetro
const tabelaPrecos = [
  { valor: 1.00, tempo: 30 },
  { valor: 2.00, tempo: 60 },
  { valor: 3.00, tempo: 90 },
  { valor: 5.00, tempo: 120 }
];

// instância do parquímetro
const parquimetro = new Parquimetro(tabelaPrecos);

// eventos
document.getElementById("calcular").addEventListener("click", () => {
  const valor = parseFloat(document.getElementById("valor").value);
  const resultado = parquimetro.calcular(valor);

  document.getElementById("resultado").innerHTML = `
    <p>${resultado.mensagem}</p>
    ${resultado.tempo > 0 ? `<p>Troco: R$ ${resultado.troco}</p>` : ""}
  `;
});