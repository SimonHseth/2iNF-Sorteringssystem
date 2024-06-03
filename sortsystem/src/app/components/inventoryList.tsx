"use client";

import { useState, useEffect } from 'react';
import { Equipment } from '../equipment';

const EquipmentList: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [borrower, setBorrower] = useState<string>('');
  

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
  

  const handleBorrow = (id: number) => {
    if (!borrower) {
      alert('Please enter your name');
      return;
    }
    setEquipment((prevEquipment) =>
      prevEquipment.map((item) =>
        item.id === id ? { ...item, borrower, status: 'Lånt ut' } : item
      )
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Utstyrsliste</h1>
      <ul>
        {equipment.map((item) => (
          <li key={item.Produsent} className="bg-white shadow-md rounded p-4 mb-4">
            <p><strong>Produsent:</strong> {item.Produsent}</p>
            <p><strong>Beskrivelse:</strong> {item.Beskrivelse}</p>
            <p><strong>Spesifikasjoner:</strong> {item.Spesifikasjoner}</p>
            <p><strong>Innkjøpsdato:</strong> {item.Innkjøpsdato}</p>
            <p><strong>Innkjøpspris:</strong> {item.Innkjøpspris}</p>
            <p><strong>Kategori:</strong> {item.Kategori}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

console.log(EquipmentList)
export default EquipmentList;
