import React, { useState, useEffect } from 'react';
import { Text } from '@nextui-org/react';

const strings = ['Full Stack Web Developer', 'UI/UX Designer', 'Native Android Developer', 'Software Developer'];
const typingSpeed = 100; // Speed in milliseconds for each character

function TypingField() {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState('');

  useEffect(() => {
    const typeString = () => {
      if (currentString.length === strings[currentStringIndex].length) {
        setTimeout(() => {
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
          setCurrentString('');
        }, 1000);
      } else {
        setTimeout(() => {
          setCurrentString((prevString) => {
            const nextCharacter = strings[currentStringIndex][prevString.length];
            return prevString + nextCharacter;
          });
        }, typingSpeed);
      }
    };

    typeString();

    return () => {
      clearTimeout();
    };
  }, [currentString, currentStringIndex]);

  return (
    <div>
      <Text h1 size={35}>a {currentString}</Text>
    </div>
  );
}

export default TypingField;
