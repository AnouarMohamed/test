import styled, { css } from 'styled-components';
import { IHighlightedProject } from '../../../types/portfolio';
import { slideTop } from '../../../design-system/reusableCss';

type ContainerProps = Pick<IHighlightedProject, 'slideBgColor' | 'slideHeight'>;
type ImageWrapperProps = Pick<IHighlightedProject, 'projectVisualType'>;

export const Container = styled.section<ContainerProps>`
  display: flex;
  min-height: ${({ slideHeight }) => slideHeight || '100%'};
  background-color: ${({ slideBgColor }) => slideBgColor};
  position: relative;
  scroll-snap-align: center;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

/**
 * LEFT COLUMN
 */
export const LeftColumn = styled.div`
  width: 50%;
  padding: 6rem 0 3rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 1rem;
    height: 60%;
    align-items: flex-end;
  }
  @media ${({ theme }) => theme.media.phone} {
    height: 45%;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
const iconVisualStyles = css`
  width: min(34vw, 420px);
  aspect-ratio: 1;
  padding: 3rem;
  border: 1px solid #30363d;
  border-radius: 6px;
  background: #161b22;
  transform: none;

  :hover {
    transform: translateY(-8px);
  }
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  transform: ${({ projectVisualType }) =>
    projectVisualType === 'icon'
      ? 'none'
      : 'perspective(1500px) rotateY(20deg)'};
  transition: transform 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ projectVisualType }) => projectVisualType === 'icon' && iconVisualStyles};

  :hover {
    transform: ${({ projectVisualType }) =>
      projectVisualType === 'icon'
        ? 'translateY(-8px)'
        : 'perspective(3000px) rotateY(5deg)'};
  }

  @media ${({ theme }) => theme.media.tablet} {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
  height: 100%;
  gap: 1rem;
`;
export const SlideNumber = styled.div`
  z-index: ${({ theme }) => theme.zIndex.lowPriority};
  position: absolute;
  top: 5%;
  right: 0;
  animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 250ms;

  @media ${({ theme }) => theme.media.phone} {
    img {
      width: 150px;
      height: auto;
    }
  }
`;

export const Figcaption = styled.figcaption`
  gap: 1rem;
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1rem;
    writing-mode: vertical-lr;
    color: #8b949e;
    font-weight: 600;
    letter-spacing: 0;
  }

  @media ${({ theme }) => theme.media.phone} {
    h3 {
      font-size: 0.55rem;
    }
  }
`;

/**
 * RIGHT COLUMN
 */
export const RightColumn = styled.div`
  width: 50%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    line-height: 1;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 1rem;
    justify-content: flex-start;
    h1 {
      font-size: 2rem;
    }

    p {
      margin: 1rem 0;
    }
  }
  @media ${({ theme }) => theme.media.phone} {
    height: 55%;
  }
`;

export const IconWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const Icon = styled.li`
  .tech-icon {
    font-size: 2rem;
    color: #58a6ff;
  }

  .tech-icon-img {
    display: block;
    height: 2rem;
    width: 2rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .jaeger-logo {
    background-image: url('/assets/portfolio/logos/jaeger.svg');
  }

  @media ${({ theme }) => theme.media.phone} {
    .tech-icon {
      font-size: 1.5rem;
    }

    .tech-icon-img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;

export const ProjectStatus = styled.p`
  align-self: center;
  color: #7ee787;
  border: 1px solid #238636;
  background: rgba(35, 134, 54, 0.14);
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const TechPills = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem auto 0;
  max-width: 720px;

  li {
    color: #c9d1d9;
    border: 1px solid #30363d;
    background: #161b22;
    border-radius: 999px;
    padding: 0.35rem 0.65rem;
    font-size: 0.78rem;
  }
`;

export const HighlightList = styled.ul`
  display: grid;
  gap: 0.55rem;
  max-width: 760px;
  margin: 0 auto;

  li {
    color: #c9d1d9;
    font-size: 0.95rem;
    line-height: 1.45;
  }

  li::before {
    content: '•';
    color: #58a6ff;
    margin-right: 0.5rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    li {
      font-size: 0.82rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  a {
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 250ms;
  }

  @media ${({ theme }) => theme.media.phone} {
    gap: 1rem;
    a {
      width: 50%;
    }
  }
`;
