import GenericContainer from './Containers/GenericContainer.js';
import FormContainer from './Containers/FormContainer.js';
import ImageContainer from './Containers/ImageContainer.js';
import Button from './Components/Generic/Button.js';
import Footer from './Components/Generic/Footer.js';
import Header from './Components/Generic/Header.js';
import MenuIcon from './Components/Generic/MenuIcon.js';
import Title from './Components/Text/Title.js';
import HorizontalLine from './Components/Text/HorizontalLine.js';
import VerticalLine from './Components/Text/VerticalLine.js';
import ImageUI from './Components/Image/Image.js';
import Paragraph from './Components/Text/Paragraph.js';

import {
    GENERIC_TYPE, 
    FORMCONTAINER_TYPE, 
    IMAGECONTAINER_TYPE,
    BUTTON_TYPE,
    FOOTER_TYPE,
    HEADER_TYPE,
    TITLE_TYPE,
    HORIZONTAL_TYPE,
    VERTICAL_TYPE,
    PARAGRAPH_TYPE,
    IMAGE_TYPE,
    MENU_TYPE,
} from './Data Constants/TypeConstants';

//naming convention all elements - this name will be displayed to the user
let elements = {
    [GENERIC_TYPE]: GenericContainer,
    [FORMCONTAINER_TYPE]: FormContainer,
    [IMAGECONTAINER_TYPE]: ImageContainer,
    [BUTTON_TYPE]: Button,
    [FOOTER_TYPE]: Footer,
    [HEADER_TYPE]: Header,
    [TITLE_TYPE]: Title,
    [HORIZONTAL_TYPE]: HorizontalLine,
    [VERTICAL_TYPE]: VerticalLine,
    [PARAGRAPH_TYPE]: Paragraph,
    [IMAGE_TYPE]: ImageUI,
    [MENU_TYPE]: MenuIcon,
}

let uIMap = new Map(Object.entries(elements));

export default uIMap;