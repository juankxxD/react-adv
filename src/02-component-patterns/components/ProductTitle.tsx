import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
    title?: string,
    className?: string,
    style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext);
    let titleToShow: string = title ? title : product.title? product.title : ''


    return (
        <span 
        style={style}
        className={`${styles.productDescription} ${className}`}>{titleToShow}</span>
    )
}