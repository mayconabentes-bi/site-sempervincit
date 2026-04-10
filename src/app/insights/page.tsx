import type { Metadata } from 'next';
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react"
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { insights as staticInsights } from "@/data/insights";

export const metadata: Metadata = {
  title: 'Insights e Tecnologia | Semper Vincit Blog',
  description: 'Nossa expertise de engenharia de campo documentada. Artigos, teses e inovações sobre infraestrutura de TI no Polo Industrial de Manaus.',
  openGraph: {
    title: 'Blog Semper Vincit | Tecnologia e Engenharia',
    description: 'Artigos técnicos sobre CFTV, Redes e Conectividade no Amazonas.',
    images: ['/og-insights.jpg'],
  },
};

async function getInsights() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  try {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (error) throw error;
    
    if (data && data.length > 0) {
      return data.map(item => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        coverImage: item.cover_image,
        date: new Date(item.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
        readTime: item.read_time || "5 min",
        category: item.category,
        author: {
          name: item.author_name,
          role: item.author_role,
          avatar: item.author_avatar || `https://ui-avatars.com/api/?name=${item.author_name}&background=023B59&color=fff`
        },
        tags: item.tags || []
      }));
    }
  } catch (error) {
    console.error("Erro ao carregar insights do Supabase:", error);
  }
  return staticInsights;
}

export default async function Page() {
  const currentInsights = await getInsights();
  
  // O primeiro artigo é o destaque
  const featuredPost = currentInsights[0];
  const regularPosts = currentInsights.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="Insights e Tecnologia"
          subtitle="Inteligência Aplicada à Região Norte"
          description="Nossa expertise de engenharia de campo documentada. Artigos, teses e inovações sobre infraestrutura de TI no Polo Industrial de Manaus."
          badge="Blog / Artigos Técnicos"
        />

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-px bg-secondary" />
                  <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Artigo em Destaque</span>
                </div>
                
                <Link href={`/insights/${featuredPost.slug}`} className="group block">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                      <img 
                        src={featuredPost.coverImage} 
                        alt={featuredPost.title} 
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6">
                        <Badge className="bg-primary/80 backdrop-blur hover:bg-primary text-white border-none">
                          {featuredPost.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.date}</span>
                        <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> {featuredPost.readTime}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-secondary transition-colors duration-300">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-lg mb-8 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-10 h-10 rounded-full border border-border" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">{featuredPost.author.name}</p>
                            <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                          <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Grid of Regular Posts */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Últimas Publicações</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Link key={post.id} href={`/insights/${post.slug}`} className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/80 backdrop-blur text-foreground border-border uppercase text-[10px] tracking-wider">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h4>
                      
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground font-medium">
                            {post.tags[0]}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-secondary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Ler mais <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 md:max-w-xl">
                <h3 className="text-3xl font-bold mb-4">Receba nossos Insights</h3>
                <p className="text-white/80 text-lg">
                  Assine para receber conteúdo exclusivo sobre engenharia de TI, inovações e cases do Distrito Industrial.
                </p>
              </div>
              
              <div className="relative z-10 w-full md:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Seu e-mail corporativo" 
                    className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary focus:bg-white/20 transition-all min-w-[300px]"
                  />
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white h-[58px] px-8 rounded-xl">
                    Assinar
                  </Button>
                </div>
                <p className="text-xs text-white/50 mt-3 text-center md:text-left">Sem spam. Apenas conteúdo técnico de alto nível.</p>
              </div>
            </div>
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
