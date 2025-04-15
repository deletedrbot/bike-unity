import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Местный туризм
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Главная
          </Button>
          <Button color="inherit" component={RouterLink} to="/attractions">
            Достопримечательности
          </Button>
          <Button color="inherit" component={RouterLink} to="/events">
            События
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            О нас
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar 