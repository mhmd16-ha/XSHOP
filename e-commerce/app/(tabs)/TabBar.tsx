import { View, Platform, Pressable, TouchableOpacity, StyleSheet, LayoutChangeEvent } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarButtom from '../../components/TabBarButtom';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect, useState } from 'react';


export function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const [dimantion,setDimantiom]=useState({width:100,height:20,})
   const onTabBrLayout=(e:LayoutChangeEvent)=>{
    setDimantiom({
        height:e.nativeEvent.layout.height,
        width:e.nativeEvent.layout.width,
    })
    }
    useEffect(()=>{
        TabPositionX.value=withTiming(buttonWidth*state.index,
            {duration:300}
        )
    },[state.index])
    const TabPositionX=useSharedValue(0);
    const buttonWidth=dimantion.width/state.routes.length
    const AnimationStyle=useAnimatedStyle(()=>{
        return{
            transform:[{translateX:TabPositionX.value}]
        }
    })
    return (
        <View onLayout={onTabBrLayout} style={styles.tabbarStyle}>
        <Animated.View style={[AnimationStyle,{
            width:buttonWidth/2,
            height:2,
            backgroundColor:Colors.primary,
            position:'absolute',
            top:0,
            left:20,
            zIndex:11
        }]}/>

            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarButtom
                     onPress={onPress}
                        key={route.name}
                        onLongPress={onLongPress}
                        routeName={route.name} 
                        isFocused={isFocused}
                        label={label} 
                        />
                 
                   
                );
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    tabbarStyle:{
        flexDirection:'row',
        backgroundColor:Colors.white,
        paddingBottom:20,
        paddingTop:10,
    }
})