import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react/";
import GlobalStyle from "../assets/GlobalStyle.js";
import UserContext from "../contexts/UserContext.js";
import SignInPage from "./SignInPage.js";
import SignUpPage from "./SignUpPage.js";
import MainPage from "./MainPage.js"

function App(){

    const [user, setUser] = useState("");
    
    return(
        <UserContext.Provider value={{user, setUser}}>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/main" element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;