import { StatusBar, Dimensions, LogBox, Animated, StyleSheet } from 'react-native'
import React,{useRef, useState} from 'react'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row  } from 'native-base'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MySpaceAvatar from "../../assets/myspace.png"
import Announcement from '../../components/Announcement'
import RecentlyJoined from '../../components/RecentlyJoined'
import MyTeam from '../../components/MyTeam'
import QuickLinks from '../../components/QuickLinks'
import Celebrations from '../../components/Celebrations'
import MyTasks from '../../components/MyTasks'
import Clock from '../../components/Clock'

const { width, height } = Dimensions.get('window')

const Home = () => {

    return (
        <ScrollView flex={1} backgroundColor="white" style={{
            marginBottom: 90
        }}>
           <Announcement/>
            <RecentlyJoined/>
            <Clock/>
            <MyTeam/>
            <QuickLinks/>
            <Celebrations/>
            <MyTasks/>
        </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
    scrollbar: {
        // position:"absolute",
        right: 0,
        width: 30,
        alignSelf: "flex-start",
        borderRadius: 10,
    },
});