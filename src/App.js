
import Logging from "./component/loggin/logging";
import Layout from "./component/layout/layout";
import { Route ,Routes , BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Demande_root from "./component/demande/demandeRoot";
function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/logging" element={<Logging />} />
          <Route path="/:role/:id_user/:version" element={<Layout />} />
          <Route path="/:id_demande/id_user/demande" element={<Demande_root />} />

        </Routes>
      </BrowserRouter>
    </div>

    </Provider>
  );
}

export default App;
