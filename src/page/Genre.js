import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, genreSelectors } from "../features/GenreSlice";
import image1 from "../assets/Action.jpg";
import image2 from "../assets/Adventure.jpg";
import image3 from "../assets/Animation.jpg";
import image4 from "../assets/Comedy.jpg";
import image5 from "../assets/Crime.jpg";
import image6 from "../assets/Documentary.jpg";
import image7 from "../assets/Drama.jpg";
import image8 from "../assets/Family.jpg";
import image9 from "../assets/Fantasy.jpg";
import image10 from "../assets/History.jpg";
import image11 from "../assets/Horror.jpg";
import image12 from "../assets/Music.jpg";
import image13 from "../assets/Mystery.jpg";
import image14 from "../assets/Romance.jpg";
import image15 from "../assets/Science Fiction.jpg";
import image16 from "../assets/TV Movie.jpg";
import image17 from "../assets/Thriller.jpg";
import image18 from "../assets/War.jpg";
import image19 from "../assets/Western.jpg";
import { useNavigate } from "react-router-dom";

const Genre = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const genres = useSelector(genreSelectors.selectAll);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mt-24 mb-10 mx-auto px-4">
      {genres.map((item, index) => (
        <div key={item.id} className="overflow-hidden rounded-lg relative">
          <div className="">
            <img
              src={
                (index === 0 && image1) ||
                (index === 1 && image2) ||
                (index === 2 && image3) ||
                (index === 3 && image4) ||
                (index === 4 && image5) ||
                (index === 5 && image6) ||
                (index === 6 && image7) ||
                (index === 7 && image8) ||
                (index === 8 && image9) ||
                (index === 9 && image10) ||
                (index === 10 && image11) ||
                (index === 11 && image12) ||
                (index === 12 && image13) ||
                (index === 13 && image14) ||
                (index === 14 && image15) ||
                (index === 15 && image16) ||
                (index === 16 && image17) ||
                (index === 17 && image18) ||
                (index === 18 && image19)
              }
              className="w-full"
            />
          </div>
          <div
            className="absolute z-10 inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center cursor-pointer"
            onClick={() => navigate(`/list-genre/${item.id}`)}
          >
            <h3 className="text-2xl font-extrabold text-white ">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Genre;
