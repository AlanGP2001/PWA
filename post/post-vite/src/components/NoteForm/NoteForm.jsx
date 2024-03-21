import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import './NoteForm.css';
import Header from '../Header/Header';
import MiLista from '../List/MiLista';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NoteForm = () => {

    const getTokenNotificacion = async () => {
        const token = await getToken(messaging, {
            vapidKey: 'BKzRa_IiOHb5PAklyDe0oDaA98WqE0-5my8Ou0lSRcfxlJ7GkL6yp-kEH2FXFf20a6sxS1juE5-KS0Vj738I2lM'
        }).catch((error) => console.log('No se pudo obtener el token', error));

        if (token) {
            console.log('Token:', token);
        } else {
            console.log('No se pudo obtener el token');
            console.log('Permiso:', Notification.permission);
        }
    };

    const notificarme = () => {
        if (!window.Notification) {
            console.log('Este navegador no soporta notificaciones');
            return;
        }
        if (Notification.permission === 'granted') {
            console.log('Permiso ya concedido', Notification.permission);
            getTokenNotificacion();
        } else if (Notification.permission !== 'denied' || Notification.permission === 'default') {
            console.log('Solicitando permiso', Notification.permission);
            Notification.requestPermission((permission) => {
                console.log(permission);
                if (permission === 'granted') {
                    getTokenNotificacion();
                }
            });
        }
    };
    notificarme();

    useEffect(() => {
        getTokenNotificacion();
        onMessage(messaging, message => {
            console.log('onMessage:', message);
            toast.info(message.notification.title);
        });
    });

    const [notes, setNotes] = useState([]);
    const [form] = Form.useForm();

    useEffect(() => {
        async function obtenerNotas() {
            try {
                const respuesta = await axios.get('http://localhost:3001/api/note');
                setNotes(respuesta.data);
            } catch (error) {
                console.error('Error al obtener las notas desde el server:', error);
            }
        }

        obtenerNotas();
    }, []);

    const onFinish = async (values) => {
        try {
            const data = {
                title: values.title,
                text: values.note,
            }
            fetch('http://localhost:3001/api/note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(res => {
                    const nuevaNota = res;
                    setNotes([...notes, nuevaNota]);
                    console.log('Nota enviada ...:', values);
                    form.resetFields();
                })

        } catch (error) {
            console.error('Error al guardar la nota:', error);
        }
    };

    return (
        <div className='container'>

            <ToastContainer />

            <Header />

            <Form form={form} name="note-form" onFinish={onFinish} className='Form'
                labelCol={{ flex: '200px' }}
                labelAlign="left"
                labelWrap
                wrapperCol={{ flex: 1 }}
                colon={false}
                style={{ maxWidth: 800, marginTop: '30px' }}
            >
                <Form.Item
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, ingresa un título',
                        },
                    ]}
                >
                    <Input placeholder="Título" />
                </Form.Item>

                <Form.Item
                    name="note"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, ingresa el contenido de tu nota',
                        },
                    ]}
                >
                    <Input placeholder="Post" />
                </Form.Item>

                <Form.Item style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">
                        Publicar
                    </Button>
                </Form.Item>
            </Form>
            <MiLista notes={notes} />
        </div>

    );
};

export default NoteForm;

