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
}

const Table = <T,>({
  category,
  columns,
  data,
  onDelete,
  onView,
}: TableProps<T>) => {
  const router = useRouter();

  const extendedColumns: Column[] = [
    ...columns,
    { key: "delete", header: "삭제하기" },
    { key: "view", header: "자세히 보기" },
  ];

  return (
    <>
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
                <TableHeader key={col.key as string}>{col.header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
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
      </TableContainer>
    </>
  );
};

export default Table;
