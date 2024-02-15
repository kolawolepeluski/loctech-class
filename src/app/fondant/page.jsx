"use client"
import React, { useState } from 'react'
import styles from './page.module.css'

const Fondant = () => {
  const [showNav, setShowNav] = useState(false);
  function showNavHandler() {
    setShowNav(true)
  }

  function closeNavHandler() {
    setShowNav(false)
  }



  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.logHolder}>
          <h2>Logo</h2>
        </div>


        <div className={styles.links}>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
        <ImCart />

        <div className={styles.ham} onClick={showNavHandler}>
          <GiHamburger />
        </div>
      </div>

      {
        showNav &&

        <div className={styles.mobNav}>

          <div className={styles.Mlinks}>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
            <GiCardboardBoxClosed onclick={closeNavHandler} />

          </div>
        </div>




      }










    </div>
  )
}

export default Fondant