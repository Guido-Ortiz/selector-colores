import Colors from "./components/Colors/Colors";
import Topbar from "./components/Topbar/Topbar";
import ColorPicker from './components/ColorPicker/ColorPicker';
import CreateColor from "./components/CreateColor/CreateColor";
import Palettes from "./components/Palettes/Palettes";

function App() {
  return (
    <div>
      <Topbar />
      {/* <Colors /> */}
      {/* <ColorPicker /> */}

      <CreateColor />
      <Palettes />
    </div>
  );
}

export default App;