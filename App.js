import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import screens from "./screens";
import HomeScreen from "./src/HomeScreen";
import TextAnimationScreen from "./src/TextAnimation/Screen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                {screens.map((screen) => (
                    <Stack.Screen
                        key={screen.name}
                        name={screen.name}
                        options={{
                            title: screen.displayName,
                            headerShown: false,
                        }}
                        component={screen.component}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
