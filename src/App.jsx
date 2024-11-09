import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import MallaApp from './Components/mallaApp';


function App() {

  return (
    <MantineProvider>
      <MallaApp />
    </MantineProvider>
  );
}

export default App
