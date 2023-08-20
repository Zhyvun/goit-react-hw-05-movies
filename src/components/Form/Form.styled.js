import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  border: 3px solid #191d1e;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 4px;
  outline: none;

  &:hover {
    color: #ff7341;
    border: 3px solid #ff7341;
    transition: color 400ms ease;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px;
  transition: color 400ms ease;

  &:hover {
    color: #ff7341;
    border: 3px solid #ff7341;

  }
`;