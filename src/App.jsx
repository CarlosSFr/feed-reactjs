import { Header } from "./components/Header"; 
import { Post } from "./components/Post";

import "./global.css"

import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
        
          <Post 
            author="Carlos Freitas"
            content="Ignite, o melhor curso de React do mundo!"
          />
          <Post
            author="Shrek Terceiro"
            content="O melhor filme do Shrek!"
          />
          </main>
        </div>
    </div>
  )
}


