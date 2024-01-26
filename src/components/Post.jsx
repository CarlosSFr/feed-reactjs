import styles from "./Post.module.css";

export function Post(){
    return(
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/93332419?v=4"/>
                        <div className={styles.authorInfo}>
                            <strong>Carlos Freitas</strong>
                            <span>Desenvolvedor de Software</span>
                        </div>
                </div>
                <time dateTime="2024-01-25 22:36:45">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">👉 jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
            </div>

            <div className={styles.comments}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Escreva um comentário..."></textarea>
                <footer><button>Publicar</button></footer>
                
            </div>
        </article>
    )
}