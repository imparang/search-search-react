import axios from 'axios'
import { action, makeObservable, observable, runInAction } from 'mobx'

class ShopStore {
  query = ''
  data = {}
  autoCompletedQuery = []
  searchResults = []
  chart = []
  details = []
  isSearch = false
  isDetail = false
  isBuy = false

  constructor() {
    makeObservable(this, {
      query: observable,
      data: observable,
      autoCompletedQuery: observable,
      searchResults: observable,
      chart: observable,
      details: observable,
      isDetail: observable,
      isSearch: observable,
      getAutoCompletedQuery: action,
      getSearchResults: action,
      buyProduct: action,
      getChart: action,
      getDetail: action,
      movePage: action
    })
  }

  async getAutoCompletedQuery(query) {
    try {
      if (!query) {
        this.isSearch = false
        return
      }
      const res = await axios.get(`/shop?query=${query}`)
      if (res && res.status === 200) {
        const { data } = res
        runInAction(() => {
          this.autoCompletedQuery = data.items
        })
      }
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.autoCompletedQuery = []
      })
    }
  }

  async getSearchResults(query, start = 1) {
    try {
      const res = await axios.get(`/shop/search?query=${query}&start=${start}`)
      if (res && res.status === 200) {
        const { data } = res
        runInAction(() => {
          this.data = data
          this.isSearch = true
          this.searchResults = data.items
          this.query = query
        })
      }
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.data = {}
        this.searchResults = []
        this.isSearch = false
      })
    }
  }

  async movePage(start) {
    try {
      const res = await axios.get(
        `/shop/search?query=${this.query}&start=${start}`
      )
      if (res && res.status === 200) {
        const { data } = res
        runInAction(() => {
          this.data = data
          this.isSearch = true
          this.searchResults = data.items
        })
      }
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.data = {}
        this.searchResults = []
        this.isSearch = false
      })
    }
  }

  async buyProduct(productData) {
    try {
      const res = await axios.post('/account', productData)
      if (res && res.status === 200) {
        console.log(res)
        runInAction(() => {
          this.getChart()
        })
      }
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.isBuy = false
      })
    }
  }

  async getChart() {
    try {
      const res = await axios.post('/account/detail')
      if (res && res.status === 200) {
        const { data } = res
        runInAction(() => {
          this.chart = data.json
        })
      }
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.chart = []
      })
    }
  }

  async getDetail(category) {
    try {
      const res = await axios.post('/account/category', { category1: category })
      if (res && res.status === 200) {
        const { data } = res
        runInAction(() => {
          this.details = data.json
          this.isDetail = true
        })
      }
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.details = []
        this.isDetail = false
      })
    }
  }

  reset() {
    this.isSearch = false
  }
}

export default ShopStore
