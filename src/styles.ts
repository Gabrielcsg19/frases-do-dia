import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainWrapper = styled.div``;

export const Banner = styled.div`
  background-image: url("./assets/images/house-background-mobile.png");
  background-size: cover;
  height: 278px;
  margin-bottom: 44px;
  border-radius: 50% / 0 0 10% 10%;
  background-position: center;

  @media only screen and (min-width: 768px) {
    background-image: url("./assets/images/house-background-desktop.png");
    height: 310px;
  }
`;

export const Main = styled.main`
  padding: 0 12px;
  position: relative;
`;

export const Squares = styled.img.attrs({
  src: "./assets/images/squares.svg",
})`
  position: absolute;
  right: 12px;
  top: -22px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
`;

export const TitleBar = styled.div`
  height: 12px;
  background-color: ${({ theme }) => theme.colors["brown.100"]};
  width: 50%;
  position: absolute;
  z-index: -1;
  bottom: 12px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.BalsamiqSans};
  color: ${({ theme }) => theme.colors["brown.500"]};
  font-size: 32px;
  margin: 0;
  font-weight: 400;
`;

export const PhraseContainer = styled.div`
  background-color: ${({ theme }) => theme.colors["brown.100"]};
  padding: 50px 12px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

export const UpQuote = styled.img.attrs({
  src: "./assets/images/up-quote.svg",
})`
  position: absolute;
  left: 12px;
  top: 12px;
`;

export const DownQuote = styled.img.attrs({
  src: "./assets/images/down-quote.svg",
})`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

export const Phrase = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors["brown.500"]};
  max-width: 316px;
  margin: 0 auto;
  margin-bottom: 20px;

  ${css`
    animation: ${fadeIn};
    animation-duration: 3s;
  `}
`;

export const Author = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors["brown.500"]};
  line-height: 24px;

  ${css`
    animation: ${fadeIn};
    animation-duration: 3s;
  `}
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors["brown.300"]};
  padding: 34px 56px;
  display: flex;
  justify-content: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const ContactLogo = styled.img.attrs({
  src: "./assets/images/instagram-logo.svg",
})``;

export const ContactDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactDescription = styled.span`
  font-family: ${({ theme }) => theme.fonts.BalsamiqSans};
  color: ${({ theme }) => theme.colors["brown.100"]};
  opacity: 0.7;
`;

export const ContactMention = styled.span`
  font-family: ${({ theme }) => theme.fonts.Oswald};
  font-size: 24px;
  color: ${({ theme }) => theme.colors["brown.200"]};
`;
