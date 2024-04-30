import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

const Favoris = () => {
    const annonces = useSelector(state => state.annonce.annonces);
    const [favoris, setFavoris] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);


    const indexOfLastItem = currentPage * itemsPerPage;

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = annonces.slice(indexOfFirstItem, indexOfLastItem);


    const handleAddToFavoris = (annonce) => {
        setFavoris([...favoris, annonce]);
    };


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Header />
            {currentItems.map((annonce, index) => (
                <div key={index} className="px-12 py-6 mt-6 -10 flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-lg bg-white lg:backdrop-blur rounded-lg">

                    <img src={annonce.image} alt="Image" className="w-32 h-20 rounded-lg" />

                    <div className="flex mr-[390px] flex-col mt-">
                        <h2 className="text-xl font-semibold text-blue-900">{annonce.titre} </h2>
                        <p className="text-sm text-gray-500 pt-2">{annonce.description}</p>
                        <span className=" py-1 text-sm font-semibold text-gray-700 mr-2">{annonce.typeAnnonce}</span>
                    </div>

                    <button className="text-red-500 hover:text-red-700 focus:outline-none mr-10" onClick={() => handleAddToFavoris(annonce)}>
                        <FaTrash />
                    </button>
                </div>
            ))}

            <div className="flex justify-center mt-4">
                <ul className="flex">
                    {Array.from({ length: Math.ceil(annonces.length / itemsPerPage) }).map((_, index) => (
                        <li key={index}>
                            <button onClick={() => paginate(index + 1)} className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none">
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Favoris;
