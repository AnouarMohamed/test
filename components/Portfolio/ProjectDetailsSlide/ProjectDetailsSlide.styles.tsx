import styled from 'styled-components';
import {
  floatKeyframes,
  slidInCenter,
} from '../../../design-system/reusableCss';

interface Props {
  slideHeight: string;
  slideBgColor: string;
}

export const Container = styled.section<Props>`
  display: flex;
  min-height: ${({ slideHeight }) => slideHeight || '100%'};
  background-color: ${({ slideBgColor }) => slideBgColor};
  position: relative;
  scroll-snap-align: center;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column-reverse;
  }
`;

export const LeftColumn = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 500ms;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: 50%;
    align-items: flex-start;
  }
`;

export const LevitatingWrapper = styled.div`
  animation: ${floatKeyframes} 6s ease-in-out infinite;
`;

export const Figure = styled.figure`
  position: relative;
  width: min(48vw, 780px);
  height: min(54vh, 520px);
  transform: perspective(1800px) rotateY(-18deg) rotateX(8deg);
  transition: 0.5s;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 86%;
    height: auto;
    border: 1px solid #30363d;
    background: #161b22;
    transition: 0.5s;
  }

  img:nth-child(4) {
    transform: translate(96px, 96px);
    opacity: 0.32;
    z-index: 1;
  }

  img:nth-child(3) {
    transform: translate(64px, 64px);
    opacity: 0.48;
    z-index: 2;
  }

  img:nth-child(2) {
    transform: translate(32px, 32px);
    opacity: 0.72;
    z-index: 3;
  }

  img:nth-child(1) {
    transform: translate(0, 0);
    opacity: 1;
    z-index: 4;
  }

  :hover img:nth-child(4) {
    transform: translate(132px, 132px);
    opacity: 0.54;
  }

  :hover img:nth-child(3) {
    transform: translate(88px, 88px);
    opacity: 0.72;
  }

  :hover img:nth-child(2) {
    transform: translate(44px, 44px);
    opacity: 0.9;
  }

  @media ${({ theme }) => theme.media.phone} {
    width: 86vw;
    height: 38vh;
    transform: perspective(1200px) rotateY(-12deg) rotateX(5deg);

    img {
      width: 88%;
    }
  }
`;

export const RightColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

export const ToolsPanel = styled.div`
  width: min(90%, 720px);
  margin: 0 auto 3rem;
`;

export const ToolIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .tech-icon {
    color: #58a6ff;
    font-size: 1.8rem;
  }

  .tech-icon-img {
    display: block;
    height: 1.8rem;
    width: 1.8rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .jaeger-logo {
    background-image: url('/assets/portfolio/logos/jaeger.svg');
  }
`;

export const ToolPills = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  li {
    color: #c9d1d9;
    border: 1px solid #30363d;
    background: #161b22;
    border-radius: 999px;
    padding: 0.35rem 0.65rem;
    font-size: 0.78rem;
  }
`;
