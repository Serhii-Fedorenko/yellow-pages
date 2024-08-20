import styled, { css, keyframes } from "styled-components";
import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";

const starAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

export const FavoriteButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(-50%, -50%);
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${(props) => (props["data-favorite"] ? "#FF9A00" : "black")};
  ${(props) =>
    props["data-favorite"] &&
    css`
      animation: ${starAnimation} 0.3s ease;
    `}

  &:hover {
    transform: scale(1.2);
  }
`;

export const UnfilledStar = styled(CiStar)`
  font-size: 24px;
`;

export const FilledStar = styled(AiFillStar)`
  font-size: 24px;
`;
