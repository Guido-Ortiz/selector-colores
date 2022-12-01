import Colors from "./components/Colors/Colors";
import Topbar from "./components/Topbar/Topbar";
import ColorPicker from './components/ColorPicker/ColorPicker';
import CreateColor from "./components/CreateColor/CreateColor";

function App() {
  return (
    <div>
      <Topbar />
      {/* <Colors /> */}
      {/* <ColorPicker /> */}

      <CreateColor />
    </div>
  );
}

export default App;