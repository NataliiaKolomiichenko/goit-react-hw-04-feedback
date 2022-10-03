import React, { Component } from "react";
import PropTypes from 'prop-types'
import css from './Statistics.module.css'

class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage:PropTypes.number.isRequired,
    }

    render() {
        return <ul className={css.statList}>
                <li>Good: {this.props.good}</li>
                <li>Neutral: {this.props.neutral}</li>
                <li>Bad: {this.props.bad}</li>
                <li>Total: {this.props.total}</li>
                <li>Positive feedback: {this.props.positivePercentage}%</li>
            </ul>
    }
}

export default Statistics;