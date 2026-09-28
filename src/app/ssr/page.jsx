import SeriesList from '../../components/SeriesList';
import axios from 'axios';

export default async function GetPage() {
    let series = [];

    try {
        const resp = await axios.get(`${process.env.API_URL_SERIES}?limit=50`, {
            headers: {
                'x-api-key': process.env.API_KEY,
            },
        });

        series = resp.data.data;
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
