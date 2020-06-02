import React from 'react';
import styles from './ListItem.module.sass';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import Title from '../../Title/Title';


const ListItem = ({ image, title, description, link, ...props }) => {

    const ImageTag = image ? 'img' : 'div';

    return (
        <li className={styles.listItem__wrapper}>
            {image && <ImageTag
                src={image}
                alt={title}
                className={image ? styles.listItem__pic : styles.listItem__pic_none}
            />}
            <div>
                <Title>{title}</Title>
                <p className={styles.listItem__description}>{description}</p>
                {link && (<Button href={link}>{image ? 'visit twitter page' : 'visit article page'}</Button>)}
            </div>
        </li>
    );
}
ListItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
}
ListItem.defaultProps = {
    image: null,
    link: null,
}
export default ListItem;
