import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.containers}>
        <div className={styles.imgholder}>
          <Image src="/logo.png.webp" className={styles.img} width={100} height={100} alt=''/>
        </div>

        <div className={styles.links}>
            <Link className={styles.link} href="/christmas">Christmas cakes</Link>
            <Link className={styles.link} href="/budget">Budget cakes</Link>
            <Link className={styles.link} href="/special">Special cakes</Link>
            <Link className={styles.link} href="/fondant">Fondant</Link>
            <Link className={styles.link} href="/weddings">Weddings</Link>
            <Link className={styles.link} href="/all">ALL</Link>

         
        </div>
 

    </div>
  )
}

export default Navbar