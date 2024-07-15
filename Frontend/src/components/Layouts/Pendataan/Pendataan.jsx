import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Pendataan(props) {
  const {children} = props;
  return (
    <section className="flex bg-200">
      <aside>
        <Sidebar />
      </aside>
      <section className="min-h-screen w-full flex flex-col">
        <header>
          <Header />
        </header>
        <span className="text-lg md:mx-4 px-2 md:pt-2"></span>
        <main className="flex-1 flex flex-col gap-y-3 md:mx-4 px-2 rounded-lg bg-50">
          {children}
        </main>
      </section>
    </section>
  );
}
