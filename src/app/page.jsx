"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Button from '@/components/button/Button'
import Button2 from '@/components/button2/Button2'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div>
      {/* start of navbar and herosection */}
      <div className={styles.container}>
        <div>
          <Navbar />
        </div>
        <br /><br />

        <div className={styles.herosec}>
          <div>
            <h1 className={styles.herotext1}>
              Order Amazing <br /> Cakes from Just <br /> ₦9,500
            </h1>
            <br />

            <h2 className={styles.herotext2}>Get Fast Shipping, Free <br /> Delivery and Free Fireworks!</h2>
          </div>

          <div>

          </div>

        </div>

      </div>
      {/* end of hero section */}


      {/* start of first section */}
      <div className={styles.firstcont}>y

        <div className={styles.cont}>
          <div className={styles.textcont}>
            <h3 className={styles.text}>Affordable Cakes</h3>
            <h4 className={styles.text1}>Our cakes are affordable, delicious and <br /> excellent.</h4>
          </div>

          <div className={styles.textcont}>
            <h3 className={styles.text}>Free Fireworks!</h3>
            <h4 className={styles.text1}>We always add free fireworks to any <br /> cake you order from us.</h4>
          </div>

          <div className={styles.textcont}>
            <h3 className={styles.text}>Fastest Free Shipping</h3>
            <h4 className={styles.text1}>We deliver even at the shortest notice <br /> completely free</h4>
          </div>


        </div> <br /><br /> <br />

        <div className={styles.textcont2}>
          <h3 className={styles.text2}>114,844</h3>
          <h4 className={styles.text3}>Successful Cake Deliveries</h4>
        </div>

      </div>

      <hr className={styles.hr} /> <br /><br />

      {/* end of first section */}
      

      {/* start of second section */}
      <div className={styles.sscont}>
        <h3 className={styles.sstext1}>Our Budget Cakes</h3>

        <div className={styles.cont1}>
          <div className={styles.firstcont}>
            <Image src="/firstcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN9,500</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/secondcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Chocolate Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN11,000</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/thirdcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Double Layer Cake</h3>
            <h4 className={styles.conttext1}>NGN19,000</h4>
            <Button />
          </div>
        </div>
        <br /><br /> <br /><br /><br />

        <div className={styles.cont1}>
          <div className={styles.firstcont}>
            <Image src="/fourthcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN9,500</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/fifthcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Chocolate Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN11,000</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/sixthcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Double Layer Cake</h3>
            <h4 className={styles.conttext1}>NGN19,000</h4>
            <Button />
          </div>
        </div>

        <div className={styles.btn}>
          <Button2 text="View now"/>
        </div>
      </div>

      <hr className={styles.hr} />

      {/* emd of second section */}



      {/* start of third section */}
      <div className={styles.sscont}>
        <h3 className={styles.sstext1}>Our Special Cakes</h3>

        <div className={styles.cont1}>
          <div className={styles.firstcont}>
            <Image src="/thirdcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN9,500</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/firstcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Chocolate Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN11,000</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/secondcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Double Layer Cake</h3>
            <h4 className={styles.conttext1}>NGN19,000</h4>
            <Button />
          </div>
        </div>
        <br /><br /> <br /><br /><br />

        <div className={styles.cont1}>
          <div className={styles.firstcont}>
            <Image src="/sixthcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN9,500</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/fourthcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Chocolate Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN11,000</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/fifthcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Double Layer Cake</h3>
            <h4 className={styles.conttext1}>NGN19,000</h4>
            <Button />
          </div>
        </div>

        <div className={styles.btn}>
          <Button2 text="more" />
        </div>
      </div>
      <hr className={styles.hr} />
      {/* end of third section */}


      {/* start of fourthsection */}

      <div className={styles.sscont1}>
        <h3 className={styles.sstext1}>Our Childern's Cakes</h3>

        <div className={styles.cont1}>
          <div className={styles.firstcont}>
            <Image src="/thirdcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN9,500</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/firstcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Chocolate Single Layer Cake- 10 Inches</h3>
            <h4 className={styles.conttext1}>NGN11,000</h4>
            <Button />

          </div>

          <div className={styles.firstcont}>
            <Image src="/secondcake.webp" alt='' height={320} width={250} />
            <br />
            <h4 className={styles.conttext1}>Budget Cakes</h4>
            <h3 className={styles.conttext2}>Vanilla Double Layer Cake</h3>
            <h4 className={styles.conttext1}>NGN19,000</h4>
            <Button />
          </div>
        </div>
        <div className={styles.btn}>
          <Button2 />
        </div>
      </div> <br /><br />
      <hr className={styles.hr} /> 
      {/* end of fourth section */}



      {/* start of the fifth section */}
      <div className={styles.fifthcont}>
        <h3 className={styles.sstext1}>What Others are Saying about Us</h3>
        <br /><br /><br />
        <p className={styles.fifthtext}>Amazing Service, got my order delivered the same day i requested. I could even give more than five stars if it <br /> were possible.</p> <br />

        <h4 className={styles.fifthtext2}>Lawrence A.</h4><br />
        <p className={styles.fifthtext}>Victoria Island</p> <br /><br /><br />

        <p className={styles.fifthtext}>The décor was really beautiful and the cake tasted really nice. It was well appreciated. The delivery was fast and <br /> seamless within a short period of time. Thanks a lot</p> <br />

        <h4 className={styles.fifthtext2}>Fakunmoju A.</h4> <br />
        <p className={styles.fifthtext}>Lagos</p>
        <br /><br /><br />

        <h3 className={styles.sstext1}>Ready to Order?</h3>
        <br />
        <p className={styles.fifthtext}>Just look through our pictures and prices and select a cake.</p> <br />
        <p className={styles.fifthtext}>We will deliver very fast!</p> <br /> <br />
        <div className={styles.btn5cont}>
        <button className={styles.btn5}>Choose a Cake Now</button>
        </div>
        
        <br /><br /><br /><br />
        <hr />

      </div>


      {/* end of the fifth section */}


      {/* start of footer */}

      <Footer/>



    </div>
  )
}
