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

  // 페이지네이션 로직 수정
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const currentPosts = boardData.slice(indexOfFirstPost, indexOfLastPost);

  // totalPages 계산
  const totalPages = Math.ceil(boardData.length / postsPerPage);

  // 페이지네이션 디버깅 정보 추가
  useEffect(() => {
    console.group("페이지네이션 디버깅 정보");
    console.log("현재 페이지:", currentPage);
    console.log("페이지당 게시글 수:", postsPerPage);
    console.log("전체 게시글 수:", boardData.length);
    console.log("총 페이지 수:", totalPages);
    console.log("현재 페이지 시작 인덱스:", indexOfFirstPost);
    console.log("현재 페이지 마지막 인덱스:", indexOfLastPost);
    console.log("현재 페이지 게시글:", currentPosts);
    console.log("현재 페이지 게시글 수:", currentPosts.length);

    // 마지막 페이지 데이터 확인
    const lastPageIndex = totalPages - 1;
    const lastPageStart = lastPageIndex * postsPerPage;
    const lastPageEnd = boardData.length;
    const lastPagePosts = boardData.slice(lastPageStart, lastPageEnd);

    console.log("\n=== 마지막 페이지 정보 ===");
    console.log("마지막 페이지 시작 인덱스:", lastPageStart);
    console.log("마지막 페이지 끝 인덱스:", lastPageEnd);
    console.log("마지막 페이지 게시글:", lastPagePosts);
    console.log("마지막 페이지 게시글 수:", lastPagePosts.length);
    console.groupEnd();
  }, [
    boardData,
    currentPage,
    indexOfFirstPost,
    indexOfLastPost,
    currentPosts,
    totalPages,
    postsPerPage,
  ]);

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
