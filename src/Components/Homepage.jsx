
import { AtSignIcon, ChatIcon, ChevronDownIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
function Homepage() {
  return (
    <Box>
        <Flex>
          <Box bg={"#3f0e40"} color={ "#9f87a0 "} w={"350px"} border={"1px solid red"}>
          <Box>
              <Flex gap={ "100px"}>
                  <Box p={ "15px"}><Heading as="h3" color={"white"} size={ "lg"}>FT WEB_17</Heading></Box>
                  <Box borderRadius={"50%"} p={"10px"} pt={ "0px"} bg={"white"} h={"50px"} w={"50px"} mt={ "15px"}>
                      <EditIcon h={"30px"} w={ "30px"} mt={ "10px"} />
                  </Box>
                  </Flex>
        </Box>
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
                  <Heading as="h3" size={ "lg"}>Mentions & reactions</Heading> 
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
                  <span>
                      
                  <i class="fa-regular fa-pen"></i>
                  </span>
              </Box>
                 <Box>
                  <Heading as="h3" size={ "lg"}>Drafts</Heading> 
                  </Box>
              </Flex>
          <Flex gap={"10px"}>
              <Box>
              <i class="fa fa-buildings"></i>
              </Box>
                 <Box>
                  <Heading as="h3" size={ "lg"}>Slack Connects</Heading> 
                  </Box>
              </Flex>
          <Flex gap={"10px"}>
              <Box>
              
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
                  <Flex>
                      <Box>
                      <FontAwesomeIcon icon="fa-regular fa-user-plus" />
                      </Box>
                      <Box></Box>
                </Flex>
              </Box>
          </Box>
   </Box>
          <Box>
            <Box>
              <Flex>
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
                  <Box>
                    <Flex>
                      <Box></Box>
                      <Box></Box>
                    </Flex>
                  </Box>
                </Box>
                </Flex>
              </Box>
          </Box>
        </Flex>
      </Box>
  );
}


export default Homepage;
