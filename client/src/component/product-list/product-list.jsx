import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Product from '../product/product';
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/productAction';




class ProductList extends Component {

    componentDidMount() {
        this.props.getItems();

    }


    render() {
        const { products } = this.props;
        console.log(products);

        return (
            <Container className='products' style={{ margin: "4rem auto" }}>
                {
                    products.map(product => (
                        <Product key={product._id} {...product} />
                    ))
                }
            </Container>
        );

    }
}
const mapDispatchStateToProps = dispatch => ({
    getItems: () => dispatch(getItems())
});

const mapStateToProps = (state) => ({
    products: state.product.products
});
export default connect(mapStateToProps, mapDispatchStateToProps)(ProductList);
