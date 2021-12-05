import {createGlobalStyle} from 'styled-components'

import githubBackground from '../assets/178-1787413_outsystems-now-on-github-github-logo-black-background.png'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-size: 16px;
}

#root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
}

button {
    cursor: pointer;
}
`