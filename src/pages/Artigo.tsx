import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Share2, Tag, ChevronRight, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { insights as staticInsights } from "@/data/insights";

const Artigo = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [dynamicPost, setDynamicPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) throw error;
        
        if (data) {
          setDynamicPost({
            id: data.id,
            slug: data.slug,
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            coverImage: data.cover_image,
            date: new Date(data.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
            readTime: data.read_time || "5 min",
            category: data.category,
            author: {
              name: data.author_name,
              role: data.author_role,
              avatar: data.author_avatar || `https://ui-avatars.com/api/?name=${data.author_name}&background=023B59&color=fff`
            },
            tags: data.tags || []
          });
        }
      } catch (error) {
        console.warn("Artigo não encontrado no Supabase ou erro na busca:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Fallback para o post estático se não houver dinâmico
  const staticPost = staticInsights.find(p => p.slug === slug);
  const post = dynamicPost || staticPost;

  // Se o post não for encontrado (após carregar), redireciona pro 404/insights
  useEffect(() => {
    if (!isLoading && !post) {
      navigate('/insights');
    }
  }, [post, navigate, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${post.title} | Insights Semper Vincit`}
        description={post.excerpt}
        ogType="article"
        ogImage={post.coverImage}
        canonicalUrl={`https://www.sempervincit.com.br/insights/${post.slug}`}
        keywords={post.tags?.join(", ")}
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "image": post.coverImage,
          "author": {
            "@type": "Person",
            "name": post.author.name
          },
          "publisher": {
            "@type": "Organization",
            "name": "Semper Vincit",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.sempervincit.com.br/logo.png"
            }
          },
          "datePublished": new Date().toISOString(), // Fallback dynamically if date isn't ISO
          "description": post.excerpt
        })}
      />
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Article Header */}
        <div className="container mx-auto px-4 max-w-4xl mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground truncate">{post.title}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 text-sm">
              {post.category}
            </Badge>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between py-6 border-y border-border">
            <div className="flex items-center gap-4">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full border-2 border-primary/20"
              />
              <div>
                <p className="font-bold text-foreground">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
            
            <Button variant="outline" size="icon" className="rounded-full rounded-icon text-muted-foreground hover:text-primary" title="Compartilhar">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Article Featured Image */}
        <div className="container mx-auto px-4 max-w-5xl mb-16">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[600px]">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Post Content using typography plugin classes directly if not available, falling back to standard styling */}
          <article 
            className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-secondary prose-blockquote:border-l-secondary prose-blockquote:bg-muted/50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-foreground prose-li:text-muted-foreground max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-16 pt-8 border-t border-border">
            <span className="text-sm font-bold text-foreground mr-2">Tópicos:</span>
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="px-3 py-1 font-medium bg-secondary/10 text-secondary hover:bg-secondary/20 border-none flex items-center gap-1.5">
                <Tag className="w-3 h-3" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-primary text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Sua infraestrutura está preparada para a Amazônia?</h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Não arrisque paralisações na sua operação. Fale com um engenheiro da Semper Vincit e descubra como blindar seu parque tecnológico.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-xl px-8 h-14" asChild>
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Li%20o%20artigo%20sobre%20Resili%C3%AAncia%20Tropical%20e%20gostaria%20de%20falar%20com%20um%20consultor." target="_blank" rel="noopener noreferrer">
                  Falar com Engenheiro de Campo
                </a>
              </Button>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-16 text-center">
            <Button variant="ghost" asChild className="hover:bg-transparent hover:text-secondary group">
              <Link to="/insights" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Voltar para Insights
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Artigo;
