import styled from "styled-components";

function ServicesCards({ id, serviceType, image}) {
    return (
        <Service>
            <ServiceImage>
                <img src= {image} alt=""></img>
            </ServiceImage>
            <ServiceType>
                    <a href="/">{serviceType}</a>
            </ServiceType>
        </Service>
    )

}

const Service = styled.div`
   
`;

const ServiceImage = styled.div`
   
`;

const ServiceType = styled.div`
   
`;

export default ServicesCards;