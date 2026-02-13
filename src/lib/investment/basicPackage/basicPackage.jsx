import { useEffect, useState } from 'react';

function BasicPackage() {

    const [pacotes, setPacotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // URL da sua planilha via OpenSheet
        const url = "https://opensheet.elk.sh/1_r21VCtPgOCeudcsY1PqKANn1Kgg_BiFx8hWXUVYu30/Página1!A3:Z";

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPacotes(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erro ao carregar planilha:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Carregando propostas...</p>;

    return (
        <>
            <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                {pacotes.map((item, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                        <h2>{item["Quantidade postagens"]} Postagens</h2>
                        <p>Carrosséis: {item["Carrosseis"]}</p>
                        <p><strong>Preço: R$ {item["Preco"]}</strong></p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BasicPackage