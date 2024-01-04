import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
  import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
    width: 50%;
  `;
  
export default function Footer(){
    return (
      <Container>
        <Left>
          <Logo>BitRixx</Logo>
          <Desc>
          Inventory refers to all the items, goods, merchandise, and materials held by a business
           for selling in the market to earn a profit. Example: If a newspaper vendor uses a vehicle
            to deliver newspapers to the customers, only the newspaper will be considered inventory.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Materials</ListItem>
            <ListItem>Supplies</ListItem>
            <ListItem>Stocks</ListItem>
            <ListItem>Sales</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Tracking</ListItem>
            <ListItem>New Arrival</ListItem>
            <ListItem>Hikes</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> South Lane,Bangalore-643876
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +91 6383786137
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} /> harini@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  