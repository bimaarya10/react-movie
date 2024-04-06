import { useState } from "react";
import ModalBox from "./ModalBox";

export default function MovieItem({id, poster, movie}) {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModaldata] = useState({})

  function onClickMovie(){
    setModaldata(movie)
    setShowModal(true)
  }

  return (
    <>
    <div
      className="w-56 hover:scale-110 transition-all cursor-pointer"
      key={id}
      onClick={onClickMovie}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${[poster]}`}
        alt=""
      />
    </div>
    <ModalBox movie={modalData} isVisible={showModal} closeModal={() => setShowModal(!showModal)}/>
    </>
  );
}
