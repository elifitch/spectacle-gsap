'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _lodash = require('lodash.findkey');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-find-dom-node, no-prototype-builtins */


// import TweenMax from 'gsap';
// import TimelineMax from 'gsap/TimelineMax';

require('gsap');

var Tween = function (_Component) {
  _inherits(Tween, _Component);

  function Tween() {
    _classCallCheck(this, Tween);

    var _this = _possibleConstructorReturn(this, (Tween.__proto__ || Object.getPrototypeOf(Tween)).call(this));

    _this.state = {
      activeAnimation: -1
    };
    _this.tl = new TimelineMax({});
    return _this;
  }

  _createClass(Tween, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var shouldDisableAnimation = this.props.route.params.indexOf('export') !== -1 || this.props.route.params.indexOf('overview') !== -1;

      if (shouldDisableAnimation) {
        this.setState({ activeAnimation: this.props.to.length - 1 });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var node = (0, _reactDom.findDOMNode)(this.fragmentRef);
      if (!node.dataset) {
        node.dataset = {};
      }
      node.dataset.order = this.props.order;
      node.dataset.animCount = this.props.to.length;
      this.setInitialTweenState(node);
      setTimeout(function () {
        // Need to set timeout here or state.fragments is empty
        _this2.seekToCurrentAnimationState();
      }, 0);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var shouldDisableAnimation = nextProps.route.params.indexOf('export') !== -1 || nextProps.route.params.indexOf('overview') !== -1;

      if (shouldDisableAnimation) {
        this.setState({ activeAnimation: this.props.to.length - 1 });
        return;
      }

      var animationStatus = this.getAnimationStatus();
      if (animationStatus) {
        var newAnimationIndex = animationStatus.every(function (a) {
          return a === true;
        }) ? animationStatus.length - 1 : animationStatus.indexOf(false) - 1;
        var state = nextProps.fragment;
        var slide = this.props.route.slide;


        this.context.stepCounter.setFragments(state.fragments[slide], slide);

        if (newAnimationIndex > this.state.activeAnimation) {
          if (this.tl.isActive()) {
            // jump to next label to prevent weird behavior where tweens become
            // out of sync with slide behavior
            this.tl.seek(this.tl.getLabelAfter());
          }
          this.playTween();
        }
        if (newAnimationIndex < this.state.activeAnimation) {
          if (this.tl.isActive()) {
            // jump to next label to prevent weird behavior where tweens become
            // out of sync with slide behavior
            this.tl.seek(this.tl.getLabelBefore());
          }
          this.reverseTween();
        }
        this.setState({
          activeAnimation: newAnimationIndex
        });
      }
    }
  }, {
    key: 'setInitialTweenState',
    value: function setInitialTweenState(target) {
      var _this3 = this;

      var setInitialTween = false;
      this.props.to.forEach(function (segment, segmentIndex) {
        var isLastSemgment = segmentIndex === _this3.props.to.length - 1;

        segment.forEach(function (tween) {
          if (!setInitialTween) {
            setInitialTween = true;
            _this3.tl.fromTo(target, tween.duration, _this3.props.from.params, tween.params);
            return;
          }
          _this3.tl.to(target, tween.duration, tween.params);
        });

        _this3.tl.addLabel('segment-' + segmentIndex);
        if (!isLastSemgment) {
          _this3.tl.addPause();
        }
      });
      this.tl.pause();
    }
  }, {
    key: 'getAnimationStatus',
    value: function getAnimationStatus() {
      var state = this.props.fragment;
      var slide = this.props.route.slide;

      var fragment = (0, _reactDom.findDOMNode)(this.fragmentRef);
      var slideHash = parseInt(this.context.slideHash, 10);
      var key = (0, _lodash2.default)(state.fragments[slide], {
        id: slideHash + '-' + parseInt(fragment.dataset.fid, 10)
      });
      if (slide in state.fragments && state.fragments[slide].hasOwnProperty(key)) {
        return state.fragments[slide][key].animations;
      }
      return null;
    }
  }, {
    key: 'seekToCurrentAnimationState',
    value: function seekToCurrentAnimationState() {
      var animationStatus = this.getAnimationStatus();
      if (animationStatus) {
        var newAnimationIndex = animationStatus.every(function (a) {
          return a === true;
        }) ? animationStatus.length - 1 : animationStatus.indexOf(false) - 1;
        this.tl.seek('segment-' + newAnimationIndex);
      }
    }
  }, {
    key: 'playTween',
    value: function playTween() {
      this.tl.play();
    }
  }, {
    key: 'reverseTween',
    value: function reverseTween() {
      this.tl.reverse();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var children = this.props.children;

      var child = _react2.default.Children.only(children);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.cloneElement(child, {
          className: ('fragment ' + child.props.className).trim(),
          style: _extends({}, child.props.style, this.props.style),
          ref: function ref(f) {
            _this4.fragmentRef = f;
          }
        })
      );
    }
  }]);

  return Tween;
}(_react.Component);

Tween.defaultProps = {
  style: {},
  order: 0
};

Tween.propTypes = {
  children: _propTypes2.default.node.isRequired,
  from: _propTypes2.default.shape({
    duration: _propTypes2.default.number,
    params: _propTypes2.default.object
  }).isRequired,
  to: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.shape({
    duration: _propTypes2.default.number.isRequired,
    params: _propTypes2.default.object.isRequired
  }))).isRequired,
  style: _propTypes2.default.object,
  order: _propTypes2.default.number,
  // From spectacle
  route: _propTypes2.default.shape({
    slide: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    params: _propTypes2.default.arrayOf(_propTypes2.default.string)
  }).isRequired,
  fragment: _propTypes2.default.object.isRequired
};

Tween.contextTypes = {
  export: _propTypes2.default.bool,
  overview: _propTypes2.default.bool,
  slide: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  slideHash: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  stepCounter: _propTypes2.default.shape({
    setFragments: _propTypes2.default.func
  })
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Tween);