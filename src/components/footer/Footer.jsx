import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.cont}>

            <div className={styles.cont1}>
                <div className={styles.text1}>
                    <h3 className={styles.firsttext}>Free Fireworks!</h3> <br /><br />
                    <h4 className={styles.sectext}>All our cakes are delivered with free <br />fireworks to make your celebration <br />memorable</h4>

                </div>

                <div className={styles.text2}>
                    <h3 className={styles.firsttext}>We are Social</h3>
                </div>

                <div className={styles.text3}>
                    <h3 className={styles.firsttext}>Our Locations</h3> <br /><br />
                    <h4 className={styles.sectext}>
                        Lekki: 6A Fola Osibo Road, Lekki <br /> Phase 1 <br /> <br />

                        Ikeja: Ikeja Town Square, 131 Obafemi <br /> Awolowo Way, Ikeja <br /><br />

                        Surulere: 53 Adelabu Street, Surulere<br /><br />

                        Ajah: 62 Addo Road, Ajah<br /><br />

                        Ikorodu: 11 Oba Sekumade Road, <br /> Ikorodu<br /><br />

                        Abuja: 22 1st Avenue, Gwarinpa, <br /> Abuja, FCT.<br /><br />

                        Port Harcourt: 61 Woji Road, New <br />GRA, Port Harcourt.<br /><br />

                        Hotline: 09028886690
                    </h4>

                </div>
                <div className={styles.text4}>
                    <h3 className={styles.firsttext}>Important Links</h3> <br /><br />
                    <h4 className={styles.sectext}>About Us <br />
                        Contact Us<br />
                        Privacy Policy<br />
                        Terms & Conditions</h4>

                </div>

            </div>





            <div className={styles.cont2}>
                <h4>Copyright & 2024 Fastest Cakes</h4>
                <h5>A proudly Nigerian brand</h5>

            </div>



        </div>


    )
}

export default Footer