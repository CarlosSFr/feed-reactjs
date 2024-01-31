
import styles from "./Avatar.module.css";

export function Avatar(props){
    return(
        <img 
        className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={props.src}
        />
    );
}
//OUTRAS FORMAS

// export function Avatar({hasBorder = true, src}){ //desestruturação do JavaScript
//     return(
//         <img 
//         className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
//         src={src}
//         />
//     );
// }