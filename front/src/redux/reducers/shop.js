import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../types'

export const searchRequest = () => {
  return {
    type: SEARCH_REQUEST
  }
}

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

const initialQuery = {
  query: [''],
  answer: [],
  intend: [],
  items: [
    [
      ['', '0'],
      ['', '0'],
      ['', '0'],
      ['', '0']
    ]
  ]
}

export const queryReducer = (state = initialQuery, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialMarket = {
  lastBuildDate: '',
  total: 0,
  start: 1,
  display: 10,
  items: [
    {
      title: '',
      link: '',
      image: '',
      lprice: '',
      hprice: '',
      mallName: '',
      productId: '',
      productType: '',
      brand: '',
      maker: '',
      category1: '',
      category2: '',
      category3: '',
      category4: ''
    }
  ]
}

export const marketReducer = (state = initialMarket, action) => {
  switch (action.type) {
    default:
      return state
  }
}
