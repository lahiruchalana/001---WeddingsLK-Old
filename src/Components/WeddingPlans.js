import styled from "styled-components";

const WeddingPlans = (props) => {
    return (
        <Container>
            <Content>
{/* ////////////////////////// Start of common page top section //////////////////// */}
                <BgImageHome src= "/images/WeddingPlans - Copy.jpg"/>
                <Title1>WEDDING PLANS</Title1>
                <TitleUnderline1></TitleUnderline1>
                <P1>We provide 3 type of wedding plans and customized wedding plans for your precious wedding</P1>
                <Title2>VENDOR BUNCHES</Title2>
                <TitleUnderline2></TitleUnderline2>
                <P2>We provide you set of vendors contained, vendor bunches for your beautiful wedding</P2>
                <Btns>
                    <BtnVWeddingPlans>
                        <a href= "/user/profile">
                            <BtnWeddingPlansText>Wedding Plans</BtnWeddingPlansText>
                        </a>
                    </BtnVWeddingPlans>
                    <BtnVendorBunches>
                        <a href= "/user/profile">
                            <BtnVendorBunchesText>Vendor Bunches</BtnVendorBunchesText>
                        </a>
                    </BtnVendorBunches>
                    <BtnCustomizedPlans>
                        <a href= "/user/profile">
                            <BtnCustomizedPlansText>Customized Plans</BtnCustomizedPlansText>
                        </a>
                    </BtnCustomizedPlans>
                </Btns>
                <BgColoredSection1></BgColoredSection1>



                <BgWeddingPlans></BgWeddingPlans>
                <TitleWeddingPlans>WEDDING PLANS</TitleWeddingPlans>
                <TitleUnderLineWeddingPlans></TitleUnderLineWeddingPlans>
                <SectionWeddingPlansContainer>
                    <SectionPlatinumWeddingPlan>
                        <a href= "/">
                            <BtnSectionPlatinumWeddingPlan>Platinum Wedding Plan</BtnSectionPlatinumWeddingPlan>
                            <p>We provide to you Best Rated and Most Popular Vendor Brands for Platinum Wedding Plan. Customize your wedding with this precious plan</p>
                        </a>
                        <img src= "./images/Wedding-Website1.JPG"/>
                    </SectionPlatinumWeddingPlan>
                    <SectionGoldWeddingPlan>
                        <img src= "./images/Wedding-Website2.JPG"/>
                        <a href= "/">
                            <BtnSectionGoldWeddingPlan>Gold Wedding Plan</BtnSectionGoldWeddingPlan>
                            <p>We provide to you Best and Popular Vendor Brands for Gold Wedding Plan with flexible cost which you could spend. Customize your wedding with this precious plan.</p>
                        </a>
                    </SectionGoldWeddingPlan>
                    <SectionSilverWeddingPlan>
                        <a href= "/">
                            <BtnSectionSilverWeddingPlan>Silver Wedding Plan</BtnSectionSilverWeddingPlan>
                            <p>We provide to you Best Vendors for Silver Wedding Plan with high flexible cost which you could spend. Customize your wedding with this beautiful plan..</p>
                        </a>
                        <img src= "./images/Wedding-Website3.JPG"/>
                    </SectionSilverWeddingPlan>
                </SectionWeddingPlansContainer>
                <UnderLineWeddingPlans></UnderLineWeddingPlans>


                {/* <BgSectionWeddingPlans></BgSectionWeddingPlans>
                <TitleWeddingPlans>WEDDING PLANS</TitleWeddingPlans>
                <TitleWeddingPlansUnderLine></TitleWeddingPlansUnderLine> */}


                <BgVendorBunches></BgVendorBunches>
                <TitleVendorBunches>VENDOR BUNCHES</TitleVendorBunches>
                <TitleUnderLineVendorBunches></TitleUnderLineVendorBunches>
                <BgVendorBunchA>
                        <a href= "/">
                            <BtnSectionVendorBunchA>VENDOR BUNCH-A</BtnSectionVendorBunchA>
                            <p>Cinnamon Grands</p>
                            <p>Lassana Flora</p>
                            <p>Wills Design</p>
                            <p>Hilton</p>
                            <p>Hilton</p>
                        </a>
                        <img1 src= "./images/Wedding-Website1.JPG"/>
                        <img2 src= "./images/Wedding-Website1.JPG"/>
                        <img3 src= "./images/Wedding-Website1.JPG"/>
                </BgVendorBunchA>
                <BgVendorBunchB>
                        <a href= "/">
                            <BtnSectionVendorBunchB>VENDOR BUNCH-B</BtnSectionVendorBunchB>
                            <p>Cinnamon Grands</p>
                            <p>Lassana Flora</p>
                            <p>Wills Design</p>
                            <p>Hilton</p>
                            <p>Hilton</p>
                        </a>
                        <img1 src= "./images/Wedding-Website1.JPG"/>
                        <img2 src= "./images/Wedding-Website1.JPG"/>
                        <img3 src= "./images/Wedding-Website1.JPG"/>
                </BgVendorBunchB>
                <BgVendorBunchC>
                        <a href= "/">
                            <BtnSectionVendorBunchC>VENDOR BUNCH-C</BtnSectionVendorBunchC>
                            <p>Cinnamon Grands</p>
                            <p>Lassana Flora</p>
                            <p>Wills Design</p>
                            <p>Hilton</p>
                            <p>Hilton</p>
                        </a>
                        <img1 src= "./images/Wedding-Website1.JPG"/>
                        <img2 src= "./images/Wedding-Website1.JPG"/>
                        <img3 src= "./images/Wedding-Website1.JPG"/>
                </BgVendorBunchC>


                <BgSectionCustomizedPlans></BgSectionCustomizedPlans>
                <TitleCustomizedPlans>CUSTOMIZED PLANS</TitleCustomizedPlans>
                <TitleCustomizedPlansUnderLine></TitleCustomizedPlansUnderLine>        
                <a href= "/">
                    <BtnSectionCustomizedPlans>Start Customized Plans</BtnSectionCustomizedPlans>
                    <p>We provide you the Structured Services Plan and you can customize it as you want. Customized Plans start here</p>
                </a>
               
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

///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Top Image starts ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////


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
    width: 23%;
    margin-left: 130px;
`;

const P1 = styled.div`
    margin-top: 10px;
    width: 600px;
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
    width: 500px;
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
    width: 23%;
    margin-left: 840px;
`;

const P2 = styled.div`
    margin-top: 10px;
    width: 600px;
    margin-left: 840px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Btns = styled.div`
    display: flex;
`;

const BtnVWeddingPlans = styled.div`
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
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnVendorBunches = styled.div`
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
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnCustomizedPlans = styled.div`
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    background-color: #3A0C1D;  
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnWeddingPlansText = styled.div`

`;

const BtnVendorBunchesText = styled.div`

`;

const BtnCustomizedPlansText = styled.div`

`;


const BgColoredSection1 = styled.div`
    margin-top: -340px;
    opacity: 80%;
    z-index: -5;
    position: relative;
    background-color: #07464D;
    height: 500px;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;


///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Top Image Ends ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////

///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Wedding Plan starts ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////

const BgWeddingPlans = styled.div`
    margin-top: -115px;
    z-index: -11;
    background-color: #211D1D;
    opacity: 80%;
    height: 1400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleWeddingPlans = styled.div`
    color: #FFF;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -1350px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;


const TitleUnderLineWeddingPlans = styled.div`
    margin-top: 20px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;

const SectionPlatinumWeddingPlan = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 90%;
    z-index: 2;
    position: relative;
    height: 400px;
    margin-right: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 100px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;


const BtnSectionPlatinumWeddingPlan = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #181707;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    margin-left: 200px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 100px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;

const SectionGoldWeddingPlan = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 90%;
    z-index: 2;
    position: relative;
    height: 400px;
    margin-right: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 100px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;

const BtnSectionGoldWeddingPlan = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 90%;
    z-index: 2;
    position: relative;
    height: 400px;
    margin-right: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 100px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;

const SectionSilverWeddingPlan = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 90%;
    z-index: 2;
    position: relative;
    height: 400px;
    margin-right: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 100px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;

const BtnSectionSilverWeddingPlan = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 90%;
    z-index: 2;
    position: relative;
    height: 400px;
    margin-right: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 100px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;

const UnderLineWeddingPlans = styled.div`
    margin-top: 100px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;



///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Wedding Plan Ends ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////

///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Vendor Bunches starts ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////




const BgVendorBunches = styled.div`
    margin-top: -115px;
    z-index: -11;
    background-color: #211D1D;
    opacity: 80%;
    height: 1400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleVendorBunches = styled.div`
    color: #FFF;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -1350px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;

const TitleUnderLineVendorBunches = styled.div`
    margin-top: 20px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;

const SectionWeddingPlansContainer = styled.div`
  
`;

const BgVendorBunchA = styled.div`
    margin-top: 0px;
    margin-bottom: 10px;
    z-index: -1;
    background-color: #211D1D;
    opacity: 80%;
    height: 300px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const BtnSectionVendorBunchA = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #101A1A;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const BgVendorBunchB = styled.div`
    margin-top: 0px;
    margin-bottom: 10px;
    z-index: -1;
    background-color: #211D1D;
    opacity: 80%;
    height: 300px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const BtnSectionVendorBunchB = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #101A1A;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const BgVendorBunchC = styled.div`
    margin-top: 0px;
    margin-bottom: 10px;
    z-index: -1;
    background-color: #211D1D;
    opacity: 80%;
    height: 300px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const BtnSectionVendorBunchC = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #101A1A;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;



////////////////////////////////////// wrong? ///////////////////////////////////////////////
const BgSectionCustomizedPlans = styled.div`  
    z-index: 0;
    margin-top: 0px;
    background-color: #FFF;
    opacity: 80%;
    padding: 50px 30px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleCustomizedPlans = styled.div`
    color: #113605;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -70px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;

const TitleCustomizedPlansUnderLine = styled.div`
    width: 600px;
    border-radius: 20px;
    z-index: 1;
    margin-top: 10px;
    background-color: #113605;
    opacity: 80%;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
`;

const BtnSectionCustomizedPlans = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #101A1A;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;


export default WeddingPlans;