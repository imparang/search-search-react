import React, { useCallback, useEffect, useState } from 'react'
import {
  Card,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import Detail from './components/Detail'
import ProductList from './components/ProductList'
import SearchProduct from './components/SearchProduct'

function App() {
  const [activeTab, setActiveTab] = useState('1')
  const [active, setActive] = useState(false)
  const [data, setData] = useState([])
  const [isSearch, setIsSearch] = useState(false)

  const getData = useCallback(
    data => {
      setData(data)
    },
    [data]
  )

  useEffect(() => {
    setIsSearch(true)
  }, [data])
  return (
    <Container style={{ padding: '20px 0' }}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={active ? '' : 'active'}
            onClick={() => {
              setActiveTab('1')
              setActive(false)
            }}
          >
            Product
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={active ? 'active' : ''}
            onClick={e => {
              setActiveTab('2')
              setActive(true)
            }}
          >
            Stat
          </NavLink>
        </NavItem>
      </Nav>
      <Card style={{ padding: '40px', height: 'calc(100vh - 84px)' }}>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <SearchProduct getData={getData} />
            <ProductList data={data} isSearch={isSearch} />
          </TabPane>
          <TabPane tabId="2">
            <Detail />
          </TabPane>
        </TabContent>
      </Card>
    </Container>
  )
}

export default App
