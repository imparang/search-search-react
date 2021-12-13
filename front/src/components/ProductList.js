import React from 'react'
import { Card, Table } from 'reactstrap'
import ProductItem from './ProductItem'
import { observer } from 'mobx-react'

const ProductList = ({ store }) => {
  const productitems =
    store.searchResults &&
    store.searchResults.map(product => (
      <ProductItem key={product.productId} product={product} store={store} />
    ))

  return store.isSearch ? (
    <Table hover>
      <thead>
        <tr style={{ textAlign: 'center', verticalAlign: 'middle' }}>
          <th>제품</th>
          <th>상품명</th>
          <th>제조사</th>
          <th>최저가</th>
          <th>구매</th>
        </tr>
      </thead>
      <tbody>{productitems}</tbody>
    </Table>
  ) : (
    store.isSearch && (
      <Card style={{ padding: '20px' }}>
        {store.isSearch && '상품이 없습니다.'}
      </Card>
    )
  )
}

export default observer(ProductList)
