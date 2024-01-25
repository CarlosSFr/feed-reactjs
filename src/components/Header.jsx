import styles from "./Header.module.css"

import logoHeader from "../assets/logo-header.png"

export function Header(){
    return (
        <header className={styles.header}>
            {/* <strong >Ignite Feed</strong> */}
            <img src={logoHeader} alt="Logo" />
        </header>
    );
}