import PropTypes from 'prop-types'
import css from './Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
        return <button type="button" className={css.btn} key={option} onClick={onLeaveFeedback}>{option}</button>
    })
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
