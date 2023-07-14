import React, {useEffect, useState} from 'react'
import {useTypewriter, Cursor, Typewriter} from 'react-simple-typewriter'
import {Text} from '@nextui-org/react'

export default function AutoTypingField() {

    const strings = ['Full Stack Web Developer.', 'UI/UX Designer.', 'Native Android Developer.', 'Software Developer.'];

    
  return (
    <div>
        <Text h1 size={35}>
            a&nbsp;
            <Typewriter
                words={strings}
                loop
                cursor
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
            />
            
        </Text>
    </div>
  )
}
