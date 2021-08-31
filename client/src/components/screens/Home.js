import React, { useEffect, useState } from "react";

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(async () => {
		await fetch("post/allPosts", {
			headers: {
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
			});
	}, []);

	return (
		<div className="home">
			{/* {data &&
				data?.map((item) => {
					return (
						<div className="card home-card">
							<h4>{item.postedBy.name}</h4>

							<div className="card-image">
								<img
									src="https://freepngimg.com/thumb/ryan_gosling/31253-3-ryan-gosling-transparent-background.png"
									alt=""
								/>
							</div>
							<div className="card-content">
								<i className="material-icons">favorite_border</i>
								<h4>title</h4>
								<p>this is amazing post</p>
								<input type="text" placeholder="add-comment" />
							</div>
						</div>
					);
				})} */}

			{/* <div className="card home-card">
				<h4>This is card</h4>

				<div className="card-image">
					<img
						src="https://freepngimg.com/thumb/ryan_gosling/31253-3-ryan-gosling-transparent-background.png"
						alt=""
					/>
				</div>
				<div className="card-content">
					<i className="material-icons">favorite_border</i>
					<h4>title</h4>
					<p>this is amazing post</p>
					<input type="text" placeholder="add-comment" />
				</div>
			</div> */}

			{/* <div className="card home-card">
				<h4>This is card</h4>
				<div className="card-image">
					<img
						src="https://freepngimg.com/thumb/ryan_gosling/31253-3-ryan-gosling-transparent-background.png"
						alt=""
					/>
				</div>
				<div className="card-content">
					<i className="material-icons">favorite_border</i>
					<h4>title</h4>
					<p>this is amazing post</p>
					<input type="text" placeholder="add-comment" />
				</div>
			</div> */}

			{/* <div className="card home-card">
				<h4>This is card</h4>
				<div className="card-image">
					<img
						src="https://freepngimg.com/thumb/ryan_gosling/31253-3-ryan-gosling-transparent-background.png"
						alt=""
					/>
				</div>
				<div className="card-content">
					<i className="material-icons">favorite_border</i>
					<h4>title</h4>
					<p>this is amazing post</p>
					<input type="text" placeholder="add-comment" />
				</div>
			</div> */}

			{/* <div className="card home-card">
				<h4>This is card</h4>
				<div className="card-image">
					<img
						src="https://freepngimg.com/thumb/ryan_gosling/31253-3-ryan-gosling-transparent-background.png"
						alt=""
					/>
				</div>
				<div className="card-content">
					<i className="material-icons">favorite_border</i>
					<h4>title</h4>
					<p>this is amazing post</p>
					<input type="text" placeholder="add-comment" />
				</div>
			</div> */}

			{/* <div className="card home-card">
				<h4>This is card</h4>
				<div className="card-image">
					<img
						src="https://freepngimg.com/thumb/ryan_gosling/31253-3-ryan-gosling-transparent-background.png"
						alt=""
					/>
				</div>
				<div className="card-content">
					<i className="material-icons">favorite_border</i>
					<h4>title</h4>
					<p>this is amazing post</p>
					<input type="text" placeholder="add-comment" />
				</div>
			</div> */}

			{/* <div className="card home-card">
				<h4>This is card</h4>
				<div className="card-image">
					<img
						src="https://freepngimg.com/thumb/ryan_gosling/31253-3-ryan-gosling-transparent-background.png"
						alt=""
					/>
				</div>
				<div className="card-content">
					<i className="material-icons">favorite_border</i>
					<h4>title</h4>
					<p>this is amazing post</p>
					<input type="text" placeholder="add-comment" />
				</div>
			</div> */}

			<div className="card home-card">
				<h4>This is card</h4>
				<div className="card-image">
					<img
						src="https://freepngimg.com/thumb/ryan_gosling/31253-3-ryan-gosling-transparent-background.png"
						alt=""
					/>
				</div>
				<div className="card-content">
					<i className="material-icons">favorite_border</i>
					<h4>title</h4>
					<p>this is amazing post</p>
					<input type="text" placeholder="add-comment" />
				</div>
			</div>
		</div>
	);
};

export default Home;
