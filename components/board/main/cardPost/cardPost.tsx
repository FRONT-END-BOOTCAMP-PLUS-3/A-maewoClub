// "use client";
// import React from "react";
// import PostListItem from "./cardPostItem";
// import { BoardDto } from "@/application/boards/dto/BoardDto";

// export interface CardPostProps {
//   posts: BoardDto[];
// }

// const CardPost = ({ posts }: CardPostProps) => {
//   if (!posts || posts.length === 0) {
//     return <div>게시글이 없습니다.</div>;
//   }

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//       {posts.map((post) => (
//         <PostListItem key={post.id} {...post} />
//       ))}
//     </div>
//   );
// };

// export { CardPost };
