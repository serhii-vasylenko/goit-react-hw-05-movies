import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 28px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 64px) / 5);
`;
export const Image = styled.img`
  width: 100%;
  height: 355px;
  padding-bottom: 12px;

  object-fit: cover;
`;

export const Text = styled.p`
    color: #a8b3a8;
`