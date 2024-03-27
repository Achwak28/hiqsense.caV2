import React from 'react'
import PricingHero from './PricingHero.jsx/PricingHero'
import PricingPlans from './PricingPlans/PricingPlans'
import ContactUs from './ContactUs/ContactUs'
import { Helmet } from 'react-helmet-async'

const Pricing = () => {
  return (
    <div>
       <Helmet>
        <title> Pricing - Hiqsense Smart Systems: Affordable, Tailored Technology Packages</title>
        <meta name= "description" content="Unlock exceptional value with Hiqsense Smart Systems' pricing plans, perfectly crafted for small businesses
         in Canada. Our pricing page details various budget-friendly packages that combine services like web design,
          SEO optimization, graphic design, email hosting, and IT support. Find the ideal technology solution tailored 
          to your business needs and budget, ensuring you get top-quality service without breaking the bank." />
           <meta name="keywords" content="Hiqsense pricing, affordable technology solutions, small business packages,
            web design pricing, SEO services cost, graphic design deals, email hosting plans,
             IT support pricing, budget-friendly solutions, customized service packages, 
             business technology deals, Saskatoon web agency, value-for-money services." />
      </Helmet>
     
    <PricingHero />
    <PricingPlans />
    <ContactUs />
    </div>
  )
}

export default Pricing
