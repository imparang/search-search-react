import React, { useCallback, useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const SearchProduct = () => {
  const [query, setQuery] = useState('')

  const onChangeQuery = useCallback(e => {
    setQuery(e.target.value)
  }, [])

  return (
    <Form style={{ marginBottom: '40px' }}>
      <FormGroup>
        <Label>쇼핑 품목을 검색하세요</Label>
        <Input type="text" value={query} onChange={onChangeQuery} autoFocus />
      </FormGroup>
    </Form>
  )
}

export default SearchProduct
