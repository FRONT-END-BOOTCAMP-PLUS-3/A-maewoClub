"use client";
import React, { useState, useEffect } from "react";
import FilterBar from "@/components/board/filterBar/filterBar";
import Button from "@/components/board/button/button";
import { useRouter } from "next/navigation";
import FilterButtonGroup from "@/components/board/optionButton/optionButton";
import Overview from "@/components/board/overview/overview";
import PostListItem from "@/components/board/main/cardPost/cardPostItem";
import { BoardDto } from "@/application/board/dto/BoardDto";
import Pagination from "@/components/recipe/cardPaging/cardPaging";

const Page = () => {
  const router = useRouter();
  const [boardData, setBoardData] = useState<BoardDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchBoards = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/boards", {
          method: "GET",
        });
        const data = await res.json();
        setBoardData(data.boards);
      } catch (error) {
        console.error("Error fetching boards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBoards();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const currentPosts = boardData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(boardData.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleCreate = () => {
    router.push("/boards/create");
  };

  return (
    <>
      <Overview />
      <FilterBar />
      <div style={{ display: "flex", gap: "15px" }}>
        <FilterButtonGroup />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {currentPosts.map((board, index) => (
              <li key={board.id || index}>
                <PostListItem
                  id={board.id}
                  userId={board.userId}
                  title={board.title}
                  description={board.description}
                  tagId={board.tagId}
                  createdAt={board.createdAt}
                  updatedAt={board.updatedAt}
                  likeCount={board.likeCount}
                  viewCount={board.viewCount}
                />
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      <div
        style={{ position: "fixed", right: "30px", bottom: "30px" }}
        onClick={handleCreate}
      >
        <Button>+ 글쓰기</Button>
      </div>
    </>
  );
};

export default Page;
