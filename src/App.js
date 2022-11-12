import Square from './Square';
import Input from './Input';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <main className="App">
      <Square
        color={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        color={color}
        setColor={setColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  );
}

export default App;
