import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row } from 'native-base'

const { width, height } = Dimensions.get('window')

const MyTasks = () => {
    const Data = [
        {
        title: "Attendance",
        count: 17,
        color: "purple.300"
        },
        {
            title: "Leave",
            count: 8,
            color: "blue.300"
        },
        {
            title: "Job Offers",
            count: 11,
            color: "red.300"
        },
        {
            title: "Interview Schedules",
            count: 4,
            color: "yellow.300"
        },
    ]
  return (
      <VStack space={4} mt={50} width={width - 20} shadow={7} bg={'white'} rounded={"3xl"} alignSelf={'center'} py={10} mb={10} >
          <Text px={5} style={{
              color: "#000000",
              fontWeight: "700",
              fontSize: 18
          }}>My Tasks</Text>
          <VStack justifyContent={'center'} alignItems={'center'} space={2} mt={6}>
              {
                  Data.map((item) => {
                      return (
                          <Box flexDirection={'row'} justifyContent={"space-between"} px={5} alignItems={"center"} backgroundColor={"white"} borderColor={item.color} borderWidth={1} borderRadius={20} width={width - 60} height={70} key={Math.random()} >
                              <Text fontSize={15} color={"#000000"} width={"60%"} style={{
                                  fontWeight: "700",
                              }}>{item.title}</Text>
                              <Text fontSize={15} color={'gray.500'} width={"20%"}>{item.count}</Text>
                              <Text color={'green.600'} fontSize={15} textDecorationLine={'underline'} fontWeight={'700'}>View</Text>
                          </Box>
                      )
                  })
             }
          </VStack>
      </VStack>
  )
}

export default MyTasks

const styles = StyleSheet.create({})