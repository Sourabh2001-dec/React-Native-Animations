import AnimatedCarousel from "./src/AnimatedCarousel/AnimatedCarousel";
import PhotoGallery from "./src/PhotoGallery/PhotoGallery";
import ScrollItemAnimation from "./src/ScrollItemAnimation/ScrollItemAnimation";
import TextAnimationScreen from "./src/TextAnimation/Screen";

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
];

export default screens;
