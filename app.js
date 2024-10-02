import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1>Namaste React</h1>
}

const HeadingComponent = () => {
    return (
        <div className="id">
            <Title />
            <h1>This is my functional component</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);