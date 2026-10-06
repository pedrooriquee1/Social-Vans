# Social Vans — Landing Page

Página estática (HTML + CSS + JS puro). Basta abrir `index.html` no navegador ou publicar a pasta em qualquer hospedagem (Netlify, Vercel, GitHub Pages).

## Ajustes rápidos

- **Número do WhatsApp:** em `script.js`, altere `const WHATSAPP = '5500000000000'` (DDI + DDD + número, só dígitos). Todos os botões com `data-wa` usam esse número e já levam uma mensagem pronta.
- **Cores:** em `styles.css`, bloco `:root` (tokens `--green-*`, `--lime-*`).
- **Fotos:** salve em `assets/img/` e, no elemento com a classe `ph`, adicione
  `style="background-image:url('assets/img/sua-foto.jpg')"`. O rótulo do placeholder some automaticamente.
  Fotos usadas: hero (fundo), 3 fotos na seção "Você cuida das viagens" e o fundo da chamada final.
- **Logo:** o logo do header/rodapé é provisório (texto). Salve o arquivo oficial em `assets/img/` para substituir.
