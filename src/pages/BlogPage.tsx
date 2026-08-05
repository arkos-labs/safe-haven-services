import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link, useRouter } from '@/context/RouterContext';
import { Reveal } from '@/components/Reveal';
import { blogPosts } from '@/data/products';
import { useSEO } from '@/hooks/useSEO';

export function BlogPage() {
  const { navigate } = useRouter();

  useSEO({
    title: "Le Journal — Conseils, science & rituels beauté | NOVAE",
    description: "Tout savoir sur la Red Light Therapy, les bienfaits cliniques de la lumière rouge et nos conseils de rituels de soin du visage.",
  });

  return (
    <div className="container-luxe section-padding py-16">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-or text-sm font-semibold uppercase tracking-widest mb-3">Le Journal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Conseils, science & rituels beauté
          </h1>
          <p className="text-gris-clair">
            Tout savoir sur la Red Light Therapy, nos rituels et les secrets d'une peau éclatante.
          </p>
          <div className="divider-gold mx-auto mt-6" />
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <Reveal key={post.id} delay={i * 100}>
            <article
              className="glass-card overflow-hidden group cursor-pointer h-full flex flex-col"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-gris-fonce mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl font-semibold mb-3 group-hover:text-or transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gris-clair leading-relaxed flex-1">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-or text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                  Lire l'article <ArrowRight size={16} />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function BlogArticlePage({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const post = blogPosts.find((p) => p.slug === slug);

  useSEO({
    title: post ? `${post.title} | Le Journal NOVAE` : "Article introuvable | Le Journal NOVAE",
    description: post ? post.excerpt : "Lisez nos articles sur la santé et la beauté de la peau.",
  });

  if (!post) {
    return (
      <div className="container-luxe section-padding py-32 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Article introuvable</h1>
        <Link to="/blog" className="btn-gold">Retour au blog</Link>
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug);

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/40 to-noir" />
      </div>

      <article className="container-luxe section-padding py-12 max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-3 text-sm text-gris-fonce mb-4">
            <button onClick={() => navigate('/blog')} className="hover:text-or transition-colors">Blog</button>
            <span>/</span>
            <span className="text-gris-clair">{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-balance leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gris-clair leading-relaxed mb-8 font-display italic">{post.excerpt}</p>
        </Reveal>

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <Reveal key={i} delay={i * 50}>
              <p className="text-gris-clair leading-relaxed text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="glass-card p-8 text-center mt-12 border-or/20">
            <h3 className="font-display text-2xl font-semibold mb-3">Envie d'essayer ?</h3>
            <p className="text-gris-clair mb-6">Découvrez le Masque LED NOVAE Pro et transformez votre peau.</p>
            <Link to="/produit/masque-led-red-light-therapy" className="btn-gold-lg">
              Découvrir le masque <ArrowRight size={20} />
            </Link>
          </div>
        </Reveal>
      </article>

      {/* Other articles */}
      {otherPosts.length > 0 && (
        <section className="bg-noir-2 py-16">
          <div className="container-luxe section-padding">
            <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-2">
              <BookOpen size={24} className="text-or" /> À lire aussi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <article
                  key={p.id}
                  className="glass-card overflow-hidden group cursor-pointer flex"
                  onClick={() => navigate(`/blog/${p.slug}`)}
                >
                  <img src={p.image} alt={p.title} className="w-32 h-32 object-cover shrink-0" />
                  <div className="p-5 flex flex-col justify-center">
                    <span className="text-xs text-gris-fonce mb-1">{p.date} · {p.readTime}</span>
                    <h3 className="font-display font-semibold group-hover:text-or transition-colors">{p.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
