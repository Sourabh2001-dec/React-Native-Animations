import { MotiView } from "moti";
import React from "react";
import { View } from "react-native";

const LoadingIndicator = ({ size }) => {
    return (
        <MotiView
            from={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: size / 12,
            }}
            animate={{
                width: size + 20,
                height: size + 20,
                borderRadius: (size + 20) / 2,
                borderWidth: size / 10,
            }}
            transition={{
                type: "timing",
                duration: 1000,
                loop: true,
            }}
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: size / 10,
                borderColor: "#fff",
            }}
        />
    );
};

const LoadingAnimation = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#010100",
            }}
        >
            <LoadingIndicator size={100} />
        </View>
    );
};

export default LoadingAnimation;
