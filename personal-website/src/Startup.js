import React, { useState, useEffect, useRef } from 'react';

const Startup = () => {
  const [fullText, setFullText] = useState('');
  const [displayedLines, setDisplayedLines] = useState([]);
  const containerRef = useRef(null);

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

        const delay = currentLine % 70 === 0 ? 1500 : 20;
        setTimeout(addLine, delay);
      }
    };
  
    addLine(); 
  

  }, [fullText]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div className="bg-black h-screen w-full flex flex-col justify-end">
      <div 
        ref={containerRef} 
        className="overflow-y-auto w-full p-4"
        style={{ maxHeight: '100%' }} 
      >
        <pre className="text-white text-[8px] font-mono">
          {displayedLines.join('\n')}
        </pre>
      </div>
    </div>
  );
};

export default Startup;
