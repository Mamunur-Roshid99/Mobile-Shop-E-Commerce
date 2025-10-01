import React from 'react'

const HeroSection = () => {
  return (
    <div className="pt-5 pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-22">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          {/* left */}
          <div className="lg:w-[35%]">
            <h3 className="text-[#3BB77E] font-semibold mb-1">
              Need Assistance?
            </h3>
            <h1 className="text-[#253D4E] font-bold text-2xl mb-3 lg:text-4xl">
              We're here to help with your mobile shopping
            </h1>
            <p className="text-[#7E7E7E] font-medium text-sm">
              Looking for the latest smartphone or confused about specs? Our
              team will guide you to pick the perfect device within your budget.
            </p>
            <br />
            <p className="text-[#7E7E7E] font-medium text-sm">
              From order tracking to warranty claims, we make sure your mobile
              shopping experience is smooth and hassle-free.
            </p>
          </div>
          {/* right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 lg:w-[60%]">
            {/* 1 */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-xl mb-1 hover:text-[#3BB77E] duration-300">
                01. Order Support
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Need help placing an order or tracking your shipment? We provide
                quick updates about your mobile orders.
              </p>
            </div>
            {/* 2 */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-xl mb-1 hover:text-[#3BB77E] duration-300">
                02. Product Information
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Confused between two phones? Ask us for detailed specs,
                comparisons, and recommendations.
              </p>
            </div>
            {/* 3 */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-xl mb-1 hover:text-[#3BB77E] duration-300">
                03. Payment & Billing
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Questions about payment methods, EMI options, or invoices? Our
                billing team is here to assist you.
              </p>
            </div>
            {/* 4 */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-xl mb-1 hover:text-[#3BB77E] duration-300">
                04. Warranty & Returns
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Facing an issue with your new phone? We help with warranty
                claims, replacements, and easy returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
