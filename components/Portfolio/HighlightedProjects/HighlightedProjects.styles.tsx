import styled, { css } from 'styled-components';
import {
  floatingMobileKeyframes,
  floatingWatchKeyframes,
  floatKeyframes,
} from '../../../design-system/reusableCss';

export const Container = styled.section`
  height: 100vh;
  background: #0d1117;

  @media ${({ theme }) => theme.media.desktop} {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
`;

export const ProjectsHero = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  scroll-snap-align: center;
  background: #0d1117;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const HeroLeftColumn = styled.div`
  flex: 0.42;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem 3rem 4rem 5rem;

  h1 {
    line-height: 1.1;
    max-width: 11ch;
    font-size: clamp(3.2rem, 5.2vw, 5rem);
    color: #58a6ff;
  }

  p {
    max-width: 58ch;
    color: #c9d1d9;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex: 1;
    padding: 1rem 2rem;
    p: {
      font-size: 1.25rem;
    }
  }
`;
export const HeroRightColumn = styled.div`
  flex: 0.58;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const GitHubVisualShell = styled.div`
  position: relative;
  width: min(54vw, 820px);
  height: min(72vh, 620px);
  border: 1px solid #30363d;
  border-radius: 6px;
  background:
    linear-gradient(180deg, rgba(22, 27, 34, 0.92), rgba(13, 17, 23, 0.98)),
    #161b22;

  :hover {
    .laptop-wrapper {
      transform: translateY(-1rem) scale(1.04);
    }

    .mobile-wrapper {
      transform: translateX(-1.4rem) scale(1.05);
    }

    .watch-wrapper {
      transform: translateX(1.2rem) scale(1.04);
    }
  }
`;

interface ImgContainerProps {
  position: { top?: string; bottom?: string; right?: string; left?: string };
}

export const ImageContainer = styled.div<ImgContainerProps>`
  top: ${({ position }) => position.top};
  bottom: ${({ position }) => position.bottom};
  right: ${({ position }) => position.right};
  left: ${({ position }) => position.left};
  position: absolute;
  transition: transform 0.5s ease-in-out;

  .laptop {
    transform: scale(0.88);
  }

  .mobile {
    transform: rotate(3deg) scale(0.78);
  }

  .watch {
    transform: rotate(-2deg) scale(0.86);
  }
`;

interface FloatingImgContainerProps {
  variant: 'laptop' | 'phone' | 'watch';
}

const laptopAnimation = css`
  animation: ${floatKeyframes} 7s ease-in-out infinite;
`;
const phoneAnimation = css`
  animation: ${floatingMobileKeyframes} 7s ease-in-out infinite;
`;
const watchAnimation = css`
  animation: ${floatingWatchKeyframes} 7s ease-in-out infinite;
`;

export const FloatingImgContainer = styled.figure<FloatingImgContainerProps>`
  position: relative;
  ${({ variant }) => variant === 'laptop' && laptopAnimation};
  ${({ variant }) => variant === 'phone' && phoneAnimation};
  ${({ variant }) => variant === 'watch' && watchAnimation};
`;

export const RepoBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 4;
  max-width: calc(100% - 2rem);
  padding: 0.5rem 0.75rem;
  border: 1px solid #30363d;
  border-radius: 6px;
  background: #0d1117;
  color: #c9d1d9;
  font-size: 0.9rem;

  .repo-icon {
    color: #8b949e;
    flex-shrink: 0;
  }
`;

export const RepoMetaRail = styled.ul`
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 4;
  flex-wrap: wrap;

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.45rem 0.7rem;
    border: 1px solid #30363d;
    border-radius: 999px;
    background: #161b22;
    color: #c9d1d9;
    font-size: 0.82rem;
  }

  .repo-icon {
    color: #58a6ff;
  }
`;
