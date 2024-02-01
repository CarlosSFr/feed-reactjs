import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useState } from "react";

export function Comment({ content, onDeleteComment }){ // Aqui, estou resgatando a função do Post

    function handleDeleteComment(){

        onDeleteComment(content); // Com isso, estou passando o conteúdo do comentário como parâmetro para a função do Post ao clicar no botão do Comment

    }

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeCount(){

        setLikeCount(likeCount + 1);

    }

    return (
    <div className={styles.comment}>
        <Avatar src="https://avatars.githubusercontent.com/u/93332419?v=4"/>
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.commentStrongTime}>
                        <strong>Carlos Freitas</strong>
                        <time dateTime="2024-01-25 22:36:45">Cerca de 2h atrás</time>
                    </div>
                    <button onClick = {handleDeleteComment}>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
        </div>
    </div>

    )
}