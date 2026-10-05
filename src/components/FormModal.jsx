'use client';

import { Form, Input, InputNumber, Modal } from 'antd';

export default function FormModal({ openModal, serie, confirmLoading, onSubmit, onCancel }) {
    const [form] = Form.useForm();

    return (
        <Modal
            open={openModal}
            title={serie ? 'Editar  série' : 'Cria nova série'}
            centered
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={confirmLoading}
            destroyOnHidden>
            <Form form={form} layout="vertical" initialValues={serie} onFinish={onSubmit}>
                <Form.Item
                    name="title"
                    label="Título"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'Título deve ter entre 3 e 120 caracteres.',
                        },
                    ]}>
                    <Input placeholder="ex: Breaking Bad" />
                </Form.Item>
                <Form.Item
                    name="genero"
                    label="Gênero"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'Gênero é obrigatório',
                        },
                    ]}>
                    <Input placeholder="ex: Não Binario" />
                </Form.Item>
                <Form.Item
                    name="plataforma"
                    label="Plataforma"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'Plataforma é obrigatória',
                        },
                    ]}>
                    <Input placeholder="ex: HBO" />
                </Form.Item>
                <Form.Item
                    name="numero_temporadas"
                    label="Temporadas"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            message: 'O número de temporadas deve ser um valor positivo',
                        },
                    ]}>
                    <InputNumber
                        placeholder="ex: 67"
                        min={1}
                        max={5000}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    name="ano_lancamento"
                    label="Ano de Lançamento"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            message: 'O ano de lançamento deve ser um valor positivo',
                        },
                    ]}>
                    <InputNumber
                        placeholder="ex: 1978"
                        min={1}
                        max={2100}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    name="imageUrl"
                    label="Url da Imagem"
                    rules={[
                        {
                            type: 'url',
                            message: 'Deve ser uma URL valida',
                        },
                    ]}>
                    <Input placeholder="ex: https://codeverse.dev.br/breaking_bad.png" />
                </Form.Item>
            </Form>
        </Modal>
    );
}
