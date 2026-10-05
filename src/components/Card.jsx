import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({ verb, method, route, description, color, Icon, style }) {
    const href = route ? `/${route}` : `/${method.toLowerCase()}`;

    return (
        <Link href={href} className={styles.card} style={{ ...style, '--card-color': color }}>
            <div className={styles.cardHeader}>
                <Icon color={color} size={32} />
                <h2>
                    {verb} - {method}
                </h2>
            </div>
            <p>{description}</p>
        </Link>
    );
}
