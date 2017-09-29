import React from 'react';
import styled from 'styled-components';

import { media } from 'src/style';

import ICLogo from 'static/iclogo.png';

import LoLIcon from 'static/LoL.png';
import OverwatchIcon from 'static/ow.png';
import DotaIcon from 'static/dota.png';
import CSGOIcon from 'static/csgo.png';
import StarcraftIcon from 'static/sc2.png';
import HearthstoneIcon from 'static/hearthstone.png';

import VaingloryIcon from 'static/vainglory.png';
import NuelIcon from 'static/nuel.png';
import BelongIcon from 'static/game-belong.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`margin-top: -50px;`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 60px;
  @media (min-width: 700px) {
    font-size: 40px;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 30px;
  width: 100%;
  font-size: 14px;
`;

const Sponsors = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SponsorTitle = styled.p`margin-right: 5px;`;

const SponsorText = styled.p`
  font-size: 10px;
  margin-right: -5px;
  margin-left: 10px;
`;

const Link = styled.a`
  color: white;

  &:hover {
    color: #67a0fc;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  width: 30px;
  height: 30px;
  margin: 10px;
  background-image: url(${props => props.src});
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  height: 60px;
  margin: 5px 10px;
`;

const NavMenu = styled.div`
  height: 40px;
`;

const NavItem = styled.a`
  font-size: 15px;
  color: white;
  margin: 15px;
  text-decoration: none;

  &:hover {
    color: #67a0fc;
  }
`;

const NavSeperator = styled.a`
  font-size: 15px;
  color: white;
  text-decoration: none;
`;

export default () => {
  return (
    <div>
      <Container>
        <Sponsors>
          <SponsorTitle>Sponsored by: </SponsorTitle>
          <SponsorText>Vainglory</SponsorText>
          <Icon src={VaingloryIcon} title="Vainglory" href="https://www.vainglorygame.com/" />
          <SponsorText>The NUEL</SponsorText>
          <Icon src={NuelIcon} title="The NUEL" href="http://thenuel.com/" />
          <SponsorText>Belong by GAME</SponsorText>
          <Icon
            src={BelongIcon}
            title="Belong by GAME"
            href="https://www.belong.gg/arenas/london/"
          />
        </Sponsors>
        <Content>
          <Title>
            Imperial<Logo src={ICLogo} />eSports
          </Title>
          <NavMenu>
            <NavItem href="#">About Us</NavItem>
            <NavSeperator>|</NavSeperator>
            <NavItem href="#">News</NavItem>
            <NavSeperator>|</NavSeperator>
            <NavItem href="#">Media</NavItem>
            <NavSeperator>|</NavSeperator>
            <NavItem href="#">Contact Us</NavItem>
          </NavMenu>
          <Icons>
            <Icon
              src={LoLIcon}
              title="League of Legends"
              href="https://www.facebook.com/groups/ICLOL/"
            />
            <Icon
              src={OverwatchIcon}
              title="Overwatch"
              href="https://www.facebook.com/groups/648191728717259/"
            />
            <Icon src={DotaIcon} title="Dota 2" href="https://www.facebook.com/groups/ICLDOTA2/" />
            <Icon
              src={HearthstoneIcon}
              title="Hearthstone"
              href="https://www.facebook.com/groups/ICHearthstone/"
            />
            <Icon
              src={StarcraftIcon}
              title="Starcraft 2"
              href="https://www.facebook.com/groups/ICStarcraft/"
            />
            <Icon
              src={CSGOIcon}
              title="CS:GO"
              href="https://www.facebook.com/groups/330881197271605"
            />
          </Icons>
        </Content>
        <Footer>
          Email us at <Link href="mailto:hello@icEsports.co.uk">hello@icEsports.co.uk</Link>
        </Footer>
      </Container>
    </div>
  );
};
