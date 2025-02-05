"use client";
import React, { useState, useEffect } from "react";
import FilterBar from "@/components/board/filterBar/filterBar";
import Button from "@/components/board/button/button";
import { useRouter } from "next/navigation";
import FilterButtonGroup from "@/components/board/optionButton/optionButton";
import Overview from "@/components/board/overview/overview";
import PostListItem from "@/components/board/main/cardPost/cardPostItem";
import { BoardDto } from "@/application/board/dto/BoardDto";

const Page = () => {
  const router = useRouter();

  const [boardData, setBoardData] = useState<BoardDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBoards = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/boards", {
          method: "GET",
        });
        const data = await res.json();
        console.log(data);
        setBoardData(data.boards);
        console.log(boardData);
      } catch (error) {
        console.error("Error fetching boards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBoards();
  }, []);

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

      {/* 로딩 상태일 경우 로딩 텍스트 출력 */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // 데이터가 로딩이 완료되면 boards 리스트를 출력
        <ul>
          {boardData &&
            boardData.map((board, index) => (
              <li key={index}>
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
                {/* 예시로 title을 출력, 실제 API의 데이터 구조에 맞게 수정 */}
              </li>
            ))}
        </ul>
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
