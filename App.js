import React from 'react';
import RosterPreview from './src/screens/RosterPreview';
import EventDetails from './src/screens/EventDetails';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

Icon.loadFont();

const Stack = createStackNavigator();

export default App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{
                            headerTitleAlign: "center",
                            title: "Timeline"
                        }}
                        name="RosterPreview"
                        component={RosterPreview} />
                    <Stack.Screen
                        options={{
                            headerTitleAlign: "center",
                            title: "Details"
                        }}
                        name="EventDetails"
                        component={EventDetails}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>

    )
}