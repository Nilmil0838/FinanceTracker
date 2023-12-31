import React, { useMemo, useState } from "react";
import styled from "styled-components";
import background from './images/background.jpg'
import { MainLayout } from "./styles/Layouts";
import Orb from "./componenets/Orb/Orb";
import Bubbles from "./componenets/Orb/Bubbles";
import Navigation from "./componenets/Navigation";
import Dashboard from "./componenets/Dashboard/Dashboard";
import Incomes from "./componenets/Incomes/Incomes";
import Expenses from "./componenets/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";


function App() {
    const [active, setActive] = useState(1)

    const global = useGlobalContext()
    console.log(global)

    const orbMemo = useMemo(() => {
        return <Orb/>
    }, []);

    const bubblesMemo = useMemo(() => {
        return <Bubbles/>
    }, [])

    const displayData = () => {
        switch(active) {
        case 1:
            return <Dashboard/>
        case 2:
            return <Dashboard/>
        case 3:
            return <Incomes/>
        case 4:
            return <Expenses/>
        default:
            return <Dashboard/>
        }
    }
    
    return (
        <AppStyled background={background} className="App">
        {orbMemo}
        {bubblesMemo}
        <MainLayout>
            <Navigation active={active} setActive={setActive}/> 
            <main>
                {displayData()}
            </main>
        </MainLayout>
        </AppStyled>
    );
}

    const AppStyled = styled.div`
        height: 100vh;
        background-image: url(${props => props.background});
        position: relative;
        main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
    `;

    export default App;
