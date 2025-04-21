import React, { useEffect, useState } from 'react'

const TextChange = () => {
    const texts = ["Hi, I am Ayush Mahapatra", "I am a Frontend Developer", "I am a Software Developer"];
    const [currentText, setCurrentText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isForward, setIsForward] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          const fullText = texts[textIndex];
    
          if (isForward) {
            setCharIndex((prev) => {
              const next = prev + 1;
              if (next > fullText.length + 5) { // small pause after full text
                setIsForward(false);
              }
              return next;
            });
          } else {
            setCharIndex((prev) => {
              const next = prev - 1;
              if (next <= 0) {
                setIsForward(true);
                setTextIndex((prev) => (prev + 1) % texts.length); // cycle through texts
              }
              return next;
            });
          }
    
          setCurrentText(fullText.substring(0, charIndex));
        }, 100);
    
        return () => clearInterval(interval);
      }, [charIndex, isForward, textIndex, texts]);
  return (
    <div className='transition ease duration-200 overflow-hidden '>
        {currentText}

    </div>
  )
}

export default TextChange