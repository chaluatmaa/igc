import React from "react";

const Profile = () => {
	return (
		<div style={{ maxWidth: "550px", margin: "0 auto" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					margin: "18px 0",
					borderBottom: "2px solid black",
				}}
			>
				<div>
					<img
						alt=""
						src="https://lh3.googleusercontent.com/cnhlj99lheBrB9h13HxCjG7oo4hAoCjg-bzDHoxLDBC6FqnKcWHtXlsLeBKxllqobybn9cUvBmNeJ2MDoLYNZG0Vaxp4MNgVYd60E-iBaX6t0rdh6vanjrKZ0-dBuZAclXxY7KsJji7-H6jjXC1J37uLUEPdwE1IYilObgRRTLqT9Lyu_1_ZXdsJmfLrp-IlzWZnH3yM-_ri7eoUqEwPXJC0ix5WnWzLqnW8wSCghXtLznlQol8-UjfUzvgHuN4sVU6iUPbOYgVCwkQ4zB4JGZRcsBfOrk1sitvDgpQ9yBXnmzHi--23g5v4GTZD9XIZWhuWujeXqG3BGd457allDGUMGnD0IV7sgQAhGMY1Oq_JJJ1k94BHU5RADzBeHYkt3KN0pH0tfhTg0-q77-T_0ZNKTu3xgXkXcqytaCyMg-qw0mwkzBgwM_26bPCYaU0We2tbcr0TLo5KfLYcNiNGYsEilCDi1sQ-XfAy3RQ44gjB3AbNAs_R2I4JDmt-T0dpecxOjuVdVb5z03dm1LP-O1d1ZCGuKNqrEgw-N6Jgu8d3mxjA5jeIHlO3Xdd1py1BqjeFQE6VFwa9cjxAc5MNtIppya9pVL135rPFmiJENRT6j5z8Ju5QCJR2KFnTgLvYaSFPgn3OCwBb90tF_qlT4SAEN_BOrLZaiI-Ci497ThSkCEow2Eog6oVxw_cG4Ql1X8OMaQmS73b5kxzdXm3tT00X7Q=w787-h770-no?authuser=0"
						style={{ width: "160px", height: "160px", borderRadius: "50%" }}
					/>
				</div>
				<div>
					<h4>Ramesh</h4>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "110%",
						}}
					>
						<h5>40 posts</h5>
						<h5>40 followers</h5>
						<h5>40 following</h5>
					</div>
				</div>
			</div>
			<div className="gallery">
				<img
					alt="1"
					className="itemimage"
					src="https://lh3.googleusercontent.com/cnhlj99lheBrB9h13HxCjG7oo4hAoCjg-bzDHoxLDBC6FqnKcWHtXlsLeBKxllqobybn9cUvBmNeJ2MDoLYNZG0Vaxp4MNgVYd60E-iBaX6t0rdh6vanjrKZ0-dBuZAclXxY7KsJji7-H6jjXC1J37uLUEPdwE1IYilObgRRTLqT9Lyu_1_ZXdsJmfLrp-IlzWZnH3yM-_ri7eoUqEwPXJC0ix5WnWzLqnW8wSCghXtLznlQol8-UjfUzvgHuN4sVU6iUPbOYgVCwkQ4zB4JGZRcsBfOrk1sitvDgpQ9yBXnmzHi--23g5v4GTZD9XIZWhuWujeXqG3BGd457allDGUMGnD0IV7sgQAhGMY1Oq_JJJ1k94BHU5RADzBeHYkt3KN0pH0tfhTg0-q77-T_0ZNKTu3xgXkXcqytaCyMg-qw0mwkzBgwM_26bPCYaU0We2tbcr0TLo5KfLYcNiNGYsEilCDi1sQ-XfAy3RQ44gjB3AbNAs_R2I4JDmt-T0dpecxOjuVdVb5z03dm1LP-O1d1ZCGuKNqrEgw-N6Jgu8d3mxjA5jeIHlO3Xdd1py1BqjeFQE6VFwa9cjxAc5MNtIppya9pVL135rPFmiJENRT6j5z8Ju5QCJR2KFnTgLvYaSFPgn3OCwBb90tF_qlT4SAEN_BOrLZaiI-Ci497ThSkCEow2Eog6oVxw_cG4Ql1X8OMaQmS73b5kxzdXm3tT00X7Q=w787-h770-no?authuser=0"
				/>
				<img
					alt="2"
					className="itemimage"
					src="https://lh3.googleusercontent.com/cnhlj99lheBrB9h13HxCjG7oo4hAoCjg-bzDHoxLDBC6FqnKcWHtXlsLeBKxllqobybn9cUvBmNeJ2MDoLYNZG0Vaxp4MNgVYd60E-iBaX6t0rdh6vanjrKZ0-dBuZAclXxY7KsJji7-H6jjXC1J37uLUEPdwE1IYilObgRRTLqT9Lyu_1_ZXdsJmfLrp-IlzWZnH3yM-_ri7eoUqEwPXJC0ix5WnWzLqnW8wSCghXtLznlQol8-UjfUzvgHuN4sVU6iUPbOYgVCwkQ4zB4JGZRcsBfOrk1sitvDgpQ9yBXnmzHi--23g5v4GTZD9XIZWhuWujeXqG3BGd457allDGUMGnD0IV7sgQAhGMY1Oq_JJJ1k94BHU5RADzBeHYkt3KN0pH0tfhTg0-q77-T_0ZNKTu3xgXkXcqytaCyMg-qw0mwkzBgwM_26bPCYaU0We2tbcr0TLo5KfLYcNiNGYsEilCDi1sQ-XfAy3RQ44gjB3AbNAs_R2I4JDmt-T0dpecxOjuVdVb5z03dm1LP-O1d1ZCGuKNqrEgw-N6Jgu8d3mxjA5jeIHlO3Xdd1py1BqjeFQE6VFwa9cjxAc5MNtIppya9pVL135rPFmiJENRT6j5z8Ju5QCJR2KFnTgLvYaSFPgn3OCwBb90tF_qlT4SAEN_BOrLZaiI-Ci497ThSkCEow2Eog6oVxw_cG4Ql1X8OMaQmS73b5kxzdXm3tT00X7Q=w787-h770-no?authuser=0"
				/>
				<img
					alt="3"
					className="itemimage"
					src="https://lh3.googleusercontent.com/cnhlj99lheBrB9h13HxCjG7oo4hAoCjg-bzDHoxLDBC6FqnKcWHtXlsLeBKxllqobybn9cUvBmNeJ2MDoLYNZG0Vaxp4MNgVYd60E-iBaX6t0rdh6vanjrKZ0-dBuZAclXxY7KsJji7-H6jjXC1J37uLUEPdwE1IYilObgRRTLqT9Lyu_1_ZXdsJmfLrp-IlzWZnH3yM-_ri7eoUqEwPXJC0ix5WnWzLqnW8wSCghXtLznlQol8-UjfUzvgHuN4sVU6iUPbOYgVCwkQ4zB4JGZRcsBfOrk1sitvDgpQ9yBXnmzHi--23g5v4GTZD9XIZWhuWujeXqG3BGd457allDGUMGnD0IV7sgQAhGMY1Oq_JJJ1k94BHU5RADzBeHYkt3KN0pH0tfhTg0-q77-T_0ZNKTu3xgXkXcqytaCyMg-qw0mwkzBgwM_26bPCYaU0We2tbcr0TLo5KfLYcNiNGYsEilCDi1sQ-XfAy3RQ44gjB3AbNAs_R2I4JDmt-T0dpecxOjuVdVb5z03dm1LP-O1d1ZCGuKNqrEgw-N6Jgu8d3mxjA5jeIHlO3Xdd1py1BqjeFQE6VFwa9cjxAc5MNtIppya9pVL135rPFmiJENRT6j5z8Ju5QCJR2KFnTgLvYaSFPgn3OCwBb90tF_qlT4SAEN_BOrLZaiI-Ci497ThSkCEow2Eog6oVxw_cG4Ql1X8OMaQmS73b5kxzdXm3tT00X7Q=w787-h770-no?authuser=0"
				/>
				<img
					alt="4"
					className="itemimage"
					src="https://lh3.googleusercontent.com/cnhlj99lheBrB9h13HxCjG7oo4hAoCjg-bzDHoxLDBC6FqnKcWHtXlsLeBKxllqobybn9cUvBmNeJ2MDoLYNZG0Vaxp4MNgVYd60E-iBaX6t0rdh6vanjrKZ0-dBuZAclXxY7KsJji7-H6jjXC1J37uLUEPdwE1IYilObgRRTLqT9Lyu_1_ZXdsJmfLrp-IlzWZnH3yM-_ri7eoUqEwPXJC0ix5WnWzLqnW8wSCghXtLznlQol8-UjfUzvgHuN4sVU6iUPbOYgVCwkQ4zB4JGZRcsBfOrk1sitvDgpQ9yBXnmzHi--23g5v4GTZD9XIZWhuWujeXqG3BGd457allDGUMGnD0IV7sgQAhGMY1Oq_JJJ1k94BHU5RADzBeHYkt3KN0pH0tfhTg0-q77-T_0ZNKTu3xgXkXcqytaCyMg-qw0mwkzBgwM_26bPCYaU0We2tbcr0TLo5KfLYcNiNGYsEilCDi1sQ-XfAy3RQ44gjB3AbNAs_R2I4JDmt-T0dpecxOjuVdVb5z03dm1LP-O1d1ZCGuKNqrEgw-N6Jgu8d3mxjA5jeIHlO3Xdd1py1BqjeFQE6VFwa9cjxAc5MNtIppya9pVL135rPFmiJENRT6j5z8Ju5QCJR2KFnTgLvYaSFPgn3OCwBb90tF_qlT4SAEN_BOrLZaiI-Ci497ThSkCEow2Eog6oVxw_cG4Ql1X8OMaQmS73b5kxzdXm3tT00X7Q=w787-h770-no?authuser=0"
				/>
				<img
					alt="5"
					className="itemimage"
					src="https://lh3.googleusercontent.com/cnhlj99lheBrB9h13HxCjG7oo4hAoCjg-bzDHoxLDBC6FqnKcWHtXlsLeBKxllqobybn9cUvBmNeJ2MDoLYNZG0Vaxp4MNgVYd60E-iBaX6t0rdh6vanjrKZ0-dBuZAclXxY7KsJji7-H6jjXC1J37uLUEPdwE1IYilObgRRTLqT9Lyu_1_ZXdsJmfLrp-IlzWZnH3yM-_ri7eoUqEwPXJC0ix5WnWzLqnW8wSCghXtLznlQol8-UjfUzvgHuN4sVU6iUPbOYgVCwkQ4zB4JGZRcsBfOrk1sitvDgpQ9yBXnmzHi--23g5v4GTZD9XIZWhuWujeXqG3BGd457allDGUMGnD0IV7sgQAhGMY1Oq_JJJ1k94BHU5RADzBeHYkt3KN0pH0tfhTg0-q77-T_0ZNKTu3xgXkXcqytaCyMg-qw0mwkzBgwM_26bPCYaU0We2tbcr0TLo5KfLYcNiNGYsEilCDi1sQ-XfAy3RQ44gjB3AbNAs_R2I4JDmt-T0dpecxOjuVdVb5z03dm1LP-O1d1ZCGuKNqrEgw-N6Jgu8d3mxjA5jeIHlO3Xdd1py1BqjeFQE6VFwa9cjxAc5MNtIppya9pVL135rPFmiJENRT6j5z8Ju5QCJR2KFnTgLvYaSFPgn3OCwBb90tF_qlT4SAEN_BOrLZaiI-Ci497ThSkCEow2Eog6oVxw_cG4Ql1X8OMaQmS73b5kxzdXm3tT00X7Q=w787-h770-no?authuser=0"
				/>
				<img
					alt="6"
					className="itemimage"
					src="https://lh3.googleusercontent.com/cnhlj99lheBrB9h13HxCjG7oo4hAoCjg-bzDHoxLDBC6FqnKcWHtXlsLeBKxllqobybn9cUvBmNeJ2MDoLYNZG0Vaxp4MNgVYd60E-iBaX6t0rdh6vanjrKZ0-dBuZAclXxY7KsJji7-H6jjXC1J37uLUEPdwE1IYilObgRRTLqT9Lyu_1_ZXdsJmfLrp-IlzWZnH3yM-_ri7eoUqEwPXJC0ix5WnWzLqnW8wSCghXtLznlQol8-UjfUzvgHuN4sVU6iUPbOYgVCwkQ4zB4JGZRcsBfOrk1sitvDgpQ9yBXnmzHi--23g5v4GTZD9XIZWhuWujeXqG3BGd457allDGUMGnD0IV7sgQAhGMY1Oq_JJJ1k94BHU5RADzBeHYkt3KN0pH0tfhTg0-q77-T_0ZNKTu3xgXkXcqytaCyMg-qw0mwkzBgwM_26bPCYaU0We2tbcr0TLo5KfLYcNiNGYsEilCDi1sQ-XfAy3RQ44gjB3AbNAs_R2I4JDmt-T0dpecxOjuVdVb5z03dm1LP-O1d1ZCGuKNqrEgw-N6Jgu8d3mxjA5jeIHlO3Xdd1py1BqjeFQE6VFwa9cjxAc5MNtIppya9pVL135rPFmiJENRT6j5z8Ju5QCJR2KFnTgLvYaSFPgn3OCwBb90tF_qlT4SAEN_BOrLZaiI-Ci497ThSkCEow2Eog6oVxw_cG4Ql1X8OMaQmS73b5kxzdXm3tT00X7Q=w787-h770-no?authuser=0"
				/>
			</div>
		</div>
	);
};

export default Profile;
