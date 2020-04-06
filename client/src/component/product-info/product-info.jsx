import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './product-info.css';
import { connect } from 'react-redux';
import { getItem } from '../../redux/actions/productAction';
const ProductInfo = (props) => {
    const {
        buttonLabel,
        className,
        product,
        id
    } = props;
    console.log(props);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger"
                onClick={() => {
                    toggle();
                    props.getItem(id);
                }}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} style={{ textTransform: 'uppercase', fontWeight: '300' }}>{product.name}</ModalHeader>
                <ModalBody>
                    <div className='model-content'>
                        <div className='model-content-image'>
                            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={`${product.productImage}`} />
                        </div>
                        <div className='model-content-product-meta-info'>
                            <h1 style={{ textTransform: 'uppercase', fontWeight: '700' }}>{product.name}</h1>
                            <h3>${product.price}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Buy Now</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    getItem: (id) => dispatch(getItem(id))
});

const mapStateToProps = (state) => ({
    product: state.product.product
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);