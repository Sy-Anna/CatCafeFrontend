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
            notification.add("Sikertelen kijelentkezés", "error");
        }
    };

    return (
        <div>
            <h2>Profilom</h2>
            <p>
                <strong>Név:</strong> {user.name}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <Button className="loginBtn" onClick={handleLogout}>
                Kijelentkezés
            </Button>
        </div>
    );
}
