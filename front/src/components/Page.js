import React, { useEffect } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const Page = ({ store, ...props }) => {
  const { currentPage, pageCount, fncSearch, pages, onPages } = props
  useEffect(() => {
    console.log(currentPage)
    console.log(pages, '000')
    console.log(pageCount, 'count')
  }, [currentPage, pages, pageCount])
  // const [pages, setPages] = useState(0)
  // const [currentPage, setCurrentPage] = useState(1)
  // const onMove = useCallback(e => {
  //   const pages = Array.from(arr.filter(el => el.classList.contains('active')))
  //   setCurrentPage(Number(e.target.textContent))
  //   store.movePage(Number(e.target.textContent))
  //   if (pages[0] === e.target.parentElement) return
  //   pages[0].classList.remove('active')
  //   e.target.parentElement.classList.add('active')
  // }, [])

  // const move = e => {
  //   if (e.currentTarget.textContent === '«First') {
  //     store.movePage(1)
  //     arr.forEach(el => {
  //       if (el.classList.contains('active')) el.classList.remove('active')
  //     })
  //     arr[0].classList.add('active')
  //   } else if (e.currentTarget.textContent === '»Last') {
  //     store.movePage(100)
  //   }
  // }

  return (
    <Pagination
      aria-label="Page navigation example"
      className="d-flex justify-content-center"
    >
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          onClick={() => {
            fncSearch(1)
            onPages(1)
          }}
          first
        />
      </PaginationItem>
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          onClick={() =>
            currentPage % 5 === 1
              ? (fncSearch(currentPage - 1), onPages(pages - 1))
              : fncSearch(currentPage - 1)
          }
          previous
        />
      </PaginationItem>
      {Math.ceil(pageCount / 5) - pages >= 0 &&
        [...Array(5)].map((data, i) => (
          <PaginationItem
            active={5 * (pages - 1) + (i + 1) === currentPage}
            disabled={pageCount < 5 * (pages - 1) + (i + 1)}
            key={i}
          >
            <PaginationLink onClick={() => fncSearch(i + 1)} href="#">
              {5 * (pages - 1) + (i + 1)}
            </PaginationLink>
          </PaginationItem>
        ))}
      {/* {Array(5)
        .fill(0)
        .map((el, i) => (
          <PaginationItem
            className="pages"
            key={5 * pages + (i + 1)}
            active={(5 * pages + (i + 1)) % 5 === 1}
          >
            <PaginationLink onClick={onMove}>
              {5 * pages + (i + 1)}
            </PaginationLink>
          </PaginationItem>
        ))} */}
      <PaginationItem>
        <PaginationLink
          onClick={() =>
            currentPage % 5 === 0
              ? (fncSearch(currentPage + 1), onPages(pages + 1))
              : fncSearch(currentPage + 1)
          }
          next
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          onClick={() => {
            fncSearch(pageCount)
            onPages(Math.ceil(pageCount / 5))
          }}
          last
        />
      </PaginationItem>
    </Pagination>
  )
}

export default Page
