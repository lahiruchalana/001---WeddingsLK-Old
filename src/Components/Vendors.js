import styled from "styled-components";
import VendorsCards from "./VendorsCards.js"

const Vendors = (props) => {
   
    return (
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
    );
};
 
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