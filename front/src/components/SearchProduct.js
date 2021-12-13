import React, { useCallback, useEffect, useState } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import { observer } from 'mobx-react'

// ? searchResults -> Proxy data => submit할 때, 데이터를 잘 받도록 하기
// ? 지출 내역 차트도 mobx로 만들기, detail도 mobx 사용하기

const SearchProduct = ({ store }) => {
  const [text, setText] = useState('')
  const [autoCompletedQuery, setAutoCompletedQuery] = useState([])

  useEffect(() => {
    setAutoCompletedQuery(store.autoCompletedQuery)
  }, [store.autoCompletedQuery])

  const onChangeQuery = useCallback(
    query => {
      setText(query)
      store.getAutoCompletedQuery(query)
    },
    [store]
  )

  const onSearch = useCallback(
    e => {
      e.preventDefault()
      setAutoCompletedQuery([])
      store.getSearchResults(text)
    },
    [store, text]
  )

  return (
    <Form style={{ marginBottom: '40px' }} onSubmit={onSearch}>
      <FormGroup>
        <Label>쇼핑 품목을 검색하세요</Label>
        <Input
          type="text"
          value={text}
          onChange={e => onChangeQuery(e.target.value)}
          autoFocus
        />
      </FormGroup>
      {text && (
        <ListGroup>
          {store.autoCompletedQuery &&
            autoCompletedQuery.map(item =>
              item.map(el => (
                <ListGroupItem
                  key={Math.random()}
                  onClick={e => {
                    onSearch(e, e.target.textContent)
                  }}
                >
                  {el}
                </ListGroupItem>
              ))
            )}
        </ListGroup>
      )}
    </Form>
  )
}

export default observer(SearchProduct)
