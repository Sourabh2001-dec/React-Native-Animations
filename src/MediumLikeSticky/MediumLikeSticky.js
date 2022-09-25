import * as React from "react";
import {
    Image,
    Animated,
    Text,
    View,
    Dimensions,
    StyleSheet,
    StatusBar,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";

const articleParagraphs = [
    "One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. ",
    "Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. ",
    "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. ",
    "Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. ",
    "In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable. ",
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. ",
    "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. Up greatest am exertion or marianne. Shy occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding. In finished on he speaking suitable advanced if. Boy happiness sportsmen say prevailed offending concealed nor was provision. Provided so as doubtful on striking required. Waiting we to compass assured. ",
];

const getImage = (i) =>
    `https://source.unsplash.com/600x${400 + i}/?blackandwhite`;

export default () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [bottomActions, setBottomActions] = React.useState(null);

    // React.useEffect(() => {
    //     console.log("bottomActions", bottomActions);
    //     console.log("screen height", height);

    //     return () => {};
    // }, [bottomActions, height]);

    // we want the stickyness to trigger when the bottomaction bar's bottom touches the edge of screen
    // for that the scroll view must scroll till
    // y position of the top of the bottomaction
    // subtract the height of the screen
    // then add the height of the bottomaction
    const topEdge =
        (bottomActions?.y ?? 0) - height + (bottomActions?.height ?? 0);

    const inputRange = [-1, 0, topEdge - 60, topEdge, topEdge + 1];

    // scrollY.addListener((e) => {
    //     console.log(
    //         "interpolate",
    //         topEdge,
    //         e.value,
    //         // It is extrapolating for values after topEdge+1
    //         scrollY.interpolate({
    //             inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
    //             outputRange: [0, 0, 0, 0, -1],
    //         })
    //     );
    // });

    return (
        <SafeAreaView>
            <Animated.ScrollView
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: scrollY,
                                },
                            },
                        },
                    ],
                    {
                        useNativeDriver: true,
                    }
                )}
                contentContainerStyle={{
                    padding: 20,
                    backgroundColor: "white",
                }}
            >
                <Text style={styles.heading}>Black and White Article</Text>
                {articleParagraphs.map((para, index) => {
                    return (
                        <View key={index.toString()}>
                            {index % 3 == 0 && (
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: getImage(index),
                                        headers: {
                                            Accept: "*/*",
                                        },
                                    }}
                                />
                            )}
                            <Text style={styles.paragraph}>{para}</Text>
                        </View>
                    );
                })}

                <View
                    onLayout={(ev) => {
                        setBottomActions(ev.nativeEvent.layout);
                    }}
                    style={[styles.bottomActions]}
                />

                <View>
                    <Text style={styles.featuredTitle}>Featured</Text>
                    {articleParagraphs.slice(0, 3).map((para, index) => {
                        return (
                            <View
                                key={index.toString()}
                                style={{
                                    flexDirection: "row",
                                    marginBottom: 10,
                                    alignItems: "flex-start",
                                }}
                            >
                                <Image
                                    style={styles.featuredImage}
                                    source={{
                                        uri: getImage(index),
                                        headers: {
                                            Accept: "*/*",
                                        },
                                    }}
                                />

                                <Text
                                    numberOfLines={3}
                                    style={styles.paragraph}
                                >
                                    {para}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </Animated.ScrollView>
            {bottomActions && (
                <Animated.View
                    style={[
                        styles.bottomActions,
                        {
                            paddingHorizontal: 20,
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,

                            transform: [
                                {
                                    // if negative then view goes up
                                    translateY: scrollY.interpolate({
                                        inputRange: inputRange,
                                        outputRange: [0, 0, 0, 0, -1],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            height: 60,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Entypo
                            name="adjust"
                            size={24}
                            color="black"
                            style={{ marginHorizontal: 10 }}
                        />
                        <Animated.Text
                            style={{
                                opacity: scrollY.interpolate({
                                    inputRange: inputRange,
                                    outputRange: [0, 0, 0, 1, 1],
                                }),
                            }}
                        >
                            326
                        </Animated.Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Animated.View
                            style={[
                                styles.icon,
                                {
                                    opacity: scrollY.interpolate({
                                        inputRange: inputRange,
                                        outputRange: [0, 0, 0, 1, 1],
                                    }),
                                },
                            ]}
                        >
                            <Entypo name="export" size={24} color="black" />
                        </Animated.View>
                        <Animated.View
                            style={[
                                styles.icon,
                                {
                                    transform: [
                                        {
                                            translateX: scrollY.interpolate({
                                                inputRange: inputRange,
                                                outputRange: [60, 60, 60, 0, 0],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Entypo name="credit" size={24} color="green" />
                        </Animated.View>
                        <Animated.View
                            style={[
                                styles.icon,
                                {
                                    opacity: scrollY.interpolate({
                                        inputRange: inputRange,
                                        outputRange: [0, 0, 0, 1, 1],
                                    }),
                                },
                            ]}
                        >
                            <Entypo
                                name="share-alternative"
                                size={24}
                                color="black"
                            />
                        </Animated.View>
                    </View>
                </Animated.View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    featuredImage: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        marginRight: 20,
        borderRadius: 10,
    },
    bottomActions: {
        height: 80,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    image: {
        width: "100%",
        height: height * 0.4,
        resizeMode: "cover",
        marginBottom: 20,
    },
    featuredTitle: {
        fontSize: 24,
        fontWeight: "800",
        marginVertical: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: "800",
        marginBottom: 30,
    },
    paragraph: {
        flex: 1,
        marginBottom: 10,
        // fontFamily: 'Georgia'
        fontSize: 14,
        lineHeight: 16 * 1.5,
    },
    icon: {
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
    },
});
