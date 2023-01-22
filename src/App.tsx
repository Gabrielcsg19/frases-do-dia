import { phrases } from "./phrases";
import {
  Author,
  Banner,
  ContactContainer,
  ContactDescription,
  ContactDescriptionWrapper,
  ContactLogo,
  ContactMention,
  Container,
  DownQuote,
  Footer,
  Main,
  MainWrapper,
  Phrase,
  PhraseContainer,
  Squares,
  Title,
  TitleBar,
  TitleWrapper,
  UpQuote,
} from "./styles";

export function App() {
  const randomNumber = Math.floor(Math.random() * phrases.length);
  const currentPhrase = phrases[randomNumber];

  return (
    <Container>
      <MainWrapper>
        <Banner />
        <Main>
          <Squares />
          <TitleWrapper>
            <TitleBar />
            <Title>Frase do dia</Title>
          </TitleWrapper>
          <PhraseContainer>
            <UpQuote />
            <Phrase>{currentPhrase.text}</Phrase>
            <DownQuote />
            <Author>- {currentPhrase.author}</Author>
          </PhraseContainer>
        </Main>
      </MainWrapper>
      <Footer>
        <ContactContainer>
          <ContactLogo />
          <ContactDescriptionWrapper>
            <ContactDescription>Siga-nos no Instagram</ContactDescription>
            <ContactMention>@sitiodovovocarlinho</ContactMention>
          </ContactDescriptionWrapper>
        </ContactContainer>
      </Footer>
    </Container>
  );
}
