import React from 'react';
import styles from '../Button/Button.module.sass'

const Button = ({ children, href, mainBtn, ...props }) => {
  // ...props przekazuje wszystkie propsy pozostałe, których nie przekazaliśmy konkretnie po nazwie
  //przy dwóch wariantach wyglądu przycisku można użyć dodatkowego propsa aby warunkowo dodawać style
  const buttonClass = mainBtn ? styles.mainBtn : styles.button;

  return (
    <>
      {/* WARUNKOWE DOSTOSOWANIE BUTTONA W ZALEZNOSCI CZY MA BYC LINKIEM CZY BUTTONEM - SPRAWDZAMY CZY POSIADA ATRYBUT href ; props children dostosowyje tresc button w zalenosci od tego czego potrzebujemy */}
      {
        href ? (
          <a
            href={href}
            target='_blank'
            rel="noopener noreferrer"
            className={buttonClass}>
            {children}
          </a>
        ) : (
            <button
              className={buttonClass} {...props}>
              {children}
            </button>
          )
      }
    </>
  )
}


export default Button;