import React from 'react'
import { Card, Table } from 'reactstrap'
import ProductItem from './ProductItem'

const ProductList = () => {
  const products = []

  const productitems = () => {
    return products && products.map(product => <ProductItem />)
  }
  return products.length ? (
    <Table hover>
      <thead>
        <tr>
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
      상품이 없습니다.
    </Card>
  )
}

export default ProductList
