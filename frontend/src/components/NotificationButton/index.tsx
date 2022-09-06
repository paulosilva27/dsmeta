import icon from '../../assets/img/notification_icon.svg'
import  "./styles.css"

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )

}

export default NotificationButton
