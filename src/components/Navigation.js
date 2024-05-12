import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TestExercise from "../exercises/TestExercise";
import ContextExample from "../exercises/ContextExample/ContextExample";

function Navigation() {
    return (
        <BrowserRouter>
            <div className="row">
                <div className="col-md-3">
                    <nav>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/test'}>Test</Link>
                        <Link to={'/examples-context'}>Use Context</Link>
                    </nav>
                </div>
                <div className="col-md-6">
                    <Routes>
                        <Route path="/" />
                        <Route path="/test" element={<TestExercise />} />
                        <Route path="/examples-context" element={<ContextExample />} />
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default Navigation;