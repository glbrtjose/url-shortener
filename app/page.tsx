import CreateUrl from "@/components/CreateUrl/CreateUrl";
import Navbar from "@/components/Navbar/Navbar";
import PageContainer from "@/components/PageContainer/PageContainer";
import Table from "@/components/table/table";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <h1 className="text-lg">Create a new short url</h1>
        <div className="mb-4">
          <CreateUrl />
        </div>
        <Table />
      </PageContainer>
    </>
  );
}
