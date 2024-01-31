import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

export function Post({author, content, publishedAt}){
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBr
    })

    const publishedRelative = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    return(
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarURL} />
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                </div>
                <time dateTime={publishedAt.toISOString()}>
                    {publishedRelative}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(cont => {
                    if(cont.type === "paragraph"){
                        return <p>{cont.content}</p>
                    } else if(cont.type === "link"){
                        return <p><a href="">{cont.content}</a></p>
                    }

                })}
            </div>

            <form className={styles.comments}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Escreva um comentário..."></textarea>
                <footer><button>Publicar</button></footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

            
        </article>
    )
}