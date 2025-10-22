import useDrawings from './useDrawings';

export default async function DrawingsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

  const drawings = await useDrawings();

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-semibold text-center mb-10 text-gray-100">
          Lista de dibujos
        </h1>

        {drawings.length === 0 ? (
          <p className="text-center text-gray-400">No hay dibujos disponibles ¡Podrias ser el primero!</p>
        ) : (
          <ul className="grid grid-cols-3 gap-8">
            {drawings.map((draw, index) => (
              <li
                key={draw.id || index}
                className="border border-neutral-800 rounded-xl p-4 bg-neutral-950 hover:bg-neutral-800 transition flex flex-col items-center"
              >
                <img
                  src={draw.data || '/placeholder.webp'}
                  alt={`Drawing by ${draw.author || 'Anónimo'}`}
                  className="w-full h-60 object-contain rounded-md bg-neutral-800 mb-4"
                />
                <p className="font-medium text-gray-100 text-center">
                  {draw.author || 'Anónimo'}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  {(draw.tags || []).join(', ')}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
