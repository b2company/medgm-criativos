import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">MedGM Criativos</h1>
      <div className="flex gap-6">
        <Link
          href="/feed"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-semibold transition"
        >
          Feed (1080x1080)
        </Link>
        <Link
          href="/stories"
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-xl font-semibold transition"
        >
          Stories (1080x1920)
        </Link>
      </div>
      <p className="mt-8 text-gray-400">
        Abra cada página e tire screenshot para usar os criativos
      </p>
    </div>
  );
}
