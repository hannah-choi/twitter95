import React from "react";
import styles from "./Header.module.scss";

import classNames from "classnames";

type Props = {};
const Header = (props: Props) => {
    return (
        <header>
            <section className={classNames(styles.statusbar, "title-bar")}>
                <p className='title-bar-text'>Twitter 98</p>
                <div className='title-bar-controls'>
                    <button className={styles.controlButton}>
                        <svg width='8' height='2.67' viewBox='0 0 6 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M0 0H6V2H0V0Z' fill='black' />
                        </svg>
                    </button>
                    <button className={styles.controlButton}>
                        <svg width='11' height='11' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0V9H9V0ZM8 2H1V8H8V2Z' fill='black' />
                        </svg>
                    </button>
                    <button className={styles.controlButton}>
                        <svg width='15' height='10.5' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g clip-path='url(#clip0_2214_21)'>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M0 0H2V1H3V2H5V1H6V0H8V1H7V2H6V3H5V4H6V5H7V6H8V7H6V6H5V5H3V6H2V7H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z'
                                    fill='black'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_2214_21'>
                                    <rect width='8' height='7' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </section>
        </header>
    );
};

export default Header;
