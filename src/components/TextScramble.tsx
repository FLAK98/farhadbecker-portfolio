import React, { useEffect, useState, useCallback } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

export const TextScramble: React.FC<TextScrambleProps> = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = 30;
    const interval = setInterval(() => {
      const progress = frame / totalFrames;
      const scrambled = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i / text.length < progress) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(scrambled);
      frame++;

      if (frame > totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

 useEffect(() => {
  const startScramble = () => {
    setIsAnimating(true);
    scramble();
  };

  // run once after delay
  const initialTimeout = setTimeout(startScramble, delay);

  // then repeat every 10 seconds
  const interval = setInterval(() => {
    startScramble();
  }, 4000);

  return () => {
    clearTimeout(initialTimeout);
    clearInterval(interval);
  };
}, [scramble, delay]);

  return (
    <span className={`${className} ${isAnimating ? 'font-mono' : ''}`}>
      {displayText || ' '}
    </span>
  );
};
