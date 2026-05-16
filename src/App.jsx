import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, CheckCircle2, Droplets, ShieldCheck, ShoppingBag, Sparkles, Star, Store } from 'lucide-react';

const storeLinks = {
  trendyol: 'https://ty.gl/0u1zryidb16d0',
  pazarama: 'https://www.pazarama.com/magaza/ecos-kozmetik',
  n11: 'https://www.n11.com/magaza/ecoskozmetik',
  instagram: 'https://www.instagram.com/tr.elysia?igsh=cml0dnN3aGN5Mjk1',
};

const marketLogos = {
  trendyol: '/assets/logos/trendyol.png',
  pazarama: '/assets/logos/pazarrama-yeni.png',
  n11: '/assets/logos/n11-seffaf.png',
};

const products = [
  {
    name: 'Aqua Kiss', slug: 'aqua-kiss', tone: 'Ferah & temiz', color: '#2384b6', mood: 'Temiz su ferahlığı',
    productImage: '/assets/bottles/aquakiss-sise.webp', moodBg: '/assets/premium/aquakiss-background.webp',
    desc: 'Canlı, temiz ve ferah hissiyle gün içinde tazelenmek isteyenler için modern bir koku karakteri.',
    notes: ['Sulu meyveler', 'Ferah çiçek hissi', 'Temiz misk'],
    ingredients: 'Alcohol Denat., Water (Aqua, Eau), Fragrance (Parfum), Propylene Glycol, Glycerin, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Ethylhexyl Methoxycinnamate, Ethylhexyl Salicylate, Butyl Methoxydibenzylmethane, Hydroxycitronellal, Benzyl Salicylate, Limonene, Citronellol, Linalool, Citral',
    links: {
      trendyol:'https://www.trendyol.com/elysia/aqua-kiss-vucut-spreyi-250-ml-8-4-fl-oz-p-1016688947?boutiqueId=61&merchantId=365328',
      n11:'https://www.n11.com/urun/elysia-aqua-kiss-vucut-spreyi-250-ml-105934021?magaza=ecoskozmetik',
      pazarama:'https://www.pazarama.com/elysia-aqua-kiss-vucut-spreyi-250-ml84-fl-oz-p-8681734000362?magaza=ecos-kozmetik'
    }
  },
  {
    name: 'Bare Vanilla', slug: 'bare-vanilla', tone: 'Sıcak & vanilyamsı', color: '#b78339', mood: 'Krem vanilya sıcaklığı',
    productImage: '/assets/bottles/bare-sise.webp', moodBg: '/assets/premium/bare-background.webp',
    desc: 'Sıcak vanilya karakteriyle yumuşak, tatlı ve konforlu bir kullanım hissi sunar.',
    notes: ['Vanilya dokunuşu', 'Yumuşak misk', 'Sıcak amber hissi'],
    ingredients: 'Alcohol Denat, Water, Fragrance Parfum, Propylene Glycol, Glycerin, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Ethylhexyl Methoxycinnamate, Limonene, Linalool, Benzyl Alcohol',
    links: {
      trendyol:'https://www.trendyol.com/elysia/bare-vanilla-p-1016679901?boutiqueId=61&merchantId=365328',
      n11:'https://www.n11.com/urun/elysia-bare-vanilla-vucut-spreyi-250-ml-105931079?magaza=ecoskozmetik',
      pazarama:'https://www.pazarama.com/elysia-bare-vanilla-vucut-spreyi-250-ml84-fl-oz-p-8681734000331?magaza=ecos-kozmetik'
    }
  },
  {
    name: 'Midnight', slug: 'midnight', tone: 'Derin & etkileyici', color: '#5a3371', mood: 'Gece moru derinlik',
    productImage: '/assets/bottles/midnight-sise.webp', moodBg: '/assets/premium/midnight-background.webp',
    desc: 'Geceye yakışan daha yoğun, gizemli ve etkileyici bir koku atmosferi.',
    notes: ['Koyu meyveler', 'Menekşe & yasemin', 'Amber & sıcak misk'],
    ingredients: 'Alcohol Denat, Water (Aqua, Eau), Fragrance (Parfum), Propylene Glycol, Glycerin, Chamomilla Recutita (Matricaria) Flower Extract, PPG-26-Buteth-26, Aloe Barbadensis Leaf Extract, PEG-40 Hydrogenated Castor Oil, Ethylhexyl Methoxycinnamate, Ethylhexyl Salicylate, Butyl Methoxydibenzylmethane, Limonene, Linalool, Citronellol, Hexyl Cinnamal, Ext. Violet 2 (CI 60730), Green 3 (CI 42053)',
    links: {
      trendyol:'https://www.trendyol.com/elysia/midnight-vucut-spreyi-250-ml-8-4-fl-oz-p-1016681049?boutiqueId=61&merchantId=365328',
      n11:'https://www.n11.com/urun/elysia-midnight-vucut-spreyi-250-ml-105932139?magaza=ecoskozmetik',
      pazarama:'https://www.pazarama.com/elysia-midnight-vucut-spreyi-250-ml84-fl-oz-p-8681734000348?magaza=ecos-kozmetik'
    }
  },
  {
    name: 'Bomshell', slug: 'bomshell', tone: 'Canlı & dikkat çekici', color: '#c7255a', mood: 'Enerjik pembe imza',
    productImage: '/assets/bottles/bomshell-sise.webp', moodBg: '/assets/premium/velvetpetals-background.webp',
    desc: 'Meyvemsi-çiçeksi yapısıyla enerjik, modern ve özgüvenli bir koku karakteri.',
    notes: ['Narenciye ferahlığı', 'Çiçek buketi', 'Tatlı misk'],
    ingredients: 'Alcohol Denat, Water (Aqua, Eau), Fragrance (Parfum), Propylene Glycol, Glycerin, Chamomilla Recutita (Matricaria) Flower Extract, PPG-26-Buteth-26, Aloe Barbadensis Leaf Extract, PEG-40 Hydrogenated Castor Oil, Ethylhexyl Methoxycinnamate, Ethylhexyl Salicylate, Butyl Methoxydibenzylmethane, Linalool, Geraniol, Hydroxycitronellal, Citral, Citronellol',
    links: {
      trendyol:'https://www.trendyol.com/elysia/bomshell-vucut-spreyi-250-ml-8-4-fl-oz-p-1016682527?boutiqueId=61&merchantId=365328',
      n11:'https://www.n11.com/urun/elysia-bomshell-vucut-spreyi-250-ml-105932701?magaza=ecoskozmetik',
      pazarama:'https://www.pazarama.com/elysia-bomshell-vucut-spreyi-250-ml84-fl-oz-p-8681734000386?magaza=ecos-kozmetik'
    }
  },
  {
    name: 'Velvet Petals', slug: 'velvet-petals', tone: 'Romantik & çiçeksi', color: '#c54970', mood: 'Soft pembe çiçek dokusu',
    productImage: '/assets/bottles/velvetpetals-sise.webp', moodBg: '/assets/premium/velvetpetals-background.webp',
    desc: 'Kadifemsi çiçek hissi ve zarif dokusuyla günlük kullanıma uygun feminen bir koku deneyimi.',
    notes: ['Meyvemsi açılış', 'Kadifemsi çiçekler', 'Kremsi yumuşaklık'],
    ingredients: 'Alcohol Denat, Water (Aqua, Eau), Fragrance (Parfum), Propylene Glycol, Glycerin, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Ethylhexyl Methoxycinnamate, Ethylhexyl Salicylate, Butyl Methoxydibenzylmethane, Coumarin',
    links: {
      trendyol:'https://www.trendyol.com/elysia/velvet-petals-vucut-spreyi-250-ml-8-4-fl-oz-p-1016680607?boutiqueId=61&merchantId=365328',
      n11:'https://www.n11.com/urun/elysia-velvet-petals-vucut-spreyi-250-ml-105931661?magaza=ecoskozmetik',
      pazarama:'https://www.pazarama.com/elysia-velvet-petals-vucut-spreyi-250-ml84-fl-oz-p-8681734000355?magaza=ecos-kozmetik'
    }
  },
  {
    name: 'Rush', slug: 'rush', tone: 'Dinamik & enerjik', color: '#245a95', mood: 'Canlı mavi enerji',
    productImage: '/assets/bottles/rush-sise.webp', moodBg: '/assets/premium/aquakiss-background.webp',
    desc: 'Taze, canlı ve hareketli hissiyle gün içinde enerjini yenilemek için ideal.',
    notes: ['Meyvemsi ferahlık', 'Yumuşak çiçekler', 'Amber & misk'],
    ingredients: 'Alcohol Denat, Water (Aqua, Eau), Fragrance (Parfum), Propylene Glycol, Glycerin, Chamomilla Recutita (Matricaria) Flower Extract, PPG-26-Buteth-26, Aloe Barbadensis Leaf Extract, PEG-40 Hydrogenated Castor Oil, Ethylhexyl Methoxycinnamate, Ethylhexyl Salicylate, Butyl Methoxydibenzylmethane, Linalool, Benzyl Salicylate, Hexyl Cinnamal, Alpha-Isomethyl Ionone, Citronellol, Geraniol, Coumarin, Ext. Violet 2 (CI 60730)',
    links: {
      trendyol:'https://www.trendyol.com/elysia/rush-vucut-spreyi-250-ml-8-4-fl-oz-p-1016685113?boutiqueId=61&merchantId=365328',
      n11:'https://www.n11.com/urun/elysia-rush-vucut-spreyi-250-ml-105933212?magaza=ecoskozmetik',
      pazarama:'https://www.pazarama.com/elysia-rush-vucut-spreyi-250-ml84-fl-oz-p-8681734000379?magaza=ecos-kozmetik'
    }
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function ProductCard({ product, index }) {
  return (
    <motion.article
      id={product.slug}
      className="product-card"
      style={{ '--accent': product.color, '--mood-bg': `url(${product.moodBg})` }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, delay: index * 0.035 }}
    >
      <div className="product-stage">
        <span className="mood-label">{product.mood}</span>
        <img src="/assets/premium/SoftOvalShadow.webp" className="product-shadow" alt="" loading="lazy" />
        <img src={product.productImage} className="product-bottle" alt={`${product.name} vücut spreyi`} loading="lazy" />
      </div>
      <div className="product-info">
        <span className="pill">{product.tone}</span>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="notes" aria-label={`${product.name} koku notaları`}>
          <div><b>Üst</b><span>{product.notes[0]}</span></div>
          <div><b>Orta</b><span>{product.notes[1]}</span></div>
          <div><b>Alt</b><span>{product.notes[2]}</span></div>
        </div>
        <details className="ingredients"><summary>İçerik listesini görüntüle</summary><p>{product.ingredients}</p></details>
        <div className="buy-row" aria-label={`${product.name} satın alma bağlantıları`}>
          <a href={product.links.trendyol} target="_blank" rel="noreferrer"><img src={marketLogos.trendyol} alt="Trendyol" /></a>
          <a href={product.links.pazarama} target="_blank" rel="noreferrer" className="pazarama-buy"><img src={marketLogos.pazarama} alt="Pazarama" /></a>
          <a href={product.links.n11} target="_blank" rel="noreferrer"><img src={marketLogos.n11} alt="N11" /></a>
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  return (
    <main>
      <div className="site-texture" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Elysia ana sayfa">
          <img src="/assets/logos/elysia-logo-transparent.png" alt="Elysia" />
        </a>
        <nav aria-label="Ana menü">
          <a href="#urunler">Koleksiyon</a>
          <a href="#deneyim">Deneyim</a>
          <a href="#magazalar">Satış Kanalları</a>
          <a href={storeLinks.instagram} target="_blank" rel="noreferrer"><Camera size={15} /> Instagram</a>
        </nav>
      </header>

      <section id="top" className="hero-v2">
        <div className="hero-bg" aria-hidden="true" />
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <span className="eyebrow"><Sparkles size={16} /> Elysia Fragrance Mist</span>
          <h1>Kokunu keşfet,<br />tarzını hisset.</h1>
          <p>Ferah, sıcak, çiçeksi ve etkileyici karakterleriyle günlük bakım rutinine zarif bir imza bırak.</p>
          <div className="hero-actions">
            <a className="primary" href="#urunler">Koleksiyonu İncele <ArrowRight size={18} /></a>
            <a className="secondary" href={storeLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </motion.div>
      </section>

      <section className="trust" aria-label="Elysia güven alanı">
        <motion.div {...fadeUp}><ShieldCheck /><b>Özenli ürün seçimi</b><span>Günlük kullanıma uygun modern koku karakterleri.</span></motion.div>
        <motion.div {...fadeUp}><Droplets /><b>Hafif ve ferah kullanım</b><span>Vücut spreyi formuyla tazelenmiş bir his sunar.</span></motion.div>
        <motion.div {...fadeUp}><ShoppingBag /><b>Satış kanalları hazır</b><span>Trendyol, Pazarama ve N11 üzerinden güvenli alışveriş.</span></motion.div>
      </section>

      <section id="urunler" className="section products-section">
        <motion.div className="section-title" {...fadeUp}>
          <span><Star size={15} /> Koleksiyon</span>
          <h2>Her ana eşlik eden altı farklı koku karakteri.</h2>
          <p>Şişeler artık beyaz kart içinde değil; her ürün kendi atmosferi, soft glow katmanı ve arka plansız gerçek ürün görseliyle sunulur.</p>
        </motion.div>
        <div className="products-grid">
          {products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
        </div>
      </section>

      <section id="deneyim" className="section ritual-section">
        <motion.div className="ritual-card" {...fadeUp}>
          <div>
            <span className="eyebrow dark"><Sparkles size={16} /> Elysia deneyimi</span>
            <h2>Günlük rutini daha zarif hale getiren küçük bir dokunuş.</h2>
          </div>
          <div className="ritual-list">
            <article><CheckCircle2 /><b>Duş sonrası tazelik</b><span>Temiz cilde uygulandığında koku daha dengeli hissedilir.</span></article>
            <article><CheckCircle2 /><b>Gün içinde yenileme</b><span>Çantada taşınabilir, hafif ve pratik kullanım sunar.</span></article>
            <article><CheckCircle2 /><b>Kıyafet öncesi mesafe</b><span>Yaklaşık 15-20 cm mesafeden uygulamak idealdir.</span></article>
            <article><CheckCircle2 /><b>Koku katmanlama</b><span>Benzer karakterde losyonlarla daha yumuşak bir iz bırakır.</span></article>
          </div>
        </motion.div>
      </section>

      <section id="magazalar" className="section store-section">
        <motion.div className="store-card" {...fadeUp}>
          <div>
            <span className="eyebrow dark"><Store size={16} /> Satış kanalları</span>
            <h2>Elysia ürünlerine kolayca ulaş.</h2>
            <p>Ürünleri seçili pazaryeri mağazalarımız üzerinden inceleyebilir ve güvenli şekilde sipariş verebilirsin.</p>
          </div>
          <div className="store-links">
            <a href={storeLinks.trendyol} target="_blank" rel="noreferrer"><img src={marketLogos.trendyol} alt="Trendyol" /><span>Mağazayı Aç</span></a>
            <a href={storeLinks.pazarama} target="_blank" rel="noreferrer" className="pazarama-store"><img src={marketLogos.pazarama} alt="Pazarama" /><span>Mağazayı Aç</span></a>
            <a href={storeLinks.n11} target="_blank" rel="noreferrer"><img src={marketLogos.n11} alt="N11" /><span>Mağazayı Aç</span></a>
          </div>
        </motion.div>
      </section>

      <footer>
        <div className="footer-brand">ELYSIA</div>
        <div className="footer-links"><a href="#urunler">Koleksiyon</a><a href="#deneyim">Deneyim</a><a href="#magazalar">Satış Kanalları</a></div>
        <p>© 2026 Elysia. Modern koku deneyimi.</p>
      </footer>
    </main>
  );
}

export default App;
