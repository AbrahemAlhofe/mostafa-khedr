import "./styles/style.css";
import StoryChapterOne from './assets/vectors/Story - Chapter 1.svg?raw';
import StoryChapterTwo from './assets/vectors/Story - Chapter 2.svg?raw';
import StoryChapterThree from './assets/vectors/Story - Chapter 3.svg?raw';
import ContactMe from './assets/vectors/Contact Me.svg?raw';
import Facebook from './assets/vectors/Facebook.svg?raw';
import Instagram from './assets/vectors/Instagram.svg?raw';
import X from './assets/vectors/X.svg?raw';

const svgs = {StoryChapterOne, StoryChapterTwo, StoryChapterThree, ContactMe, Facebook, Instagram, X}

Array.from(document.querySelectorAll('[data-svg]')).forEach(element => {
    const svg = element.getAttribute('data-svg');
    element.innerHTML = svgs[svg];
})