import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./context/GithubContext";
import User from "./pages/User";

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <Header />
        <main className="flex flex-col justify-between">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/user/:login" element={<User />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </GithubProvider>
  );
};

export default App;
