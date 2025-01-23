import {
  Container,
  Content,
  ContentWrapper,
  InfoImage,
  InfoWrapper,
  Picosisimo,
  Title,
  Wrapper,
} from "./subPage.style";
import pages from "./pagesInfo.json";

const SubPage = () => {
  return (
    <>
      <Wrapper>
        <Container style={{ justifyContent: "end" }}>
          <Picosisimo>picosisimo</Picosisimo>
        </Container>
        {pages.map((page) => (
          <Container key={page.id}>
            <InfoWrapper>
              <ContentWrapper>
                <Title>{page.title}</Title>
                <Content>{page.content}</Content>
              </ContentWrapper>
              <InfoImage
                src={page.image}
                alt={page.title}
              />
            </InfoWrapper>
          </Container>
        ))}
      </Wrapper>
    </>
  );
};

export default SubPage;
