import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/Answer.css';

export default class Answer extends Component {
  constructor() {
    super();
    this.correctOrIncorrect = this.correctOrIncorrect.bind(this);
  }

  correctOrIncorrect(e) {
    const { resultCorrectScore, resultIncorrectScore } = this.props;
    document.getElementById('correct-answer').classList.add('greenAnswer');
    Array.from(document.getElementsByName('wrong-answer'))
      .map((answer) => answer.classList.add('redAnswer'));
    resultCorrectScore(e);
    resultIncorrectScore(e);
  }

  render() {
    const { mix, index, isDisabled } = this.props;

    return (
      index === 0 ? (
        <button
          data-testid="correct-answer"
          type="button"
          id="correct-answer"
          disabled={ isDisabled }
          onClick={ (e) => this.correctOrIncorrect(e) }
        // className={colorAnswer && ('greenAnswer')}
        >
          {mix}
        </button>)
        : (
          <div>
            <button
              data-testid={ `wrong-answer-${index}` }
              type="button"
              name="wrong-answer"
              disabled={ isDisabled }
              onClick={ this.correctOrIncorrect }
              className="wrong-answer"
            >
              {mix}
            </button>
          </div>)

    );
  }
}

Answer.propTypes = {
  index: PropTypes.number.isRequired,
  mix: PropTypes.string.isRequired,
  resultCorrectScore: PropTypes.func.isRequired,
  resultIncorrectScore: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
