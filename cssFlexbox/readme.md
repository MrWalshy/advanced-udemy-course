# Flexbox
- 'Flexbox is a more efficient way to lay out, align & distribute space among items in a container, even if their size is unknown', Colt Steele's definition
- Flexbox made making responsive websites easier
- Check out: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- I am already familiar with Flexbox, this is good for revision though

## Flex Properties
- Flexbox has properties for the 'container', & properties for the 'items' inside the container
- Enable a flex-container by setting the containers display to flex

### Container Properties
- flex-direction: <row || row-reverse || column || column-reverse>;
Specifies placement of items in a flex container. Defines the main-axis & its direction. Default is 'row'.

- justify-content: <flex-start || flex-end || center || space-between || space-around || space-evenly>;
Defines distribution of space between flex-items inside a flex-container, along the main-axis. Default is 'flex-start'. This does not change the order. 'flex-start', 'flex-end', & 'center' are the most cross-browser compatible at the time of writing.

- flex-wrap: <wrap || wrap-reverse || no-wrap>;
Specifies if items are forced onto one line or wrapped over multiple lines. Default is 'no-wrap'. When using flex-direction of column, set a height on the container for wrapping.

- align-items: <flex-start || flex-end || stretch || center || baseline>;
Defines distribution of space between flex items in a flex container, along the cross-axis. The default value is 'stretch' which takes up the entire length of the cross-axis. 

'baseline' aligns items by the bottom of the text inside an element.

- align-content: <flex-start || flex-end || space-between || space-around || center>;
Defines distribution of space between rows in a flex container, along the cross axis.


### Flex Item Properties
- order: <number>;
Used to specify layout order of specific items in their flex container. All flex items by default have an order of '0'. Lower numbers signify higher importance. A flex item with an order value of '-1' will appear before a flex item with an order value of '0'.

- flex: <'flex-grow' 'flex-shrink' 'flex-basis'>;
Defines the growth or shrinkage of a flex item to fit available space inside a flex container. It is a shorthand property for: flex-grow, flex-shrink, flex-basis.

- flex-grow: <number>;
This dictates how any available(unused) space is spread out amongst flex items. This comes down to ratios. Setting all flex items to the same value will share the available space evenly, giving a flex item a higher flex-grow value will give that item more of the available space.

availableSpace / totalOfAllFlexGrowInContainer = 1 fraction of the available space.

### Example
Two boxes.
Total space: 1000px
flex-basis: 100px; <-- This is applied to both boxes, ideal width/height of 100px.
Remaining avaliable space: 800px

If box 1 has a flex-grow value of 1 & box 2 has a flex-grow value of 3, box 2 will take up 3 times as much of the available space that 1 would take. So box 1 would get 200px of the available space & box 2 would get 600px of the available space.

- flex-shrink
This dictates how much flex items should shrink when the flex container does not have enough space. The default value is 1, all flex items shrink evenly.

Generally, the higher the value of flex-shrink, the faster the selected flex item will shrink. A value of 0 means the flex item will not shrink, abiding by its flex-basis.

- flex-basis: <width/height style value>;
Similar to width when working with rows, similar to height when working with columns. Flex-basis takes precedence over width & height. It specifies the ideal size of a flex item before it placed in a flex container. 

Flex-basis can be limited by max-width.

- align-self: <same values as 'align-items'>;
Defines alignment of the selected flex item on the cross-axis. This overrides 'align-items' on the selected flex item. The default value is inherited from it parent container's 'align-items' property. If thier is no parent container, value 'stretch' is default.

## Flexbox Terminology
### Flex container
- A container element, such as a div, with 'display: flex;' active.

### Flex item
- A child of a parent flex container, something inside the flex container.

### Main-axis
- The main-axis by default is horizontal.

### Cross-Axis
- The cross-axis intersects the main-axis, the default is vertical.

## The Holy Grail (Web Design)
- [1]See: https://en.wikipedia.org/wiki/Holy_grail_(web_design)
- The 'Holy Grail' layout has "multiple, equal height columns"([1]) defined in CSS.

## Flexbox Browser Support
- Flexbox is largely supported now by multiple browsers
- Older versions of browsers have different flexbox specifications
- Mixing old & new flex specs: https://css-tricks.com/using-flexbox/
- Browsers that don't support flexbox: https://medium.com/css-mine/flexbox-how-to-deal-with-older-browsers-fbf6eb8c7a65
- Use autoprefixers if you plan to support older browsers, this gets rid of the guesswork