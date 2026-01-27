import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-secondary mb-8">Our Services</h1>
          <p className="text-lg text-muted">
            This is the services page. Content to be added.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}