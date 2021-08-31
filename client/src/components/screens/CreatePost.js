import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [image, setImage] = useState("");
	const [url, setUrl] = useState("");
	const history = useHistory();

	useEffect(() => {
		if (url) {
			fetch("/post/createPost", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
				body: JSON.stringify({
					title,
					body,
					photo: url,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					history.push("/");
				});
		}
		console.log(url);
		setUrl("");
	}, [url]);

	const postDetails = async () => {
		const data = await new FormData();
		data.append("file", image);
		data.append("upload_preset", "igclone");
		data.append("cloud_name", "chaluatmaa");
		await fetch("https://api.cloudinary.com/v1_1/chaluatmaa/image/upload", {
			method: "PUT",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => {
				setUrl(data.secure_url);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div
			className="card input-field"
			style={{
				margin: "30px auto",
				maxWidth: "500px",
				padding: "20px",
				textAlign: "center",
			}}
		>
			<h4>Create Post</h4>
			<input
				type="text"
				placeholder="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type="text"
				placeholder="body"
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<div className="file-field input-field">
				<div className="btn">
					<span>Upload Image</span>
					<input
						type="file"
						onChange={(e) => {
							console.log(e.target.files);
							setImage(e.target.files[0]);
						}}
					/>
				</div>
				<div className="file-path-wrapper">
					<input className="file-path validate" type="text" />
				</div>
			</div>
			<button
				className="btn "
				type="submit"
				name="action"
				onClick={postDetails}
			>
				Create Post
			</button>
		</div>
	);
};

export default CreatePost;
