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

  const nextPageclassNameName =
    style["page-link"] +
    " rounded-r " +
    `${!has_next && style["page-disabled"]}`;

  const prevPageclassNameName =
    style["page-link"] +
    " rounded-l " +
    `${!has_previous && style["page-disabled"]}`;

  return (
    <div className="my-4">
      <ul className="decoration-none flex gap-x-0 text-white">
        <a
          onClick={handlePageClick.bind(null, prev_page)}
          href="#"
          className="block p-2.5 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg   hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        {pages?.map((page) => (
          <li
            key={page}
            onClick={handlePageClick.bind(null, page)}
            className={
              `${page === current_page && style["page-active"]} ` +
              style["page-link"]
            }
          >
            {page}
          </li>
        ))}
        <li
          onClick={handlePageClick.bind(null, next_page)}
        >
          <a
            href="#"
            className="block p-2.5 leading-tight text-gray-500 bg-white rounded-r-lg   hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
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
