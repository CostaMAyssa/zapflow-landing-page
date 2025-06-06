import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Users, FileText, BarChart2 } from "lucide-react";
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

// URL base para imagens
const baseUrl = import.meta.env.MODE === 'production' ? '/zapflow-landing-page' : '';

// Imagens do carrossel
const carouselImages = [
  { 
    src: `${baseUrl}/images/screenshot1.png`, 
    alt: "Screenshot da plataforma ZapFlow 1" 
  },
  { 
    src: `${baseUrl}/images/screenshot2.png`, 
    alt: "Screenshot da plataforma ZapFlow 2" 
  },
  { 
    src: `${baseUrl}/images/screenshot3.png`, 
    alt: "Screenshot da plataforma ZapFlow 3" 
  },
  { 
    src: `${baseUrl}/images/screenshot4.png`, 
    alt: "Screenshot da plataforma ZapFlow 4" 
  },
  { 
    src: `${baseUrl}/images/screenshot5.png`, 
    alt: "Screenshot da plataforma ZapFlow 5" 
  },
  { 
    src: `${baseUrl}/images/screenshot6.png`, 
    alt: "Screenshot da plataforma ZapFlow 6" 
  },
  { 
    src: `${baseUrl}/images/screenshot7.png`, 
    alt: "Screenshot da plataforma ZapFlow 7" 
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-zapflow-background text-zapflow-text overflow-x-hidden">
      <div className="bg-zapflow-gradient">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Automatize seu 
                <span className="text-zapflow-primary"> WhatsApp </span> 
                e escalone seu negócio
              </h1>
              <p className="text-xl text-zapflow-textSecondary max-w-2xl mx-auto">
                Disparo em massa, extração de contatos e métricas em tempo real para 
                alavancar suas vendas e atendimentos
              </p>
              <div className="pt-4">
                <Button 
                  className="bg-zapflow-primary hover:bg-zapflow-hover text-black font-medium text-lg px-8 py-6 rounded-xl"
                >
                  Começar agora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades Poderosas</h2>
            <p className="text-zapflow-textSecondary text-lg max-w-2xl mx-auto">
              Tudo que você precisa para automatizar sua comunicação pelo WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard 
              icon={<MessageCircle className="h-8 w-8 text-zapflow-primary" />}
              title="Disparo em Massa" 
              description="Envie mensagens personalizadas para milhares de contatos com alta taxa de entrega e segurança anti-bloqueio."
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-zapflow-primary" />}
              title="Extração de Contatos" 
              description="Capture automaticamente contatos de grupos e organize-os em listas segmentadas para suas campanhas."
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-zapflow-primary" />}
              title="Relatórios Completos" 
              description="Acompanhe métricas de entrega, leitura e resposta em tempo real para otimizar suas estratégias."
            />
            <FeatureCard 
              icon={<BarChart2 className="h-8 w-8 text-zapflow-primary" />}
              title="Integração Webhook" 
              description="Conecte com CRMs, e-commerce e outras plataformas para automação completa do seu funil de vendas."
            />
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja por dentro do ZapFlow</h2>
            <p className="text-zapflow-textSecondary text-lg max-w-2xl mx-auto">
              Conheça a interface intuitiva e as funcionalidades da nossa plataforma
            </p>
          </div>
          
          <div className="w-full max-w-5xl mx-auto px-4">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-zapflow-border bg-[#222222] overflow-hidden">
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8">
                <CarouselPrevious className="relative static mx-2 bg-zapflow-primary text-black hover:bg-zapflow-hover hover:text-black" />
                <CarouselNext className="relative static mx-2 bg-zapflow-primary text-black hover:bg-zapflow-hover hover:text-black" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos para Todos os Negócios</h2>
            <p className="text-zapflow-textSecondary text-lg max-w-2xl mx-auto">
              Escolha a opção ideal para o seu negócio e comece a usar hoje mesmo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Código-Fonte" 
              price="R$ 499"
              features={[
                "Acesso ao código completo",
                "Documentação detalhada",
                "Atualizações por 6 meses",
                "Suporte básico por e-mail"
              ]}
              buttonText="Comprar agora"
              popular={false}
            />
            <PricingCard 
              title="Instalação Padrão" 
              price="R$ 799"
              features={[
                "Instalação em seu servidor",
                "Configuração inicial",
                "Atualizações por 1 ano",
                "Suporte prioritário"
              ]}
              buttonText="Escolher plano"
              popular={true}
            />
            <PricingCard 
              title="Instalação Gerenciada" 
              price="R$ 997"
              features={[
                "Instalação em servidor premium",
                "Configuração personalizada",
                "Atualizações vitalícias",
                "Suporte 24/7 dedicado"
              ]}
              buttonText="Contratar agora"
              popular={false}
            />
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-10 px-4 border-t border-zapflow-border">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-zapflow-textSecondary">
              © 2025 ZapFlow. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
