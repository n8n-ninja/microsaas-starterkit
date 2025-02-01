# Instruction

## Project description

The project is a page about the future of coding with AI.

Based on those instructions, we will create a modular page.
We will create elegant components (located in /components/) that are reusable. The props are clearely documented.

## Technical stack

React v19
Nextjs v15
Tailwind v2.6
Shadcn

### Technical disclaimer

Warning, important : the command to invoke shadcn is:
`npx shadcn@latest`
And not
`npx shadcn-ui@latest`
Make sure to never use the wrong command.

### Project structure

root
├── .next/
├── app/
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── documentation/
│ └── instruction.md
├── lib/
│ └── utils.ts
├── node_modules/
├── public/
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ └── window.svg
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
