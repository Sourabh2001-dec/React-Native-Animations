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
];

export default screens;
