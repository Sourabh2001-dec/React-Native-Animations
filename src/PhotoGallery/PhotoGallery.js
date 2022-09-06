import React, { useEffect, useRef, useState } from "react";
import {
    FlatList,
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { REACT_APP_UNSPLASH_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const UnsplashAPi = (query) => {
    return `https://api.unsplash.com/photos/random?count=10&query=${query}&orientation=portrait&client_id=${REACT_APP_UNSPLASH_KEY}`;
};

const IMAGE_SIZE = 80;
const SPACING = 10;

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();

    const fetchImages = async () => {
        let res = await fetch(UnsplashAPi("nature"));
        let data = await res.json();
        setPhotos(data);
    };

    const scrollToActiveIndex = (index, byTop = true) => {
        setActiveIndex(index);
        if (byTop)
            topRef.current.scrollToOffset({
                offset: index * width,
                animated: true,
            });

        //for Horizontal list
        // add offset and it scroll left
        // subtract offset and scroll right
        // the left is where till the list is scrolled
        thumbRef.current.scrollToOffset({
            offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
            animated: true,
        });
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
        fetchImages();

        return () => {};
    }, []);

    const topRef = useRef();
    const thumbRef = useRef();

    if (photos.length === 0) {
        return (
            <View style={{ flex: 1 }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#000" }}>
            <FlatList
                ref={topRef}
                data={photos}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(ev) => {
                    scrollToActiveIndex(
                        Math.floor(ev.nativeEvent.contentOffset.x / width),
                        false
                    );
                }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, height }}>
                            <Image
                                source={{ uri: item.urls.regular }}
                                style={[StyleSheet.absoluteFillObject]}
                            />
                        </View>
                    );
                }}
            />
            <FlatList
                data={photos}
                ref={thumbRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                style={{ position: "absolute", bottom: IMAGE_SIZE }}
                contentContainerStyle={{ paddingHorizontal: SPACING }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                scrollToActiveIndex(index);
                            }}
                        >
                            <Image
                                source={{
                                    uri: item.urls.thumb,
                                    cache: "force-cache",
                                }}
                                style={{
                                    width: IMAGE_SIZE,
                                    height: IMAGE_SIZE,
                                    borderRadius: 12,
                                    marginRight: SPACING,
                                    borderWidth: 2,
                                    borderColor:
                                        activeIndex === index
                                            ? "#fff"
                                            : "transparent",
                                }}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default PhotoGallery;
