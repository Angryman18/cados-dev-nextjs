import style from "../styles/paginate.module.css";

interface Props {
  pages: number[];
  has_previous: boolean;
  has_next: boolean;
  next_page: number | boolean;
  prev_page: number | boolean;
  current_page: number;
  total_pages: number;
  handlePageChange: (val: number) => void;
}

const Pagination = (props: Props) => {
  const {
    pages,
    has_previous,
    has_next,
    next_page,
    prev_page,
    current_page,
    total_pages,
    handlePageChange,
  } = props;

  const handlePageClick = (page: number | boolean): void => {
    if (page === current_page || !page) return;
    if (typeof page === "number") return handlePageChange(page);
  };

  const nextPageClassName =
    style["page-link"] + " rounded-r " + `${!has_next && style["page-disabled"]}`;

  const prevPageClassName =
    style["page-link"] + " rounded-l " + `${!has_previous && style["page-disabled"]}`;

  return (
    <div className='my-4'>
      <ul className='decoration-none flex gap-x-0 text-blue-800'>
        <li onClick={handlePageClick.bind(null, prev_page)} className={prevPageClassName}>
          Previous
        </li>
        {pages?.map((page) => (
          <li
            key={page}
            onClick={handlePageClick.bind(null, page)}
            className={`${page === current_page && style["page-active"]} ` + style["page-link"]}
          >
            {page}
          </li>
        ))}
        <li onClick={handlePageClick.bind(null, next_page)} className={nextPageClassName}>
          Next
        </li>
      </ul>
    </div>
  );
};

// Pagination.defaultProps = {
//   has_next: false,
//   has_previous: false,
//   pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//   current_page: 5,
// };

export default Pagination;
