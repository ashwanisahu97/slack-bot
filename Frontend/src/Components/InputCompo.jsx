import { Box,Flex } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend } from "react-icons/ai"
const InputCompo = () => {
  return (
    <Box borderRight={"2px solid grey"}>
      <Flex>
        <Box><input type="text" placeholder="Start a new message" style={{ padding: "10px", width: "500px" }} />
        </Box>
        <Box>
              <AiOutlineSend size={"35px"} style={{paddingTop:"10px"}}/>
              </Box>
      </Flex>  
        </Box>
  )
}

export default InputCompo