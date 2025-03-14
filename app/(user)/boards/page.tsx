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
  const [filteredData, setFilteredData] = useState<BoardDto[]>([]);
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
        setFilteredData(data.boards);
      } catch (error) {
        console.error("Error fetching boards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBoards();
  }, []);

  const handleFilterChange = (tagId: number | null) => {
    setCurrentPage(1);

    if (tagId === null) {
      setFilteredData(boardData);
    } else {
      const filtered = boardData.filter((board) => board.tagId === tagId);
      setFilteredData(filtered);
    }
  };

  const handleSortChange = (sortType: string) => {
    setCurrentPage(1);
    const sortedData = [...filteredData];

    switch (sortType) {
      case "popular":
        // 좋아요 수 기준 내림차순 정렬
        sortedData.sort((a, b) => b.likeCount - a.likeCount);
        break;
      case "following":
        // 팔로잉 정렬 로직 (추후 구현)
        break;
      case "myFeed":
        // 내 피드 정렬 로직 (추후 구현)
        break;
      default:
        // 기본 정렬 (최신순)
        sortedData.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    setFilteredData(sortedData);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleCreate = () => {
    router.push("/boards/create");
  };

  return (
    <div style={{ height: "calc(100vh - 80px)" }}>
      <Overview />
      <FilterBar onSortChange={handleSortChange} />
      <div style={{ display: "flex", gap: "15px" }}>
        <FilterButtonGroup onFilterChange={handleFilterChange} />
      </div>

      <div
        style={{
          height: "calc(100% - 200px)",
          overflowY: "auto",
          paddingBottom: "30px",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ul>
              {currentPosts.map((board, index) => (
                <li key={board.id || index}>
                  <PostListItem {...board} />
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
      </div>

      <div
        style={{ position: "fixed", right: "20%", bottom: "30px" }}
        onClick={handleCreate}
      >
        <Button>+ 글쓰기</Button>
      </div>
    </div>
  );
};

export default Page;
