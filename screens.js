import Animated3dCarousel from "./src/Animated3Dcarousel/Animated3dCarousel";
import AnimatedCarousel from "./src/AnimatedCarousel/AnimatedCarousel";
import LoadingAnimation from "./src/LoadingAnimations/LoadingAnimation";
import MediumLikeSticky from "./src/MediumLikeSticky/MediumLikeSticky";
import PhotoGallery from "./src/PhotoGallery/PhotoGallery";
import ScrollItemAnimation from "./src/ScrollItemAnimation/ScrollItemAnimation";
import TextAnimationScreen from "./src/TextAnimation/Screen";
import HashNodeFeedScreen from "./src/HashNodeFeed/Screen";

const screens = [
    {
        name: "TextAnimation",
        displayName: "Text Animation",
        component: TextAnimationScreen,
    },
    {
        name: "PhotoGallery",
        displayName: "Photo Gallery",
        component: PhotoGallery,
    },
    {
        name: "ScrollItemAnimation",
        displayName: "Scrolling Animation",
        component: ScrollItemAnimation,
    },
    {
        name: "AnimatedCarousel",
        displayName: "Animated Carousel",
        component: AnimatedCarousel,
    },
    {
        name: "Animated3DCarousel",
        displayName: "Animated 3D Carousel",
        component: Animated3dCarousel,
    },
    {
        name: "MediumMobileArticle",
        displayName: "Medium Mobile Article",
        component: MediumLikeSticky,
    },
    {
        name: "LoadingAnimation",
        displayName: "Loading Animation",
        component: LoadingAnimation,
    },
    {
        name: "HashNodeFeed",
        displayName: "Hash Node Feed",
        component: HashNodeFeedScreen,
        options: {
            headerShown: true,
        },
    },
];

export default screens;
