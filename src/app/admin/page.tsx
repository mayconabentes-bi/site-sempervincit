"use client";

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { 
  Plus, 
  Pencil, 
  Trash2, 
  ExternalLink, 
  LayoutDashboard, 
  FileText, 
  LogOut, 
  Image as ImageIcon,
  Loader2,
  Check
} from "lucide-react"
import { toast } from "sonner";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  published: boolean;
  created_at: string;
  tags: string[];
}

const AdminDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Infraestrutura",
    cover_image: "",
    tags: ""
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin/login");
      } else {
        setSession(session);
        fetchArticles();
      }
    });
  }, [router]);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error: any) {
      toast.error("Erro ao carregar artigos: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      cover_image: article.cover_image,
      tags: article.tags.join(", ")
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este artigo?")) return;

    try {
      const { error } = await supabase.from("articles").delete().eq("id", id);
      if (error) throw error;
      toast.success("Artigo excluído com sucesso!");
      fetchArticles();
    } catch (error: any) {
      toast.error("Erro ao excluir: " + error.message);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `covers/${fileName}`;

    try {
      setLoading(true);
      const { error: uploadError } = await supabase.storage
        .from('article-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('article-images')
        .getPublicUrl(filePath);

      setFormData({ ...formData, cover_image: publicUrl });
      toast.success("Imagem enviada com sucesso!");
    } catch (error: any) {
      toast.error("Erro no upload: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const articleData = {
      title: formData.title,
      slug: formData.slug || formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      cover_image: formData.cover_image,
      tags: formData.tags.split(",").map(t => t.trim()).filter(t => t !== ""),
      published: true
    };

    try {
      if (editingArticle) {
        const { error } = await supabase
          .from("articles")
          .update(articleData)
          .eq("id", editingArticle.id);
        if (error) throw error;
        toast.success("Artigo atualizado!");
      } else {
        const { error } = await supabase
          .from("articles")
          .insert([articleData]);
        if (error) throw error;
        toast.success("Artigo criado com sucesso!");
      }
      
      setIsDialogOpen(false);
      resetForm();
      fetchArticles();
    } catch (error: any) {
      toast.error("Erro ao salvar: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEditingArticle(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "Infraestrutura",
      cover_image: "",
      tags: ""
    });
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <LayoutDashboard className="text-primary" /> Painel de Controle
            </h1>
            <p className="text-muted-foreground">Gerencie os Insights e Conteúdos da Semper Vincit</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) resetForm();
            }}>
              <DialogTrigger asChild>
                <Button className="rounded-xl shadow-md hover:shadow-lg transition-all gap-2">
                  <Plus size={20} /> Novo Artigo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingArticle ? "Editar Artigo" : "Criar Novo Insight"}</DialogTitle>
                  <DialogDescription>
                    Preencha os campos abaixo para publicar um novo conteúdo técnico.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6 py-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Título do Artigo</Label>
                        <Input 
                          id="title" 
                          value={formData.title} 
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          placeholder="Ex: Resiliência Tropical em TI"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="category">Categoria</Label>
                        <select 
                          id="category"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                        >
                          <option value="Infraestrutura">Infraestrutura</option>
                          <option value="Segurança">Segurança</option>
                          <option value="Conectividade">Conectividade</option>
                          <option value="Sustentabilidade">Sustentabilidade</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                        <Input 
                          id="tags" 
                          value={formData.tags}
                          onChange={(e) => setFormData({...formData, tags: e.target.value})}
                          placeholder="PIM, Manaus, Fibra"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Imagem de Capa</Label>
                        <div className="flex flex-col gap-4">
                          {formData.cover_image && (
                            <img 
                              src={formData.cover_image} 
                              alt="Preview" 
                              className="w-full h-32 object-cover rounded-lg border border-border" 
                            />
                          )}
                          <div className="flex gap-2">
                            <Input 
                              type="file" 
                              accept="image/*" 
                              onChange={handleFileUpload}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Resumo (Excerpt)</Label>
                    <Textarea 
                      id="excerpt" 
                      value={formData.excerpt}
                      onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                      placeholder="Um breve resumo do que o leitor encontrará..."
                      className="h-20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Conteúdo do Artigo (HTML permitido)</Label>
                    <Textarea 
                      id="content" 
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      placeholder="Escreva seu artigo aqui..."
                      className="min-h-[300px] font-mono"
                      required
                    />
                  </div>

                  <DialogFooter>
                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Check className="mr-2" />}
                      {editingArticle ? "Salvar Alterações" : "Publicar Artigo"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Button variant="outline" className="gap-2 rounded-xl" onClick={handleLogout}>
              <LogOut size={18} /> Sair
            </Button>
          </div>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="bg-white p-1 rounded-xl border border-border mb-6">
            <TabsTrigger value="articles" className="rounded-lg gap-2">
              <FileText size={16} /> Artigos Publicados
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow>
                    <TableHead className="w-[100px]">Imagem</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-20">
                        <Loader2 className="animate-spin mx-auto text-primary" size={32} />
                        <p className="mt-2 text-muted-foreground">Carregando seus artigos...</p>
                      </TableCell>
                    </TableRow>
                  ) : articles.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-20 text-muted-foreground">
                        Nenhum artigo encontrado. Crie seu primeiro post!
                      </TableCell>
                    </TableRow>
                  ) : (
                    articles.map((article) => (
                      <TableRow key={article.id} className="hover:bg-slate-50/50 transition-colors">
                        <TableCell>
                          <img src={article.cover_image} alt="" className="w-12 h-12 object-cover rounded-lg border border-border" />
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            <span>{article.title}</span>
                            <span className="text-xs text-muted-foreground font-mono">/{article.slug}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none">
                            {article.category}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {new Date(article.created_at).toLocaleDateString('pt-BR')}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" onClick={() => handleEdit(article)}>
                              <Pencil size={16} />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(article.id)}>
                              <Trash2 size={16} />
                            </Button>
                            <a href={`/insights/${article.slug}`} target="_blank" rel="noreferrer">
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-600 hover:text-slate-700 hover:bg-slate-50">
                                <ExternalLink size={16} />
                              </Button>
                            </a>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
