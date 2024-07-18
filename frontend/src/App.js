import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header/Header";
import Navigation from "./Component/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Component/Services/Services";
import Blog from "./Component/Blog/Blog";
import Adduser from "./Component/Adduser";
import EditUser from "./Component/EditUser";
import Userlist from "./Component/Userlist";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
      <p>hello</p>
      <Header />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/services" element={<Services />} />
          <Route path="/contact/Blog" element={<Blog />} />
          <Route path="/Viewuser" element={<Userlist />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/add" element={<Adduser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
