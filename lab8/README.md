# Projektowanie serwisów WWW
projektowanie-serwisow-www

### Autor: Patryk Morawski, 185ic_b1

### Nowe moduły

Po za modułami npm z poprzednich zadań skożystałem również z:
- **npm install react-collapsed**

### Zmiany w aplikacji

#### Nowa zakladka *"Ukryta wiadomość"* 

![0](https://i.imgur.com/b3QlvT7.png)

Wyświetla okno z przykładowym tytułem i tekstem (*lorem ipsum*).
Możliwe jest showanie, pokazanie, rozszeżenie i zwinięcie okna aby podejżeć więcej informacji.

![1](https://i.imgur.com/0Uh6TXS.png)

Po kliknięciu:

![2](https://i.imgur.com/NVSxNbm.png)


#### Dodtodowanie do Dark Mode:

![3](https://i.imgur.com/45N2gDJ.png)

Po kliknięciu:

![4](https://i.imgur.com/zLPDN0d.png)

### [Wykorzysany przykład](https://codesandbox.io/s/magical-browser-vibv2?file=/src/App.tsx)


#### Kod aplikaji
```javascript
import React , { useState } from 'react';
import {Button, Card as CardBS} from 'react-bootstrap';
import useCollapse from 'react-collapsed';
import {Footer, Header, Strona} from './Komponenty'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Container, Card,InputAdornment, CardMedia,CardContent,Typography, Grid, TextField, Button as ButtonMUI} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import placeholder from "./images/placeholder.png"
import { AccountCircle, LockRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

function App() {
    const [theme, setDarkTheme] = React.useState(false)
    return (
        <div class={theme ? 'dark-theme' : 'light-theme'}>
            <Header></Header>
            <div class="sep">
               <Router>{/* <Router> z ModernUI*/}
                    <nav class="menu shadow">
                        <ul>
                            <li>
                                <Link to="/">Strona główna</Link>{/* <Link> z ModernUI*/}
                            </li>
                            <li>
                                <Link to="/products">Lista produktów</Link>
                            </li>
                            <li>
                                <Link to="/login">Zaloguj</Link>
                            </li>
                            <li>
                                <Link to="/hidetext">Ukryta wiadomość</Link>
                            </li>
                            <li id="theme">
                                <Button variant={theme ? 'light' : 'dark'} onClick={() => setDarkTheme(theme => !theme)}>
                                    {theme ? 'Light Mode' : 'Dark Mode'}
                                </Button> 
                            </li>
                        </ul>
                    </nav>
                    <Switch>{/* <Switch> z ModernUI*/}
                        <Route path="/hidetext">
                            <HideText mode={theme}/>
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>    
            </div>
            <Footer></Footer>
        </div>      
    );
}

const cards = [1, 2, 3, 4, 5, 6]; {/* można przygotować jak informacje o telefonach z podstrony 'Lista produktów' */}
function Home() {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={6}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={12} md={6}>
                        <Card className={classes.card,'shadow'}>
                            <CardMedia
                            className={classes.cardMedia}
                            image={placeholder}
                            title="placeholder"
                            />
                            <CardContent className={classes.cardContent} style={{textAlign:'left'}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Tytuł
                                </Typography>
                                <Typography>
                                    Przykładowy opis który moża w tym miejscu upieścić.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
  
function Products() {
    return <Strona></Strona>;
}
  
function Login() {
    return (
        <div class="login-panel">
            <Grid container style={{minHeight: '67vh'}}> {/* <Grid> z ModernUI*/}
                <Grid container item xs={12} sm={12} alignItems='center' direction='column' justify="space-between" style={{padding: 10}}>
                    <div/>
                    <div style={{display:'flex', flexDirection:'column', maxWidth:360, minWidth:360}}>
                        <Grid container justify="center">
                            <h2>Panel Logowania</h2>
                        </Grid>
                        <TextField label='Login' margin='normal' InputProps={{startAdornment:<InputAdornment><AccountCircle/></InputAdornment>}}/> {/* <TextField> z ModernUI*/}
                        <TextField label='Hasło' margin='normal' InputProps={{startAdornment:<InputAdornment><LockRounded/></InputAdornment>}}/> {/* Dodatkowo ikony */}
                    <div style={{height:20}}/>
                        <ButtonMUI variant='contained' style={{margin:'auto',display:'flex', flexDirection:'column', maxWidth:240, minWidth:240}}> {/* <Button> z ModernUI*/}
                            Zaloguj
                        </ButtonMUI>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    );
}

function ReadMore(theme) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    
    return (
      <div>
        <section {...getCollapseProps()}> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et lacus placerat, ultricies nisl eget, consectetur nisl. Mauris consectetur mi in sagittis convallis. In elementum diam nec libero lacinia faucibus. In convallis aliquet nulla, nec accumsan ante consequat vel. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nunc ut tincidunt sodales. Phasellus convallis, enim eu euismod condimentum, felis sem pharetra ligula, in fringilla elit ligula eu sem. Maecenas consectetur neque sit amet imperdiet pulvinar. Suspendisse fermentum diam tortor, vel vulputate diam tincidunt ac. Nulla ultricies consequat dui, convallis facilisis velit pretium quis. Donec ut dictum nisi, sit amet tincidunt dolor. Curabitur a nisl condimentum, lacinia turpis nec, pellentesque augue. Sed ullamcorper turpis eget erat elementum tempor. Donec congue quam at nulla fringilla, nec vehicula justo pellentesque. Sed rhoncus at velit nec molestie.
            <br/>
            Integer urna lorem, gravida quis tellus id, pretium ultrices neque. Vivamus arcu augue, aliquam ac metus non, auctor lacinia diam. Proin et arcu non odio molestie efficitur ut a enim. Nulla id risus dignissim, cursus mi ut, ullamcorper eros. In sed consequat urna. Sed non pharetra turpis. Duis fermentum ligula id nisl congue porttitor. Maecenas ut hendrerit arcu. Duis sit amet varius tellus. Curabitur mollis dignissim enim, ut commodo felis rutrum ac. Vivamus vel quam at arcu scelerisque tristique. Aenean vel posuere turpis, vel auctor purus. Ut tristique enim ante, id sagittis mauris dictum id.
            <br/>
            Quisque a felis fringilla, congue quam ut, sagittis leo. Ut laoreet elementum interdum. Maecenas vel ex leo. Nullam sit amet posuere ligula. Quisque vel orci vel massa volutpat pellentesque. Pellentesque tortor erat, vehicula bibendum elit vel, venenatis condimentum nunc. Proin egestas neque et lacus facilisis, et dapibus erat auctor. Phasellus lobortis ipsum nulla, vitae tincidunt mi pulvinar et. Quisque at molestie nibh. Vestibulum nec aliquet sem. Quisque tincidunt justo non magna porttitor molestie. Vivamus in varius sapien, viverra convallis urna. Aliquam felis elit, congue eu posuere et, pharetra et leo. Donec pulvinar diam a est condimentum tincidunt. Donec dignissim purus nec commodo porttitor. In lectus justo, rhoncus eu turpis in, rutrum iaculis ipsum.
            <br/>
            In condimentum massa gravida odio lobortis, et sagittis tellus posuere. Cras semper felis id augue varius, vitae lacinia est mattis. Aliquam tincidunt elit aliquet nibh aliquet pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla eleifend pellentesque eros non euismod. Nunc mollis finibus velit quis condimentum. Sed placerat finibus dui sit amet semper. Nam dignissim leo nec vulputate iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam dolor, dignissim non facilisis eu, hendrerit non ante.
            <br/>
            Vivamus pretium eros a diam tincidunt, at elementum purus mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget interdum augue. Sed vel elit non libero tempus semper. Curabitur sed sem nec est ullamcorper sodales et vitae augue. Fusce commodo in nisl sit amet euismod. Sed semper, diam ac commodo facilisis, leo nulla eleifend purus, vitae congue nunc massa quis massa. Morbi a turpis sit amet eros laoreet venenatis. Nunc ipsum leo, ornare et sem ut, pharetra venenatis diam. Nulla pellentesque laoreet rhoncus. Ut facilisis augue et mi elementum, a mollis sapien tempus. Quisque eget velit posuere mauris accumsan accumsan ac sed leo. Aliquam aliquam pellentesque velit, non congue leo aliquet sed.<br/><br/></section>
        <Button
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          variant={theme.mode ? 'light' : 'dark'}
        >
          {isExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
        </Button>
      </div>
    );
}

function HideText(theme){
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div>
          <CardBS className="text-center center" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '18rem' }}>
            <CardBS.Header>LOREM IPSUM</CardBS.Header>
            <CardBS.Body>
              <Button variant={theme.mode ? 'light' : 'dark'}
                  {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                  })}
                  
                >
                  {isExpanded ? 'Ukryj' : 'Pokaż'}
                </Button>
                <p {...getCollapseProps()}><br/>Suspendisse tincidunt volutpat nibh at cursus. Donec ac nisi in elit lobortis volutpat. In pharetra tincidunt luctus. Mauris ac rhoncus diam, et eleifend enim. Sed ac ornare tellus. Nam mattis tristique lectus molestie porta. Ut semper ex sit amet risus posuere, eu pulvinar enim gravida. Praesent sit amet urna a justo ultrices bibendum.<br/><br/><ReadMore mode={theme.mode} /></p>
            </CardBS.Body>
          </CardBS>
    
        </div>
      );
}

export default App;
```

### Git Diff

Polecenie ``git diff`` możemy wykorzystać do podejżenia różnic pomiędzy różnymi *commit'ami*

![5](https://i.imgur.com/nj8dglv.png)

Czerwony " - " oznacza że dana linia zostala usunięta

Zielony " + " oznacza że dana linia zostala dodana

Polecenie ``git log`` wyświetli nam listę *commit'ów* gdzie możemy skopiować interesujący nas "numer"

![6](https://i.imgur.com/wc92GSe.png)

Polecenie ``git difftool`` wyświetli nam "graficznie" (coś jak Nano w systemie Linux) przedstawienie porównanie danego pliku przed i po *commit'cie*

![7](https://i.imgur.com/UuxeUvf.png)
