'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function SeriesList({ series = [] }) {
    useEffect(() => {
        if (!Array.isArray(series) || series.length === 0) {
            return;
        }

        sessionStorage.setItem('series', JSON.stringify(series));
        toast.success('Series buscadas via SSR e salvas no sessionStorage!', { id: 'ssr' });
    }, [series]);

    if (!Array.isArray(series) || series.length === 0) {
        return <p>Sem séries disponíveis no momento.</p>;
    }

    return (
        <ul>
            {series.map((item) => (
                <li key={item.id} style={{ marginBottom: '0.5rem' }}>
                    <Link
                        href={`/read/${item.id}`}
                        style={{
                            color: '#0b57d0',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
