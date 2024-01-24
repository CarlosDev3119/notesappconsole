import colors from 'colors/safe';

interface Props {
    textRed:   (text: string) => string;
    textGreen: (text: string) => string;
    textBlue:  (text: string) => string;
    textWhite: (text: string) => string;
    textGray:  (text: string) => string;
}


export const colorAdapter: Props = {

    textRed:   (text: string) => colors.red(text),

    textGreen: (text: string) => colors.green(text),
    
    textBlue:  (text: string) => colors.blue(text),

    textWhite: (text: string) => colors.white(text),

    textGray:  (text: string) => colors.gray(text)
   
}


