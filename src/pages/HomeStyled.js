import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  list-style: none;
  li {
    position: relative;
    padding-left: 25px;
  }

  li::before {
    content: '🎬';
    position: absolute;
    left: 0;
  }
`;
