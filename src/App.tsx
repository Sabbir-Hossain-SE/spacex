import { Grid } from "antd";
import "./App.css";
import SpaceX from "./pages/SpaceX";

const { useBreakpoint } = Grid;

const App: React.FC = () => {
    const screens = useBreakpoint();
    const { xs, sm, md, lg, xl, xxl } = screens;
    const customStyle = {
        padding: "24px 24px",
        backgroundColor: "#FAFAFB",
        minHeight: "100vh"
    };

    return (
        <div className="App" style={customStyle}>
            <SpaceX />
        </div>
    );
};

export default App;
