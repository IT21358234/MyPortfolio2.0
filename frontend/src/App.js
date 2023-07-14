
import './App.css';
import Body from './components/Body';

import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"
import {useState} from 'react';

const lightTheme = createTheme({
  type: 'light',
  theme: {
   colors:{
   }
  },
  
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    
  }
})

function App() {
  const [isDark, setIsDark] = useState(true)

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
