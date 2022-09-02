import { Box,Flex } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend } from "react-icons/ai"
const InputCompo = () => {


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
        <Box><input 
        
        type="text" placeholder="Start a new message" style={{ padding: "10px", width: "500px" }} />
        </Box>
        <Box>
              <AiOutlineSend size={"35px"} style={{paddingTop:"10px"}}/>
              </Box>
      </Flex>  
        </Box>
  )
}

export default InputCompo