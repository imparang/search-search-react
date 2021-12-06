import React, { useState } from 'react'
import {
  Card,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import ProductList from './components/ProductList'
import SearchProduct from './components/SearchProduct'

function App() {
  const [activeTab, setActiveTab] = useState('1')
  const [active, setActive] = useState(false)

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
            <SearchProduct />
            <ProductList />
          </TabPane>
          <TabPane tabId="2">
            <div>통계를 만들어봅시당</div>
          </TabPane>
        </TabContent>
      </Card>
    </Container>
  )
}

export default App
