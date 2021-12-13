import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { observer } from 'mobx-react'

const ProductItem = ({ store, ...props }) => {
  const { product, isDetail } = props
  const [productData, setProductData] = useState({})

  useEffect(() => {
    setProductData({
      productId: product.productId,
      title: product.title,
      image: product.image,
      category1: product.category1,
      category2: product.category2,
      category3: product.category3,
      category4: product.category4
    })
  }, [product])

  const onClick = useCallback(async () => {
    store.buyProduct(productData)
  }, [productData, store])

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

export default observer(ProductItem)
