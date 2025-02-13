"use client";

import { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Content,
  ContentWrapper,
  InfoImage,
  InfoWrapper,
  Picosisimo,
  Title,
  Wrapper,
  ScrollContainer,
} from "./subPage.style";
import pages from "./pagesInfo.json";

const SubPage = () => {
  const totalSections = pages.length + 1;
  const [currentPageNum, setCurrentPageNum] = useState<number>(0);

  const pageRefs = useRef<HTMLDivElement[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scroll = scrollContainerRef.current.scrollTop;

    for (let i = 0; i < totalSections; i++) {
      const pageRef = pageRefs.current[i];
      if (pageRef) {
        const offsetTop = pageRef.offsetTop;
        const offsetHeight = pageRef.offsetHeight;
        if (
          scroll >= offsetTop - offsetHeight / 2 &&
          scroll < offsetTop + offsetHeight / 2
        ) {
          setCurrentPageNum(i);
          break;
        }
      }
    }
  };

  const handlePointClick = (pageNum: number) => {
    if (!scrollContainerRef.current || !pageRefs.current[pageNum]) return;
    scrollContainerRef.current.scrollTo({
      top: pageRefs.current[pageNum].offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Wrapper>
        {Array.from({ length: totalSections }).map((_, index) => (
          <Button
            key={index}
            onClick={() => handlePointClick(index)}
            $active={currentPageNum === index}
          ></Button>
        ))}
      </Wrapper>

      <ScrollContainer ref={scrollContainerRef}>
        <Container
          ref={(el) => {
            if (el) pageRefs.current[0] = el;
          }}
        >
          <Picosisimo>picosísimo</Picosisimo>
        </Container>
        {pages.map((page, index) => (
          <Container
            key={page.id}
            ref={(el) => {
              if (el) pageRefs.current[index + 1] = el;
            }}
          >
            <InfoWrapper>
              <ContentWrapper>
                <Title>{page.title}</Title>
                <Content>{page.content}</Content>
              </ContentWrapper>
              {page.image && (
                <InfoImage
                  src={page.image}
                  alt={page.title}
                />
              )}
            </InfoWrapper>
          </Container>
        ))}
      </ScrollContainer>
    </>
  );
};

export default SubPage;
