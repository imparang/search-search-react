import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

const ProductItem = ({ product }) => {
  return (
    <tr style={{ textAlign: 'center', verticalAlign: 'middle' }}>
      <td>
        <img
          src={product.image}
          alt={`${product.title} 이미지`}
          style={{ display: 'inline-block', width: '80px', height: '80px' }}
        />
      </td>
      <td>{product.title}</td>
      <td>{product.maker}</td>
      <td>{product.lprice}</td>
      <td>
        <Button color="success" block>
          구매
        </Button>
      </td>
    </tr>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem
