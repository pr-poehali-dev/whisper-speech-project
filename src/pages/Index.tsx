import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import Chapter1Birth from "@/components/Chapter1Birth";
import Chapter2Evacuation from "@/components/Chapter2Evacuation";
import Chapter3GoldenAge from "@/components/Chapter3GoldenAge";
import Chapter4Perestroika from "@/components/Chapter4Perestroika";
import Chapter5Today from "@/components/Chapter5Today";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TableOfContents />
      <Chapter1Birth />
      <Chapter2Evacuation />
      <Chapter3GoldenAge />
      <Chapter4Perestroika />
      <Chapter5Today />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;
