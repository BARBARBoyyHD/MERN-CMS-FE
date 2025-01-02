import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePages from "./pages/HomePages";
import Dashboard from "./pages/Dashboard";
import LoginPages from "./pages/LoginPages";
import Register from "./pages/Register";
import AddContentPages from "./pages/AddContentPages";
import EditContentPages from "./pages/EditContentPages";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/pages/dashboard" element={<Dashboard />} />
          <Route path="/pages/login" element={<LoginPages />} />
          <Route path="/pages/register" element={<Register />}/>
          <Route path="/pages/add/content" element={<AddContentPages/>}/>
          <Route path="/pages/edit/content/:id" element={<EditContentPages/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
