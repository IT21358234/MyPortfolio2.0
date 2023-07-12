import logo from './logo.svg';
import './App.css';
import Body from './components/Body';

import { Switch, changeTheme, useTheme, styled, Text, Spacer} from '@nextui-org/react'
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"
import {useEffect, useState} from 'react';

const lightTheme = createTheme({
  type: 'light',
  theme: {
   
  },
  
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    
  }
})

function App() {
  const [isDark, setIsDark] = useState(true)
  const [getIsDark, setGetIsDark] = useState('')
  const dark = localStorage.getItem('isDarkLocal')

  useEffect(() => {
    setGetIsDark(localStorage.getItem('isDarkLocal'))
  }, []);

  const handleChangeIsDark = () => {
    setIsDark(!isDark)
  }

  return (
    <div >
      <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
        <Body onToggleTheme={handleChangeIsDark}/>
      </NextUIProvider>
    </div>
  );
}

export default App;
