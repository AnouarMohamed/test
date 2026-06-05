import styled, { css } from 'styled-components';
import { Props } from './SectionHeader';

type HeaderProps = Pick<Props, 'margin' | 'color' | 'variant' | 'withGradient'>;

const extraSmallVariantStyles = css`
  font-size: 2.5rem;
`;
const smallVariantStyles = css`
  font-size: 4rem;
`;
const mediumVariantStyles = css`
  font-size: 5rem;
`;
const largeVariantStyles = css`
  font-size: 7rem;
  line-height: 9rem;
  letter-spacing: 0;
  font-weight: 700;
`;

const withGradientStyles = css`
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
`;

export const H1 = styled.h1<HeaderProps>`
  font-size: 4rem;
  letter-spacing: 0;
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  line-height: 1.6;
  ${({ variant }) => variant === 'extraSmall' && extraSmallVariantStyles};
  ${({ variant }) => variant === 'small' && smallVariantStyles};
  ${({ variant }) => variant === 'medium' && mediumVariantStyles};
  ${({ variant }) => variant === 'large' && largeVariantStyles};
  ${({ withGradient }) => withGradient && withGradientStyles};

  @media ${({ theme }) => theme.media.phone} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;
