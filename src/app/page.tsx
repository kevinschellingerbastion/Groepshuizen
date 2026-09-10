import { prisma } from "@/lib/prisma";

export default async function Home() {
  const count = await prisma.amenity.count();

  return (
    <main>
      <h1>groepshuizen.nl</h1>
      <p>Aantal faciliteiten: {count}</p>
    </main>
  );
}