import axios from 'axios'
import React, { useCallback, useState } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

const SearchProduct = ({ getData }) => {
  const [query, setQuery] = useState('')
  const [autoCompletedQuery, setAutoCompletedQuery] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const autoCompletedSearchQuery = useCallback(async query => {
    try {
      const res = await axios.get(`/shop?query=${query}`)
      if (res && res.status === 200) {
        const { data } = res
        setAutoCompletedQuery(data.items)
      }
    } catch (e) {
      console.log('error ', e)
    }
  }, [])

  const fetchSearchResult = useCallback(async query => {
    try {
      const res = await axios.get(`/shop/search?query=${query}`)
      if (res && res.status === 200) {
        const { data } = res
        console.log(data.items)
        setSearchResults(data.items)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  const onChangeQuery = useCallback(
    text => {
      setQuery(text)
      autoCompletedSearchQuery(query)
    },
    [query, autoCompletedSearchQuery]
  )

  const onSearch = useCallback(
    e => {
      e.preventDefault()
      fetchSearchResult(query)
      setAutoCompletedQuery([])
      console.log(searchResults)
      getData(searchResults)
    },
    [query, fetchSearchResult, searchResults, getData]
  )
  return (
    <Form style={{ marginBottom: '40px' }} onSubmit={onSearch}>
      <FormGroup>
        <Label>쇼핑 품목을 검색하세요</Label>
        <Input
          type="text"
          value={query}
          onChange={e => {
            onChangeQuery(e.target.value)
          }}
          autoFocus
        />
      </FormGroup>
      {query && (
        <ListGroup>
          {autoCompletedQuery.map(item =>
            item.map(el => (
              <ListGroupItem key={Math.random()}>{el}</ListGroupItem>
            ))
          )}
        </ListGroup>
      )}
    </Form>
  )
}

export default SearchProduct
