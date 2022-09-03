import {Login} from "./Components/Login";
import {Register} from "./Components/Register";
import Navbar from './Components/Navbar';
import React from 'react'
import Homepage from './Components/Homepage';
import { Box } from '@chakra-ui/react';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
   

    <Routes>
      <Route path="/" element={<Box><Register/> <Login/></Box>}/>
      <Route path="/dashbord" element={ <Box>
      <Box>
        
      <Navbar />
      </Box>
      <Box>
       <Homepage/>
      </Box>
    </Box>}/>
    </Routes>



  );
}


export default App;

