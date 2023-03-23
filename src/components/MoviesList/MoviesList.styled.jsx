import styled from '@emotion/styled';

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 28px;
  }
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 16px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 48px) / 4);
  }
`;
export const Image = styled.img`
  margin-bottom: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 540px;

    object-fit: cover;
  }

  @media screen and (min-width: 1280px) {
    height: 460px;
  }
`;
