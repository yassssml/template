import axios from 'axios';
import Link from 'next/link';

export default async function Series() {
    let series = [];

    try {
        const response = await axios.get(`${process.env.NEXT_URL_SERIES}?limit=50`, {
            headers: {
                'x-api-key': process.env.API_KEY,
            },
        });
        series = Array.isArray(response.data?.data) ? response.data.data : [];
    } catch (error) {
        console.error('Erro ao buscar séries', error);
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
