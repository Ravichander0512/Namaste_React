import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>I am from Title component</h1>
const HeadingComponent2 = () => <h2>I am header tag 2</h2>;
const sum=(a,b)=>a+b;

const footer=<div>
  <h1>Footer</h1>
  <p>Footer content</p>
</div>

const HeadingComponent = () => {
  return (
    <div>
      {sum(2,3)}
        <Title />
        <h1>I am from header component</h1>
        <HeadingComponent2/>
        {footer}
    </div>
      
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
