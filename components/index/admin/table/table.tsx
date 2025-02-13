"use client";

import SearchBar from "@/components/board/searchBar/searchBar";
import {
  BackButton,
  CategoryTitle,
  StyledTable,
  TableContainer,
  TableData,
  TitleContainer,
  TableHeader,
  ButtonContainer,
  Button,
} from "./table.style";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Pagination from "@/components/recipe/cardPaging/cardPaging";

interface Column {
  key: string;
  header: string;
}

interface TableProps<T> {
  category: string;
  columns: Column[];
  data: T[];
  onDelete: (row: T) => void;
  onView: (row: T) => void;
  postsPerPage?: number;
}

const Table = <T,>({
  category,
  columns,
  data = [],
  onDelete,
  onView,
  postsPerPage = 8,
}: TableProps<T>) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const extendedColumns: Column[] = [
    ...columns,
    { key: "delete", header: "삭제하기" },
    { key: "view", header: "자세히 보기" },
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(data.length / postsPerPage);

  return (
    <TableContainer>
      <TitleContainer style={{ justifyContent: "space-between" }}>
        <TitleContainer>
          <BackButton onClick={() => router.push("/admin")} />
          <CategoryTitle>{category}</CategoryTitle>
        </TitleContainer>
        <SearchBar />
      </TitleContainer>
      <StyledTable>
        <thead>
          <tr>
            {extendedColumns.map((col) => (
              <TableHeader key={col.key}>{col.header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <TableData key={col.key}>
                  {String(row[col.key as keyof T])}
                </TableData>
              ))}
              <TableData>
                <ButtonContainer>
                  <Button onClick={() => onDelete(row)}>Delete</Button>
                </ButtonContainer>
              </TableData>
              <TableData>
                <ButtonContainer>
                  <Button onClick={() => onView(row)}>View</Button>
                </ButtonContainer>
              </TableData>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: number) => {
          setCurrentPage(page);
          window.scrollTo(0, 0);
        }}
      />
    </TableContainer>
  );
};

export default Table;
