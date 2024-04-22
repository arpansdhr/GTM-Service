import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
  '√ MERN Stack Web Developer',
  '√ WordPress Web Developer',
  '√ Python Web Developer',
  '√ PHP Web Developer',
  '√ SEO'
];

const Transition = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearInterval(intervalId);
  }, []);

  const textStyle = {
    position: 'relative',
    fontSize: '1.5rem',
    color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
  };

  return (
    <>
      <h1>
        <TextTransition springConfig={presets.wobbly} style={textStyle}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    </>
  );
};

export default Transition;
