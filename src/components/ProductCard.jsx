import { Flex } from "./Styled";

export const ProductCard = ({title, price, image, category, id}) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        <h3>Title: {title}</h3>
        <img src={image} alt="" style={{width: '80%', height: '60%', ObjectFit: "cover" }}/>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
      </Flex>
    </>
  );
};
