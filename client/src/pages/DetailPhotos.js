import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailPhoto from "../components/DetailPhoto";
import Navbar from "../components/Navbar";
import Masonry from "react-masonry-css";
import RandomPhotos from "../components/RandomPhotos";

function DetailPhotos(props) {
  const [photos, setData] = useState([]);
  const id = props.match.params.id;
  const [detailPhotos, setDetailPhotos] = useState();

  const getData = () => {
    axios
      .get(`http://localhost:5000/photos`)
      .then(response => response.data)
      .then(json => {
        setData(json);
      });
  };

  const getDetailPhoto = () => {
    axios
      .get(`http://localhost:5000/detailpage/${id}`)
      .then(response => response.data)
      .then(json => {
        setDetailPhotos(json);
      });
  };

  const onClicktoDetailPhotos = id => {
    props.history.push({
      pathname: `/detailpage/${id}`
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getDetailPhoto();
  }, []);

  return (
    <div>
      <Navbar />
      <DetailPhoto {...{ ...detailPhotos, id }} />
      <Masonry
        breakpointCols={{ default: 5, 800: 2 }}
        className="my-masonry-grid mx-12 my-7"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((item, index) => {
          return (
            <RandomPhotos
              onClicktoDetailPhotos={onClicktoDetailPhotos}
              {...item}
              key={index}
            />
          );
        })}
      </Masonry>
    </div>
  );
}

export default DetailPhotos;
