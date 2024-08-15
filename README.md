# shopping-website-nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Next steps

1. Get a free postgresql server(like neon or elephant sql) or install postgresql on your pc
2. Create a file named ".env"
3. Write this code in .env:

```.env
DATABASE_URL="<connection string here>"
```

4.
    - If existing database: `npx prisma db pull`, then: `npx prisma generate`
    - If new database: `npx prisma generate`
5. Create a table named products
6. Run `npx prisma db pull`, then: `npx prisma generate`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
