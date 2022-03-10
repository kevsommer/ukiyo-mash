import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

const pages = ['ranking', 'mash', 'about'];

const NavBar = () => (
  <AppBar position='static'>
    <Toolbar>
      <IconButton
        href='/'
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
      >
        浮世絵
        <Typography variant='h5' component='div' sx={{ mx: '1vw' }}>
          Ukiyo Mash
        </Typography>
      </IconButton>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            href={page}
            onClick={() => {}}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default NavBar;
