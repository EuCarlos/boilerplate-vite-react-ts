import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: #123;
  color: ${props => props.color};
  border: none;
  padding: 1rem 2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #123456;
  }
`
