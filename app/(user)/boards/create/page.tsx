"use client";

import Button from "@/components/board/button/button";
import ImageBox from "@/components/board/create/imageBox/imageBox";
import ContentInput from "@/components/board/create/Input/contentInput";
import TitleInput from "@/components/board/create/Input/titleInput";
import { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  const handleTitleUpdate = (updatedTitle: string) => {
    setTitle(updatedTitle);
  };

  const handleContentUpdate = (updatedContent: string) => {
    setContent(updatedContent);
  };

  const handleFileUpdate = (updatedFiles: File[]) => {
    setFiles(updatedFiles);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    files.forEach((file, index) => {
      formData.append(`file_${index}`, file);
    });

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("게시글 등록에 성공했습니다!");
      } else {
        alert("게시글 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <div style={{ padding: "0 20%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <TitleInput onUpdate={handleTitleUpdate} />
            <ContentInput onUpdate={handleContentUpdate} />
          </div>
          <ImageBox onUpdate={handleFileUpdate} />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div onClick={handleSubmit}>
            <Button>등록</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
