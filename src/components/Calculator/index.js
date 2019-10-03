import React, { Component } from 'react';

import { Frame, Row, Buttons, Display, Button } from './styles';

import calculate from '../../helpers/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: '',
      currentReal: '',
      numParenthesis: 0,
      newParenthesis: true,
    };
  }

  handleClick = event => {
    const {
      currentDisplay,
      currentReal,
      numParenthesis,
      newParenthesis,
    } = this.state;

    const newAction = event.target.textContent;

    switch (newAction) {
      case 'AC':
        this.setState({
          currentDisplay: '',
          currentReal: '',
          newParenthesis: true,
          numParenthesis: 0,
        });
        break;
      case '=':
        this.setState({
          currentDisplay: calculate(currentReal),
          currentReal: calculate(currentReal),
          newParenthesis: true,
          numParenthesis: 0,
        });
        break;
      case '( )':
        if (
          newParenthesis &&
          Number.isNaN(Number(currentReal[currentReal.length - 1])) &&
          currentReal[currentReal.length - 1] !== ')'
        ) {
          this.setState({
            currentDisplay: `${currentDisplay}(`,
            currentReal: `${currentReal}(`,
            numParenthesis: numParenthesis + 1,
            newParenthesis: false,
          });
        } else if (numParenthesis > 0) {
          this.setState({
            currentDisplay: `${currentDisplay})`,
            currentReal: `${currentReal})`,
            numParenthesis: numParenthesis - 1,
          });
        }
        break;
      case '%':
        this.setState({
          currentDisplay: `${calculate(currentReal) / 100}`,
          currentReal: `${calculate(currentReal) / 100}`,
        });
        break;
      case 'X':
        this.setState({
          currentDisplay: `${currentDisplay}X`,
          currentReal: `${currentReal}*`,
        });
        break;
      case '/':
      case '+':
      case '-':
        this.setState({
          currentDisplay: `${currentDisplay}${newAction}`,
          currentReal: `${currentReal}${newAction}`,
          newParenthesis: true,
        });
        break;
      default:
        this.setState({
          currentDisplay: `${currentDisplay}${newAction}`,
          currentReal: `${currentReal}${newAction}`,
        });
    }
  };

  render() {
    const { currentDisplay } = this.state;

    return (
      <Frame>
        <Display id="display">{currentDisplay}</Display>
        <Buttons>
          <Row>
            <Button id="clear" onClick={this.handleClick}>
              AC
            </Button>
            <Button id="parenthesis" onClick={this.handleClick}>
              ( )
            </Button>
            <Button id="percentage" onClick={this.handleClick}>
              %
            </Button>
            <Button id="divide" onClick={this.handleClick}>
              /
            </Button>
          </Row>
          <Row>
            <Button id="seven" onClick={this.handleClick}>
              7
            </Button>
            <Button id="eight" onClick={this.handleClick}>
              8
            </Button>
            <Button id="nine" onClick={this.handleClick}>
              9
            </Button>
            <Button id="multiply" onClick={this.handleClick}>
              X
            </Button>
          </Row>
          <Row>
            <Button id="four" onClick={this.handleClick}>
              4
            </Button>
            <Button id="five" onClick={this.handleClick}>
              5
            </Button>
            <Button id="six" onClick={this.handleClick}>
              6
            </Button>
            <Button id="subtract" onClick={this.handleClick}>
              -
            </Button>
          </Row>
          <Row>
            <Button id="one" onClick={this.handleClick}>
              1
            </Button>
            <Button id="two" onClick={this.handleClick}>
              2
            </Button>
            <Button id="three" onClick={this.handleClick}>
              3
            </Button>
            <Button id="add" onClick={this.handleClick}>
              +
            </Button>
          </Row>
          <Row>
            <Button id="zero" onClick={this.handleClick}>
              0
            </Button>
            <Button id="decimal" onClick={this.handleClick}>
              .
            </Button>
            <Button id="equals" onClick={this.handleClick}>
              =
            </Button>
          </Row>
        </Buttons>
      </Frame>
    );
  }
}

export default Calculator;
