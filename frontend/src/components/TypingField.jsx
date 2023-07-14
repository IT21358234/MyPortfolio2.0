import React, { useState, useEffect } from 'react';
import { Grid, Text } from '@nextui-org/react';
import BlinkingCursor from './BlinkingCursor';

const strings = ['Full Stack Web Developer.', 'UI/UX Designer.', 'Native Android Developer.', 'Software Developer.'];
const typingSpeed = 200; // Speed in milliseconds for each character

function TypingField() {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState('');

  useEffect(() => {
    const typeString = () => {
      if (currentString.length === strings[currentStringIndex].length) {
        setTimeout(() => {
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
          setCurrentString('');
        }, 3000);
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
      <Grid.Container justify='space-between'>
        <Grid>
          <Text h1 size={35}>a {currentString} </Text>
        </Grid>
        <Grid>
        <Text h1 size={35}><BlinkingCursor/></Text>
        </Grid>
      </Grid.Container>
      
    </div>
  );
}

export default TypingField;
