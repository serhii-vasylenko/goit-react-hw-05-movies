import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 16px;

  @media screen and (min-width: 767px) {
    column-gap: 16px;
  row-gap: 28px;
  }
`;

export const Item = styled.li`
  flex-basis: calc((100% - 16px) / 2);
  
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 3);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 64px) / 5);
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 204px;
  margin-bottom: 12px;

  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 350px;
  }
  @media screen and (min-width: 1280px) {
    height: 355px;
  }
`;

export const Text = styled.p`
    color: #a8b3a8;

    @media screen and (max-width: 767px){
    font-size: 12px;
  }
`

export const Title = styled.h3`
  @media screen and (max-width: 767px){
    font-size: 14px;
  }
`