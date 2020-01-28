# Keyframes

## What are 'Keyframes'?
- 'Transition' allow animating a 'single-state' change, such as a square animating into a circle whilst the background color also changes
- 'Keyframes' allow more complex 'multi-state' animations, the points in-between the start & end of a animation

### Example

--------------|-----------------|----------------|---------------|
0%            25%               50%              75%             100%
color: red    color: orange     color: yellow     color: green   color: blue
font-size:                      font-size:                       font-size:
   20px                            40px                              20px

## Steps to making Keyframes with Keyframe Syntax
### Step 1
- Define the keyframes, as many keyframes as needed can be added
@keyframes someName {
    0% {
        color: blue;
    }
    33% {
        color: green;
    }
    66% {
        color: white;
    }
    100% {
        color: blue
    }
}

### Step 2
- Apply/Assign the defined keyframes
p {
    animation-name: someName; /* Refers to the defined animation */
    animation-duration: 3s; /* The time the animation takes to complete */
    animation-timing-function: linear; /* Speed of the animation at specific points */
    animation-delay: 0s; /* Time delay until the animation starts (ms or s) */
    animation-iteration-count: infinite; /* Amount of times the animation should repeat */
}

## Some other animation properties
- animation-iteration-count: <number || infinite>;
Specifies the amount of times the animation should run.

- animation-fill-mode: <forwards || backwards || both || none>;
This specifies what styles an animation should apply before & after. 
Forwards will hold the end state of the animation on the element. 
Backwards, even with animation delay, will immediately change the elements state to 0% of the animation; returning to the original state at the end of the animation.
Both will hold the end state & immediately change the current state when the animation starts.

- animation-direction: <forward || reverse || alternate>;
Allows you to choose the direction of the animation, alternate combines both forwards & backwards.

- animation-play-state: <paused || running>;
This will either pause or start an animation

### Animation Shorthand
- The first time encountered will be the animation-duration
- The second time encountered will be the animation-delay
- Animation name comes first
- The following has animation-name: slideRight; animation-duration: 2s; animation-timing-function: ease-in; animation-iteration-count: infinite; animation-delay: 2s; animation-direction: reverse; in that respective order.
animation: slideRight 2s ease-in infinite 2s reverse;