import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextAnimator from "./TextAnimator";

const TextAnimationScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TextAnimator
                content={
                    "For the things we have to learn before we can do them, we learn by doing them. 💖"
                }
                textStyle={styles.textStyle}
                style={styles.containerStyle}
                duration={800}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    textStyle: {
        fontSize: 28,
        fontWeight: "bold",
        fontFamily: "monospace",
        color: "black",
    },
    containerStyle: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },
});

export default TextAnimationScreen;
