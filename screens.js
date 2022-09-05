import PhotoGallery from "./src/PhotoGallery/PhotoGallery";
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
];

export default screens;
