import React, {useState, useEffect} from "react"; 

import { AtSignIcon, ChatIcon, ChevronDownIcon, EditIcon,AttachmentIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading,Text } from '@chakra-ui/react'
import InputCompo from "./InputCompo";
import { useParams,useNavigate } from "react-router-dom";
import { BsFillEmojiSmileFill} from "react-icons/bs"
import {MdKeyboardVoice} from "react-icons/md"
import { BsPencil} from "react-icons/bs"
import { BsThreeDotsVertical} from "react-icons/bs"
import { RiCommunityLine} from "react-icons/ri"
import { AiOutlineUserAdd} from "react-icons/ai"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,
  WrapItem
} from '@chakra-ui/react'



function Homepage() {

  const token = localStorage.getItem("token")
  const {id} = useParams();
  const [data , setData]=useState([])
  const userId=id;
  const navigate=useNavigate()
   const getNotes = async() => {
      
       await fetch(`http://localhost:8080/general/read`, {
           method : "GET",
           headers: {
               "Content-Type" : "application/json",
               userId
           }, 
       })
       .then((res) => res.json())
       .then((res) => {
           setData([...res]);
       })
       .catch((err) => console.log(err)) 
   }
   const getAdd=async(payload)=>{
     await fetch("http://localhost:8080/general/create", {
           method : "POST",
           body : JSON.stringify(payload),
           headers: {
               "Content-Type" : "application/json",
           }, 
       }).then((res)=>{
         getNotes()
       }).catch((err)=>{
           alert("something went wrong")
       })
   }
   useEffect(() => {
     getNotes()
   }, [])

  console.log(data)
  const editing=(edit)=>{
navigate(`/notes/${id}/${edit}`)
  }
  const Delete=async(noteId)=>{
   await fetch(`http://localhost:8080/general/${noteId}/delete`, {
     method : "DELETE",
     body : JSON.stringify({userId}),
     headers: {
         "Content-Type" : "application/json",
         "Authorization" : `Bearer ${localStorage.getItem("token")}`
     }, 
 }).then((res)=>{
   getNotes()
 }).catch((err)=>{
     alert("something went wrong")
 })
}
  return (
    <Box>
        <Flex>
        <Box bg={"#3f0e40"} color={"#9f87a0 "} w={"350px"}>
              <Flex gap={ "100px"}>
                  <Box p={ "15px"}><Heading as="h3" color={"white"} size={ "lg"}>FT WEB_17</Heading></Box>
                  <Box borderRadius={"50%"} p={"10px"} pt={ "0px"} bg={"white"} h={"50px"} w={"50px"} mt={ "15px"}>
                      <EditIcon h={"30px"} w={ "30px"} mt={ "10px"} />
                  </Box>
                  </Flex>
          <Flex gap={"10px"}>
              <Box>
                  <ChatIcon w={"30px"} h={"30px"} mt={ "7px"} />
              </Box>
                 <Box>
                  <Heading as="h3" size={ "lg"}>Thread</Heading> 
                  </Box>
              </Flex>
          <Flex gap={"10px"}>
              <Box>
                  <AtSignIcon w={"30px"} h={"30px"} mt={ "7px"} />
              </Box>
                 <Box>
                  <Heading as="h3" size={ "lg"}>Mentions</Heading> 
                  </Box>
              </Flex>
          <Flex gap={"10px"}>
              <Box color={"red"}>
                  
              </Box>
                 <Box>
                  <Heading as="h3" size={ "lg"}></Heading> 
                  </Box>
              </Flex>
          <Flex gap={"10px"}>
              <Box>
              <BsPencil size={"35px"} style={{paddingTop:"10px"}}/>
              </Box>
                 <Box>
                  <Heading as="h3" size={ "lg"}>Drafts</Heading> 
                  </Box>
              </Flex>
          <Flex gap={"10px"}>
              <Box>
              <RiCommunityLine size={"35px"} style={{paddingTop:"10px"}}/>
              </Box>
                 <Box>
                  <Heading as="h3" size={ "lg"}>Slack Connects</Heading> 
                  </Box>
              </Flex>
          <Flex gap={"10px"}>
              <Box>
              <BsThreeDotsVertical size={"35px"} style={{paddingTop:"10px"}}/>
              </Box>
                 <Box>
                  <Heading as="h3" size={ "lg"}>more</Heading> 
                  </Box>
              </Flex>
          <Flex gap={"10px"}>
              <Box>
              <i class="fa fa-buildings"></i>
              </Box>
                 <Box>
                    <Box>
                  <Heading as="h3" size={ "lg"}>Channels </Heading> 
                  </Box>
                  <Box>
                      <Text fontSize={ "25px"}># general</Text>
                  </Box>
                  </Box>
          </Flex>
          <Box>
              <Box>
                  <Heading as="h3" size={ "lg"}> Direct Messages </Heading> 
              </Box>
              <Box>
                          <Flex gap={ "3"}  mb={ "10px"}>
                      <Box>
                                  <Avatar size={ "sm"} name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
                      </Box>
                      <Box>
                                  <Text fontStyle={"bold"}  fontSize={ "20px"}>Kola Tioluwani </Text>
                      </Box>
                </Flex>
                          <Flex gap={ "3"}  mb={ "10px"}>
                      <Box>
                                  <Avatar size={ "sm"} name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                      </Box>
                      <Box>
                                  <Text fontStyle={"bold"}  fontSize={ "20px"}>Prosper Otemuyiwa </Text>
                      </Box>
                </Flex>
                          <Flex gap={"3"} mb={ "10px"}>
                      <Box>
                                  <Avatar size={ "sm"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                      </Box>
                      <Box>
                                  <Text fontStyle={"bold"}  fontSize={ "20px"}>Segun Adebayo </Text>
                      </Box>
                </Flex>
              </Box>
          </Box>
   </Box>
              <Box w={"1200px"}>
              <Flex justify={"space-between"}>
                <Box>
          <Menu>
              <MenuButton fontSize={ "25px"} as={Button} rightIcon={<ChevronDownIcon />}>
    # general
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
                  </Menu>
                </Box>

                  <Box>
                          <Flex borderRadius={"10px"} border={"1px solid grey"} p={ "2px"}>
                              <Box p={ "2px"}><Wrap fontSize={ "16px"}>
  <WrapItem>
    <Avatar size='xs' name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </WrapItem>
  <WrapItem>
    <Avatar size='xs' name='Christian Nwamba' src='https://bit.ly/code-beast' />
  </WrapItem>
  <WrapItem>
    <Avatar size='xs' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  </WrapItem>
</Wrap></Box>
                                      <Box borderRadius={"5px"} border={"1px solid grey"} p={ "2px"}>
                                         <Text>206</Text>
                      </Box>
                      <Box borderRadius={"5px"} border={"1px solid grey"} p={ "2px"}> <AiOutlineUserAdd size={"30px"} style={{paddingTop:"2px"}}/> </Box>
                    </Flex>
                      </Box>
          </Flex>

{/* content box */}
          <Box p={"10px"} m={ "20px"}>
            <Flex gap={ "300px"} border={"2px solid"}>
              <Box h={"40px"} p={"5px"} border={"3px solid yellow"} borderRadius={ "10px"}>
                <Text>Hello</Text>
              </Box>
              <Box border={"2px solid yellow"} mt={"40px"} p={ "5px"} borderRadius={ "10px"} >
               <Text> Good Morning </Text>
                </Box>
            </Flex>
</Box>

          <Box ml={ "550px"} mt={"60vh"}>
            <Flex borderRadius={"10px"} border={ "2px solid grey"}>
              <Box><BsFillEmojiSmileFill size={"35px"} style={{paddingTop:"10px"}}/></Box>
              <Box><AttachmentIcon w={"30px"} h={ "30px"} pt={ "10px"} /></Box>
              <Box>        
          <InputCompo/>
              </Box>
              <Box>
              <MdKeyboardVoice size={"35px"} style={{paddingTop:"10px"}}/>
              </Box>
            </Flex>
        </Box>
        </Box>
       
                </Flex>
      </Box >
            
  );
}



export default Homepage;
