import { ReactNode, useState } from "react";

import "@assets/css/Notifications.css";
import "@assets/css/NotificationsDark.css";
import { NotificationContext } from "@contexts/NotificationContextInstance";

interface Notification {
    id: number;
    message: string;
    type: "success" | "error" | "info";
}

interface NotificationProviderProps {
    children: ReactNode;
}

export default function NotificationProvider({
    children,
}: NotificationProviderProps) {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (
        message: string,
        type: "success" | "error" | "info",
    ) => {
        const id = new Date().getTime();
        setNotifications([...notifications, { id, message, type }]);
        setTimeout(() => {
            setNotifications((notifications) =>
                notifications.filter((notification) => notification.id !== id),
            );
        }, 5000);
    };

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div className="notification-container">
                {notifications.map(({ id, message, type }) => (
                    <div
                        key={id}
                        className={`notification ${type}`}
                        style={{
                            animation:
                                "fadeIn 0.3s ease-out, fadeOut 0.3s ease-in 4.7s",
                        }}
                    >
                        {message}
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
}
