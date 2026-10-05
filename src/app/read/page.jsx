import SeriesList from '@/components/SeriesList';
import axios from 'axios';

const SERIES_URL =
    process.env.API_URL_SERIES || process.env.NEXT_URL_SERIES || process.env.NEXT_PUBLIC_URL_SERIES;

export default async function ReadPage() {
    let series = [];

    try {
        const resp = await axios.get(`${SERIES_URL}?limit=50`, {
            headers: {
                'x-api-key': process.env.API_KEY,
            },
        });

        series = Array.isArray(resp.data?.data) ? resp.data.data : [];
    } catch (error) {
        console.error('Erro ao buscar séries:', error);
    }

    return (
        <main>
            <h2>Get - Page</h2>
            <p>O servidor chama a API com api-key privada.</p>
            <p>
                Abra o DevTools - Network: a chamada à API não aparece. Clique numa série para
                buscá-la pelo id.
            </p>
            <SeriesList series={series} />
        </main>
    );
}
