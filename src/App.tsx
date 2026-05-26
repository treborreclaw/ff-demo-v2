/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Warning Banner */}
      <div className="bg-white py-2 px-6 border-b-2 border-ff-teal/10 text-center text-[11px] md:text-[12px]">
        IMPORTANT INFORMATION: Be aware of Fraud and Scammers -{" "}
        <a href="#" className="underline font-semibold">Find out more</a>.{" "}
        Late repayment can cause you serious money problems. For independent help, please go to{" "}
        <a href="#" className="underline font-semibold">www.moneyhelper.org.uk</a>.
      </div>

      {/* Navigation */}
      <header className="px-6 py-4 md:px-12 flex justify-between items-center max-w-[1240px] mx-auto">
        <div className="flex items-center gap-10">
          <img 
            src="https://fairfinance.org.uk/wp-content/uploads/2025/01/logo.svg" 
            alt="Fair Finance" 
            className="h-10 md:h-14"
          />
          <nav className="hidden lg:flex gap-6 text-[17px] font-semibold">
            <a href="#" className="hover:text-ff-blue transition-colors">Loans</a>
            <a href="#" className="hover:text-ff-blue transition-colors">Social Impact</a>
            <a href="#" className="hover:text-ff-blue transition-colors">Advice</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="ff-btn-blue text-[14px!important] h-[26px] hidden sm:flex">Apply now</a>
          <div className="lg:hidden p-2 text-ff-teal">
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="0" y1="2" x2="30" y2="2" />
              <line x1="0" y1="10" x2="30" y2="10" />
              <line x1="0" y1="18" x2="30" y2="18" />
            </svg>
          </div>
        </div>
      </header>

      <main>
        {/* Loans for Bad Credit Section */}
        <section className="bg-ff-bg-beige py-16 md:py-24">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-campfire text-[36px] md:text-[47px] leading-tight mb-2">
                Loans for Bad Credit
              </h2>
              <div className="space-y-4 text-[14px] md:text-[18px] leading-relaxed max-w-lg">
                <p>
                  Finding loans for bad credit can be challenging, especially if you have a low credit score or a history of missed payments, and it can feel difficult to access affordable borrowing. At Fair Finance, we look beyond your credit score and focus on what you can realistically afford to repay.
                </p>
                <p>
                  We offer loans for bad credit from <strong>£400 to £1000</strong> with clear terms and no hidden fees. We are committed to responsible lending so every application is assessed on its own merit, helping you find an option that works for your situation.
                </p>
              </div>
              <div className="pt-4">
                <a href="#" className="ff-btn-blue">
                  Learn more about our loan for bad credit
                </a>
              </div>
            </div>
            
            {/* Visual Box Asset */}
            <div className="relative">
              <div className="ff-border bg-white p-8 space-y-6 shadow-[6px_6px_0px_#313129]">
                 <div className="flex gap-4 items-center border-b border-ff-teal/10 pb-4">
                   <div className="w-12 h-12 bg-ff-blue flex items-center justify-center">
                     <span className="font-campfire text-2xl font-bold">FF</span>
                   </div>
                   <span className="font-bold text-lg">Direct Lender</span>
                 </div>
                 <ul className="space-y-3 font-semibold text-[15px]">
                   <li className="flex items-center gap-3">
                     <span className="text-ff-blue">✓</span> No hidden fees
                   </li>
                   <li className="flex items-center gap-3">
                     <span className="text-ff-blue">✓</span> Fast 24h decisions
                   </li>
                   <li className="flex items-center gap-3">
                     <span className="text-ff-blue">✓</span> Flexible repayments
                   </li>
                 </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Loans for People on Benefits Section */}
        <section className="bg-white py-16 md:py-24 border-t border-ff-teal/5">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-6">
              <h2 className="font-campfire text-[36px] md:text-[47px] leading-tight mb-2">
                Loans for People on Benefits
              </h2>
              <div className="space-y-4 text-[14px] md:text-[18px] leading-relaxed max-w-lg">
                <p>
                  Finding a loan if you receive benefits can be difficult, as many lenders have strict criteria around income and employment. At Fair Finance, we take a different approach by considering your full financial circumstances, including any benefits you receive.
                </p>
                <p>
                  Our loans are designed to be fair and affordable, with transparent pricing and repayments based on what you can afford. Eligibility depends on your financial circumstances so you may still be eligible to borrow even if your income comes from benefits.
                </p>
              </div>
              <div className="pt-4">
                <a href="#" className="ff-btn-blue">
                  Learn more about our loans for people on benefits
                </a>
              </div>
            </div>

            <div className="md:order-1 relative w-full max-w-[500px] mx-auto">
              <div className="ff-border bg-white p-8 space-y-6 shadow-[6px_6px_0px_#313129]">
                 <div className="flex gap-4 items-center border-b border-ff-teal/10 pb-4">
                   <div className="w-12 h-12 bg-ff-blue flex items-center justify-center">
                     <span className="font-campfire text-2xl font-bold">FF</span>
                   </div>
                   <span className="font-bold text-lg">Benefits Accepted</span>
                 </div>
                 <ul className="space-y-3 font-semibold text-[15px]">
                   <li className="flex items-center gap-3">
                     <span className="text-ff-blue">✓</span> Benefit income accepted
                   </li>
                   <li className="flex items-center gap-3">
                     <span className="text-ff-blue">✓</span> Regulated by FCA
                   </li>
                   <li className="flex items-center gap-3">
                     <span className="text-ff-blue">✓</span> £400 minimum loan amount
                   </li>
                   <li className="flex items-center gap-3">
                     <span className="text-ff-blue">✓</span> Fast 24h decisions
                   </li>
                 </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Representative Example Banner */}
        <section className="bg-ff-footer py-12 text-center">
           <div className="max-w-4xl mx-auto px-6 space-y-4">
             <h3 className="font-campfire text-2xl">Representative Example</h3>
             <p className="text-[13px] opacity-80 italic">
               If you borrow £500 repayable over 12 months, your total repayment will be £929.40. Your 12 monthly instalments will each be £74.95. One-off admin fee (6%) £30. Interest 132% fixed. Representative APR 280%.
             </p>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ff-footer pt-16 pb-10 border-t border-ff-teal/10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <img src="https://fairfinance.org.uk/wp-content/uploads/2025/01/footer-logo.svg" alt="Fair Finance" className="h-6" />
            <div className="text-[18px] font-medium">020 8988 0627</div>
          </div>
          <div className="space-y-4">
            <h4 className="text-[18px] font-medium underline underline-offset-4">About Us</h4>
            <ul className="text-[14px] space-y-2 opacity-80">
              <li><a href="#" className="hover:underline">Who we are</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          <div className="space-y-4 col-span-1 lg:col-span-2 text-[12px] opacity-60 leading-tight">
            <p>Copyright © 2025 Fair Finance. All rights Reserved.</p>
            <p>
              Fair Finance is a trading name of East End Fair Finance Limited, which is authorised and regulated by the Financial Conduct Authority (FCA). Our FCA firm reference number is 717247.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
