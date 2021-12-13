import { observer } from 'mobx-react'
import React, { useCallback, useEffect } from 'react'
import { Col, Container, Row, Table } from 'reactstrap'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import ProductItem from './ProductItem'

const Detail = ({ store }) => {
  useEffect(() => {
    store.getChart()
  }, [])

  const onClickCategory = useCallback(
    category => {
      store.getDetail(category)
    },
    [store]
  )

  const expenditureList =
    store.details &&
    store.details.map(product => (
      <ProductItem
        key={product.productId}
        product={product}
        isDetail={store.isDetail}
      />
    ))
  return (
    <Container>
      <Row>
        <Col>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={store.chart}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              onClick={e => onClickCategory(e.activeLabel)}
            >
              <Line type="monotone" dataKey="buyCount" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="category1" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
      {store.details && (
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <th>제품</th>
                  <th>상품명</th>
                  <th>제품수</th>
                  <th>구매일</th>
                </tr>
              </thead>
              <tbody>{expenditureList}</tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default observer(Detail)
