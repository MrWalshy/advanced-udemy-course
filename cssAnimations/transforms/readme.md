# CSS Transform
- Lets you manipulate the coordinate space of the CSS visual formatting model
- In English, this means it lets you move, warp, rotate, & scale elements

## Transform Translate
- Moves something around (across the screen using x & y coords)
- Translate can also take negative units
- Translate is usually used on a trigger such as the hover pseudo-class
- transform: translate(x, y); transform: translateX(); transform: translateY;
- Translating an element that has already been translated will produce buggy behaviour. This is due to translate operating off the elements origin & not where it was moved

## Transform Scaling
- 'scale' is used to alter an elements size
- transform: scale(); transform: scaleX(); transform: scaleY();
- Every aspect of the element is scaled
- Use between 0 & 1 to scale down
- Scale uses the origin (center of an element), then scales evenly outwards from it. This can cause overflow

## Transform Origin
- Alters the origin of the element for transformations
- transform-origin: 2px; transform-origin: bottom; transform-origin: 2px 2px; transform-origin: left 5px;

## Transform Rotations
- 'rotate' rotates the selected element
- transform: rotate(45deg);
- Rotates around the origin of the element
- Rotations are useful in animations
- Units: deg(degrees), grad(gradians), rad(radians), turn(turn1)
- A right angle(90 degrees) would be:
90deg = 100grad = 0.25turn = 1.5708rad