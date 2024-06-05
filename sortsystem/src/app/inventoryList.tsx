"use client";

import { useState, useEffect } from 'react';
import { Equipment } from './equipment';

const EquipmentList: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [searchManufacturer, setSearchManufacturer] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/equipment.json');
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

  const handleBorrow = (description: string) => {
    setEquipment(prevEquipment => prevEquipment.filter(item => item.Beskrivelse !== description));
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/equipment.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Equipment[] = await response.json();
  
        const filteredData = data.filter((item, index, self) =>
          index === self.findIndex((t) => (
            t.Beskrivelse === item.Beskrivelse
          ))
        );
  
        setEquipment(filteredData);
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
  

  const filteredEquipment = equipment.filter(item =>
    (searchCategory === '' || item.Kategori.toLowerCase().includes(searchCategory.toLowerCase())) &&
    (searchManufacturer === '' || item.Produsent.toLowerCase().includes(searchManufacturer.toLowerCase()))
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"> Utstyrsliste</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="border px-4 py-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Search by Manufacturer"
          value={searchManufacturer}
          onChange={(e) => setSearchManufacturer(e.target.value)}
          className="border px-4 py-2 mb-2 w-full"
        />
      </div>
      <ul>
        {filteredEquipment.map((item) => (
          <li key={item.id} className="bg-white shadow-md rounded p-4 mb-4">
            <p><strong>Produsent:</strong> {item.Produsent}</p>
            <p><strong>Beskrivelse:</strong> {item.Beskrivelse}</p>
            <p><strong>Spesifikasjoner:</strong> {item.Spesifikasjoner}</p>
            <p><strong>Innkjøpspris:</strong> {item.Innkjøpspris}</p>
            <p><strong>Innkjøpsdato:</strong> {item.Innkjøpsdato}</p>
            <p><strong>Kategori:</strong> {item.Kategori}</p>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded w-full mt-2"
              onClick={() => handleBorrow(item.Beskrivelse)}
            >
              Lån
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentList;