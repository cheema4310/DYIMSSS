import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { ThemeProvider, createTheme } from "@material-ui/core";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#48a5ad",
    },
    secondary: {
      main: "#dddbd9",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/about" exact component={AboutScreen} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
