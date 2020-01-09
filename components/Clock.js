import React from "react";
import '../static/style/components/clock.css'

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const AnimatedCard = function (_React$Component) {
    _inherits(AnimatedCard, _React$Component);

    function AnimatedCard() {
        _classCallCheck(this, AnimatedCard);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    AnimatedCard.prototype.render = function render() {
        let _props = this.props;
        let position = _props.position;
        let digit = _props.digit;
        let animation = _props.animation;

        return React.createElement(
            'div',
            { className: 'flipCard ' + position + ' ' + animation },
            React.createElement(
                'span',
                null,
                digit
            )
        );
    };

    return AnimatedCard;
}(React.Component);

const StaticCard = function (_React$Component2) {
    _inherits(StaticCard, _React$Component2);

    function StaticCard() {
        _classCallCheck(this, StaticCard);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    StaticCard.prototype.render = function render() {
        let _props2 = this.props;
        let position = _props2.position;
        let digit = _props2.digit;

        return React.createElement(
            'div',
            { className: position },
            React.createElement(
                'span',
                null,
                digit
            )
        );
    };

    return StaticCard;
}(React.Component);

const FlipUnitContainer = function (_React$Component3) {
    _inherits(FlipUnitContainer, _React$Component3);

    function FlipUnitContainer() {
        _classCallCheck(this, FlipUnitContainer);

        return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
    }

    FlipUnitContainer.prototype.render = function render() {
        let _props3 = this.props;
        let digit = _props3.digit;
        let shuffle = _props3.shuffle;
        let unit = _props3.unit;

        let now = digit;
        let before = digit - 1;

        // to prevent a negative value
        if (unit !== 'hours') {
            before = before === -1 ? 59 : before;
        } else {
            before = before === -1 ? 23 : before;
        }

        // add zero
        if (now < 10) now = '0' + now;
        if (before < 10) before = '0' + before;

        // shuffle digits
        let digit1 = shuffle ? before : now;
        let digit2 = !shuffle ? before : now;

        // shuffle animations
        let animation1 = shuffle ? 'fold' : 'unfold';
        let animation2 = !shuffle ? 'fold' : 'unfold';

        return React.createElement(
            'div',
            { className: 'flipUnitContainer' },
            React.createElement(StaticCard, {
                position: 'upperCard',
                digit: now
            }),
            React.createElement(StaticCard, {
                position: 'lowerCard',
                digit: before
            }),
            React.createElement(AnimatedCard, {
                position: 'first',
                digit: digit1,
                animation: animation1
            }),
            React.createElement(AnimatedCard, {
                position: 'second',
                digit: digit2,
                animation: animation2
            })
        );
    };

    return FlipUnitContainer;
}(React.Component);

const FlipClock = function (_React$Component4) {
    _inherits(FlipClock, _React$Component4);

    function FlipClock(props) {
        _classCallCheck(this, FlipClock);

        let _this4 = _possibleConstructorReturn(this, _React$Component4.call(this, props));

        _this4.state = {
            hours: 0,
            hoursShuffle: true,
            minutes: 0,
            minutesShuffle: true,
            seconds: 0,
            secondsShuffle: true
        };
        return _this4;
    }

    FlipClock.prototype.componentDidMount = function componentDidMount() {
        let _this5 = this;

        this.timerID = setInterval(function () {
            return _this5.updateTime();
        }, 50);
    };

    FlipClock.prototype.componentWillUnmount = function componentWillUnmount() {
        clearInterval(this.timerID);
    };

    FlipClock.prototype.updateTime = function updateTime() {
        // get new date
        let time = new Date();
        // set time units
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        // on hour chanage, update this.state.minutes
        if (hours !== this.state.hours) {
            let hoursShuffle = !this.state.hoursShuffle;
            this.setState({
                hours: hours,
                hoursShuffle: hoursShuffle
            });
        }
        // on minute chanage, update this.state.minutes
        if (minutes !== this.state.minutes) {
            let minutesShuffle = !this.state.minutesShuffle;
            this.setState({
                minutes: minutes,
                minutesShuffle: minutesShuffle
            });
        }
        // on second chanage, update this.state.seconds
        if (seconds !== this.state.seconds) {
            let secondsShuffle = !this.state.secondsShuffle;
            this.setState({
                seconds: seconds,
                secondsShuffle: secondsShuffle
            });
        }
    };

    FlipClock.prototype.render = function render() {
        let _state = this.state;
        let hours = _state.hours;
        let minutes = _state.minutes;
        let seconds = _state.seconds;
        let hoursShuffle = _state.hoursShuffle;
        let minutesShuffle = _state.minutesShuffle;
        let secondsShuffle = _state.secondsShuffle;

        return React.createElement(
            'div',
            { className: 'flipClock' },
            React.createElement(FlipUnitContainer, {
                unit: 'hours',
                digit: hours,
                shuffle: hoursShuffle
            }),
            React.createElement(FlipUnitContainer, {
                unit: 'minutes',
                digit: minutes,
                shuffle: minutesShuffle
            }),
            React.createElement(FlipUnitContainer, {
                unit: 'seconds',
                digit: seconds,
                shuffle: secondsShuffle
            })
        );
    };

    return FlipClock;
}(React.Component);

const Header = function (_React$Component5) {
    _inherits(Header, _React$Component5);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
    }

    Header.prototype.render = function render() {
        return React.createElement(
            'header',
            null,
            React.createElement(
                'h1',
                null
            )
        );
    };

    return Header;
}(React.Component);

const Clock = function (_React$Component6) {
    _inherits(App, _React$Component6);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
    }

    App.prototype.render = function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Header, null),
            React.createElement(FlipClock, null)
        );
    };

    return App;
}(React.Component);

export default Clock;

// ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));
