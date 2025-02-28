import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="font-sans relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-red-900 to-purple-900 -z-10" />
      
      <header className="sticky top-0 z-100 p-2">
        <NavBar />
      </header>
      <Hero />
      <Footer />
    </main>
  );
}
