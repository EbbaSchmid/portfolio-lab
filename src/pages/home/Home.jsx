import styles from "./Home.module.css"
import React from 'react'

const Home = () => {
  return ( 
    <main className={styles.home}>
    <>
    <h1>Home</h1>
    <h2>Ebba S</h2>
    <img id="headshot"src='./images/headshot.jpg' alt='headshot'></img>
  
    <p>I'm here</p>
    </>
    </main>
  );
}

export default Home;