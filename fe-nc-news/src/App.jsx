import { Routes, Route } from "react-router-dom";
import { ArticlesView } from "./components/ArticlesView";
import { Header } from "./components/Header";
import SingleArticleView from "./components/SingleArticleView";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesView />} />
        <Route path="/articles/:article_id" element={<SingleArticleView />} />
      </Routes>
    </>
  );
}

export default App;
