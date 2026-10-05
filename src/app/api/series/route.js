import axios from 'axios';
import { NextResponse } from 'next/server';

const SERIES_URL =
    process.env.API_URL_SERIES || process.env.NEXT_URL_SERIES || process.env.NEXT_PUBLIC_URL_SERIES;

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    try {
        const resp = await axios.get(SERIES_URL, {
            params: Object.fromEntries(searchParams),
            headers: { 'x-api-key': process.env.API_KEY },
        });
        return NextResponse.json(resp.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: 'Erro ao buscar as séries.' };

        return NextResponse.json(data, { status });
    }
}

export async function POST(req) {
    try {
        const body = await req.json().catch(() => ({}));

        const resp = await axios.post(SERIES_URL, body, {
            headers: { 'x-api-key': process.env.API_KEY },
        });

        return NextResponse.json(resp.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: 'Erro ao criar a série.' };

        return NextResponse.json(data, { status });
    }
}
