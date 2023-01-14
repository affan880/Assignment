import { StyleSheet, View, StatusBar,Dimensions } from 'react-native'
import React from 'react'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row } from 'native-base'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')

const Announcement = () => {
    const AnnouncementData = [
        {
            id: 1,
            AnnouncementText: "Employees Are Expected To Clock...",
            AnnouncementTime: "1 hour ago",
            AnnouncementIcon: "clock-time-four-outline",
            AnnouncementIconColor: "red.400",
            AnnouncementIconBgColor: "yellow.300",
            AnnouncementBgColor: "orange.200"
        },
        {
            id: 2,
            AnnouncementText: "Lorem ipsum dolor sit amet...",
            AnnouncementTime: "2 hour ago",
            AnnouncementIcon: "pine-tree",
            AnnouncementIconColor: "red.400",
            AnnouncementIconBgColor: "orange.300",
            AnnouncementBgColor: "red.300"
        },
        {
            id: 3,
            AnnouncementText: "Lorem ipsum dolor sit amet...",
            AnnouncementTime: "3 hour ago",
            AnnouncementIcon: "calendar-check",
            AnnouncementIconColor: "blue.400",
            AnnouncementIconBgColor: "gray.300",
            AnnouncementBgColor: "blue.200"
        },

    ]

    return (
        <Box flex={1} maxH={300} height={300} backgroundColor="gray.300" pt={50} >
            <Box alignItems="center" flexDirection={"row"} justifyContent="center" >
                <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                <Input placeholder="Search" variant="filled" width="75%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon as={Octicons} ml="2" size="4" color="gray.400" name="search" />} />
                <Icon as={MaterialCommunityIcons} ml="2" size="10" color="#00ab55" name="chat" />
            </Box>
            <Box alignItems="center" flexDirection={"row"} justifyContent="space-between" paddingX={5} pt={10}  >
                <Text style={{
                    color: "#000000",
                    fontWeight: "700",
                    fontSize: 18
                }}>Announcements</Text>
                <Text style={{
                    color: "#00ab55",
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                    fontSize: 18
                }} >View All</Text>
            </Box>
            <Box >
                <Box flexDirection="row" paddingX={5} pt={35} width={width} >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} decelerationRate="fast">
                        {
                            AnnouncementData.map((item) => {
                                return (
                                    <Box backgroundColor={item.AnnouncementBgColor} width={width - 70} height={75} borderRadius="20" marginRight={5} justifyContent="center" flexDirection={"row"} key={item.id}>
                                        <Box width={"18%"} height={"80%"} backgroundColor={item.AnnouncementIconBgColor} justifyContent={"center"} ml={5} borderRadius={10} alignItems="center" alignSelf={"center"} >
                                            <Icon as={MaterialCommunityIcons} size="10" color={item.AnnouncementIconColor} name={item.AnnouncementIcon} />
                                        </Box>
                                        <Box width={"70%"} justifyContent={"center"} ml={5} borderRadius={10} alignSelf={"center"} flexDirection="column" >
                                            <Text
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: "700",
                                                    fontSize: 14
                                                }}
                                            >{item.AnnouncementText}</Text>
                                            <Text
                                                style={{
                                                    color: "gray",
                                                    fontWeight: "400",
                                                    fontSize: 12,
                                                    marginTop: 10
                                                }}
                                            >{item.AnnouncementTime}</Text>

                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </ScrollView>
                </Box>
            </Box>
        </Box>
  )
}

export default Announcement

const styles = StyleSheet.create({})