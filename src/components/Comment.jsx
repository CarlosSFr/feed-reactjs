import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment(){
    return (
    <div className={styles.comment}>
        <img src="https://avatars.githubusercontent.com/u/93332419?v=4" alt="" />
        <div className={styles.commentBox}>
            <div  className={styles.commentContent}>
                <header>
                    <div className={styles.commentStrongTime}>
                        <strong>Carlos Freitas</strong>
                        <time dateTime="2024-01-25 22:36:45">Cerca de 2h atrás</time>
                    </div>
                    <button>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>Parabéns pelo projeto, ficou muito bom!</p>
            </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>12</span>
                    </button>
                </footer>
        </div>
    </div>

    )
}