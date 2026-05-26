export default function Section({ title, intro, children }:{ title: string; intro?: string; children: React.ReactNode; }){
  return (
    <section className="section">
      <div className="container-tight">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          {intro && <p className="text-gray-600 dark:text-gray-300 mt-2">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
