import { Box } from '@chakra-ui/react'
import React from 'react'

const InputCompo = () => {
  return (
          <Box border={"1px solid red"}>
              <input type="text" placeholder="Start a new message" style={{padding:"10px",width:"500px"}} />
          </Box>
  )
}

export default InputCompo