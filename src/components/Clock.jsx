import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row } from 'native-base'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Clock = () => {
  return (
      <Box height={100} width={'80'} backgroundColor="blue.100" flex={1} mt={50} borderRadius={20} alignSelf={"center"} flexDirection={"row"} alignItems={"center"} px={2} >
          <Icon as={MaterialCommunityIcons} size="6xl" color="blue.400" name="clock-time-four" />
          <Box>
              <Text color={"black"} fontSize={15} fontWeight={'700'}  >{new Date().toLocaleDateString()}</Text>
              <Text color={"black"} fontSize={15} fontWeight={'700'}  >Clock In-hh:mm AM</Text>
              <Text color={"black"} fontSize={15} fontWeight={'700'}  >
                  Clock Out-hh:mm PM
              </Text>
          </Box>
          <Button backgroundColor={"blue.400"} ml={2} borderRadius={15} width={'20'}>
              Clock In
          </Button>
          <Icon as={MaterialCommunityIcons} size="5xl" color="gray.400" name="chevron-right" />
      </Box>
  )
}

export default Clock

const styles = StyleSheet.create({})