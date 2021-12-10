import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
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

const Detail = () => {
  const [data, setData] = useState()
  const [list, setList] = useState([])
  const [isDetail, setIsDetail] = useState(false)

  useEffect(() => {
    axios.post('/account/detail').then(res => setList(res.data.json))
  }, [])

  const onClickCategory = useCallback(category1 => {
    axios.post('/account/category', { category1 }).then(res => {
      setData(res.data.json)
      setIsDetail(true)
    })
  }, [])

  const expenditureList =
    data &&
    data.map(product => (
      <ProductItem
        key={product.productId}
        product={product}
        isDetail={isDetail}
      />
    ))
  return (
    <Container>
      <Row>
        <Col>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={list}
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
      {data && (
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

export default Detail
