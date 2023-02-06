import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { getListGenres, listGenreSelectors } from "../features/ListGenreSlice";
import { update } from "../features/AppSlice";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

const ListGenre = () => {
  const { idGenre } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [rows, setRows] = useState(0);

  const dispatch = useDispatch();
  const updateListPage = (selectedPage) => {
    dispatch(update({ selectedPage, idGenre }));
  };
  const { genrePage } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(getListGenres(idGenre, genrePage));
  }, [page]);

  const listMovie = useSelector(listGenreSelectors.selectAll);

  console.log(listMovie[0]?.title);

  useEffect(() => {
    async function getDataPage() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=2fccde01a371b106b09a241d6d1d5b49&with_genres=${idGenre}&page=${genrePage}&year=2023`
      );
      setPage(res.data.page);
      setTotalPage(res.data.total_pages);
      setRows(res.data.total_results);
    }
    getDataPage();
  }, [page]);

  const changePage = ({ selected }) => {
    setPage(selected + 1);
    updateListPage(selected + 1);
  };

  return (
    <div className="max-w-7xl mt-24 mb-10 mx-auto px-4 ">
      <div className="overflow-scroll h-[80vh]">
        <Table hoverable={true} striped={true} className="">
          <Table.Head className="bg-slate-200">
            <Table.HeadCell className="text-center">No</Table.HeadCell>
            <Table.HeadCell className="text-center">Picture</Table.HeadCell>
            <Table.HeadCell className="text-center">Title</Table.HeadCell>
            <Table.HeadCell className="text-center">Overview</Table.HeadCell>
            <Table.HeadCell className="text-center">Popularity</Table.HeadCell>
            <Table.HeadCell className="text-center w-32">
              Release Date
            </Table.HeadCell>
            <Table.HeadCell className="text-center">
              Vote Average
            </Table.HeadCell>
            <Table.HeadCell className="text-center">
              Movie Detail
            </Table.HeadCell>
          </Table.Head>
          <tbody>
            {listMovie?.map((item, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="text-center">{index + 1}</Table.Cell>
                <Table.Cell>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    className="w-40"
                  />
                </Table.Cell>
                <Table.Cell className="text-center font-semibold">
                  {item.title}
                </Table.Cell>
                <Table.Cell>{item.overview}</Table.Cell>
                <Table.Cell className="text-center">
                  {item.popularity}
                </Table.Cell>
                <Table.Cell className="text-center">
                  {item.release_date}
                </Table.Cell>
                <Table.Cell className="text-center">
                  {item.vote_average}
                </Table.Cell>
                <Table.Cell>
                  <button
                    className="cursor-pointer bg-red-600 hover:bg-red-500 py-1 px-4 text-white rounded"
                    onClick={() => navigate(`/detail-movie/${item.id}`)}
                  >
                    Show
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="font-semibold">
          Total Results : {rows}, Page : {page} of {totalPage}
        </p>
        <ReactPaginate
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          pageCount={totalPage}
          onPageChange={changePage}
          containerClassName="flex gap-3"
          pageLinkClassName="block w-7 bg-slate-700 rounded text-center text-white"
          previousLinkClassName="block w-16 bg-slate-700 rounded text-center text-white"
          nextLinkClassName="block w-16 bg-slate-700 rounded text-center text-white"
          activeLinkClassName="block w-7 !bg-slate-200 rounded text-center text-black"
        />
      </div>
    </div>
  );
};

export default ListGenre;
