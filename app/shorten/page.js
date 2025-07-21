"use client"
import React from 'react'
import { useState,useRef} from 'react'
import { useRouter } from 'next/navigation';
import { Copy} from "lucide-react";
import styles from './page.module.css';

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shortUrl, setshortUrl] = useState("")
    const [longUrl, setlongUrl] = useState("")
    const [isGenerated, setisGenerated] = useState(false)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const router = useRouter();
    const buttonRef = useRef();
    
    const handleClick = () =>{
        if(url.trim() === "")
        {
            setisGenerated(false)
            setError("The URL field is required.");
            return
        }
        setLoading(true); // disables button
        fetchUrl();
    }

    const handleKeydown =(e) => {
       if (e.key === 'Enter') 
          buttonRef.current.click();
    }

     const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 285); // revert after 1s
    };

    const fetchUrl = async () => {
        try{
          
          setError(null);
          const startTime = Date.now();
          
          let urlToShorten = url.trim();
          // .test() is JS method used with regular expressions (regex)
          //It returns true if the pattern matches the given string, otherwise false

          //Add https protocol if is not there
          if (!/^https?:\/\//i.test(urlToShorten))
         {
           urlToShorten = "https://" + urlToShorten;
         }

          //Check if it is already a shortened URL
          if (/^https?:\/\/(www\.)?tinyurl\.com\/.+$/i.test(urlToShorten)) 
          {
            throw new Error("URL is already shortened.");
          }

          //Simple validation to check URL pattern
          const validURLPattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
          if (!validURLPattern.test(urlToShorten)) 
          {
            throw new Error("Invalid URL format.");
          }

          const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlToShorten)}`)
          const data = await response.text();

          //This runs to ensure Minimum 1second to wait when api gives answer less than 1second.
          const elapsedTime = Date.now() - startTime;
          const minimumWait = 1000; // 1 second
        
          if (elapsedTime < minimumWait) {
            await new Promise(resolve => setTimeout(resolve, minimumWait - elapsedTime));
          }

          console.log(data);
          setshortUrl(data);
          setlongUrl(urlToShorten)
          setisGenerated(true)
          seturl("")
        }
        catch(error)
        {
           router.push('/error');
           console.error("Error fetching URL:", error);
           seturl("")
           setisGenerated(false)
           setshortUrl(""); 
           setlongUrl(""); 
        }
        finally {
        setLoading(false);  // re-enable button always
        }
    }

  return (
    < div className={styles.container}>
       <h1 className={styles.heading}> Shorten Your Link Instantly </h1>
       <p className={styles.subheading} >Trim down your long URLs into custom links you can share anywhere in seconds.</p>
       <div className={styles.inputSection}>
          <input type="text" 
            placeholder="Enter your long link here" 
            value={url}
            onKeyDown={handleKeydown}
            onChange={(e)=> {seturl(e.target.value); setError(null); setisGenerated(false) }}
            className={styles.inputField} />
            {error && <span className={styles.error}>{error}</span>}
          <button ref= {buttonRef} disabled= {loading } className={styles.generateBtn}  onClick= {handleClick}> 
             {loading ? ' Generating.... ': ' Generate' } </button>
       </div>

        {isGenerated && (
        <div className={styles.resultSection}>
           <h4 className={styles.resultHeading}>Shortened Link</h4>
           <div className={styles.shortUrlBox}>

              <input type="text" value={shortUrl} readOnly className={styles.shortUrlInput} />

              <span title={copied ? "Copied!" : "Copy to clipboard"} style={{ display: "inline-block", 
                    cursor: "pointer" }}  onClick={handleCopy} className={styles.copyIcon}>
                <Copy size={17} style={{color: copied ? "#10B981" : "#6B7280",
                transition:"transform 0.2s ease, color 0.2s ease",transform: copied ? "scale(1.2)" : "scale(1)",}}/>
              </span>

            </div>

           <p className={styles.Urlpara} >Original Url: <span className={styles.originalUrl}>{longUrl}</span></p>
        </div>
        )}
    </div>
  )
}
export default Shorten