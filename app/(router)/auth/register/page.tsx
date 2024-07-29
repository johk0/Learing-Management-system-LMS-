"use client";
import { useState } from "react";
import "./register.css";

interface FormData {
	username: string;
	email: string;
	password: string;
}

const Register = () => {
	const [formData, setFormData] = useState<FormData>({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"https://samiramustafa.pythonanywhere.com/users/register/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				alert(`Registration failed: ${errorData.message}`);
			} else {
				const data = await response.json();
				console.log(data);
				alert("Registration successful!");
			}
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
			alert("Registration failed. Please try again.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="registration-form">
			<h2>Register</h2>
			<label>
				Username:
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Password:
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					required
				/>
			</label>
			<button type="submit">Register</button>
		</form>
	);
};

export default Register;
