# Vault - Modern Banking Web Application

[![Next.js](https://img.shields.io/badge/Next.js-14.2.29-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)

**Vault** is a comprehensive, modern banking web application built with Next.js that provides users with a complete digital banking experience. The application integrates with multiple financial service providers to offer real-time account management, transaction tracking, and secure money transfers.

## 🚀 Features

### Core Banking Features
- **Multi-Bank Account Management**: Connect and manage multiple bank accounts from different institutions
- **Real-Time Balance Tracking**: View current and available balances across all connected accounts
- **Transaction History**: Comprehensive transaction tracking with categorization and search capabilities
- **Money Transfers**: Secure peer-to-peer payments and bank transfers via Dwolla integration
- **Account Aggregation**: Unified dashboard displaying all financial information

### Security & Authentication
- **Secure Authentication**: Email/password authentication with session management
- **Bank-Level Security**: Plaid integration for secure bank connection and data encryption
- **Session Management**: HTTP-only cookies with secure, SameSite strict configuration
- **Error Monitoring**: Integrated Sentry for real-time error tracking and monitoring

### User Experience
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-Time Updates**: Live balance updates and transaction notifications
- **Interactive Charts**: Visual representation of spending patterns and account balances
- **Modern UI Components**: Built with Radix UI components for accessibility and consistency

## 🏗️ Architecture

### Technology Stack

#### Frontend
- **Framework**: Next.js 14.2.29 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.1 with custom configurations
- **UI Components**: Radix UI primitives with custom styling
- **Charts**: Chart.js with React Chart.js 2 for data visualization
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library

#### Backend & Services
- **Database**: Appwrite (Backend-as-a-Service)
- **Banking API**: Plaid for bank account connectivity and transaction data
- **Payment Processing**: Dwolla for ACH transfers and payment processing
- **Authentication**: Appwrite Authentication with custom session management
- **Monitoring**: Sentry for error tracking and performance monitoring

#### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Bundling**: Next.js built-in bundler with optimizations
- **Package Manager**: npm with lock file for dependency management

### Project Structure

```
vault/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/             # Sign-in page
│   │   └── sign-up/             # Sign-up page
│   ├── (root)/                   # Protected routes
│   │   ├── my-banks/            # Bank accounts management
│   │   ├── payment-transfer/    # Money transfer interface
│   │   ├── transaction-history/ # Transaction history view
│   │   └── page.tsx            # Dashboard home page
│   └── layout.tsx              # Root layout with providers
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components (Radix)
│   ├── HeaderBox.tsx           # Page headers component
│   ├── Sidebar.tsx             # Navigation sidebar
│   ├── TotalBalanceBox.tsx     # Balance display component
│   ├── RecentTransactions.tsx  # Transaction list component
│   ├── PaymentTransferForm.tsx # Transfer form component
│   └── ...                     # Additional components
├── lib/                         # Utility libraries and actions
│   ├── actions/                # Server actions
│   │   ├── user.actions.ts     # User management actions
│   │   ├── bank.actions.ts     # Banking operations
│   │   ├── transaction.actions.ts # Transaction operations
│   │   └── dwolla.actions.ts   # Payment processing
│   ├── appwrite.ts             # Appwrite client configuration
│   ├── plaid.ts                # Plaid client configuration
│   └── utils.ts                # Utility functions
├── constants/                   # Application constants
├── types/                       # TypeScript type definitions
└── public/                      # Static assets
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- Git for version control

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_APPWRITE_KEY=your_appwrite_api_key
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_USER_COLLECTION_ID=your_user_collection_id
APPWRITE_BANK_COLLECTION_ID=your_bank_collection_id
APPWRITE_TRANSACTION_COLLECTION_ID=your_transaction_collection_id

# Plaid Configuration
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret_key

# Dwolla Configuration
DWOLLA_ENV=sandbox  # or 'production'
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret

# Sentry Configuration (Optional)
NEXT_PUBLIC_SENTRY_ENABLED=true
SENTRY_DSN=your_sentry_dsn
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual configuration values
   ```

4. **Set up Appwrite Database**
   - Create an Appwrite project
   - Set up the required collections (users, banks, transactions)
   - Configure authentication settings

5. **Configure Plaid**
   - Create a Plaid developer account
   - Obtain client ID and secret key
   - Configure webhook endpoints (if needed)

6. **Configure Dwolla**
   - Create a Dwolla developer account
   - Set up sandbox or production environment
   - Obtain API keys and configure webhooks

7. **Run the development server**
   ```bash
   npm run dev
   ```

8. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔗 API Integration

### Plaid Integration
The application uses Plaid for secure bank account connectivity:
- **Account Linking**: Users can securely connect their bank accounts
- **Transaction Data**: Real-time transaction history and categorization
- **Balance Information**: Current and available balance retrieval
- **Institution Data**: Bank and financial institution information

### Dwolla Integration
Dwolla handles payment processing and money transfers:
- **ACH Transfers**: Bank-to-bank transfers via ACH network
- **Customer Management**: Dwolla customer profile creation and management
- **Funding Sources**: Bank account verification and funding source creation
- **Transfer Monitoring**: Real-time transfer status and webhook handling

### Appwrite Backend
Appwrite serves as the primary backend service:
- **User Authentication**: Secure user registration and login
- **Database Management**: User profiles, bank accounts, and transaction storage
- **Session Management**: Secure session handling with HTTP-only cookies
- **Real-time Updates**: WebSocket connections for live data updates

## 🔒 Security Features

### Data Protection
- **Encryption**: All sensitive data encrypted in transit and at rest
- **Tokenization**: Bank account information tokenized via Plaid
- **Secure Headers**: CSP, HSTS, and other security headers implemented
- **Input Validation**: Server-side validation using Zod schemas

### Authentication & Authorization
- **Secure Sessions**: HTTP-only, secure, SameSite strict cookies
- **Password Security**: Secure password hashing and validation
- **API Security**: Server-side API routes with authentication middleware
- **CSRF Protection**: Built-in CSRF protection via Next.js

### Compliance
- **PCI Compliance**: Payment processing handled by PCI-compliant providers
- **Bank-Level Security**: Plaid's bank-grade security for account connectivity
- **Privacy Protection**: Minimal data collection with user consent

## 📊 Features Overview

### Dashboard
- **Account Summary**: Overview of all connected bank accounts
- **Recent Transactions**: Latest transaction activity across accounts
- **Balance Visualization**: Charts and graphs showing account balances
- **Quick Actions**: Fast access to common banking operations

### Transaction Management
- **Transaction History**: Searchable and filterable transaction list
- **Categorization**: Automatic transaction categorization
- **Export Functionality**: Export transaction data in various formats
- **Real-time Updates**: Live transaction feed with notifications

### Money Transfers
- **Bank Transfers**: Transfer money between connected accounts
- **External Transfers**: Send money to external bank accounts
- **Transfer History**: Track all incoming and outgoing transfers
- **Status Monitoring**: Real-time transfer status updates

### Account Management
- **Multi-Bank Support**: Connect accounts from multiple institutions
- **Account Verification**: Secure account verification process
- **Balance Monitoring**: Real-time balance tracking and alerts
- **Account Settings**: Manage account preferences and settings

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment-Specific Configuration
- **Development**: Uses Plaid sandbox environment
- **Staging**: Pre-production testing environment
- **Production**: Live environment with production APIs

### Recommended Deployment Platforms
- **Vercel**: Optimal for Next.js applications with edge functions
- **Netlify**: Alternative platform with good Next.js support
- **AWS**: Full control with EC2 or containerized deployment
- **Docker**: Containerized deployment for any cloud provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Write unit tests for new features
- Update documentation for API changes
- Ensure mobile responsiveness

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Documentation**: Check the inline code documentation
- **Issues**: Report bugs via GitHub Issues
- **Security**: Report security issues privately to the maintainers

---

**Disclaimer**: This application handles sensitive financial data. Ensure proper security measures are in place before deploying to production. Always follow financial industry best practices and compliance requirements.
