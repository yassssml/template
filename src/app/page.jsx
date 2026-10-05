import React from 'react';
import { examples, crud } from '@/data/crud';
import styles from './page.module.css';
import Card from '../components/Card';

export default function Page() {
    return (
        <>
            <main className={styles.main}>
                {examples.map(({ id, method, route, verb, description, color, Icon }) => (
                    <Card
                        key={id}
                        id={id}
                        verb={verb}
                        method={method}
                        route={route}
                        description={description}
                        color={color}
                        Icon={Icon}
                    />
                ))}
                {crud.map(({ id, method, route, verb, description, color, Icon }) => (
                    <Card
                        key={id}
                        id={id}
                        verb={verb}
                        method={method}
                        route={route}
                        description={description}
                        color={color}
                        Icon={Icon}
                    />
                ))}
            </main>
            <footer className={styles.footer}>
                <p>Codeverse &copy; {new Date().getFullYear()}</p>
                <p>Next.js - Axios - Ant Design - Lucite</p>
            </footer>
        </>
    );
}
