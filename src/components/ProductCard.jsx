import { Flex } from "./Styled";

export const ProductCard = ({title, price, image, category, id, brand}) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        <h3>{title}</h3>
        <img src={image} alt="" style={{width: '80%', height: '60%', ObjectFit: "cover" }}/>
        <h3 style={{color: 'teal'}}>{brand}</h3>
        <p>Price: {price}</p>
      </Flex>
    </>
  );
};
