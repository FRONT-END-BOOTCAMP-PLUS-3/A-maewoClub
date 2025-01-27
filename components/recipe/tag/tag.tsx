import { TagContainer, TagStyle } from "./tag.style";

type Tag = {
  id: number;
  text: string;
  type: string;
};

const tagData: Tag[] = [
  { id: 1, text: "#매운맛 1호점", type: "spicy" },
  { id: 2, text: "#달콤한 디저트", type: "sweet" },
  { id: 3, text: "#건강한 샐러드", type: "healthy" },
  { id: 4, text: "#한국의 맛", type: "traditional" },
  { id: 5, text: "#매운맛 1호점", type: "spicy" },
  { id: 6, text: "#달콤한 디저트", type: "sweet" },
  { id: 7, text: "#건강한 샐러드", type: "healthy" },
  { id: 8, text: "#한국의 맛", type: "traditional" },
  { id: 9, text: "#매운맛 1호점", type: "spicy" },
  { id: 10, text: "#달콤한 디저트", type: "sweet" },
  { id: 11, text: "#건강한 샐러드", type: "healthy" },
  { id: 12, text: "#한국의 맛", type: "traditional" },
]

const Tag = () => {
  return (
    <TagContainer>
      {tagData.map((tag) => (
        <TagStyle key={tag.id}>{tag.text}</TagStyle>
      ))}
    </TagContainer>
  );
};
export default Tag;
