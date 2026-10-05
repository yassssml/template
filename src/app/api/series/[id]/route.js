import axios from 'axios';
import { NextResponse } from 'next/server';

const SERIES_URL =
    process.env.API_URL_SERIES || process.env.NEXT_URL_SERIES || process.env.NEXT_PUBLIC_URL_SERIES;

export async function GET(req, context) {
    const { id } = await context.params;

    try {
        const response = await axios.get(`${SERIES_URL}/${id}`, {
            headers: {
                'x-api-key': process.env.API_KEY,
            },
        });

        return NextResponse.json(response.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: 'Erro ao buscar a série.' };

        return NextResponse.json(data, { status });
    }
}

export async function PUT(req, context) {
    const { id } = await context.params;

    try {
        const body = await req.json().catch(() => ({}));

        const response = await axios.put(`${SERIES_URL}/${id}`, body, {
            headers: {
                'x-api-key': process.env.API_KEY,
            },
        });

        return NextResponse.json(response.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: 'Erro ao atualizar a série.' };

        return NextResponse.json(data, { status });
    }
}

export async function DELETE(req, context) {
    const { id } = await context.params;

    try {
        const response = await axios.delete(`${SERIES_URL}/${id}`, {
            headers: {
                'x-api-key': process.env.API_KEY,
            },
        });

        return NextResponse.json(response.data ?? { success: true });
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: 'Erro ao excluir a série.' };

        return NextResponse.json(data, { status });
    }
}
