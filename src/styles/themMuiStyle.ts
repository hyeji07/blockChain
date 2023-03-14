import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Noto Sans KR', 'sans-serif'].join(','),
    fontSize: 20,
  },
});

export default theme;