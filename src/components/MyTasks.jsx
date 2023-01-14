import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row } from 'native-base'

const { width, height } = Dimensions.get('window')

const MyTasks = () => {
  return (
      <VStack space={4} mt={50} width={width - 20} shadow={7} bg={'white'} rounded={"3xl"} alignSelf={'center'} py={10} mb={10} >
          <Text px={5} style={{
              color: "#000000",
              fontWeight: "700",
              fontSize: 18
          }}>My Tasks</Text>
          <VStack justifyContent={'center'} alignItems={'center'} space={2} mt={6}>
              <Box flexDirection={'row'} justifyContent={"space-between"} px={5} alignItems={"center"} backgroundColor={"white"} borderColor={'purple.300'} borderWidth={1} borderRadius={20} width={width - 60} height={70} >
                  <Text fontSize={15} color={"#000000"} style={{
                      fontWeight: "700",
                  }}>Attendance</Text>
                  <Text fontSize={15} color={'gray.500'}>17</Text>
                  <Text color={'green.600'} fontSize={15} textDecorationLine={'underline'} fontWeight={'700'}>View</Text>
              </Box>
              <Box flexDirection={'row'} justifyContent={"space-between"} px={5} alignItems={"center"} backgroundColor={"white"} borderColor={'blue.300'} borderWidth={1} borderRadius={20} width={width - 60} height={70} >
                  <Text fontSize={15} color={"#000000"} style={{
                      fontWeight: "700",
                  }}>Leave</Text>
                  <Text fontSize={15} color={'gray.500'}>8</Text>
                  <Text color={'green.600'} fontSize={15} textDecorationLine={'underline'} fontWeight={'700'}>View</Text>
              </Box>
              <Box flexDirection={'row'} justifyContent={"space-between"} px={5} alignItems={"center"} backgroundColor={"white"} borderColor={'red.300'} borderWidth={1} borderRadius={20} width={width - 60} height={70} >
                  <Text fontSize={15} color={"#000000"} style={{
                      fontWeight: "700",
                  }}>Job Offers</Text>
                  <Text fontSize={15} color={'gray.500'}>11</Text>
                  <Text color={'green.600'} fontSize={15} textDecorationLine={'underline'} fontWeight={'700'}>View</Text>
              </Box>
              <Box flexDirection={'row'} justifyContent={"space-between"} px={5} alignItems={"center"} backgroundColor={"white"} borderColor={'yellow.300'} borderWidth={1} borderRadius={20} width={width - 60} height={70} >
                  <Text fontSize={15} color={"#000000"} style={{
                      fontWeight: "700",
                  }}>Interview Schedule</Text>
                  <Text fontSize={15} color={'gray.500'}>4</Text>
                  <Text color={'green.600'} fontSize={15} textDecorationLine={'underline'} fontWeight={'700'}>View</Text>
              </Box>
          </VStack>
      </VStack>
  )
}

export default MyTasks

const styles = StyleSheet.create({})