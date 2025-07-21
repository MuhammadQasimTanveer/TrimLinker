"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css';

const Error = () => {
    const router = useRouter()

    const goToShorten = () =>{
    router.push('/shorten')
  }

  return (
    <div className={styles.errorpage}>
      <div className={styles.topBar}>
        <h1 className={styles.heading}>TrimLinker</h1>
      </div>

      <div className={styles.errorCard}>

      <h2 className={styles.subheading}>
        Something went wrong while creating your short URL.
      </h2>

      <ul className={styles.errorList}>
        <li>The URL is invalid or improperly formatted.</li>
        <li>The website is offline or not responding.</li>
        <li>The URL may be flagged as spam or unsafe.</li>
        <li>This URL has already been shortened recently.</li>
        <li>You have reached the limit for shortening URLs in a short time.</li>
        <li>Something went wrong on our end. Please try again.</li>
      </ul>

        <button className={styles.backBtn}  onClick={goToShorten}> Go back and try agian </button>
      </div>
      
    </div>
  )
}
export default Error