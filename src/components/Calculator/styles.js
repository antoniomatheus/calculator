import styled from 'styled-components';

export const Frame = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 4px;
`;

export const Display = styled.span`
  height: 25px;
  padding: 4px;
  text-align: right;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  padding: 15px 0;
  width: ${props => (props.id === 'zero' ? '50%' : '25%')};

  &:active {
    box-shadow: inset 0 0 3px #aaa;
  }
`;
