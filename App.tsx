import React, { useState, useCallback } from 'react';
import { generateImage } from './services/geminiService';

// Reusable CTA Button Component
interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, className = '', href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block text-center bg-brand-primary text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out ${className}`}
  >
    {children}
  </a>
);

// Reusable Section Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}
const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`py-12 md:py-20 ${className}`}>
    <div className="container mx-auto px-6 max-w-4xl">
      {children}
    </div>
  </section>
);


// Reusable Icon components
const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const BookOpenIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);


const App: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('A beautiful painting of a couple reconnecting under the stars');
    const [generatedImage, setGeneratedImage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateImage = useCallback(async () => {
        if (!prompt) {
            setError('Por favor, insira um prompt para gerar a imagem.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedImage('');
        try {
            const imageUrl = await generateImage(prompt);
            setGeneratedImage(imageUrl);
        } catch (err) {
            setError('Falha ao gerar a imagem. Por favor, tente novamente.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    const purchaseUrl = 'https://pay.kiwify.com.br/VlgSzA7';


  return (
    <div className="bg-brand-light font-sans text-brand-text">
      
      {/* Hero Section */}
      <header className="bg-brand-secondary text-center py-20 md:py-32 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')"}}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            O Segredo Que Faz Casais Se Reconectarem de Verdade
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Descubra o método psicológico e emocional usado pelos casais que conseguem voltar e reconstruir algo ainda mais forte.
          </p>
          <CTAButton href={purchaseUrl}>Quero Aprender o Segredo Agora</CTAButton>
        </div>
      </header>

      <main>
        {/* Problem Section */}
        <Section id="problema" className="bg-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">Você sente que está perdendo quem mais ama?</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            O distanciamento, a falta de comunicação, as brigas constantes... Tudo isso vai minando o relacionamento até que ele parece desmoronar. O arrependimento e a dor são imensos, mas há uma saída.
          </p>
          <div className="text-center bg-brand-secondary p-6 rounded-lg">
            <p className="text-xl font-bold text-brand-primary">Você não precisa perder quem ama. Existe um caminho real para reconquistar.</p>
          </div>
        </Section>

        {/* Solution Section */}
        <Section id="solucao" className="bg-brand-light">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">A Solução: Os Segredos dos Casais que Voltam</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Este é um método 100% digital, simples e direto, baseado em psicologia emocional. São estratégias de comunicação, reconexão e comportamento que você pode aplicar hoje mesmo.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Como reabrir o canal emocional e ser ouvido de verdade.</span></li>
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Como fazer a outra pessoa sentir sua falta de maneira natural.</span></li>
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Como reconstruir a confiança, mesmo que ela pareça perdida.</span></li>
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Como parar as atitudes que afastam e começar a atrair.</span></li>
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Como criar uma conexão profunda e duradoura.</span></li>
            </ul>
          </div>
          <div className="text-center mt-12">
            <CTAButton href={purchaseUrl}>Quero Acessar Agora</CTAButton>
          </div>
        </Section>
        
        {/* Benefits Section */}
        <Section id="beneficios" className="bg-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">O que você ganha ao aplicar o método</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-brand-light p-6 rounded-lg">Recupera a conexão emocional perdida.</div>
                <div className="bg-brand-light p-6 rounded-lg">Entende o que realmente afasta um parceiro.</div>
                <div className="bg-brand-light p-6 rounded-lg">Começa a agir do jeito que aproxima e atrai.</div>
                <div className="bg-brand-light p-6 rounded-lg">Aumenta drasticamente sua chance de reconciliação.</div>
                <div className="bg-brand-light p-6 rounded-lg">Resgata sua autoestima e segurança.</div>
                <div className="bg-brand-light p-6 rounded-lg">Aprende como conversar sem brigar.</div>
            </div>
        </Section>

        {/* How It Works Section */}
        <Section id="como-funciona" className="bg-brand-light text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Acesso Imediato e Simples</h2>
            <p className="text-lg mb-8">Assim que o pagamento for confirmado, você recebe o acesso ao ebook digital no seu e-mail. Pode ler no telemóvel, tablet ou computador, quando e onde quiser.</p>
            <img src="https://picsum.photos/id/10/800/400" alt="Pessoa lendo no celular" className="rounded-lg shadow-lg mx-auto" />
        </Section>
        
        {/* Testimonials Section */}
        <Section id="depoimentos" className="bg-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Histórias de Reconciliação</h2>
            <div className="space-y-8">
                <div className="bg-brand-light p-6 rounded-lg shadow-sm">
                    <p className="italic">"Eu achei que nunca mais ia voltar com meu marido… Depois de aplicar os segredos, ele me chamou pra conversar e hoje estamos melhores do que antes."</p>
                    <p className="font-bold text-right mt-2">- Mariana D.</p>
                </div>
                <div className="bg-brand-light p-6 rounded-lg shadow-sm">
                    <p className="italic">"Aprendi a não cometer os erros que estavam destruindo meu relacionamento. Simples e direto ao ponto."</p>
                    <p className="font-bold text-right mt-2">- Rafael M.</p>
                </div>
                <div className="bg-brand-light p-6 rounded-lg shadow-sm">
                    <p className="italic">"Esse ebook mudou tudo. Parece que a gente se reconectou em um nível que eu não achava mais possível."</p>
                    <p className="font-bold text-right mt-2">- Beatriz L.</p>
                </div>
            </div>
        </Section>

        {/* Content Section */}
        <Section id="conteudo" className="bg-brand-light">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">O Que Você Vai Encontrar Dentro</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm"><BookOpenIcon /> <span className="font-bold">Capítulo 1:</span> O erro silencioso que afasta qualquer pessoa</div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm"><BookOpenIcon /> <span className="font-bold">Capítulo 2:</span> Como reacender a conexão emocional</div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm"><BookOpenIcon /> <span className="font-bold">Capítulo 3:</span> Técnica da comunicação restauradora</div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm"><BookOpenIcon /> <span className="font-bold">Capítulo 4:</span> Como trazer a outra pessoa para perto novamente</div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm"><BookOpenIcon /> <span className="font-bold">Capítulo 5:</span> Como manter o relacionamento vivo depois da reconciliação</div>
            </div>
        </Section>

        {/* Guarantee Section */}
        <Section id="garantia" className="bg-white text-center">
             <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg">
                <p className="font-bold text-xl">Nossa Garantia de Qualidade</p>
                <p>Você recebe material imediato, claro, direto e prático. Criado para realmente ajudar quem quer reconquistar o amor de verdade.</p>
            </div>
        </Section>
        
        {/* Price & Offer Section */}
        <Section id="oferta" className="bg-brand-secondary">
            <div className="text-center">
                <p className="text-lg">Oferta especial por tempo limitado</p>
                <h2 className="text-5xl md:text-7xl font-bold text-brand-primary my-4">R$ 49,90</h2>
                <p className="text-lg mb-8">Acesso vitalício ao método completo.</p>
                <CTAButton href={purchaseUrl} className="transform scale-110">Quero Garantir Minha Cópia Agora</CTAButton>
            </div>
        </Section>

         {/* Image Generator Section */}
        <Section id="image-generator" className="bg-gray-800 text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">Bônus: Crie uma Imagem do Seu Futuro</h2>
          <p className="text-lg text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Use nossa ferramenta de IA para visualizar um momento feliz. Digite uma descrição e gere uma imagem única.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: um casal feliz na praia ao pôr do sol"
                className="flex-grow p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button
                onClick={handleGenerateImage}
                disabled={isLoading}
                className="bg-brand-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Gerando...' : 'Gerar Imagem'}
              </button>
            </div>
            {error && <p className="text-red-400 text-center mb-4">{error}</p>}
            {isLoading && (
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto"></div>
                <p className="mt-4">Criando sua imagem... Isso pode levar um momento.</p>
              </div>
            )}
            {generatedImage && (
              <div className="mt-8 bg-gray-900 p-4 rounded-lg">
                <img src={generatedImage} alt="Imagem gerada por IA" className="rounded-lg mx-auto shadow-2xl" />
              </div>
            )}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-text text-white text-center py-8">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Os Segredos dos Casais que Voltam. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400 mt-4">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.</p>
          <p className="mt-2 text-sm">Contato para suporte: suporte@segredosdecasais.com</p>
        </div>
      </footer>
    </div>
  );
};

export default App;