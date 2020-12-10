import tinycolor from "tinycolor";

const getCorrectIndex = number => {
    return number > 255 ? 255 : number < 0 ? 0 : number;
}

export default (hash) => {
    const [r, g, b] = hash.substr(3, 6).split('').map(char => getCorrectIndex(char.charCodeAt(0)));
    const color = tinycolor({r: r, g: g, b: b});
    const colorLight = tinycolor({r: r, g: g, b: b}).lighten(40);
    return {color: color.toHexString(), colorLight: colorLight.toHexString()};
};