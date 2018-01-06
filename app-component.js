import React, { Component } from 'react';
import {
	Button,
} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import HomeComponent from "./home/home-component";
import SignInComponent from "./auth/sign-in/sign-in-component";

const topDrawer = DrawerNavigator({
	Home: {screen: HomeComponent},
	SignIn: {screen: SignInComponent}
});

const AppNavigator = StackNavigator({
	Drawer: {screen: topDrawer},
}, {
	navigationOptions: ({navigation}) => ({
		headerLeft: <Button onPress={() => {
			navigation.navigate('DrawerToggle')
		}} title="Menu"/>
	})
});

export default AppNavigator;

