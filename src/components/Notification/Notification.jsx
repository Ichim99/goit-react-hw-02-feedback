import propTypes from 'prop-types';
import style from './Notification.module.css'


export const Notification = ({message}) => (
    <p className={style.notification}>
        {message}
    </p>
)

Notification.propTypes = {
    message: propTypes.string.isRequired
}