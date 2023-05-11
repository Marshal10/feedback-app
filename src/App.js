import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./components/FeedbackContext";

function App() {

    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats  />
                            <FeedbackList   />
                            <AboutLink />
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={<About />} />
                </Routes>
                
            </div>
        </Router >
        </FeedbackProvider>
    )

}

export default App;