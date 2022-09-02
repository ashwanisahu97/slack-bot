
import Navbar from './Components/Navbar';
import React from 'react'
import Homepage from './Components/Homepage';
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <Box>
      <Box>
      <Navbar />
      </Box>
      <Box>
       <Homepage/>
      </Box>
    </Box>
  );
}


export default App;

