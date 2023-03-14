import { BrowserRouter } from 'react-router-dom';
import AppRoute from '@routes/Route';

import '@assets/css/ResetStyle.scss';
import '@styles/globalStyle.scss';

//mui style 변경
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@styles/themMuiStyle';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
