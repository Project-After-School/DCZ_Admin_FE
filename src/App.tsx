import { Router } from "./Router";
import { GlobalFont } from "./Styles/GlobalFont";
import { GlobalStyles } from "./Styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalFont />
            <GlobalStyles />
            <Router />
        </>
    );
}

export default App;
