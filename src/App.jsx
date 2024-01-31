import { Header } from "./components/Header"; 
import { Post } from "./components/Post";

import "./global.css"

import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      name: "Carlos Freitas",
      role: "Web Developer",
      avatar: "https://avatars.githubusercontent.com/u/93332419?v=4" 
    },
    content: [
      {type: "paragraph", content: "Falaa, galera!"},
      {type: "paragraph", content: "Acaber de subir um projeto, DoctorCare!"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2024-01-31 17:00:00')
  },
  {
    id: 2,
    author: {
      name: "Liz Cabral",
      role: "UI/UX Designer",
      avatar: "https://pbs.twimg.com/profile_images/1747843642528555008/m7Y51Rg1_400x400.jpg" 
    },
    content: [
      {type: "paragraph", content: "Mais um projeto em UX!"},
      {type: "paragraph", content: "Criando novos projetos com UI e UX design!"},
      {type: "link", content: "liz-ui.design"},
    ],
    publishedAt: new Date('2024-01-31 17:00:00')
  }

]

export function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                author = {posts.author}
                role = {posts.author}
                content = {posts.content}
                />
              )
            })}
          </main>
        </div>
    </div>
  )
}


