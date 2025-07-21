"use client"
import { WandSparkles, Zap, Share2 } from 'lucide-react';
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import styles from './page.module.css';
import Image from "next/image";

export default function Home() {
  
  const router = useRouter()

  const goToShorten = () =>{
    router.push('/shorten')
  }

  return (
    <div >
      <Navbar/>
      <section className={styles.Homesection} >
        <div className={styles.herosection}>
          <div className={styles.herotext}>
            <h2> Simplify Your Links. Amplify Your Reach. </h2>
            <p> TrimLinker simplifies link management with fast, reliable URL shortening. Turn long URLs 
              into clean, trackable short links you can customize and share easily. Whether you are sharing 
              content or running campaigns, TrimLinker gives you the tools to manage every link all in one 
              streamlined platform.</p>
            <button onClick={goToShorten} > Try Now </button>
          </div>
          <div className={styles.heroimage}>
            <Image src="/shorten-illustration.png" alt="Shorten URL Illustration" width={450} height={300} 
                style={{ objectFit: 'contain' , width: '100%', height: 'auto' 
            }}/>
          </div>
        </div>

        <div className={styles.whyChoose}>
          <h1> Why Choose TrimLinker? </h1>
          <p> Our platform offers more than just shortening. Discover the features that make your links powerful.</p>

          <div className={styles.featurecontainer}>
            <Card icon={WandSparkles}  title="AI Suggestions" 
              description="Get intelligent, relevant short link suggestions based on your URL's content."/>

            <Card icon={Zap}  title="Fast & Reliable" 
              description="Shorten links in an instant and trust that they all work every time, all the time."/>
            <Card icon={Share2} title="Easy Sharing" 
              description="With one-click copy and memorable links, sharing on any platform is effortless."/>
              
          </div>
        </div>

        <div className={styles.stepsSection}>
          <h1 className={styles.stepsTitle} > Get Started in 3 Simple Steps </h1>

          <div className={styles.stepscontainer}>

            <Card  id="1" title="Paste Your URL"
             description="Copy the long link you want to shorten and paste it into our form."/>

            <Card  id="2" title="Generate Link" 
             description="Click the button to shorten it, or get creative suggestions from our AI."/>

            <Card  id="3" title="Copy & Share" 
            description="Copy your new, clean link and share it with the world."/>
          </div>
        </div>

       <footer className={styles.footer}>
        <p className={styles.footerText} >&copy; 2025 TrimLinker. All rights reserved.</p>
       </footer>

      </section>
    </div>
  );
}