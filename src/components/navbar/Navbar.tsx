import React, { useState } from "react";
import {
  BtnGrp,
  MobileNavHolder,
  NavbarBlock,
  NavbarWrapper,
  NavList,
} from "../../styles/navbar/Navbar.styles";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Button } from "../button/Button";
import { Logo } from "./logo/Logo";
import useWindowDimensions from "../../helpers/useWindowDimension";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <>
      {(width as number) > 1024 ? (
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
      ) : (
        <div>
          <NavbarWrapper>
            <NavbarBlock>
              <Logo />

              <WidgetsIcon
                sx={{ color: "#fff" }}
                onClick={() => setOpenNav(!openNav)}
              />
            </NavbarBlock>
          </NavbarWrapper>
          ()
          {openNav && (
            <MobileNavHolder openNav={openNav}>
              <NavList openNav={openNav}>
                <li>Home</li>
                <li>Marketplace</li>
                <li>Artist</li>
                <li>Community</li>
              </NavList>

              <BtnGrp openNav={openNav}>
                <Button text="Login" color={true} border={false} />
                <Button
                  text="Signup"
                  color={false}
                  border={true}
                  textColorChange={true}
                />
              </BtnGrp>
            </MobileNavHolder>
          )}
        </div>
      )}
    </>
  );
};
