import React from "react";
import {
  BtnGrp,
  NavbarBlock,
  NavList,
} from "../../styles/navbar/Navbar.styles";

import { Button } from "../button/Button";
import { Logo } from "../logo/Logo";

export const Navbar = () => {
  return (
    <>
      <NavbarBlock>
        <Logo />
        <NavList>
          <li>Home</li>
          <li>Marketplace</li>
          <li>Artist</li>
          <li>Community</li>
        </NavList>

        <BtnGrp>
          <Button text="Login" color={true} border={false} />
          <Button text="Signup" color={false} border={true} />
        </BtnGrp>
      </NavbarBlock>
    </>
  );
};
