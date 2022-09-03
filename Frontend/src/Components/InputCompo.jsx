import { Box,Flex ,Input} from '@chakra-ui/react'

import React,{useState} from 'react'
import {AiOutlineSend } from "react-icons/ai" 

const InputCompo = ({add}) => {


  const [taskname, settaskname] = useState("")
 
  // const params=useParams()
  // const {id}=params
  // const userId=id
  
  const handletaskname = (e) => {
      settaskname(e.target.value)
  }

  const handleSubmit = async () => {

      const payload ={
          taskname,
        //  userId
      }
      add(payload)
  }






  return (
    <Box borderRight={"2px solid grey"}>
      <Flex>
        <Box>
        <Input type="text" 
        placeholder="Start a new message" 
        style={{padding:"10px",width:"500px"}}
         onChange={handletaskname}/>
        </Box>
        <Box border="1px solid red" onClick={handleSubmit}>
              <AiOutlineSend size={"35px"} style={{paddingTop:"10px"}}/>
              </Box>
      </Flex>  
        </Box>
  )
}

export default InputCompo