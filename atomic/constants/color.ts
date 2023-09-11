const black = '#000';
const grey = '#7D7D7D';
const white = '#FFF';
const whiteGrey = '#E9E9E9'

const pink = '#F40F5C';
const green = '#40A627';
const yellow = '#FFC530';
const blue = '#2B9AF3'

const transparent = 'transparent'

export type ColorType = 'black' | 'grey' | 'white' | 'whiteGrey' | 'pink' | 'green' | 'yellow' | 'blue' | 'transparent'

const findColor = (color: ColorType) => {
    switch (color) {
        case 'black':
            return black;
        case 'grey':
            return grey;
        case 'white':
            return white;
        case 'whiteGrey':
            return whiteGrey;
        case 'pink':
            return pink;
        case 'green':
            return green;
        case 'yellow':
            return yellow;
        case 'blue':
            return blue;
        case 'transparent':
            return transparent
    }
}

export {
    black,
    grey,
    white,
    whiteGrey,
    pink,
    green,
    transparent,
    yellow,
    blue,
    findColor
}