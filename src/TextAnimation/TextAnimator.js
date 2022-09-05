import React, { useEffect } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

const TextAnimator = ({ content, textStyle, style, duration }) => {
    const textArr = content.trim().split(" ");
    const animatedValues = [];
    textArr.forEach((_, i) => {
        animatedValues[i] = React.useRef(new Animated.Value(0)).current;
    });

    const animated = (toValue = 1) => {
        const animations = textArr.map((_, i) => {
            return Animated.timing(animatedValues[i], {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true,
            });
        });
        Animated.stagger(
            duration / 5,
            toValue == 0 ? animations.reverse() : animations
        ).start(() => {
            animated(toValue == 0 ? 1 : 0);
        });
    };

    useEffect(() => {
        animated();

        return () => {};
    }, []);

    return (
        <View style={[style, styles.textWrapper]}>
            {textArr.map((word, index) => (
                <Animated.Text
                    key={`${word}-${index}`}
                    style={[
                        textStyle,
                        {
                            opacity: animatedValues[index],
                            transform: [
                                {
                                    translateY: Animated.multiply(
                                        animatedValues[index],
                                        new Animated.Value(-7)
                                    ),
                                },
                            ],
                        },
                    ]}
                >
                    {word}
                    {index !== textArr.length - 1 ? " " : ""}
                </Animated.Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    textWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
});

export default TextAnimator;
