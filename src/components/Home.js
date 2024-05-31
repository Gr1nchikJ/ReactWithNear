import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import styled from "styled-components";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    setProducts([
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
      },
    ]);
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-4 shadow-4"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <div className="mt-4 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
      <CustomDivider />
      <ContentWrapper>
        <div>
          <Button
            label="Create your own"
            onClick={() => navigate('/create-certificate')}
            raised
            style={{ marginRight: "10px" }}
          />
          <Button label="Search our library" onClick={() => navigate('/library')} raised />
        </div>
        <div style={{ marginTop: "20px" }}>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
          </span>
        </div>
      </ContentWrapper>
      <CustomDivider />
      <AboutUsSection>
        <CaptureText>About Us</CaptureText>
        <RegularText>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </RegularText>
      </AboutUsSection>
    </>
  );
};

const ContentWrapper = styled.div`
  margin: 2.5rem 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const AboutUsSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const CustomDivider = styled(Divider)`
  .p-divider .p-divider-horizontal:before {
    border-top: 2px #3f4b5b;
  }
`;

const CaptureText = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  height: 3vh;
`;

const RegularText = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 800px;
  text-align: center;
  color: rgba(21, 21, 21, 0.8);
`;
