import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Startup = () => {
  const [fullText, setFullText] = useState('');
  const [displayedLines, setDisplayedLines] = useState([]);
  const [finished, setFinished] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Fetch the text file when the component mounts
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/Startup.txt`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => setFullText(data))
      .catch((error) => console.error('Error fetching text file:', error));
  }, []);


  useEffect(() => {
    if (!fullText) return;

    const lines = fullText.split('\n');
    let currentLine = 0;

    const addLine = () => {
      setDisplayedLines((prevLines) => [...prevLines, lines[currentLine]]);
      currentLine++;

      if (currentLine < lines.length) {
        // Use a longer delay every 70th line
        const delay = currentLine % 70 === 0 ? 1500 : 20;
        setTimeout(addLine, delay);
      } else {

        setTimeout(() => {
          setTextVisible(false);
          setTimeout(() => {
            setTextVisible(true);
            setTimeout(() => {
              setTextVisible(false);
              setTimeout(() => {
                setTextVisible(true);
                setTimeout(() => {
                  setTextVisible(false);
                  setTimeout(() => {
                    setTextVisible(true);
                    setFinished(true);
                  }, 300);
                }, 300);
              }, 300);
            }, 300);
          }, 300);
        }, 1000);
      }
    };

    addLine();
  }, [fullText]);

  // Auto-scroll to the bottom as new lines are added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);


useEffect(() => {
    if (finished) {
    const timeoutId = setTimeout(() => {
        navigate('/home');
    }, 6000); 
    return () => clearTimeout(timeoutId);
    }
}, [finished, navigate]);

  return (
    <div className="bg-black h-screen w-full flex flex-col justify-end items-center relative">

       {!finished &&( 
      <div 
        ref={containerRef} 
        className="overflow-y-auto w-full p-4" 
        style={{ maxHeight: '100%' }}
      >
        <pre className={`${textVisible ? 'text-white' : 'text-black'} text-[10px] font-mono`}>
          { displayedLines.join('\n')}
        </pre>
      </div>
      )}


{finished && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none animate-[fadeIn_3s_ease-in-out_forwards]">
          <lord-icon
            src="https://cdn.lordicon.com/tyntlpjn.json"
            trigger="loop"
            delay="2000"
            style={{ width: '250px', height: '250px' }}
          ></lord-icon>
          <h1 className="text-white text-5xl mt-4 font-bold">Miles Rudelic</h1>
        </div>
      )}

    </div>
  );
};

export default Startup;
