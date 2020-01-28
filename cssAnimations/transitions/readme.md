# CSS Transitions
- Allows the control of animation speed when changing CSS properties
- 4 Transition Properties

## transition-duration
- This specifies the time in 'ms' or 's'
- Multiple values can be passed in seperated by commas

## transition-property
- Specify which properties you want to transition
- Properties include:
background; opacity; transform; all;
- Multiple properties can be selected using commas

## transition-timing-function
- Specify acceleration curves in a transition (speed of selected parts of the animation time)
- ease-in; ease-out; linear; cubic-bezier();
- Check out 'easings.net' for some easy acceleration curves info
- MDN also has good material to view
- CSV can be used as in transition-delay

## transition-delay
- How long to wait until the transition starts
- Time till start & time for another animation to start can be specified with CSV's. Place the timing in the same order as the transition properties
- transition-delay: 1s, 10s;

## Shorthand Transitions
- Transitions can be wrote all in one line using the 'transition' keyword. Tidier then 4
- transition: <property> <duration> <timing-function> <delay>;
- transition: background 1.5s ease-in 1;

## What can be transitioned?
- Most CSS properties can be transitioned, this does not mean they should

## What should be transitioned?
- These properties are the most recommended to use for performance:
-- transform: translate();
-- transform: scale();
-- transform: rotate();
-- opacity
- These have better performance due to how the DOM is rendered. These properties belong to what is called the 'Composite Layers'. These are one of the last things rendered by the DOM & thus do not require going all the way through the DOM chain

## How the DOM is rendered? (Basic)
- Order is top to bottom. Higher up the order requires the browser to do more work
### Records
- Function Call
- Recalculate Style
- Layout (Things like: width, height, margin, top/right/bottom/left, etc)
- Paint Setup
- Paint (Things like: box-shadow, border-radius, background, outline, etc...)
- Composite Layers (Things like: transform, opacity, etc...)

### Article on DOM Rendering
- https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/