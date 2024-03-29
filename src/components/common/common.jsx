import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 50%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(168, 168, 168);
  }
`;

export const Textarea = styled.textarea`
  width: 50%;
  min-height: 100px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(168, 168, 168);
  }
`;
export const SubmitButton = styled.button`
  padding: 11px 10%;
  margin-left:25px;
  color: #fff;
  font-size: 15px;
  font-weight: 200;
  border: none;
  border-radius: 25px 25px 25px 25px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(168, 168, 168);
  background: linear-gradient(
    58deg,
    rgba(168, 168, 168, 1) 20%,
    rgba(168, 168, 168, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
