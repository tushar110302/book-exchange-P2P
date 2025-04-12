## Deployed Link
- https://book-exchange-p2-p.vercel.app/
- Deployed the project: Vercel(Frontend), Render(Backend).
- Note- The home page asks for an initial login or signup, but the login page will have prefilled values(for an Owner account) which can be used to access the dashboard easily.

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/tushar110302/book-exchange-P2P.git
cd book-exchange-portal
```

### 2. Create .env files for both, smaples are provided 

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
- A Login button on Dashboard if you want to login with different account or signup
- Seeker will only be able to see login button.
- AI tools: ChatGPT was used to made development and debugging faster, also Windsurf - A VS Code plugin similar to Github Copilot helped writing code faster.

## Bonus Feature
- Owner can also `update/delete` their books. 
- Also mark a book as `Avaolable/Rented`.