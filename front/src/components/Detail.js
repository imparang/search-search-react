import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const Detail = () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 600, pv: 1400, amt: 2400 },
    { name: 'Page C', uv: 1400, pv: 2200, amt: 2400 },
    { name: 'Page D', uv: 900, pv: 1100, amt: 2400 },
    { name: 'Page E', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page F', uv: 500, pv: 2000, amt: 2400 }
  ]

  return (
    <Container>
      <Row>
        <Col>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  )
}

export default Detail
