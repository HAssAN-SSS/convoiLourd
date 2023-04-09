
import Logging from "./component/loggin/logging";
import Layout from "./component/layout/layout";
import { Route ,Routes , BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/logging" element={<Logging />} />
          <Route path="/:role/:id_user/:version" element={<Layout />} />

        </Routes>
      </BrowserRouter>
    </div>

    </Provider>
  );
}

export default App;
