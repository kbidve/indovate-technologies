import Image from 'next/image';

const WORKS = [
  { title: 'Modern SaaS Landing', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
  { title: 'E‑commerce UI', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Healthcare App', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Interior Studio', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop' },
];

export default function Portfolio(){
  return (
    <div id="work">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Selected work</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Hand‑picked projects that show our range.</p>
        </div>
        <a href="/contact" className="hidden sm:inline-block px-4 py-2 rounded-xl border border-gray-300">Work with us</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORKS.map(w => (
          <figure key={w.title} className="group card overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={w.img} alt={w.title} fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <figcaption className="p-4 font-medium">{w.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
