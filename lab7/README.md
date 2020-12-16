# Projektowanie serwisów WWW
projektowanie-serwisow-www

### Autor: Patryk Morawski, 185ic_b1

### Nowe moduły

Po za postawowymi modułami npm skożystałem również z:
- **npm install @material-ui/core**
- **npm install @material-ui/icons**
- **npm install react-router**

### Zmiany w aplikacji

#### Wykorzystałem poprzednią aplikację z (Labolatorium 7)()

Poprzedni kod:

```javascript
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
```

Kod po skorzystaniu z **Router'u** (*BrowserRouter as Router*) i **Switch'a**

```javascript
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
                            <li id="theme">
                                <Button variant={theme ? 'light' : 'dark'} onClick={() => setDarkTheme(theme => !theme)}>
                                    {theme ? 'Light Mode' : 'Dark Mode'}
                                </Button> 
                            </li>
                        </ul>
                    </nav>
                    <Switch>{/* <Switch> z ModernUI*/}
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
```

### Strona głowna

Wykorzystanie przygotowanych styli:
```javascript
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
```

Wykorzystane komponenty:
@modern-ui/core:
- Container
- Grid
- Card
- CardMedia
- CardContent
- Typography

#### Kod **<Home>**:
```javascript
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
```

Podgląd strony:

*Dodane zostało proste menu*

![Menu](https://i.imgur.com/sjCBfKs.png)

Wyświetlenie paru identycznych elementów:

![Strona główna light](https://i.imgur.com/QANwd2S.png)

Podgląd strony w **"dark mode"**:

![Strona główna dark](https://i.imgur.com/pNzdcHC.png)


### Lista produktów 
Zawartość strony z poprzedniego zadania.
Zawiera parę elementów z **react-bootstrap**.

```javascript
function Products() {
    return <Strona></Strona>;
}
```

Podgląd strony:

![Lista produktów light](https://i.imgur.com/gMDSPct.png)

Podgląd strony w **"dark mode"**:

![Lista produktów light](https://i.imgur.com/TLdCSHn.png)

### Panel logowania

Prosty formularz logowania *(sam frontend)*

Wykorzystane komponenty:
@modern-ui/core:
- Grid
- TextField
- Button as ButtonMUI

Kod formularza:
```javascript
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
                        <TextField label='Login' margin='normal'/> {/* <TextField> z ModernUI*/}
                        <TextField label='Hasło' margin='normal'/>
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
```

![Logowanie light](https://i.imgur.com/F7mqyWZ.png)

Podgląd strony w **"dark mode"**:

![Logowanie light](https://i.imgur.com/CFbud2V.png)

#### Dodanie Ikon

Dodatkowe wykorzystane komponenty:
@modern-ui/core:
- InputAdornment

@modern-ui/icons:
- AccountCircle 
- LockRounded

```javascript
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
```

Podgląd strony:

![Logowanie z ikonami light](https://i.imgur.com/ygrDsvg.png)

Podgląd strony w **"dark mode"**:

![Logowanie z ikonami light](https://i.imgur.com/eVSl6gv.png)
