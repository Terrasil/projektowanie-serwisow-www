import React from 'react'
import {Button} from 'react-bootstrap'
import {Footer, Header, Strona} from './Komponenty'

function App() {
    const [theme, setDarkTheme] = React.useState(false)
    return (
        <div class={theme ? 'dark-theme' : 'light-theme'}>
            <Header></Header>
            <div class="sep">
                <Button variant={theme ? 'light' : 'dark'}onClick={() => setDarkTheme(theme => !theme)}>
                    {theme ? 'Light Mode' : 'Dark Mode'}
                </Button>    
            </div>
            <div class="bg"> 
                <Strona></Strona> 
            </div>
            <div class="sep pt-5">
            </div>
            <Footer></Footer>
        </div>      
    );
}

export default App;