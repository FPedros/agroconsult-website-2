/**
 * Configuração de Personalização dos Cards de Produtos
 * 
 * Este arquivo centraliza todas as customizações visuais dos cards de produtos.
 * Você pode modificar as classes Tailwind e cores para alterar a aparência dos cards.
 */

export const ProductCardCustomization = {
  /**
   * Estilos do Card Principal (ProductCard)
   * Usado para cards com hover interativo
   */
  main: {
    container: "border-brand-green/30 bg-brand-light/40 shadow-panel ring-1 ring-brand-green/10",
    body: "bg-white/95",
    disableHover: true,
  },

  /**
   * Estilos dos Bullets (Pontos de Lista)
   */
  bullets: {
    container: "space-y-2 text-base text-slate-700",
    item: "flex items-start gap-2",
    dot: "mt-2 h-1.5 w-1.5 rounded-full bg-brand-green",
  },

  /**
   * Estilos da Informação "Para Quem É"
   */
  audience: {
    container: "text-sm text-brand-gray",
    label: "font-semibold uppercase tracking-[0.16em] text-brand-gray",
    value: "font-semibold text-brand-navy",
  },

  /**
   * Estilos do Item de Consultoria (ConsultoriaListItem)
   * Usado para listas expansíveis
   */
  consultoriaItem: {
    container: "border-l-4 border-brand-green bg-white rounded-r-lg overflow-hidden transition-all hover:shadow-md",
    button: "w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 hover:bg-slate-50",
    numberBadge: "flex-shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-white text-xs font-bold",
    title: "font-bold text-brand-navy text-sm sm:text-base line-clamp-2",
    tagline: "text-xs sm:text-sm text-slate-700 line-clamp-2",
    chevron: "flex-shrink-0 transition-transform",
    content: "px-4 py-3 sm:px-5 sm:py-4 border-t border-brand-green/20 bg-white",
  },

  /**
   * Estilos do Conteúdo Expandido
   */
  expandedContent: {
    bulletsList: "space-y-2 mb-3",
    bulletItem: "flex items-start gap-2 text-xs sm:text-sm text-slate-700",
    bulletDot: "mt-1.5 h-1 w-1 rounded-full bg-brand-green flex-shrink-0",
    audienceLabel: "text-xs text-brand-gray",
    audienceLabelBold: "font-semibold",
  },

  /**
   * Cores e Gradientes
   */
  colors: {
    primary: "#008747", // Verde da marca
    secondary: "#202956", // Azul-marinho
    accent: "#1a445f", // Azul intermediário
    light: "#e8f3ed", // Verde claro
    gray: "#575756", // Cinza
    navy: "#202956", // Azul-marinho
  },

  /**
   * Dica de Personalização:
   * Para alterar a aparência:
   * 
   * 1. Cores: Modifique os valores em colors{}
   * 2. Espaçamento: Ajuste os valores de padding (p-), margin (m-), gap-
   * 3. Bordas: Modifique border-brand-green para outra cor
   * 4. Sombras: Altere shadow-panel para outras opções (shadow-lg, shadow-xl, etc)
   * 5. Texto: Mude text-slate-700 para outras cores de texto
   * 
   * Claro: Mais transparência (bg-white/95 = 95% opaco, bg-white/80 = 80% opaco)
   * Escuro: Menos transparência
   */
} as const;

export type ProductCardCustomizationType = typeof ProductCardCustomization;
