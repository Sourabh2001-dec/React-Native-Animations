import { faker } from "@faker-js/faker";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

// faker.seed(10);
const DATA = [...Array(40).keys()].map((_, i) => {
    let gend = faker.helpers.objectValue({ men: "men", women: "women" });
    return {
        key: faker.random.alphaNumeric(10),
        image: `https://randomuser.me/api/portraits/${gend}/${faker.random.numeric(
            2
        )}.jpg`,
        name: faker.name.fullName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});

const SPACING = 18;
const AVATAR_SIZE = 80;
const BG_IMG =
    "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const ScrollItemAnimation = () => {
    const navigation = useNavigation();
    const scrollY = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

        return () => {};
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Image
                source={{ uri: BG_IMG }}
                style={StyleSheet.absoluteFillObject}
                blurRadius={50}
            />
            <Animated.FlatList
                data={DATA}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{
                    padding: SPACING,
                }}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 3),
                    ];

                    const opacityInputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 0.5),
                    ];

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0],
                    });

                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange,
                        outputRange: [1, 1, 1, 0],
                    });

                    return (
                        <Animated.View
                            style={{
                                flexDirection: "row",
                                padding: SPACING,
                                marginBottom: SPACING,
                                backgroundColor: "#fff",
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 7,
                                },
                                shadowOpacity: 0.43,
                                shadowRadius: 9.51,

                                elevation: 15,
                                borderRadius: 12,

                                opacity,
                                transform: [{ scale }],
                            }}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    width: AVATAR_SIZE,
                                    height: AVATAR_SIZE,
                                    borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING / 2,
                                }}
                            />
                            <View>
                                <Text
                                    style={{ fontSize: 19, fontWeight: "700" }}
                                >
                                    {item.name}
                                </Text>
                                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                                    {item.jobTitle}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        opacity: 0.8,
                                        color: "#0099cc",
                                    }}
                                >
                                    {item.email}
                                </Text>
                            </View>
                        </Animated.View>
                    );
                }}
            />
        </View>
    );
};

export default ScrollItemAnimation;
