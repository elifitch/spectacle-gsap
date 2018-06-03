# Spectacle GSAP

[GSAP](https://greensock.com/gsap) is hands down the most powerful, expressive web animation library there is. [Spectacle](https://github.com/FormidableLabs/spectacle) is the jam. Lets make them play nice and have some fun.

<img src="demo/assets/gsap-fun.gif" alt="gsap animation" />

## Installation
Assuming you already have a working Spectacle presentation, with react and spectacle itself already installed, you should be able to install Spectacle GSAP like so
```
npm install --save spectacle-gsap
```

## Usage
|Name|PropType|Description|
|---|---|---|
| anims | PropTypes.object | Detailed below.
| style | PropTypes.object | Style to pass along to children.
| order | PropTypes.number | An optional integer starting at 1 for the presentation order of the Appear tags within a slide. If a slide contains ordered and unordered Appear tags, the unordered will show first.
| playReverse | PropTypes.bool | An optional boolean, where true will play the animation in reverse while going back through slides.
| inline | PropTypes.bool | An optional boolean, where true assign inline block styling to the tween container, ideal for animations that play on chunks of text.