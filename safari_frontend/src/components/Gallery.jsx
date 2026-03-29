import { useEffect, useState } from 'react';
import { getImages, getVideos } from '../services/api';

export default function Gallery() {
  const [images, setImages]     = useState([]);
  const [videos, setVideos]     = useState([]);
  const [active, setActive]     = useState('images');
  const [selected, setSelected] = useState(null);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    Promise.all([getImages(), getVideos()]).then(([imgRes, vidRes]) => {
      setImages(imgRes.data);
      setVideos(vidRes.data);
      setLoading(false);
    });
  }, []);

  const items = active === 'images' ? images : videos;

  return (
    <section className="min-h-screen bg-safari-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-5xl text-white text-center mb-4">
          Safari <span className="text-safari-gold">Gallery</span>
        </h2>
        <p className="font-body text-white/50 text-center mb-12">
          Moments captured in the wild
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['images', 'videos'].map(tab => (
            <button key={tab}
              onClick={() => setActive(tab)}
              className={`px-8 py-3 rounded-full font-body font-semibold capitalize transition-all
                ${active === tab
                  ? 'bg-safari-gold text-safari-dark'
                  : 'border border-safari-gold/40 text-white/60 hover:border-safari-gold hover:text-white'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="text-center text-white/50 py-20">Loading...</div>
        ) : items.length === 0 ? (
          <div className="text-center text-white/30 py-20">
            No {active} uploaded yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(item => (
              <div key={item.id}
                onClick={() => setSelected(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10
                           hover:border-safari-gold/50 transition-all duration-300 hover:scale-[1.02]">
                {item.type === 'IMAGE' ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={item.fileUrl} alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/80 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 font-heading text-white text-xl">{item.title}</p>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] bg-black/50 flex items-center justify-center">
                    <video src={item.fileUrl} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-16 h-16 rounded-full bg-safari-gold/90 flex items-center justify-center">
                        <span className="text-2xl ml-1">▶</span>
                      </div>
                    </div>
                    <p className="absolute bottom-4 left-4 font-heading text-white text-xl">{item.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}>
          <button className="absolute top-6 right-8 text-white/60 hover:text-white text-4xl">✕</button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            {selected.type === 'IMAGE'
              ? <img src={selected.fileUrl} alt={selected.title} className="w-full rounded-xl" />
              : <video src={selected.fileUrl} controls className="w-full rounded-xl" autoPlay />
            }
            <h3 className="font-heading text-white text-2xl mt-4">{selected.title}</h3>
            <p className="font-body text-white/50 mt-1">{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}