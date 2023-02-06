import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDetailMovie,
  detailMovieSelectors,
} from "../features/DetailMovieSlice";
import { update } from "../features/AppSlice";

const DetailMovie = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(update({ id }));
  });
  const { movieId } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getDetailMovie(movieId));
  }, [movieId]);

  const detailMovie = useSelector(detailMovieSelectors.selectAll);

  return (
    <div className="max-w-7xl mt-24 mb-10 mx-auto px-4 grid grid-cols-[400px,auto] gap-7">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${detailMovie[0]?.poster_path}`}
        />
      </div>
      <div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Title <span>:</span>
          </h5>
          <span>{detailMovie[0]?.title}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Overview <span>:</span>
          </h5>
          <span>{detailMovie[0]?.overview}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Genre <span>:</span>
          </h5>
          <span>
            {detailMovie[0]?.genres.map((item) => (
              <span>{item.name}, </span>
            ))}
          </span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Release Date <span>:</span>
          </h5>
          <span>{detailMovie[0]?.release_date}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Popularity <span>:</span>
          </h5>
          <span>{detailMovie[0]?.popularity}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Vote Average <span>:</span>
          </h5>
          <span>{detailMovie[0]?.vote_average}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Vote Count <span>:</span>
          </h5>
          <span>{detailMovie[0]?.vote_count}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Language <span>:</span>
          </h5>
          <span>{detailMovie[0]?.original_language}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Home Page <span>:</span>
          </h5>
          <span>
            <a href={detailMovie[0]?.homepage} className="text-blue-600">
              {detailMovie[0]?.homepage}
            </a>
          </span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Production Companies <span>:</span>
          </h5>
          <span>{detailMovie[0]?.production_companies[0].name}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Production Countries <span>:</span>
          </h5>
          <span>{detailMovie[0]?.production_countries[0].name}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Status <span>:</span>
          </h5>
          <span>{detailMovie[0]?.status}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Budget <span>:</span>
          </h5>
          <span>{detailMovie[0]?.budget}</span>
        </div>
        <div className="grid grid-cols-[180px,auto] gap-3 mb-2">
          <h5 className="flex justify-between">
            Revenue <span>:</span>
          </h5>
          <span>{detailMovie[0]?.revenue}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
