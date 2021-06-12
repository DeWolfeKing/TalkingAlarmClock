import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from "@react-navigation/stack";
import alarmListScreen from "../screens/alarmListScreen";

const Stack = createStackNavigator();

const Nav = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={'AlarmListScreen'} component={alarmListScreen} />
        </Stack.Navigator>
    </NavigationContainer>

)

export default Nav;
