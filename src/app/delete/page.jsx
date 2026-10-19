import Link from 'next/link';

export default function DeletePlaceHolder() {
    return (
        <main>
            <h2>Página que depende da seleção da série pelo usuário</h2>
            <p>Selecione uma série para abrir os detalhes e excluir os dados.</p>
            <Link href="/read">Selecionar série</Link>
        </main>
    );
}
