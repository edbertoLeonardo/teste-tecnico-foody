import { useEffect, useState } from 'react'

function Pedidos() {
    const [pedidos, setPedidos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        async function carregarPedidos() {
            try {
                const resposta = await fetch(
                    'http://localhost:8080/api/pedidos',
                    {
                        method: 'GET',
                        credentials: 'include',
                    }
                )

                if (resposta.status === 401 || resposta.status === 403) {
                    throw new Error(
                        'A tua sessão não está autenticada. Inicia sessão novamente.'
                    )
                }

                if (!resposta.ok) {
                    throw new Error('Não foi possível carregar os pedidos.')
                }

                const dados = await resposta.json()

                setPedidos(dados)
            } catch (error) {
                setErro(error.message || 'Erro ao comunicar com o servidor.')
            } finally {
                setCarregando(false)
            }
        }

        carregarPedidos()
    }, [])

    if (carregando) {
        return <p>A carregar pedidos...</p>
    }

    if (erro) {
        return <p role="alert">{erro}</p>
    }

    return (
        <main className="pedidos-container">
            <header>
                <h1>Foody</h1>
                <h2>Os meus pedidos</h2>
            </header>

            {pedidos.length === 0 ? (
                <p>Ainda não tens pedidos registados.</p>
            ) : (
                <section className="pedidos-lista">
                    {pedidos.map((pedido) => (
                        <article className="pedido-card" key={pedido.id}>
                            <h3>Pedido #{pedido.id}</h3>

                            <p>
                                <strong>Estado:</strong> {pedido.status}
                            </p>

                            <p>
                                <strong>Endereço de entrega:</strong>{' '}
                                {pedido.enderecoEntrega}
                            </p>

                            <h4>Itens do pedido</h4>

                            <ul>
                                {pedido.itens.map((item) => (
                                    <li key={item.id}>
                                        {item.nomeProduto} — Quantidade:{' '}
                                        {item.quantidade}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>
            )}
        </main>
    )
}

export default Pedidos
