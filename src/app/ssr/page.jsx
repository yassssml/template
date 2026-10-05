import SeriesList from '@/components/SeriesList';
import axios from 'axios';

const SERIES_URL =
    process.env.API_URL_SERIES || process.env.NEXT_URL_SERIES || process.env.NEXT_PUBLIC_URL_SERIES;

export default async function GetPage() {
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
            <h2>Busca feita pelo servidor com api-key privada</h2>
            <p>DevTools - Network: nem aparece, pois acontece no servidor</p>
            <p>Axios.get direto na API</p>

            <SeriesList series={series} />
        </main>
    );
}
