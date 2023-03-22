import styled from '@emotion/styled';
import { DebounceInput } from 'react-debounce-input';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled(DebounceInput)`
  width: 300px;
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;
export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
  fill: #a8b3a8;
`;
