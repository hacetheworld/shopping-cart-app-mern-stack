import React from 'react';
import './product.style.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import ProductInfo from '../product-info/product-info';

const Product = (props) => {
    const { _id, name, productImage, description, price } = props;

    return (
        <Card>
            <CardImg className='proudctImage' top src={`${productImage}`} alt={`${name}`} />
            <CardBody>
                <div className="product-info">
                    <h1>{name}</h1>
                    <h3>${price}</h3>
                </div>
                {/* <CardText>{description}</CardText> */}
                <div className="buttons">
                    <ProductInfo id={_id} buttonLabel='More-info' />
                    <Button>BUY NOW </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default Product;