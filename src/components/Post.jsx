import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({author, content, publishedAt}){

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBr
    })
    const publishedRelative = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    const [comments, setComments] = useState([ // Variável que tem seu estado monitorado e atualizado pelo setComments.
        "Que projeto incrível!",
    ])

    const [newCommentText, setNewCommentText] = useState(''); // newCommentText armazena em tempo real tudo que é digitado no textarea.

    function handleNewCommentChange() { // Ação de mudança no textarea, atualiza a variável newCommentText conforme o valor do textarea muda.
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment() { // Ação do Submit, atualiza o vetor comments[] com o newCommentText.
        event.preventDefault();

        setComments([...comments, newCommentText]); // Aqui, o setComments atualiza a variável comments com o valor do textarea.

        setNewCommentText(''); // Aqui, o valor da variável newCommentText é atualizado para uma string vazia dinamicamente.

    }

    function deleteComment(commentToDelete){ // Com essa função, sendo passada para o componente Comment, o Comment (que é o filho) terá acesso a uma função do pai.

        // Imutabilidade: as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória).

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        }) 

        setComments(commentsWithoutDeletedOne)

    }

    function handleInvalidComment(){

        event.target.setCustomValidity("Este campo é obrigatório!");

    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                        return <p key={cont.content}>{cont.content}</p>
                    } else if(cont.type === "link"){
                        return <p key={cont.content}><a href="">{cont.content}</a></p>
                    }

                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comments}>

                <strong>Deixe seu feedback</strong>

                <textarea 
                name = "comment" // Dando um nome para o textarea eu consigo acessar ele através do form pelo evento.
                placeholder = "Escreva um comentário..."
                onChange = {handleNewCommentChange}
                value = {newCommentText} // Linka o valor do textarea com o newCommentText constantemente.
                onInvalid = {handleInvalidComment}
                required
                >
                </textarea>

                <footer>
                    <button 
                    type="submit" 
                    disabled={isNewCommentEmpty}
                    >Publicar
                    </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {  // Nessa função, para cada comment dentro do meu array comments,
                    return  <Comment        //  eu crio uma instância do componente Comment, com o conteúdo da primeira posição do array
                                key={comment}
                                content = {comment}
                                onDeleteComment = {deleteComment} // Passando a função criada no Post para o Comment
                            />
                })}
            </div>

            
        </article>
    )
}