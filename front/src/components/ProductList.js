import React, { useState, useEffect } from 'react'
import { Card, Table } from 'reactstrap'
import ProductItem from './ProductItem'
import { observer } from 'mobx-react'
import Page from './Page'

const ProductList = ({ store }) => {
  const productitems =
    store.searchResults &&
    store.searchResults.map(product => (
      <ProductItem key={product.productId} product={product} store={store} />
    ))

  // 페이징처리
  const page = 10
  const [total, setTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  // 화면이 열리면 마지막 한번 호출되는 hook useEffect
  useEffect(() => {
    if (total > 0) {
      setPageCount(Math.ceil(total / page))
    }
  }, [total])

  useEffect(() => {
    setTotal(store.data.total)
  }, [store.data])

  const onPages = n => {
    setPages(n)
  }

  const fncSearch = start => {
    if (currentPage > pageCount) return
    store.movePage(start)
    setCurrentPage(start)
    if (0 === start) {
      store.movePage()
    }
  }

  return store.isSearch ? (
    <div>
      <Table hover style={{ marginBottom: '50px' }}>
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
      <Page
        store={store}
        fncSearch={fncSearch}
        pageCount={pageCount}
        currentPage={currentPage}
        pages={pages}
        onPages={onPages}
      />
    </div>
  ) : (
    store.isSearch && (
      <Card style={{ padding: '20px' }}>
        {store.isSearch && '상품이 없습니다.'}
      </Card>
    )
  )
}

export default observer(ProductList)
