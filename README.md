# IAVANA

Protótipo de landing page para uma marca de estúdio criativo, desenvolvido com Next.js.

**Status do deploy:** a homepage registrada no GitHub retornou 404 em 28/09/2026; por isso a URL não é apresentada como demonstração ativa.

## Estado do projeto

O código atual apresenta um cabeçalho e uma seção inicial com texto, identidade visual e imagens. A seção <code>#services</code> está vazia; os links de Portfolio e Contact no menu ainda não têm seções correspondentes na página. O conteúdo deve ser tratado como protótipo visual, sem assumir que as informações comerciais do texto representam uma empresa verificada.

## Tecnologias e estrutura

Next.js 15, React 19, JavaScript/JSX e Tailwind CSS 4.

~~~text
iavana/
  src/app/page.jsx          página inicial
  src/app/globals.css       estilos
  src/components/Header.jsx navegação
  public/                   logo e imagem da página
  package.json              scripts e dependências
README.md
~~~

## Como executar

É necessário Node.js e npm. Os comandos são executados na subpasta da aplicação:

~~~bash
git clone https://github.com/Rafael-M-Silva/IAVANA.git
cd IAVANA/iavana
npm ci
npm run dev
~~~

Abra [http://localhost:3000](http://localhost:3000). Não há backend, banco de dados ou variáveis de ambiente documentadas no repositório.

## Próximos passos

Completar as seções indicadas no menu, revisar a cópia institucional e testar o layout em diferentes telas antes de apresentar o site como trabalho concluído.

## Autor

**Rafael Mauricio (Bigode)** · [GitHub](https://github.com/Rafael-M-Silva) · [LinkedIn](https://linkedin.com/in/rafael-mauricio-dev/) · [Bigode Ensina](https://bigodeensina.com.br/)
