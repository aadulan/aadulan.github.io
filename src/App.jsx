import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Card style={{ zIndex: 1, borderRadius: 15, margin: '10px' }}>
            <CardContent>
              <Grid
                justifyContent="center"
                alignItems="center"
                container
                direction="row"
                spacing={2}
              >
                <Grid justifyContent="center" alignItems="center" container item xs>
                  <Grid item>
                    <Avatar
                      sx={{ width: '14rem', height: '14rem' }}
                      alt="Ash"
                      src="ash.JPG"
                    />
                  </Grid>
                </Grid>
                <Grid
                  justifyContent="center"
                  alignItems="center"
                  container
                  direction="column"
                  item
                  xs
                >
                  <Grid item>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: '100', fontStyle: 'italic' }}
                    >
                      Asmita Dulan
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Stack direction="row">
                      <Button
                        sx={{ textTransform: 'none' }}
                        target="_blank"
                        rel="noopener"
                        href="https://github.com/aadulan"
                        startIcon={<GitHubIcon />}
                      >
                        aadulan
                      </Button>
                      <Button
                        sx={{ textTransform: 'none' }}
                        target="_blank"
                        rel="noopener"
                        href="https://www.linkedin.com/in/aadulan/"
                        startIcon={<LinkedInIcon />}
                      >
                        aadulan
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
