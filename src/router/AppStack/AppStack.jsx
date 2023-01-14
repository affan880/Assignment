import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home/home'
import MySpace from '../../screens/MySpace/mySpace'
import Notifications from '../../screens/Notifications/notifications'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Icon, Avatar } from 'native-base'
import MySpaceAvatar from "../../assets/avatar2.png"

const Tab = createBottomTabNavigator()


function AppStack() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: '500',
                    marginBottom: 5,
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#ffffff',
                    height: 90,
                    marginTop:0
                }
            }}>
                <Tab.Screen name="Home" component={Home}
                   //change navbar icon color on active
                    options={{
                        tabBarActiveTintColor: '#00ab55',
                        tabBarInactiveTintColor: 'gray',
                        //icon
                        tabBarIcon: ({ color, size }) => (
                            <Icon as={MaterialIcons} name="home-filled" color={color} size={35} style={{
                                marginBottom: 0
                            }} />
                        ),

                    }}

                />
                <Tab.Screen name="MySpace" component={MySpace}
                    options={{
                        tabBarActiveTintColor: '#00ab55',
                        tabBarInactiveTintColor: 'gray',
                        //icon
                        tabBarIcon: ({ color, size }) => (
                            <Avatar alignSelf="center" bg={"#d6cbfb"} size="md" source={MySpaceAvatar} style={{
                                borderRadius: 50,
                                borderColor: 'gray',
                                borderWidth: 1,

                            }} />
                        ),
                        tabBarLabel:"My Space"
                    }}
                                
                />
                <Tab.Screen name="Notifications" component={Notifications}
                    options={{
                        tabBarActiveTintColor: '#00ab55',
                        tabBarInactiveTintColor: 'gray',
                        //icon
                        tabBarIcon: ({ color, size }) => (
                            <Icon as={MaterialIcons} name="notifications" color={color} size={35} style={{
                                marginBottom: 0
                            }} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
  )
}

export default AppStack