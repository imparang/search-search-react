import React from 'react'
import { Card, Table } from 'reactstrap'
import ProductItem from './ProductItem'

const ProductList = ({ data, isSearch }) => {
  const productitems =
    data &&
    data.map(product => (
      <ProductItem key={product.productId} product={product} />
    ))

  return data?.length ? (
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
    <Card style={{ height: 'calc(100vh - 274px)', padding: '20px' }}>
      {isSearch && '상품이 없습니다.'}
    </Card>
  )
}

export default ProductList
