import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row } from 'native-base'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import MySpaceAvatar from '../assets/myspace.png'

const { width, height } = Dimensions.get('window')

const MyTeam = () => {
    const PresentData = [
        {
            id: 1,
            name: "Sahil",
            avatar: avatar1,
            position: "Trainee",
            status: "Present",
            statusColor: "green.400",
            avatarBgColor: "yellow.200"
        },
        {
            id: 2,
            name: "Rashmi",
            avatar: avatar3,
            position: "Trainee",
            status: "Present",
            statusColor: "green.400",
            avatarBgColor: "red.200"
        },
        {
            id: 3,
            name: "Manisha",
            avatar: avatar2,
            position: "HR",
            status: "Present",
            statusColor: "green.400",
            avatarBgColor: "purple.200"
        },
        {
            id: 4,
            name: "Abhishek",
            avatar: MySpaceAvatar,
            position: "HR",
            status: "Present",
            statusColor: "green.400",
            avatarBgColor: "green.200"
        },
        {
            id: 5,
            name: "Aditya",
            avatar: avatar3,
            position: "HR",
            status: "Present",
            statusColor: "green.400",
            avatarBgColor: "purple.100"
        },
        {
            id: 6,
            name: "Neeraj",
            avatar: avatar2,
            position: "HR",
            status: "Present",
            statusColor: "green.400",
            avatarBgColor: "orange.200"
        },
    ]
    const AbsentData = [
        {
            id: 2,
            name: "Rashmi",
            avatar: avatar2,
            position: "Trainee",
            status: "Present",
            statusColor: "orange.400",
            avatarBgColor: "red.200"
        },
        {
            id: 3,
            name: "Manisha",
            avatar: avatar3,
            position: "HR",
            status: "Present",
            statusColor: "orange.400",
            avatarBgColor: "purple.200"
        },
        {
            id: 4,
            name: "Abhishek",
            avatar: MySpaceAvatar,
            position: "HR",
            status: "Present",
            statusColor: "orange.400",
            avatarBgColor: "green.200"
        },
        {
            id: 6,
            name: "Neeraj",
            avatar: avatar1,
            position: "HR",
            status: "Present",
            statusColor: "orange.400",
            avatarBgColor: "orange.200"
        },
    ]
    const LeftData = [

        {
            id: 4,
            name: "Abhishek",
            avatar: MySpaceAvatar,
            position: "HR",
            status: "Present",
            statusColor: "red.400",
            avatarBgColor: "green.200"
        },
    ]
    const AllData = [
        {
            id: 1,
            name: "Sahil",
            avatar: avatar2,
            position: "Trainee",
            status: "Present",
            statusColor: "green.400",
            avatarBgColor: "yellow.200"
        },
        {
            id: 2,
            name: "Rashmi",
            avatar: avatar1,
            position: "Trainee",
            status: "Present",
            statusColor: "red.400",
            avatarBgColor: "red.200"
        },
        {
            id: 3,
            name: "Manisha",
            avatar: avatar3,
            position: "HR",
            status: "Present",
            statusColor: "orange.400",
            avatarBgColor: "purple.200"
        },
        {
            id: 4,
            name: "Abhishek",
            avatar: MySpaceAvatar,
            position: "HR",
            status: "Present",
            statusColor: "green.400",
            avatarBgColor: "green.200"
        },
        {
            id: 5,
            name: "Aditya",
            avatar: avatar2,
            position: "HR",
            status: "Present",
            statusColor: "red.400",
            avatarBgColor: "purple.100"
        },
        {
            id: 6,
            name: "Neeraj",
            avatar: avatar1,
            position: "HR",
            status: "Present",
            statusColor: "orange.400",
            avatarBgColor: "orange.200"
        },
    ]


    const [presentColor, setPresentColor] = useState("green.400");
    const [absentColor, setAbsentColor] = useState("orange.100");
    const [leaveColor, setLeaveColor] = useState("red.100");
    const [allColor, setAllColor] = useState("blue.100");

    const [myTeamData, setMyTeamData] = useState(PresentData);
  return (
      <VStack space={4} mt={50} width={width - 20} shadow={7} bg={'white'} rounded={"3xl"} alignSelf={'center'} py={10} >
          <Box alignItems="center" flexDirection={"row"} justifyContent="space-between" paddingX={5} >
              <Text style={{
                  color: "#000000",
                  fontWeight: "700",
                  fontSize: 18
              }}>My Team</Text>
              <Text style={{
                  color: "#00ab55",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                  fontSize: 18
              }} >View All</Text>
          </Box>
          <Box flexDirection={'row'} justifyContent={"space-evenly"} alignItems={"center"}>
              <TouchableOpacity onPress={() => {
                  setPresentColor('green.400');
                  setAbsentColor('orange.100');
                  setLeaveColor('red.100');
                  setAllColor('blue.100')
                  setMyTeamData(PresentData);
                }}
                  style={{
                    width: '20%',
              }}>
              <Box backgroundColor={'green.100'} width={'100%'} height={'10'} borderColor={presentColor} borderWidth={2} borderRadius={10} justifyContent={'center'} alignItems={'center'}  >
                  <Text fontSize={20} fontWeight={'bolder'} color={'green.500'} >P 20</Text>
                  </Box>
              </TouchableOpacity>  
              <TouchableOpacity onPress={() => {
                  setAbsentColor('orange.400');
                  setPresentColor('green.100');
                  setLeaveColor('red.100');
                  setAllColor('blue.100')
                  setMyTeamData(AbsentData);
              }} 
                  style={{
                  width: '20%',
              }}>
              <Box backgroundColor={'orange.100'} width={'100%'} height={'10'} borderColor={absentColor} borderWidth={2} borderRadius={10} justifyContent={'center'} alignItems={'center'}>
                  <Text fontSize={20} fontWeight={'bolder'} color={'orange.500'} >A 20</Text>
                  </Box>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => {
                      setLeaveColor('red.400');
                      setPresentColor('green.100');
                      setAbsentColor('orange.100');
                      setAllColor('blue.100')
                      setMyTeamData(LeftData);
                  }} 
                  style={{
                  width: '20%',
              }}>
              <Box backgroundColor={'red.100'} width={'100%'} height={'10'} borderColor={leaveColor} borderWidth={2} borderRadius={10} justifyContent={'center'} alignItems={'center'} >
                  <Text fontSize={20} fontWeight={'bolder'} color={'red.500'}>L 20</Text>
                  </Box>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  setAllColor('blue.400')
                  setPresentColor('green.100');
                  setAbsentColor('orange.100');
                  setLeaveColor('red.100');
                  setMyTeamData(AllData);
              }} 
                  style={{
                  width: '20%',
              }}>
              <Box backgroundColor={'blue.100'} width={'100%'} height={'10'} borderColor={allColor} borderWidth={2} borderRadius={10} justifyContent={'center'} alignItems={'center'} >
                  <Text fontSize={20} fontWeight={'bolder'} color={'blue.500'} >All 20</Text>
                  </Box>
                </TouchableOpacity>
          </Box>
          {
              myTeamData.map((item) => {
                  return (
                      <Box flexDirection={'row'} justifyContent={"space-evenly"} alignItems={"center"} key={item.id} >
                          <Avatar alignSelf="center" bg={item.avatarBgColor} size="lg" source={item.avatar} style={{
                              borderRadius: 50,
                          }} />
                          <Text fontSize={15} color={"#000000"} >{item.name}</Text>
                          <Text fontSize={15} color={"#000000"} >{item.position}</Text>
                          <Text fontSize={18} color={"#000000"} ><Avatar.Badge bg={item.statusColor} /> {item.status}</Text>
                      </Box>
                  )
              })
          }
      </VStack>
  )
}

export default MyTeam

const styles = StyleSheet.create({})