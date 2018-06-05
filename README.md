# Spectacle GSAP

[GSAP](https://greensock.com/gsap) is hands down the most powerful, expressive web animation library there is. [Spectacle](https://github.com/FormidableLabs/spectacle) is the jam. Lets make them play nice and have some fun.

<img src="demo/assets/gsap-fun.gif" alt="gsap animation" />

## Installation
Assuming you already have a working Spectacle presentation, with react and spectacle itself already installed, you should be able to install Spectacle GSAP like so
```
npm install --save spectacle-gsap
```

## Usage
| Name | PropType | Description |
|---|---|---|
| anims | PropTypes.array | Detailed below.
| style | PropTypes.object | Style to pass along to children.
| order | PropTypes.number | An optional integer starting at 1 for the presentation order of the Appear tags within a slide. If a slide contains ordered and unordered Appear tags, the unordered will show first.
| playReverse | PropTypes.bool | An optional boolean, where true will play the animation in reverse while going back through slides or fragments.
| inline | PropTypes.bool | An optional boolean, where true assign inline block styling to the tween container, ideal for animations that play on chunks of text.

The anims prop is the most important part of the component, giving you an interface to the greensock api. It mirrors the GSAP API very closely, so the shape is below, but the following examples might be more useful.

| Name | PropType | Description |
|---|---|---|
| Method | PropTypes.string | This corresponds to a greensock method, such as `from`, `to`, `fromTo`, `staggerTo` and more.
| Target | PropTypes.func | If you want the animation to target a group of elements or something other than the direct child of the Tween component, this prop can do that for you. Write any function that returns a classname, id, or element(s).
| Duration | PropTypes.number | Duration of the animation in seconds.
| Args | PropTypes.array | Arguments for the tween function. This is very freeform, and can include properties to animate, easing, offsets, and more. Check out the [greensock documentation](https://greensock.com/docs/TweenMax) here to get a handle on it.

## Examples
Here's an example of a simple fade in / drop in from above.
// gif
// component
// GSAP equivalent

Here's an example of a staggered fade in / drop in for each letter.
// gif
// component
// GSAP equivalent

Here's an example of a **something with a crazy motherfucking ease like a bounce** (this might need an extra gsap module installed)
// gif
// component
// GSAP equivalent


## TODO
* Do an example that shows how the anims property maps to greensock arguments. Take something like `TweenMax.from(mc, 1.5, {opacity:0, delay:2});` and show what parts do what.
* Some explanation around the target function??
* Do a handful of use case examples. Like the components, and a gif of what it looks like.