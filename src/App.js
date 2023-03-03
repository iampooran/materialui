import Inputs from "./Inputs";
import Layout from "./Layout";
import Navigation from "./Navigation";
import Surfaces from "./Surfaces";
import Feedback from "./Feedback";
import DataDisplay from "./DataDisplay";
function App() {
  return (
    <div>
      <Inputs/>
      <DataDisplay/>
      <Feedback/>
      <Surfaces/>
      <Navigation/>
      <Layout/>
    </div>
  );
}

export default App;
