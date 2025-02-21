import { css } from '@emotion/react';

export const HeaderStyle = css`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #080808;
  color: white;
  list-style-type: none;

  li {
    margin: 0 10px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: .2s ease-in-out;
  }

  a:hover {
    color: red;
  }
`;
export const cursorFollowStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "10px",
  height: "10px",
  backgroundColor: "white",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 9999,
  mixBlendMode: "difference",
};
