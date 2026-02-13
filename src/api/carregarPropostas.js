async function carregarPropostas() {
    const url = "https://opensheet.elk.sh/1_r21VCtPgOCeudcsY1PqKANn1Kgg_BiFx8hWXUVYu30/Página1!A3:Z";

    try {
        const response = await fetch(url);
        const dados = await response.json();

        // Aqui você percorre os pacotes da planilha
        const container = document.getElementById("meu-portifolio");

        dados.forEach(pacote => {
            const html = `
        <div class="card">
          <h3>${pacote["Quantidade postagens"]} Postagens</h3>
          <p>Carrosséis: ${pacote["Carrosseis"]}</p>
          <span class="preco">R$ ${pacote["Preco"]}</span>
        </div>
      `;
            container.innerHTML += html;
        });
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}

carregarPropostas();