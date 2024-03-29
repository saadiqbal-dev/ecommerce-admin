import prismadb from "@/lib/prismadb";

interface DashboarDPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboarDPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>This is a Dashboard!</div>;
};

export default DashboardPage;
