import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 28px;
  font-size: 28px;
`;
export const BackArrow = styled(HiArrowLeft)`
  margin-right: 8px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
`
export const Image = styled.img`
    margin-right: 32px;    
`
export const SubTitle = styled.h2`
    color: #a8b3a8;
`

export const Text = styled.p`
    margin-bottom: 32px;
`
export const List = styled.ul`
    border-bottom: 1px solid #a8b3a8;
    margin-bottom: 16px;
`
export const Item = styled.li`
    margin-bottom: 8px;
`