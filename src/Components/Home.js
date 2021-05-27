import styled from "styled-components";

const Home = (props) => {
    return (
        <Container>
            <Content>
                <BgImage src= "/images/Home_Page_Background.jpg"/>
            </Content>
        </Container>       
    );
}

const Container = styled.div`
    
`;

const Content = styled.div`
    
`;

const BgImage = styled.img`
    height: 1000px;
    width: auto;
`;

export default Home;

