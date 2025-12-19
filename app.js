import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import InputScreen from "./screens/InputScreen";
import ResultScreen from "./screens/ResultScreen";
import DashboardScreen from "./screens/DashboardScreen";

const Stack = createStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Input" component={InputScreen} />
<Stack.Screen name="Result" component={ResultScreen} />
<Stack.Screen name="Dashboard" component={DashboardScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}