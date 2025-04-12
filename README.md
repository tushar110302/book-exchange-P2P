## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/tushar110302/book-exchange-P2P.git
cd book-exchange-portal
```

### 2. Create .env files for both, smaples are added 

### 3. Install backend dependencies & start the server
```bash
cd backend && npm install
npm run dev
```

### 4. Install frontend dependencies & start the client
```bash
cd frontend && npm install
npm run dev
```

## What's working
- Basic user signup (Owner & Seeker) and login based on email & password.
- Once loggen in both Owner & Seeker view the dashboard of all the books.
- Owners get option to add Books, view their listed books. 

## Bonus Feature
- Owner can also `update/delete` their books. 
- Also mark a book as `Avaolable/Rented`.
- Deployed the project: Vercel(Frontend), Render(Backend)