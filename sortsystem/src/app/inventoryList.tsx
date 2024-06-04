"use client";

import { useState, useEffect } from 'react';
import { Equipment } from './equipment';


const EquipmentList: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [borrower, setBorrower] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [searchManufacturer, setSearchManufacturer] = useState<string>('');
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/equipment.json'); // Path to the JSON file
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Equipment[] = await response.json();
        setEquipment(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    
  }, []);

  const handleBorrow = (id: number) => {
    if (!borrower) {
      alert('Please log in to borrow equipment');
      return;
    }
    setEquipment((prevEquipment) =>
      prevEquipment.map((item) =>
        item.id === id ? { ...item, borrower, status: 'Lånt ut' } : item
      )
    );
  };

  const filteredEquipment = equipment.filter(item => {
    return (
      (searchCategory ? item.Kategori.toLowerCase().includes(searchCategory.toLowerCase()) : true) &&
      (searchManufacturer ? item.Produsent.toLowerCase().includes(searchManufacturer.toLowerCase()) : true)
    );
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Utstyrsliste</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Søk etter kategori"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="border px-4 py-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Søk etter produsent"
          value={searchManufacturer}
          onChange={(e) => setSearchManufacturer(e.target.value)}
          className="border px-4 py-2 mb-4 w-full"
        />
      </div>
      <ul>
        {filteredEquipment.map((item) => (
          <li key={item.id} className="bg-white shadow-md rounded p-4 mb-4">
            <p><strong>Navn:</strong> {item.Produsent}</p>
            <p><strong>Status:</strong> {item.Beskrivelse}</p>
            <p><strong>Bruker:</strong> {item.Spesifikasjoner}</p>
            <p><strong>Pris:</strong> {item.Innkjøpspris}</p>
            <p><strong>Alder:</strong> {item.Innkjøpsdato} år</p>
            <p><strong>Kategori:</strong> {item.Kategori}</p>
            <p><strong>Produsent:</strong> {item.Forventet_levetid}</p>
            {item.status === 'Available' ? (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleBorrow(item.id)}
              >
                Lån ut
              </button>
            ) : (
              <p><strong>Utlånt til:</strong> {item.borrower}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentList;
