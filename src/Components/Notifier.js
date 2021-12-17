import { useSelector, useDispatch } from "react-redux";
import { NotifiersAdd } from "../Actions";
import {
  NotifierContainer,
  Notification,
  Cross,
} from "./Styles/Notifiers.styles";

const Notifier = () => {
  const dispatcher = useDispatch();
  var notifications = useSelector((state) => state.Notifiers);
  const notifications_render = notifications.map((notification) => (
    <Notification>
      {notification}
      <Cross
        src="https://img.icons8.com/ultraviolet/40/000000/delete-sign.png"
        onClick={() =>
          dispatcher(
            NotifiersAdd(
              notifications.filter((notif) => notif !== notification)
            )
          )
        }
      />
    </Notification>
  ));
  return <NotifierContainer>{notifications_render}</NotifierContainer>;
};

export default Notifier;
