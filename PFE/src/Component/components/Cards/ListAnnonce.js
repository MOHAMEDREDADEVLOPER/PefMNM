import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AnnonceCard from './AnnonceCard';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import { FaFacebook , FaTwitter , FaInstagram , FaArrowRight , FaLinkedin , FaEnvelope , FaPhone  } from 'react-icons/fa';

export default function ListAnnonce() {
  
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchAnnonces = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/annonce');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des annonces');
        }
        const data = await response.json();
        setAnnonces(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAnnonces();
  }, []);


useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/categorie');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des catégories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
    }
  };

  fetchCategories();
}, []);

useEffect(() => {
  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/image/${id_annonce}');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des images');
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des images:', error);
    }
  };

  fetchImages();
}, []);
console.log(images)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between mt-8 ">
        {/* Titre */}
        <h1 className="text-xl font-extralight ml-20  ">consultez nos nouvelles <br /> <h2 className="text-2xl font-semibold pt-2 pb-2 text-gray-700"> Propriétés Récemment Répertoriées</h2></h1>
        <Link to="/proprietes" className="text-blue-600 hover:underline mr-20">
        <div className="relative">
      <button className="bg-cyan-700 mt-12 text-gray-800 rounded-full w-10 h-10 flex justify-center items-center text-xl absolute right-1 top-1/2 transform -translate-y-1/2"><FaArrowRight className="w-5 h-5 text-white" /></button>
  </div>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-1">
        {annonces && annonces.map(annonce => (
          <AnnonceCard key={annonce.id} annonce={annonce} categories={categories} images={images} />
        ))}
      </div>
    </div>
  );
}
