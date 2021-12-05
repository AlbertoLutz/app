import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secundary: string;
            text: string;
            details: string;
        }

        fonts: {
            primary: string;
        }
    }
}