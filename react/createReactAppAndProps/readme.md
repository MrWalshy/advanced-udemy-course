- hello-world contains the game from the official React tutorial

# What is 'Webpack'?
- A module bundler for modern JS applications (Essentially a build tool)
- Able to combine different JS files into a bundle.js
- Has a plugin systen that runs tools like 'babel'
- Also can bundle other assets such as CSS, Images, etc...
- Create React App Uses Webpack

# Create-React-App Commands
- See also 'nano-react-app' for a lightweight none production version
## Install create react-app with npm
    npm install -g create-react-app

## Create a react-app
- Creates build with specified project name in the current directory

        npx create-react-app projectName
        // or
        npm init react-app projectName

## Start the server
- Navigate into the newly created React application and type in 'npm start' to start the web server, and open the app in a browser.

        cd helloworld/
        npm start

# Files/Folders in a Create-React-App
## public
- All files here do not go through the 'Webpack' build process.
- Any file is delivered without modification, as is...

## public/index.html
- Has a div with id 'root' for rendering

## src/index.js
- Has a 'ReactDOM.render()' instruction pointing at the div with id 'root' and a component to be rendered
- The 'ReactDOM.render()' instruction by default points at the '<App />' component

## src/App.js
- Contains the 'App' component

# What is a 'React Component Class'?
- A module component that takes parameters, called 'props' (properties), returning a hierarchy of views to display via the 'render' method.
- Example uses JSX

        class ShoppingList extends React.Component {
                render() {
                        return (
                        <div className="shopping-list">
                                <h1>Shopping List for {this.props.name}</h1>
                                <ul>
                                <li>Instagram</li>
                                <li>WhatsApp</li>
                                <li>Oculus</li>
                                </ul>
                        </div>
                        );
                }
        }

## What does 'render' do?
- Returns a description of what to be displayed on the screen. React transforms the description and displays the result.
- Returns a 'React element', a lightweight description of what to render
- XML like syntax is transformed at build time to 'React.createElement('element');

        return React.createElement('div', {className: 'shopping-list'},
                React.createElement('ul', /* ... ul children ... */)
        );

        // Render method
        ReactDOM.render(<ShoppingList />, document.querySelector('#root'));

## What is a prop?
- A prop is a property

        class Board extends React.Component {
                renderSquare(i) {
                // Passing a prop called value to the instance of Square
                return <Square value={i} />;
        }

## How does React remember things?
- React components use 'state' to remember things
- React components 'state' can be set with 'this.state' in their constructors

## Naming Convention
- It is conventional to use 'on[Event]' for props which represent events
- It is conventional to use 'handle[Event]' for methods which handle the events

## Why Immutability is important
- Two approaches to changing data:
        - Mutate the data by directly changing the data's values
        - Replace the data with a new copy which has the desired changes
- Immutability makes complex features easier to implement
- Avoiding direct data mutation lets us keep previous versions of data intact, so they can be reused later
- Detecting changes in mutable objects is difficult because they require comparing to a previous copy of itself, so the whole object tree has to be traversed
- Immutability helps build 'pure components' in React. Immutable data allows easy determination of changes, which helps determine when a component requires a re-render.

### Data Change with Mutation
        var player = {score: 1, name: 'Jeff'};
        player.score = 2;
        // Now player is {score: 2, name: 'Jeff'}

### Data Change without Mutation
        var player = {score: 1, name: 'Jeff'};
        // Object spread syntax proposal
        var newPlayer = {...player, score: 2}

## What is a 'function component'?
- Function components are simpler to write components that only contain a render method, and don't have their own state.
- Instead of a class extending 'React.Component', a function that takes 'props' as input and returns what should be rendered can be written
- Function components are less tedious to write

        function Square(props) {
                return (
                        <button className="square" onClick={props.onClick}>
                                {props.value}
                        </button>
                )
        }