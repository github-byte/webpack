import Joker from './s4.png'
import Text from './altText.txt'
const insertImage = () => {
    const newNode = document.createElement("img");
    newNode.src = Joker;
    newNode.alt = Text;
    newNode.style.width = "200px";
    newNode.style.height = "200px";
    document.body.appendChild(newNode);
}

export {insertImage};