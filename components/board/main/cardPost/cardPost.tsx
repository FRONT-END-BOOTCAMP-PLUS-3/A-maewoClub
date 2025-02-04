// "use client";
// import React from "react";
// import PostListItem from "./cardPostItem";

// interface Post {
//   image: string;
//   title: string;
//   content: string;
//   id: string;
//   comment: number;
//   view: number;
//   heart: number;
// }

// interface CardPostProps {
//   posts: Post[];
// }

// const CardPost = ({ posts }: CardPostProps) => {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//       {posts.map((post) => (
//         <PostListItem key={post.id} />
//       ))}
//     </div>
//   );
// };

// const CardPostTest = () => {
//   return <CardPost posts={mockPosts} />;
// };

// export default CardPostTest;
