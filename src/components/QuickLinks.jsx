import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Box, Icon, Input, Text, ScrollView, Avatar, Button, VStack, HStack, Row } from 'native-base'

const { width, height } = Dimensions.get('window')

const QuickLinks = () => {
    return (
        <VStack space={4} mt={50} width={width - 20} shadow={7} bg={'white'} rounded={"3xl"} alignSelf={'center'} py={10}>
            <Text px={5} style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: 18
            }}>Quick Links</Text>
            <HStack space={4} px={'6'}>
                <Box backgroundColor={"blue.100"} height={16} width={'24'} justifyContent={'center'} rounded={'md'} >
                    <Row width={'100'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <Text textAlign={'left'} width={'70%'} alignItems={'center'} fontSize={16} fontWeight={'700'} >Holiday Calendar</Text>
                        <Icon as={MaterialCommunityIcons} size="md" color="gray.400" name="arrow-top-right" position={'absolute'} right={1} top={-1} />
                    </Row>
                </Box>
                <Box backgroundColor={"blue.100"} height={16} width={'24'} justifyContent={'center'} rounded={'md'} >
                    <Row width={'100'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <Text textAlign={'left'} width={'70%'} alignItems={'center'} fontSize={16} fontWeight={'700'} >Leave Policy</Text>
                        <Icon as={MaterialCommunityIcons} size="md" color="gray.400" name="arrow-top-right" position={'absolute'} right={1} top={-1} />
                    </Row>
                </Box>
                <Box backgroundColor={"blue.100"} height={16} width={'24'} justifyContent={'center'} rounded={'md'} >
                    <Row width={'100'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <Text textAlign={'left'} width={'70%'} alignItems={'center'} fontSize={16} fontWeight={'700'} >Payroll Manual</Text>
                        <Icon as={MaterialCommunityIcons} size="md" color="gray.400" name="arrow-top-right" position={'absolute'} right={1} top={-1} />
                    </Row>
                </Box>
            </HStack>
        </VStack>
  )
}

export default QuickLinks

const styles = StyleSheet.create({})