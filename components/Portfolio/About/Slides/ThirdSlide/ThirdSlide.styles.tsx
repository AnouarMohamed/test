import styled from 'styled-components';
import { slideTop } from '../../../../../design-system/reusableCss';

export const ThirdSlide = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  .skills-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .glass-wrapper {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    width: min(86vw, 1180px);
  }

  .glass-content {
    z-index: 5;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
    border: 1px solid #30363d;
    border-radius: 6px;
    background-color: #161b22;
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    .icon-skills {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
    }

    .tech-skills {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    .skills-wrapper {
      h1 {
        font-size: 2.5rem;
      }
    }

    .glass-wrapper {
      gap: 1rem;
      flex-direction: column;
      margin-top: 1rem;
      width: 100%;
    }

    .glass-content {
      width: 95%;
      margin: 0 auto;
      padding: 1rem;

      h1 {
        font-size: 1.5rem;
        margin: 0;
      }

      p {
        margin: 0;
      }

      .icon-skills {
        margin: 0;
      }

      .tech-skills {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
