import { Button } from "react-bootstrap";

import { UsersApi } from "@/libs/api/users";
import { User } from "@/libs/types";

type MyPageProps = {
	user: User;
	onLogout: () => void;
};

export default function MyPage({ user, onLogout }: MyPageProps) {
	const handleLogout = async () => {
		const token = localStorage.getItem("token");

		if (!token) {
			alert("Nincs bejelentkezve felhasználó.");
			return;
		}

		const [err] = await UsersApi.logout(token);
		if (!err) {
			onLogout();
		} else {
			alert("Sikertelen kijelentkezés");
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
			<Button className='loginBtn' onClick={handleLogout}>
				Kijelentkezés
			</Button>
		</div>
	);
}
