import Head from 'next/head';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function App() {
  const [adjective, setAdjective] = useState('開心');
  const [verb, setVerb] = useState('喜歡');
  const [noun, setNoun] = useState('海');

  const fetchData = async (e) => {
    const res = await axios("api/phrases");

    if (e.target.id === 'adjective') {
     setAdjective(res.data.phrases.adjective);
    }

    if (e.target.id === 'verb') {
     setVerb(res.data.phrases.verb);
    } 

    if (e.target.id === 'noun') {
     setNoun(res.data.phrases.noun);
    }
  }

  return (
    <div>
      <style jsx global>{`
      body {
        margin: 0;
      }
      `}</style>
      <Head>
        <title>海是要寫一點吧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bg}></div>

      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <div id='verb' className={styles.card} onClick={fetchData}>{ verb }</div>
          <div id='adjective' className={styles.card} onClick={fetchData}>{ adjective }</div>
          <div id='noun' className={styles.card} onClick={fetchData}>{ noun }</div>
        </div>
      </div>
    </div>
  )
}
