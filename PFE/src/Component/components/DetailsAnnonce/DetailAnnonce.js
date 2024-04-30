import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import ListAnnonce from '../Cards/ListAnnonce';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaHeart } from 'react-icons/fa';

const DetailAnnonce = () => {
  const { id } = useParams();
  const annonces = useSelector(state => state.annonce.annonces);
  const annonce = annonces.find(a => a.id === parseInt(id));

  const users = useSelector(state => state.user.users);
  const user = users.find(u => u.id === annonce.id_user);


  const images = [
    "/images/villa26vue1-raison_internet.jpg",
    "/images/télécharger (10).jpeg",
    "/images/Penthouse Interior Design in Dubai_ Elegance and Opulence.jpeg",
    "/images/image4.jpeg",
    "/images/villa26vue1-raison_internet.jpg"
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSelectedImageIndex(next)
  };

  return (
    <div >
      <Header />
      <div className="container mx-auto p-8">
        <div className="lg:flex bg-white rounded-lg shadow-md overflow-hidden mb-8 lg:mb-0 ">

          <div className="lg:w-1/2">
            <Slider {...settings}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-96 mb-4 rounded-2xl rounded-t-xl m"
                />
              ))}
            </Slider>

            <div className="flex items-center mt-5 ml-3 justify-center">
              <img src='/images/home_263115.png' alt="logo" className="w-6 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 ml-4 ">{annonce.titre}</h2>
            </div>
            <p className="text-gray-700 mb-4 text-center">{annonce.description}</p>


          </div>

          <div className="lg:w-1/2 lg:pl-8">
            <div className="max-w-full  bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="p-6">
                <div className="flex items-center pl-3 mr-8">
                  <>
                    <img src='/images/businessman_6997519.png' alt="logo" className="w-7" />
                    <span className="inline-block px-2 py-1 text-base font-medium text-gray-950 mr-2 ">Mohamed Reda</span>
                  </>

                  <span className="inline-block font-normal text-gray-400 mb-2 mt-2 ml-auto">{annonce.datepublication}</span>

                </div>
                <div className="flex items-center mb-4 mt-12 ">

                  <div className="flex items-center  pl-3 mr-14">
                    <img src='/images/screen_6675255.png' alt="logo" className="w-7" />
                    <span className="inline-block px-2 py-1 text-lg font-medium text-gray-700 mr-2 ">Categorie : {annonce.categorie}</span>
                  </div>
                  <div className="flex items-center   ">
                    <img src='/images/file_13056167.png ' alt="logo" className="w-7 " />
                    <span className="inline-block px-2 py-1 text-lg font-medium text-gray-700 mr-2">Type : {annonce.typeAnnonce}</span>
                  </div>
                </div>
                <div className="flex items-center mb-4  ">
                  <div className="flex items-center  pl-2 mr-28">
                    <img src='/images/surface_12702004.png' alt="logo" className="w-7" />
                    <span className="inline-block px-2 py-1 text-lg font-medium text-gray-700 mr-2 ">Surface : {annonce.surface} m²</span>
                  </div>
                  <div className="flex items-center  pl-9 ">
                    <img src='/images/stairs_1889028.png' alt="logo" className="w-6" />
                    {annonce.categorie === 'Terrains' ? '' : <span className="inline-block px-2 py-1 text-lg font-medium text-gray-700 mr-2"> Etage : {annonce.etage} </span>}
                  </div>

                </div>
                <div className="flex items-center mb-4  ">
                  <div className="flex items-center  pl-2 mr-32">
                    <img src='/images/bedroom_2642268.png' alt="logo" className="w-7" />
                    <span className="inline-block px-2 py-1 text-lg font-medium text-gray-700 mr-2 ">Chambres : 2</span>
                  </div>
                  <div className="flex items-center  pl-9 ">
                    <img src='/images/bathtub_259973.png' alt="logo" className="w-6" />
                    <span className="inline-block px-2 py-1 text-lg font-medium text-gray-700 mr-2"> Toillettes : 3 </span>
                  </div>

                </div>
                <div className="flex items-center ml-2 ">
                  <img src='/images/placeholder_684908.png' alt="logo" className="w-4 mr-2" />
                  <span className="inline-block font-medium text-blue-700  mb-2 mt-2">{annonce.adresse}</span>
                </div>
                <span className="inline-block font-medium text-gray-500  mb- mt- ml-8">Paris</span>
                <div className="flex justify-between items-center">
                  <p className="flex justify-between items-center text-lg font-semibold w-full h-14 mt-4 shadow-lg border">
                    <span className=" text-cyan-800 px-4">{annonce.prix}</span>
                    <span className="border h-14  bg-stone-200 px-4 pt-3 text-cyan-800">DH</span>
                  </p>
                </div>

              </div>

              <div className="flex items-center justify-between mb-4 ml-3 mt-3">


                <div>
                  <button type="button" className="btn bg-cyan-600 hover:bg-cyan-700 text-white font-bold  ml-4 py-3 px-52 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Message
                  </button>

                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Nouveau Message</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="recipient-name" className="col-form-label">Numero Telephone:</label>
                              <input type="text" className="form-control" id="recipient-name" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="message-text" className="col-form-label">Message:</label>
                              <textarea className="form-control" id="message-text"></textarea>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn bg-cyan-600 hover:bg-cyan-700 text-white">Send message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <FaHeart className="w-10 mr-10" />

              </div>

            </div>
          </div>
        </div>
      </div>
      <ListAnnonce />
      <Footer />
    </div>
  );
};

export default DetailAnnonce;
