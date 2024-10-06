#Learning React

## Parcel - is a bundler that bundles an app, packages it for shipping to prod

- Dev build
- Local server
- Hot Module Replacement
- File watching algorithm - written in C++
- Caching - faster builds
- Image Optimisation
- Minification
- Bundle all files
- Compress files
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error handling
- HTTPs
- Tree shaking - remove unused code
- Different dev and prod bundles

## ways of adding react to project:

- using cdn links for React and ReactDOM
- npm to install react and reactDOM and importing them into `app.js`

## creating react element without jsx

```jsx
const heading = React.createElement("tag", { attributes }, "children");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

- for nested elements children will be replaced by the reactElement code for child
- A react element is a javascript object
- `render()` method will be converting the object into `heading` tag and place it in DOM

## creating a prod build:

- npx parcel build index.html
- creates three main files in dist folder, which contain optimised code
  - dist/index.html
  - dist/index.46563767djhdj.css
  - dist/index.462hgsh6.js
- .parcel-cache, dist, node_modules folders regenerate

## JSX - syntax for creating react elements

- JSX code is transpiled into react element by Babel (transpiler) to be understood by React and JS engine
- not a valid js code, not understood by Js engine which only understands ECMA script language
- transpiled by parcel using Babel (transpiler)
- attributes in jsx are written in camelCase
- multiple lines code is surrounded by parentheses ()

## React components are of two types:

- class based components
- functional components

# Functional components:

- These are js functions returning some JSX element or react element

- React functional element

```jsx
const headingComponent = () => {
  return <h1 className="haeding">This is a functional component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<headingComponent />);
```

- Component composition - component inside component

```jsx
const Title = () => {
  return <h1>Namaste React</h1>;
};

const HeadingComponent = () => {
  return (
    <div className="id">
      <Title />
      <h1>This is my functional component</h1>
    </div>
  );
};
```

- we can put component inside a react element, react element inside another react element, and also react element inside a component

## Dynamic mapping

```jsx

const restList = [restaurant data];
{
    restList.map((restaurant) => <RestaurantCard key={restList.info.id} resData= {restaurant}/>)
}

```

## Food ordering app

- Header
  - Logo
  - Nav Items
- Body
  - Search
  - RestaurantContainer
    - Restaurant Card
      - Img
      - Name of Res, Rating, cuisine, delivery time
- Footer
  - Copyright
  - Links
  - Address
  - Contact

## Two types of exports and imports:

- Default exports - There can be only one default export in a file

```jsx
export default Hearder;

import Header from "./components/Header";
```

- Named Exports - There can be any number of named exports in a file

  ```jsx
  export const CDN_URL = "https://hgjsj";
  export const LOGO_URL = "https://jshjhs";

  import { CDN_URL } from "file path";
  import { LOGO_URL } from "file path";

  /*Mixed exports/imports*/
  export default MyComponent;
  export { AnotherComponent };

  import MyComponent, { AnotherComponent } from "./Component";
  ```

## React Hooks

- Normal javascript utility functions
- Two important react hooks:

  - useState() - for generating state variables in react
  - useEffect()

- useState()
  - Whenever state variables update, reacttriggers a reconciliation cycle (re-renders)

```jsx
const [listOfRestaurants, setListOfRestaurants] = useState(restList);
```

- useEffect()
  callback function written in it is called after the component renders
  e.g., Body will render and then the fetch api will be called and page will be re-rendered by useEffect

```jsx
 useEffect(()=>{
        fetchData();
    }, []);

    fetchData() - callback function
    [] - dependency
```

## React reconciliation algorithm (React Fiber architecture) - introduced in react16

React uses Diff algorithm to compare the Old Virtual DOM and new Virtual DOM and finally based on the difference make changes to the actual DOM

## CORS - Cross origin resource sharing

- Browser clocks call from one origin to another origin for resources
- Preflight/OPTIONS calls are made from origin1 before the actual request
- on receiving Pre-flight server in origin 2, it sends additional HTTP header
- actual POST, GET or any other call is made then
- Additional header:
  - Access-Control-Allow-Origin: \*
  - Access-Control-Allow-Methods: GET, POST, PUT, DELETE

## Shimmer UI

- resembles the skeleton of actual UI till the data is loaded
- displays fake cards or skeleton
- conditional rendering

```jsx
if (listOfRestaurants.length === 0) {
  return <Shimmer />;
}
```

## useEffect Hook

- called after the component is rendered
- if it is called without dependency array => it will be called everytime the component is rendered

```jsx
useEffect(() => {
  console.log("useffect called");
});
```

- if useEffect is called with an empty dependency array => it will be called only once during initial render

```jsx
useEffect(() => {}, []);
```

-if called with a dependency in the dependency array => it will be called each time the dependency changes

```jsx
useEffect(() => {}, [btnName]);
```

each time changes are made in btnName useEffect will be called
