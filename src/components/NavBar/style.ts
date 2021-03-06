import styled from "styled-components";

export const NavBarContent = styled.nav`
  background: #f17755;
  display: flex;
  img {
    hegiht: 150px;
    width: auto;
  }

  .links-content {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      background: #fff;
      padding: 12px;
      border-radius: 12px;
      color: #f71755;
      text-transform: uppercase;
      transition: 0.3s;
    }

    &:hover {
      background: #e2e2ee;
    }
  }
`