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
import Detail from './components/Detail'
import Map from './components/Map'
import ProductList from './components/ProductList'
import SearchProduct from './components/SearchProduct'
import ShopStore from './mobx/store'

const store = new ShopStore()

function App() {
  const [activeTab, setActiveTab] = useState('1')
  const [active, setActive] = useState(false)

  return (
    <Container style={{ padding: '20px 0' }}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : ''}
            onClick={e => {
              setActiveTab('1')
            }}
          >
            Product
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active' : ''}
            onClick={e => {
              setActiveTab('2')
            }}
          >
            Stat
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '3' ? 'active' : ''}
            onClick={e => {
              setActiveTab('3')
            }}
          >
            Map
          </NavLink>
        </NavItem>
      </Nav>
      <Card style={{ padding: '40px', height: '100%' }}>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <SearchProduct store={store} />
            <ProductList store={store} />
          </TabPane>
          <TabPane tabId="2">
            <Detail store={store} />
          </TabPane>
          <TabPane tabId="3">
            <Map />
          </TabPane>
        </TabContent>
      </Card>
    </Container>
  )
}

export default App
