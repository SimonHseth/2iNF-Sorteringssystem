"use client";

import { useState, useEffect } from 'react';
import { Equipment } from '../equipment';

const EquipmentList: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../equipment.json');
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Utstyrsliste</h1>
      <ul>
        {equipment.map((item) => (
          <li key={item.Produsent} className="bg-white shadow-md rounded p-4 mb-4">
            <p><strong>Navn:</strong> {item.beskrivelse}</p>
            <p><strong>Beskrivelse:</strong> {item.spesifikasjoner}</p>
            <p><strong>spesifikasjoner:</strong> {item.innkjøpsdato}</p>
            <p><strong>innkjøpspris:</strong> {item.innkjøpspris}</p>
            <p><strong>Kategori:</strong> {item.Kategori}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
console.log(EquipmentList)

export default EquipmentList;
