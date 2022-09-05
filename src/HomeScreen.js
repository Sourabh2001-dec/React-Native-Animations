import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import screens from "../screens";


function HomeScreen() {
    const nav = useNavigation();
    return (
        <SafeAreaView
            style={{ flex: 1}}
        >
            <ScrollView>
                {screens.map((screen) => (
                    <Pressable
                        key={screen.name}
                        onPress={() => nav.navigate(screen.name)}
                    >
                        <View
                            style={{
                                backgroundColor: "white",
                                padding: 20,
                                margin: 10,
                                borderRadius: 10,
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                {screen.displayName}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
