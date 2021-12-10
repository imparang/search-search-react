import React, { useCallback } from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import axios from 'axios'
import dayjs from 'dayjs'

const ProductItem = ({ product, isDetail }) => {
  const onClick = useCallback(async () => {
    try {
      const res = await axios.post('/account', {
        productId: product.productId,
        title: product.title,
        image: product.image,
        category1: product.category1,
        category2: product.category2,
        category3: product.category3,
        category4: product.category4
      })
      if (res && res.status === 200) {
        const { data } = res
        return data.items
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <tr style={{ textAlign: 'center', verticalAlign: 'middle' }}>
      <td>
        <img
          src={product.image}
          alt={`${product.title} 이미지`}
          style={{ display: 'inline-block', width: '80px', height: '80px' }}
        />
      </td>
      <td dangerouslySetInnerHTML={{ __html: product.title }}></td>
      {isDetail ? (
        <>
          <td>{product.buyCount}</td>
          <td>
            {product.updateDate
              ? dayjs(product.updateDate).format('YYYY-MM-DD hh:mm')
              : dayjs(product.insertDate).format('YYYY-MM-DD hh:mm')}
          </td>
        </>
      ) : (
        <>
          <td>{product.maker}</td>
          <td>{product.lprice}</td>
        </>
      )}

      <td>
        {!isDetail && (
          <Button color="success" block onClick={onClick}>
            구매
          </Button>
        )}
      </td>
    </tr>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem
