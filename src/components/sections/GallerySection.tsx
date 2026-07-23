'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Sparkles, Eye } from 'lucide-react';
import { INITIAL_GALLERY } from '@/lib/seedData';

interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export default function GallerySection() {
  const [gallery, setGallery] = useState<GalleryItem[]>(
    INITIAL_GALLERY.map((item, idx) => ({ ...item, _id: 'gal-' + idx }))
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalImage, setModalImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setGallery(data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const categories = ['All', 'Events', 'Projects', 'Coding', 'Placements', 'Industrial Visits', 'Hackathons'];

  const filteredItems = selectedCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" /> Department Memories & Milestones
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            CAMPUS <span className="text-gradient">GALLERY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A visual showcase of AI & DS hackathons, workshops, industrial visits, and student celebrations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-neon-cyan scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setModalImage(item)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group cursor-pointer hover:border-cyan-500/50 hover:shadow-neon-blue transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white font-display pt-1">{item.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2">{item.caption}</p>
              </div>

              <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Preview Lightbox Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setModalImage(null)}
          >
            <div
              className="max-w-4xl w-full rounded-3xl bg-slate-900 border border-cyan-500/40 p-4 space-y-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden max-h-[70vh]">
                <img
                  src={modalImage.imageUrl}
                  alt={modalImage.title}
                  className="w-full h-full object-contain mx-auto"
                />
              </div>

              <div className="p-2 space-y-1">
                <span className="text-xs font-mono text-cyan-400 font-semibold">{modalImage.category}</span>
                <h3 className="text-xl font-black text-white font-display">{modalImage.title}</h3>
                <p className="text-sm text-slate-300">{modalImage.caption}</p>
              </div>

              <button
                onClick={() => setModalImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white border border-slate-700"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
