'use client';
import { Skeleton } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ReadPage() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarSeries() {
            try {
                const response = await axios.get('/api/series?limit=50');
                const result = Array.isArray(response.data) ? response.data : response.data?.data;
                setSeries(Array.isArray(result) ? result : []);
                toast.success('Séries carregadas', { id: 'read' });
            } catch {
                toast.error('Erro ao buscar as séries.', { id: 'read' });
            } finally {
                setLoading(false);
            }
        }
        buscarSeries();
    }, []);

    return (
        <main>
            <h2>Read</h2>
            <p>Selecione uma série para ver os detalhes, editar ou excluir.</p>
            {loading ? (
                <div className="skeleton">
                    <Skeleton active />
                </div>
            ) : series.length > 0 ? (
                <ul>
                    {series.map((item) => (
                        <li key={item.id}>
                            <Link href={`/read/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Sem séries disponíveis no momento.</p>
            )}
        </main>
    );
}
