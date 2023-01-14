import { StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row } from 'native-base'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import MySpaceAvatar from '../assets/myspace.png'

const { width, height } = Dimensions.get('window')

const Celebrations = () => {
    const celebrationsData = [
        {
            id: 1,
            name: "Shubham",
            avatar: avatar2,
            event: "Birthday",
            bgColor: "green.200",
            textColor: "green.600"
        },
        {
            id: 2,
            name: "Yash",
            avatar: avatar3,
            event: "Marriage Anniversary",
            bgColor: "blue.200",
            textColor: "blue.600"
        },
        {
            id: 3,
            name: "Riku",
            avatar: avatar1,
            event: "Work Anniversary",
            bgColor: "purple.200",
            textColor: "purple.600"
        },
        {
            id: 4,
            name: "Priyank",
            avatar: MySpaceAvatar,
            event: "Kid's Birthday",
            bgColor: "orange.200",
            textColor: "orange.600"
        },
    ]
    
  return (
      <VStack space={4} mt={50} width={width - 20} shadow={7} bg={'white'} rounded={"3xl"} alignSelf={'center'} py={10} >
          <Text px={5} style={{
              color: "#000000",
              fontWeight: "700",
              fontSize: 18
          }}>Celebrations</Text>
          <VStack justifyContent={'center'} alignItems={'center'} space={'12'} mt={6}>
              {
                  celebrationsData.map((item) => {
                      return (
                          <Box flexDirection={'row'} justifyContent={"space-between"} pl={3} alignItems={"center"} backgroundColor={item.bgColor} borderRadius={20} width={width - 30} height={70} key={item.id}>
                              <Text fontSize={15} color={"#000000"} width={84} style={{
                                  fontWeight: "700",
                              }}>{item.event}</Text>
                              <Box width={20} height={'100%'} justifyContent={'center'} alignItems={'center'} >
                                  <Avatar alignSelf="center" bg={item.bgColor} size="xl" position={'absolute'} source={item.avatar} style={{
                                      borderRadius: 50,
                                  }} />
                              </Box>
                              <Text fontSize={20} color={item.textColor} style={{
                                  fontWeight: "700",
                              }}  >{item.name}</Text>
                              <Icon as={MaterialCommunityIcons} size="4xl" color="gray.500" name="chevron-right" />
                          </Box>
                      )
                  })
              }
          </VStack>
      </VStack>
  )
}

export default Celebrations

const styles = StyleSheet.create({})