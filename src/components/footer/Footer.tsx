import React from "react";
import {
  FooterBlock,
  FooterBottom,
  FooterContainer,
  FooterHeader,
  FooterLink,
  FooterText,
  Socials,
} from "../../styles/footer/Footer.styles";
import { Logo } from "../logo/Logo";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useWindowDimensions from "../../helpers/useWindowDimension";
import { Header } from "../header/Header";

export const Footer: React.FunctionComponent = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <FooterContainer viewport={width as number}>
        <FooterBlock>
          <Logo />
          <FooterText>
            Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
            augue. Posuere ac in in nisl sed augue.
          </FooterText>
          <Socials>
            <FacebookRoundedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </Socials>
        </FooterBlock>

        <FooterBlock>
          <FooterHeader>Marketplace</FooterHeader>
          <FooterLink>NFTs</FooterLink>
          <FooterLink>Art</FooterLink>
          <FooterLink>Collectibles</FooterLink>
          <FooterLink>Virtual world</FooterLink>
        </FooterBlock>

        <FooterBlock>
          <FooterHeader>Company</FooterHeader>
          <FooterLink>About</FooterLink>
          <FooterLink>Support</FooterLink>
          <FooterLink>Features</FooterLink>
          <FooterLink>Top Creations world</FooterLink>
        </FooterBlock>

        <FooterBlock>
          <FooterHeader>Resources</FooterHeader>
          <FooterLink>Info</FooterLink>
          <FooterLink>Affiliates</FooterLink>
          <FooterLink>Associates</FooterLink>
          <FooterLink>Blog</FooterLink>
        </FooterBlock>
      </FooterContainer>
      <FooterBottom>
        <FooterText>© 2022 Developed by Moses with love</FooterText>
      </FooterBottom>
    </>
  );
};
