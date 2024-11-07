"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ArrowRight3Img from "../../public/images/icon/arrow-right3.svg";
import Field from "../../common/Field";
import URL from "@/components/URL.js"; 
function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitForm = async (formData) => {
		console.log("Submitting Form Data = ", formData);
		try {
			const response = await fetch(`${URL}/api/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const result = await response.json();
			console.log("Response from server:", result);
			// Handle success (e.g., show a success message)
		} catch (error) {
			console.error("Error submitting form:", error);
			// Handle error (e.g., show an error message)
		}
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field">
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
						placeholder="Your email address"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<input
					{...register("phone", { required: "Phone number is required." })}
					type="text"
					placeholder="+088-234-6849"
				/>
			</div>
			<div className="aximo-form-field">
				<textarea
					{...register("message", { required: "Message is required." })}
					placeholder="Write your message here..."
				></textarea>
			</div>
			<button id="aximo-submit-btn" type="submit">
				Send message{" "}
				<span>
					<Image src={ArrowRight3Img} alt="ArrowRight3Img" />
				</span>
			</button>
		</form>
	);
}

export default MessageForm;
