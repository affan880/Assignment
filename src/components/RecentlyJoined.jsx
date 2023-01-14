import { StyleSheet, View, Dimensions, Animated } from 'react-native'
import React,{useRef} from 'react'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row } from 'native-base'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import MySpaceAvatar from '../assets/myspace.png'

const { width, height } = Dimensions.get('window')

const RecentlyJoined = () => {
    const scrollX = useRef(new Animated.Value(10)).current;

    const _onScroll = (event) => {
        scrollX.setValue(event.nativeEvent.contentOffset.x);
    }
    const recentlyJoined = [
        {
            id: 1,
            name: "Sahil",
            image: MySpaceAvatar,
            borderColor: "yellow.400",
            backgroundColor: "yellow.100",
            textColor: "yellow.500",
            iconBgColor: "yellow.200"
        },
        {
            id: 2,
            name: "Megha",
            image: avatar1,
            borderColor: "blue.400",
            backgroundColor: "blue.200",
            textColor: "blue.500",
            iconBgColor: "blue.200"

        },
        {
            id: 3,
            name: "Ravi",
            image:avatar2,
            borderColor: "red.400",
            backgroundColor: "red.200",
            textColor: "red.500",
            iconBgColor: "red.200"
        },
        {
            id: 4,
            name: "Rashmi",
            image: avatar3,
            borderColor: "yellow.400",
            backgroundColor: "yellow.100",
            textColor: "yellow.500",
            iconBgColor: "yellow.200"
        },
    ]

    return (
        <Box flex={1} height={400} backgroundColor="gray.300" mt={2} borderBottomRadius={30} alignItems="center" >
            <Text fontFamily={"cursive"} fontSize={'6xl'} fontStyle="italic" color={"orange.400"} fontWeight={"900"} >
                Welcome
            </Text>
            <Box flexDirection="column" paddingX={5} pt={35} pb={10} width={width} w={["100%", '10']} h="80" borderColor={"red.400"}   >
                <ScrollView horizontal showsHorizontalScrollIndicator={false} decelerationRate="fast" scrollEventThrottle={16} snapToInterval={width / 3} snapToAlignment="center" contentContainerStyle={{ paddingHorizontal: 5 }}
                    onScroll={_onScroll}
                >
                    {
                        recentlyJoined.map((item) => {
                            return (
                                <Box backgroundColor={item.backgroundColor} width={width / 3} height={180} borderRadius="20" marginRight={10} borderColor={item.borderColor} borderWidth={2} justifyContent={"center"} key={item.id} >
                                    <Avatar alignSelf="center" bg={item.iconBgColor} size="lg" source={item.image} />
                                    <Text textAlign={"center"} fontSize={25} color={item.textColor} >{item.name}</Text>
                                    <Text textAlign={"center"} fontSize={20} color={"gray.400"} >
                                        UX Designer Joined Today
                                    </Text>
                                </Box>
                            )
                        }
                        )
                    }
                </ScrollView>
                <Box width={"50%"} backgroundColor={"green.200"} alignSelf={"center"} borderRadius={50} justifyItems="" >
                    <Animated.View
                        style={[
                            styles.scrollbar,
                            {
                                backgroundColor: "#00ab55",
                                height: 10,
                                transform: [
                                    {
                                        translateX: scrollX.interpolate({
                                            inputRange: [0, 1000],
                                            outputRange: [0, 500],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
  )
}

export default RecentlyJoined

const styles = StyleSheet.create({
    scrollbar: {
        // position:"absolute",
        right: 0,
        width: 30,
        alignSelf: "flex-start",
        borderRadius: 10,
    },
})