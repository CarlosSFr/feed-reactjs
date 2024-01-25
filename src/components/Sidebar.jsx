import styles from "./Sidebar.module.css";
import "../global.css";

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile-background" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/93332419?v=4"/>

                <strong>Carlos Freitas</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="">Editar seu perfil</a>
            </footer>
        </aside>

    )
}