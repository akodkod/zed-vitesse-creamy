import { useState } from 'react';

// Vitesse Light Soft — syntax and contrast preview
interface Plant {
  id: number;
  name: string;
  healthy: boolean;
}

const initialPlants: Plant[] = [
  { id: 1, name: 'Rosemary', healthy: true },
  { id: 2, name: 'Lavender', healthy: false },
];

export function Garden({ title = 'My garden' }: { title?: string }) {
  const [plants, setPlants] = useState(initialPlants);
  const count = plants.filter((plant) => plant.healthy).length;

  return (
    <section aria-label={title}>
      <h1>{title}</h1>
      <p>{`${count} healthy plants`}</p>
      <button onClick={() => setPlants([])}>Clear plants</button>
    </section>
  );
}
