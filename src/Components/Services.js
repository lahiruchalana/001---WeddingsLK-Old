import styled from "styled-components";
import ServicesCards from "./ServicesCards.js"

const Services = (props) => {









// mekata images ps eke dala ekama size ekakakata ganna

// first - create 300px * 300px kotuwak

// second ekata upload karanna photos

// services wenas wenne naha normally









    return (
        <ServiceContainer>
            <CardColum>
                <ServicesCards
                    id="1238"
                    serviceType="Wedding Decorations"
                    image="./images/SankalanaFlora.jpg"
                />
                <ServicesCards
                    id="1238"
                    serviceType="Wedding Decorations"
                    image="./images/SankalanaFlora.jpg"
                />
            </CardColum>
            <CardColum>
                <ServicesCards
                    id="1238"
                    serviceType="Wedding Decorations"
                    image="./images/SankalanaFlora.jpg"
                />
                <ServicesCards
                    id="1238"
                    serviceType="Wedding Decorations"
                    image="./images/SankalanaFlora.jpg"
                />
            </CardColum>
            <CardColum>
                <ServicesCards
                    id="1238"
                    serviceType="Wedding Decorations"
                    image="./images/SankalanaFlora.jpg"
                />
                <ServicesCards
                    id="1238"
                    serviceType="Wedding Decorations"
                    image="./images/SankalanaFlora.jpg"
                />
            </CardColum>
            <CardVendorEnd></CardVendorEnd>
        </ServiceContainer>
    );
};

const ServiceContainer = styled.div`
   
`;

const CardColum = styled.div`
   
`;

const CardVendorEnd = styled.div`
   
`;

export default Services;