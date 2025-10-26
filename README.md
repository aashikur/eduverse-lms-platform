# 🌐 Eduverse — Next.js Full-Stack LMS Platform

[![GitHub stars](https://img.shields.io/github/stars/aashikur/eduverse-lms-platform?style=social)](https://github.com/aashikur/eduverse-lms-platform/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/aashikur/eduverse-lms-platform?style=social)](https://github.com/aashikur/eduverse-lms-platform/network/members)

> A premium Learning Management System (LMS) designed for modern education — built with **Next.js 14**, **TypeScript**, **Prisma**, **PostgreSQL**, and **TailwindCSS**.

Eduverse delivers a seamless digital learning experience with:
- 🎓 Course creation & management
- 🧑‍🏫 Role-based dashboards for instructors and students
- 🔐 Secure authentication & session management
- 📊 Real-time progress tracking
- 💻 Beautiful responsive UI (ShadCN + TailwindCSS)
- 🚀 Production-ready deployment on Vercel + NeonDB

---

## ⭐ Show Your Support

If you find Eduverse useful or interesting, please consider giving it a star! ⭐

**Why star this project?**
- 🎯 Help others discover this modern LMS solution
- 💪 Support open-source education technology
- 📈 Encourage active development and new features
- 🌟 Show appreciation for quality EdTech tools

[⭐ **Star this repository**](https://github.com/aashikur/eduverse-lms-platform) | [🍴 **Fork it**](https://github.com/aashikur/eduverse-lms-platform/fork) | [🐛 **Report Issues**](https://github.com/aashikur/eduverse-lms-platform/issues)

---

## ✨ Features

### For Instructors
- Create and manage courses with rich content
- Upload course materials and resources
- Track student progress and engagement
- Grade assignments and provide feedback
- Manage enrollments and permissions

### For Students
- Browse and enroll in available courses
- Access course materials and resources
- Track learning progress
- Submit assignments
- View grades and feedback

### Technical Features
- **Modern Stack**: Next.js 14 App Router, TypeScript, Prisma ORM
- **Database**: PostgreSQL with NeonDB serverless support
- **Authentication**: Secure session-based auth
- **UI/UX**: Beautiful responsive design with TailwindCSS and ShadCN components
- **Deployment**: Optimized for Vercel with edge functions
- **Type Safety**: Full TypeScript coverage for reliability

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (or NeonDB account)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aashikur/eduverse-lms-platform.git
cd eduverse-lms-platform
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Update `.env.local` with your database credentials:
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Run database migrations**
```bash
npx prisma migrate dev
```

5. **Start the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see your LMS in action!

---

## 📚 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) + [Prisma ORM](https://www.prisma.io/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + [ShadCN UI](https://ui.shadcn.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com/) + [NeonDB](https://neon.tech/)

---

## 🤝 Contributing

Contributions are welcome! Whether it's bug fixes, feature additions, or documentation improvements, your help makes Eduverse better.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Repository**: [github.com/aashikur/eduverse-lms-platform](https://github.com/aashikur/eduverse-lms-platform)

If you have questions or suggestions, feel free to open an issue!

---

### 🌟 Don't forget to star this repo if you find it helpful!

Your star helps the project grow and reach more developers and educators. Thank you for your support! ⭐
