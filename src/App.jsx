import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import NewsLetter from "./components/newsletter/newsletter";
import { NavbarMenu } from "./components/navbar/navbar";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import Blogs from "./pages/blogs/blogs";
import BlogDetails from "./pages/blogDetails/blogDetails";
import Support from "./pages/support/support";
import { SubscribeForm } from "./components/subscribe/subscribe";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="" element={<IndexPage />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="support" element={<Support />} />
        <Route path="subscribe" element={<SubscribeForm />} />
        <Route path="blogdetails" element={<BlogDetails />} />
      </Routes>
      <NewsLetter />
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 cursor-pointer"
        >
          <Button
            size="sm"
            className="p-2  bg-blue-gray-700 text-white rounded"
          >
            <svg
              className="fill-white w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
            </svg>{" "}
          </Button>
        </div>
      )}
    </div>
  );
}
export default App;
