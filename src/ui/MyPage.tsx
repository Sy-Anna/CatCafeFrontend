import { Button } from "react-bootstrap";

import { useNotification } from "@hooks/useNotification";
import { UsersApi } from "@libs/api/users";
import { User } from "@libs/types";

type MyPageProps = {
    user: User;
    onLogout: () => void;
};

export default function MyPage({ user, onLogout }: MyPageProps) {
    const notification = useNotification();

    const handleLogout = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            notification.add("Nincs bejelentkezve felhasználó.", "error");
            return;
        }

        const [err] = await UsersApi.logout(token);
        if (!err) {
            onLogout();
            localStorage.removeItem("token");
        } else {
            if (Array.isArray(err.message)) {
                for (const message of err.message) {
                    notification.add(message, "error");
                }
            } else {
                notification.add(err.message, "error");
            }
        }
    };

    return (
        <div>
            <h1>Profilom</h1>
            <p>
                <strong>Név:</strong> {user.name}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <Button onClick={handleLogout}>Kijelentkezés</Button>
        </div>
    );
}
