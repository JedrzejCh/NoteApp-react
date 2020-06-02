import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.sass'


const ListWrapper = ({ items }) => (
    <>
        {items.length ? (<ul className={styles.ListWrapper__wrapper}>
            {items.map(item => (
                <ListItem key={item.title} {...item} />
            ))}
        </ul>) : (
                <h2 className={styles.emptyItems}>There is nothing here, add some items!</h2>
            )}
    </>
);

export default ListWrapper;