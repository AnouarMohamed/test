import React, { ReactNode, useEffect, useRef, useState } from 'react';
import * as Styled from './ProjectDetailsSlide.styles';
import TextCarousel from '../TextCarousel/TextCarousel';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { ICarouselQuote } from '../../../types/portfolio';
import Image from 'next/image';

export interface Props {
  slideHeight: string;
  slideBgColor: string;
  projectMobileImg: string;
  projectName: string;
  projectQuotes: ICarouselQuote[];
  projectImages?: string[];
  projectToolIcons?: ReactNode[];
  projectTools?: string[];
}

/**
 *Renders project details slide with project details carousel and floating project image
 *@function ProjectDetailsSlide
 *@param {slideHeight} string - height of slide
 *@param {slideBgColor} string - background color of slide to be applied
 *@returns {JSX.Element} - Rendered ProjectDetailsSlide component
 */
const ProjectDetailsSlide = ({
  slideHeight,
  slideBgColor,
  projectName,
  projectMobileImg,
  projectQuotes,
  projectImages,
  projectToolIcons,
  projectTools,
}: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isElementVisible] = useIntersectionObserver(containerRef, {
    threshold: 0.5,
  });
  const [isOnScreen, setIsOnScreen] = useState(false);
  useEffect(() => {
    if (isElementVisible && !isOnScreen) setIsOnScreen(true);
  }, [isElementVisible, isOnScreen]);

  const randomKey = `${~~Math.random() * 10000}${isOnScreen}`;
  const screenshotDeck = projectImages?.length
    ? projectImages
    : [projectMobileImg, projectMobileImg, projectMobileImg, projectMobileImg];

  return (
    <Styled.Container
      ref={containerRef}
      key={randomKey}
      slideHeight={slideHeight}
      slideBgColor={slideBgColor}
    >
      {isOnScreen && (
        <>
          <Styled.RightColumn>
            <TextCarousel quotes={projectQuotes} />

            {(projectToolIcons || projectTools) && (
              <Styled.ToolsPanel>
                {projectToolIcons && (
                  <Styled.ToolIcons>
                    {projectToolIcons.map((icon, id) => (
                      <li key={id}>{icon}</li>
                    ))}
                  </Styled.ToolIcons>
                )}

                {projectTools && (
                  <Styled.ToolPills>
                    {projectTools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </Styled.ToolPills>
                )}
              </Styled.ToolsPanel>
            )}
          </Styled.RightColumn>

          <Styled.LeftColumn>
            <Styled.LevitatingWrapper>
              <Styled.Figure>
                {screenshotDeck.map((projectImage, id) => (
                  <Image
                    key={`${projectImage}-${id}`}
                    src={projectImage}
                    alt={`${projectName} screenshot ${id + 1}`}
                    height={800}
                    width={450}
                    objectFit={'contain'}
                  />
                ))}
              </Styled.Figure>
            </Styled.LevitatingWrapper>
          </Styled.LeftColumn>
        </>
      )}
    </Styled.Container>
  );
};

export default ProjectDetailsSlide;
