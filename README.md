# Portfolio — React + TypeScript + Vite

## Getting started

```bash
npm install
cp .env.example .env   # then edit .env with your Formspree ID
npm run dev
```

## Project structure

```
src/
├── main.tsx                  
├── Portfolio.tsx             
├── constants/
│   └── data.ts               
├── components/
│   ├── Background.tsx        
│   ├── Navbar.tsx            
│   ├── Hero.tsx              
│   ├── Projects.tsx          
│   ├── Skills.tsx            
│   ├── Contact.tsx           
│   └── Footer.tsx            
│   └── ui/
│       └── FadeIn.tsx        
├── hooks/
│   └── useInView.ts          
└── styles/
    └── global.css            
```

## Customize

All your personal data lives in `src/constants/data.ts`:
- Name, title, bio, stats
- Projects list
- Skills list
- Social links

## Contact form

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID (e.g. `xpwzabcd`)
4. Add it to your `.env` file: `VITE_FORMSPREE_ID=xpwzabcd`
