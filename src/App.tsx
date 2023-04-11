import React from 'react';
import './App.css';
import { Text } from './components/Text';

function App() {

  const Emphasis = ({children}: {children: React.ReactNode}) => {
    return <em style={{background: 'yellow'}}>{children}</em>
  }
  
  return (
    <div className="App">
      <Text as="a" href="http://google.com/">Iyiola Osuagwu dd</Text>
      <Text as="h6">Iyiola Osuagwu</Text>
      <Text as="button">Iyiola Osuagwu</Text>
      <Text as={Emphasis}>Iyiola Osuagwu</Text>
      <Text>Iyiola Osuagwu</Text>
    </div>
  );
}

export default App;
 