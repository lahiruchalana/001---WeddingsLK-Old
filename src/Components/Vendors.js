import styled from "styled-components";
import VendorsCards from "./VendorsCards.js"

const Vendors = (props) => {
   
    return (
        <Container>
            <Content>
{/* ////////////////////////// Start of common page top section //////////////////// */}
                <BgImageHome src= "/images/ServicePage.jpg"/>
                <Title1>SERVICES</Title1>
                <TitleUnderline1></TitleUnderline1>
                <P1>We provide wide range of services for your precious wedding</P1>
                <Title2>VENDOR AND OUR SERVICES</Title2>
                <TitleUnderline2></TitleUnderline2>
                <P2>We provide you mainly two different services</P2>
                <Btns>
                    <BtnOurServices>
                        <a href= "/user/profile">
                            <BtnOurServicesText>POPULAR VENDORS</BtnOurServicesText>
                        </a>
                    </BtnOurServices>
                    <BtnVendorServices>
                        <a href= "/user/profile">
                            <BtnVendorServicesText>BEST RATED VENDOR</BtnVendorServicesText>
                        </a>
                    </BtnVendorServices>
                </Btns>
                <BgColoredSection1></BgColoredSection1>
        

        
                <VendorContainer>
                    <CardColum>
                        <VendorsCards
                            id="1238"
                            name="Sankalana Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/SankalanaFlora.jpg"
                        />
                        <VendorsCards
                            id="1237"
                            name="Hilton Colombo"
                            serviceType="Wedding Venues"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/HiltonColombo.jpg"
                        />
                    </CardColum>
                    <CardColum>
                        <VendorsCards
                            id="1236"
                            name="Cinnamon Grands"
                            serviceType="Wedding Venues"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/CinnamonGrands.jpg"
                        />
                        <VendorsCards
                            id="1235"
                            name="Kandian Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={3}
                            image="./images/KandianFlora.jpg"
                        />
                    </CardColum>
                    <CardColum>
                        <VendorsCards
                            id="1234"
                            name="Ama Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={4}
                            image="./images/AMaFlora.jpg"
                        />
                        <VendorsCards
                            id="1235"
                            name="Asvinda Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={4}
                            image="./images/AsvindaFlora.jpg"
                        />
                    </CardColum>
                    <CardVendorEnd></CardVendorEnd>
                </VendorContainer>
            </Content>
        </Container>
    );
};
 
const Container = styled.div`
    a {
        text-decoration: none;
        color: white;
    }
`;

const Content = styled.div`
 
`;

const BgImageHome = styled.img`
    height: 850px;
    width: 100%;
    z-index: -100;
    position: relative;
    /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 2), rgba(0, 0, 0, 2)); */

`;

const Title1 = styled.div`
    margin-top: -350px;
    margin-left: 150px;
    color: #FFF;
    width: 50%;
    font-family: 'Gabriela', serif;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 6px;
    position: relative;
    z-index: 1;
`;

const TitleUnderline1 = styled.div`
    margin-top: 10px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 1;
    width: 15%;
    margin-left: 130px;
`;

const P1 = styled.div`
    margin-top: 10px;
    width: 400px;
    margin-left: 130px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Title2 = styled.div`
    margin-top: 10px;
    margin-left: 850px;
    color: #FFF;
    width: 50%;
    font-family: 'Gabriela', serif;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 6px;
    position: relative;
    z-index: 1;

`;

const TitleUnderline2 = styled.div`
    margin-top: 10px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 1;
    width: 35%;
    margin-left: 840px;
`;

const P2 = styled.div`
    margin-top: 10px;
    width: 400px;
    margin-left: 1000px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Btns = styled.div`
    display: flex;
`;

const BtnVendorServices = styled.div`
    background-color: #02031A;
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnOurServices = styled.div`
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    background-color: #101F0B;  
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnOurServicesText = styled.div`

`;

const BtnVendorServicesText = styled.div`

`;


const BgColoredSection1 = styled.div`
    margin-top: -320px;
    opacity: 80%;
    z-index: -5;
    position: relative;
    background-color: #3E0C33;
    height: 500px;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;



const VendorContainer = styled.div`
    display: flex;
    margin-left: 50px;
    margin-right: 30px;
    background-color: gray;
`;

const CardColum = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
`;

const CardVendorEnd = styled.div`

`;




export default Vendors;