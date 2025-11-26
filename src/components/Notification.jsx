import { useNotification } from "../contexts/NotificationContext";

const Notification = () => {
  const { notifications } = useNotification();

  return (
    <div className="fixed top-[10%] right-4 z-50 space-y-2">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`p-2 rounded-md shadow-lg text-white ${
            notif.type === "success"
              ? "bg-green-500"
              : notif.type === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
        >
          {notif.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
