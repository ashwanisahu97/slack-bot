import {Login} from "./Components/Login";
import {Register} from "./Components/Register";
import Navbar from './Components/Navbar';
import React from 'react'
import Homepage from './Components/Homepage';
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <Box>
      <Box>
        <Login/>
        <Register />
      <Navbar />
      </Box>
      <Box>
       <Homepage/>
      </Box>
    </Box>
  );
}


export default App;

