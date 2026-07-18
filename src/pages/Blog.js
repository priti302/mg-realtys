// src/pages/Blog.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  useEffect(() => {
    document.title = "Real Estate Blog - MG Realtys | Property Buying Guides & Market Updates";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Expert real estate blog with property buying guides, investment tips, Pune market updates, and home-buying advice from MG Realtys.');
    }
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Blog Categories
  const categories = ['All', 'Property Investment', 'Home Buying Guide', 'Pune Real Estate News', 'Area Guides', 'Home Loan Tips', 'Luxury Properties', 'Commercial Real Estate', 'Sustainability', 'Smart Home Technology', 'Real Estate Law'];

  // Featured Blog Posts
  const featuredBlogs = [
    {
      id: 1,
      title: 'Top 10 Investment Properties in Pune 2026',
      excerpt: 'Discover the most promising real estate investment opportunities in Pune with expected ROI and market trends.',
      category: 'Property Investment',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80',
      author: 'MG Realtys Team',
      date: 'July 18 , 2026',
      content: 'Pune real estate market has shown tremendous growth over the past few years. With IT companies establishing their presence and infrastructure development projects underway, several areas have emerged as ideal investment destinations.\n\nTop Investment Locations:\n1. Hinjewadi - Home to major IT parks with excellent connectivity\n2. Baner - Residential hub with good amenities and schools\n3. Koregaon Park - Premium locality with luxury apartments\n4. Viman Nagar - Developing area with high appreciation potential\n5. Magarpatta - Planned township with modern infrastructure\n\nExpected ROI ranges from 8-12% annually depending on the location and property type. We recommend consulting with our expert team to identify properties that match your investment goals.'
    },
    {
      id: 2,
      title: 'Complete Home Buying Checklist for First-Time Buyers',
      excerpt: 'A comprehensive guide covering legal verification, documentation, property inspection, and negotiation tips.',
      category: 'Home Buying Guide',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Buying your first home is a significant decision. This comprehensive checklist will guide you through every step of the process.\n\nPre-Purchase Checklist:\n• Check your credit score and get pre-approved for loan\n• Determine your budget and savings\n• Research neighborhoods and localities\n• Check property title and legal documents\n• Get property inspected by experts\n• Verify RERA registration\n• Check for pending litigation\n• Review society/building approvals\n\nDuring Purchase:\n• Negotiate the best price\n• Get home insurance quote\n• Complete due diligence\n• Finalize loan documents\n• Register the property\n\nFollow this checklist carefully and don\'t hesitate to consult professionals at each stage.'
    },
    {
      id: 3,
      title: 'Pune Real Estate Market: Growth Trends & Future Outlook',
      excerpt: 'Latest market analysis, property price trends, and predictions for Pune\'s real estate sector in 2026.',
      category: 'Pune Real Estate News',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Pune\'s real estate sector has witnessed remarkable growth in 2026. With an influx of IT professionals and increasing infrastructure development, the property market continues to show strong fundamentals.\n\nMarket Trends:\n• Property prices increased by 12-15% year-over-year\n• High demand for 2-3 BHK apartments\n• Growing interest in co-working and commercial spaces\n• Surge in demand from investors and end-users\n• Rising trend of sustainable and green buildings\n\nFuture Outlook:\n• Expected growth of 10-12% in the next 2 years\n• Expansion of metro rail network will boost property values\n• Increasing demand in satellite cities\n• Growth in affordable housing segment\n\nThis is an excellent time to invest in Pune\'s real estate market for both end-users and investors.'
    }
  ];

  // All Blog Posts
  const allBlogs = [
    ...featuredBlogs,
    {
      id: 4,
      title: 'Hinjewadi IT Park Area Guide: Living & Investing',
      category: 'Area Guides',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Explore Hinjewadi - its connectivity, amenities, property prices, and why it\'s ideal for IT professionals.',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Hinjewadi is one of Pune\'s most sought-after residential areas, known for its IT parks and modern infrastructure.\n\nConnectivity:\n• Direct connectivity to Pune International Airport\n• Well-connected via NH48 highway\n• Nearby railway stations for easy commute\n• Good public transportation options\n\nAmenities:\n• Multiple shopping malls and retail outlets\n• International schools and colleges\n• Hospitals and healthcare centers\n• Parks and recreational facilities\n• Restaurants and entertainment zones\n\nProperty Prices:\n• 1 BHK: ₹45-55 lakhs\n• 2 BHK: ₹65-80 lakhs\n• 3 BHK: ₹95-120 lakhs\n\nHinjewadi offers excellent value for living and investment with consistent appreciation.'
    },
    {
      id: 5,
      title: 'Home Loan Eligibility & Documentation Guide',
      category: 'Home Loan Tips',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Complete information on home loan eligibility criteria, required documents, and tips to get faster approval.',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Understanding home loan eligibility and documentation requirements is crucial for a smooth approval process.\n\nEligibility Criteria:\n• Age: Typically 21-60 years\n• Income: Minimum monthly income of ₹25,000\n• Employment: Salaried or self-employed\n• Credit Score: Minimum 700 CIBIL score\n• Loan Amount: Up to 80-90% of property value\n\nRequired Documents:\n• PAN card and Aadhar card\n• Last 2 years tax returns\n• Last 6 months bank statements\n• Salary certificates and employment proof\n• Property documents and registration\n• Passport or driving license for ID verification\n\nTips for Faster Approval:\n• Maintain good credit score\n• Keep all documents ready\n• Apply to multiple banks for competitive rates\n• Consider pre-approval process\n• Provide complete and accurate information'
    },
    {
      id: 6,
      title: 'Luxury Properties in Koregaon Park: Investment Guide',
      category: 'Luxury Properties',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80',
      excerpt: 'Premium property investment in Koregaon Park with details on amenities, pricing, and expected returns.',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Koregaon Park stands out as Pune\'s most prestigious residential locality, offering luxury living at its finest.\n\nLocation Highlights:\n• In the heart of Pune city\n• Close to business districts\n• Excellent school and hospital networks\n• High-end shopping and dining options\n• Surrounded by green spaces\n\nLuxury Amenities:\n• Spacious apartments with 4-5 BHK configurations\n• State-of-the-art fitness centers\n• Swimming pools and spa facilities\n• 24/7 security and surveillance\n• Concierge services\n• Parking facilities\n\nInvestment Potential:\n• Property prices range from ₹2-4 crore\n• Average annual appreciation: 10-12%\n• High rental yields: 3-4%\n• Premium end-users and investor interest\n• Strong resale value\n\nKoregaon Park is ideal for luxury living and premium investment opportunities.'
    },
    {
      id: 7,
      title: 'Commercial Real Estate Trends in Pune',
      category: 'Commercial Real Estate',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      excerpt: 'Latest trends in commercial property, office space demand, and investment opportunities in Pune.',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Pune\'s commercial real estate sector is experiencing unprecedented growth with strong demand for office spaces.\n\nKey Trends:\n• Post-pandemic surge in office space demand\n• Growth of co-working spaces\n• Rise in commercial complexes in IT corridors\n• Increased demand for retail spaces\n• Development of business parks\n\nMarket Opportunities:\n• Office spaces in Hinjewadi and Baner\n• Retail shops in commercial hubs\n• Co-working space investment\n• Industrial warehouses in outskirts\n• Mixed-use developments\n\nExpected Returns:\n• Commercial properties: 8-10% annual appreciation\n• Retail spaces: 7-9% appreciation\n• Co-working: High rental yields 5-7%\n• Long-term leases provide stable income\n\nCommercial real estate offers attractive investment opportunities for savvy investors.'
    },
    {
      id: 8,
      title: 'Baner & Aundh: Best Residential Areas in Pune',
      category: 'Area Guides',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Comprehensive guide to living in Baner and Aundh with details on schools, hospitals, and property prices.',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Baner and Aundh are rapidly developing residential areas in Pune, offering excellent living standards and investment potential.\n\nLocation Benefits:\n• Close to IT parks and business centers\n• Well-connected via highways and roads\n• Peaceful residential environment\n• Good weather and green surroundings\n• Growing infrastructure development\n\nEducational Institutions:\n• Multiple international and CBSE schools\n• Colleges and technical institutes\n• Educational hubs for children\n\nHealthcare Facilities:\n• Multi-specialty hospitals\n• Diagnostic centers\n• Clinics and medical facilities\n\nProperty Prices:\n• 1 BHK: ₹35-50 lakhs\n• 2 BHK: ₹55-75 lakhs\n• 3 BHK: ₹80-110 lakhs\n\nBaner and Aundh offer great value for families and first-time homebuyers.'
    },
    {
      id: 9,
      title: 'Investment Property Red Flags to Avoid',
      category: 'Property Investment',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80',
      excerpt: 'Know the warning signs when buying investment properties and how to avoid costly mistakes.',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'When investing in real estate, it\'s crucial to identify potential red flags that could lead to costly mistakes.\n\nLegal Red Flags:\n• Incomplete or unclear property documents\n• Disputes in property ownership\n• Pending litigation on the property\n• Unregistered plots or properties\n• Properties without RERA approval\n\nMarket Red Flags:\n• Suspiciously low prices compared to market\n• High percentage of vacant properties\n• Declining neighborhood development\n• Excessive promoter involvement\n• Poor builder reputation\n\nPhysical Red Flags:\n• Construction defects or structural issues\n• Poor water and electricity supply\n• Lack of maintenance in common areas\n• Inadequate parking and open spaces\n• Environmental concerns nearby\n\nFinancial Red Flags:\n• Builders demanding full payment upfront\n• No clear payment schedule\n• Hidden charges and additional costs\n• Unclear loan terms and conditions\n\nAlways conduct thorough due diligence before making any investment decision.'
    },
    // NEW BLOG POSTS ADDED BELOW
    {
      id: 10,
      title: 'Green Buildings & Sustainable Real Estate: The Future of Pune',
      excerpt: 'Explore the growing trend of sustainable architecture, eco-friendly homes, and green building certifications in Pune.',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1531913764164-f85c52a6e2f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Sustainability is no longer a luxury but a necessity in modern real estate. Pune is witnessing a significant shift towards eco-friendly and energy-efficient buildings.\n\nGreen Building Certifications in India:\n• IGBC (Indian Green Building Council) Certification\n• GRIHA (Green Rating for Integrated Habitat Assessment)\n• LEED (Leadership in Energy and Environmental Design) certification\n• BEE Star Rating for energy efficiency\n\nBenefits of Green Buildings:\n• 30-40% reduction in energy consumption\n• 20-30% lower water usage\n• Better indoor air quality\n• Higher property value and appreciation\n• Lower maintenance costs\n• Tax benefits and incentives\n\nTop Green Developments in Pune:\n• Sustainable townships in Hinjewadi\n• Eco-friendly projects in Baner\n• Rainwater harvesting systems in new developments\n• Solar-powered communities in Magarpatta\n• Waste management initiatives in premium projects\n\nFuture Trends:\n• Net-zero energy buildings\n• Smart water management systems\n• Use of recycled and sustainable materials\n• Green landscaping and urban forests\n• Carbon-neutral developments\n\nInvesting in green buildings not only benefits the environment but also ensures long-term value appreciation and lower operating costs.'
    },
    {
      id: 11,
      title: 'Smart Home Technology: Enhancing Modern Living',
      excerpt: 'Discover how IoT, AI, and smart home automation are transforming residential properties in Pune.',
      category: 'Smart Home Technology',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Smart home technology is revolutionizing the way we live, offering convenience, security, and energy efficiency like never before.\n\nPopular Smart Home Features:\n• Voice-controlled assistants (Amazon Alexa, Google Home)\n• Automated lighting systems with motion sensors\n• Smart thermostats for temperature control\n• Advanced security systems with CCTV and smart locks\n• Automated blinds and window treatments\n• Smart appliances and IoT-enabled devices\n\nBenefits of Smart Homes:\n• Enhanced security and peace of mind\n• Energy savings through automation\n• Convenience and remote control access\n• Increased property value\n• Better quality of life\n• Accessibility features for elderly and disabled\n\nEmerging Technologies:\n• AI-powered home management systems\n• 5G connectivity integration\n• Smart energy management\n• Health monitoring sensors\n• Ambient intelligence\n\nProperty Value Impact:\n• Smart homes command 10-15% higher resale value\n• Premium for smart features: ₹5-10 lakhs\n• Faster sale and higher buyer interest\n• Better rental yields\n\nPune\'s Smart Home Projects:\n• Integrated smart cities developments\n• Automated gated communities\n• Tech-enabled apartments in Kharadi\n• Smart homes in Hinjewadi Phase 3\n\nWhen investing in a property, consider the smart home infrastructure as it significantly enhances both living experience and investment potential.'
    },
    {
      id: 12,
      title: 'Understanding RERA: Your Rights as a Home Buyer',
      excerpt: 'Complete guide to RERA Act, its benefits for home buyers, and how to file complaints against developers.',
      category: 'Real Estate Law',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'The Real Estate (Regulation and Development) Act, 2016 (RERA) is a game-changer for the Indian real estate sector, protecting the interests of home buyers.\n\nWhat is RERA?\n• Regulatory authority for real estate sector\n• Mandatory registration of all projects\n• Protects buyers\' rights and interests\n• Ensures transparency in transactions\n• Dispute resolution mechanism\n\nKey Benefits for Home Buyers:\n• Timely possession guaranteed\n• Standardized sale agreements\n• 5% penalty for project delays\n• Detailed project information disclosure\n• Quality assurance and standards\n• Clear title verification\n\nBuyer Rights Under RERA:\n• Right to information about the project\n• Right to possession within stipulated time\n• Right to compensation for delays\n• Right to full refund with interest\n• Right to defect rectification\n• Right to withdraw with interest\n\nHow to File a Complaint:\n• Gather all documents and evidence\n• Submit complaint on state RERA website\n• Pay prescribed fees\n• Attend hearing (online/offline)\n• Get order within 60 days\n\nImportant RERA Provisions:\n• 70% of project funds in escrow account\n• Mandatory project timeline display\n• No changes in plan without buyer consent\n• Quarterly progress reports\n• Penalty for non-compliance: Up to 10% of property cost\n\nCase Studies:\n• Successful resolution of delayed projects\n• Compensation awarded to aggrieved buyers\n• Project cancellations and refunds\n• Builder accountability enforced\n\nRERA has made the Indian real estate market more transparent and buyer-friendly.'
    },
    {
      id: 13,
      title: 'Sustainable Architecture Trends in Modern Housing',
      excerpt: 'Learn about eco-friendly building designs, energy-efficient materials, and sustainable construction practices.',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Sustainable architecture is becoming mainstream in Indian real estate, with builders adopting green construction practices.\n\nSustainable Design Principles:\n• Passive solar design\n• Natural ventilation systems\n• Daylight harvesting techniques\n• Thermal mass and insulation\n• Water conservation strategies\n\nEco-Friendly Materials:\n• Bamboo and engineered wood\n• Recycled steel and aluminum\n• Low-VOC paints and finishes\n• Green concrete\n• Fly ash bricks and blocks\n• Sustainable insulation materials\n\nGreen Building Technologies:\n• Solar photovoltaic panels\n• Green roofs and living walls\n• Rainwater harvesting systems\n• Greywater recycling\n• Energy-efficient HVAC systems\n\nCost-Benefit Analysis:\n• Initial investment: 5-10% higher\n• Operational savings: 30-40% annually\n• Payback period: 3-7 years\n• Higher resale value: 10-20% premium\n\nCase Studies:\n• Successful green buildings in Pune\n• Cost savings achieved\n• Occupant satisfaction surveys\n• Environmental impact reduction\n\nAs sustainability becomes a priority, homes with green certifications and features will command premium prices in the market.'
    },
    {
      id: 14,
      title: 'Real Estate Investment Strategies for 2026',
      excerpt: 'Strategic investment approaches for maximum returns in Pune\'s evolving property market.',
      category: 'Property Investment',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Strategic real estate investment requires careful analysis of market conditions and smart decision-making.\n\nInvestment Approaches for 2026:\n1. Long-term buy and hold strategy\n   • Steady appreciation over time\n   • Rental income generation\n   • Tax benefits on rental income\n\n2. Short-term flips\n   • Renovate and resell for profit\n   • Quick returns but higher risk\n   • Focus on undervalued properties\n\n3. Commercial vs. Residential\n   • Commercial: Higher yields, long leases\n   • Residential: Steady demand, lower returns\n   • Mixed-use: Balanced portfolio\n\n4. Under-construction projects\n   • Lower initial investment\n   • Higher appreciation potential\n   • 3-5 year investment horizon\n\n5. Ready-to-move properties\n   • Immediate rental income\n   • Lower risk compared to under-construction\n   • Premium pricing but safe\n\nEmerging Investment Hotspots:\n• Kharadi - IT hub with steady demand\n• Wakad - Growing residential area\n• Pimpri-Chinchwad - Affordable options\n• Bavdhan - Upcoming connectivity corridor\n• Chakan - Industrial development zone\n\nRisk Management:\n• Diversify across locations and types\n• Invest in RERA-registered projects\n• Professional property inspection\n• Legal verification of documents\n• Insurance coverage\n\nExpected Returns 2026:\n• Residential: 8-12% annual appreciation\n• Commercial: 10-14% appreciation\n• Rental yields: 3-4% residential, 6-8% commercial\n• Overall returns: 12-18% inclusive of rental income\n\nSmart investment decisions backed by thorough research can create significant wealth through real estate.'
    },
    {
      id: 15,
      title: 'Everything You Need to Know About Home Insurance',
      excerpt: 'Complete guide to home insurance coverage, types of policies, and why it\'s essential for every homeowner.',
      category: 'Home Buying Guide',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Home insurance is a critical protection for your most valuable asset. Understanding coverage options ensures comprehensive protection.\n\nTypes of Home Insurance Policies:\n1. Basic Structure Policy\n   • Covers building structure only\n   • Protection against fire, earthquakes\n   • Natural disasters coverage\n   • Limited coverage\n\n2. Standard Home Insurance\n   • Building + contents coverage\n   • Theft and burglary protection\n   • Personal liability coverage\n   • Alternative accommodation benefit\n   • Common in Pune\n\n3. Comprehensive Policy\n   • Full building and contents coverage\n   • Natural and man-made disasters\n   • Temporary alternative accommodation\n   • Jewellery and valuables coverage\n   • Personal liability\n\n4. Specific Perils Policy\n   • Selected risk coverage\n   • Customizable protection\n   • Cost-effective option\n\nWhat Home Insurance Covers:\n• Building structure\n• Fixed installations\n• Furniture and fixtures\n• Electronics and appliances\n• Personal belongings\n• Jewellery and valuables (limited)\n\nWhy Home Insurance is Essential:\n• Financial protection against unexpected events\n• Peace of mind\n• Required by most banks for home loans\n• Cost of rebuilding is significantly high\n• Protection against liability claims\n\nTips for Choosing Insurance:\n• Compare multiple insurers\n• Read the fine print and exclusions\n• Check claim settlement ratio\n• Understand the claim process\n• Review policy annually\n• Update coverage with property value changes\n\nCommon Exclusions:\n• Normal wear and tear\n• Tenant damages\n• War and nuclear risks\n• Intentional damage\n\nWith increasing property values, adequate home insurance is not just an option but a necessity for every homeowner.'
    },
    {
      id: 16,
      title: 'The Impact of Metro Rail on Pune\'s Real Estate',
      excerpt: 'Analyzing how Pune Metro Rail project is transforming property values, connectivity, and new growth corridors.',
      category: 'Pune Real Estate News',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'The Pune Metro Rail project has emerged as a game-changer for the city\'s real estate landscape, opening new avenues for property investment.\n\nMetro Corridors Overview:\n• Line 1: PCMC to Swargate (North-South)\n• Line 2: Vanaz to Ramwadi (East-West)\n• Line 3: Hinjewadi to Civil Court (IT corridor)\n• Phase 2 expansions planned\n\nImpact on Property Values:\n• 25-40% appreciation in metro corridor areas\n• Residential properties near stations: 30% higher\n• Commercial spaces: 40% premium\n• Rental yields: Increased by 15-20%\n\nBenefiting Areas:\n• Hinjewadi - IT hub connectivity\n• Baner - Better access to city center\n• Wakad - Improved daily commute\n• Kharadi - Route extension benefits\n• Shivajinagar - Premium location advantage\n\nInfrastructure Development:\n• Last-mile connectivity improvements\n• Station area development\n• New commercial hubs emerging\n• Integrated townships along corridor\n\nInvestment Opportunities:\n• Pre-launch projects near upcoming stations\n• Commercial spaces at interchange stations\n• Residential developments within 500m of stations\n• Mixed-use developments\n\nFuture Outlook:\n• Complete network by 2027\n• 30% reduction in commute time\n• Increased economic activities\n• New satellite town development\n• Enhanced property demand\n\nProperties along metro corridors are expected to appreciate significantly, making them prime investment destinations.'
    },
    {
      id: 17,
      title: 'Navigating Joint Home Loan Applications: A Complete Guide',
      excerpt: 'Understand the process, benefits, and considerations when applying for a joint home loan with co-applicants.',
      category: 'Home Loan Tips',
      image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'A joint home loan allows multiple individuals to apply together, increasing borrowing capacity and sharing financial responsibility.\n\nWho Can Be Co-Applicants:\n• Spouses\n• Parents and children\n• Siblings\n• Business partners\n\nBenefits of Joint Home Loan:\n• Higher loan eligibility (combined income)\n• Lower interest rates (family co-applicants)\n• Combined tax benefits up to ₹2 lakhs (Section 24B)\n• Shared EMI burden\n• Better loan terms\n\nKey Considerations:\n• All co-applicants must have regular income\n• Credit scores of all applicants matter\n• Joint ownership of property required\n• Equal or agreed share in property\n\nTax Benefits Distribution:\n• Can be distributed as per ownership ratio\n• Separate tax benefits for each co-owner\n• Section 80C: Up to ₹1.5 lakhs each\n• Section 24B: Up to ₹2 lakhs each\n\nDocuments Required:\n• Income proof for all applicants\n• Identity and address proof\n• Property documents\n• Relationship proof (if applicable)\n\nProcess Overview:\n• All applicants visit the bank together\n• Fill joint application form\n• Submit all required documents\n• Joint verification process\n• Approval and disbursement\n\nImportant Considerations:\n• Liabilities of each applicant considered\n• Joint liability makes all responsible\n• Impact of co-applicant\'s CIBIL score\n• Exit strategy and loan closure\n\nA joint loan can make your dream home more affordable, but all parties should understand their responsibilities and obligations.'
    },
    {
      id: 18,
      title: 'Guide to VASTU-Compliant Homes in Pune',
      excerpt: 'Understanding Vaastu Shastra principles and their importance in selecting the right property in Pune.',
      category: 'Home Buying Guide',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Vaastu Shastra, the ancient Indian science of architecture, continues to influence property selection in Pune and across India.\n\nKey Vaastu Principles for Homes:\n• Main entrance facing North-East\n• Kitchen in South-East\n• Bedroom in South-West\n• Living room in North or East\n• Pooja room in North-East\n• Staircase in South-West\n\nBenefits of Vaastu-Compliant Homes:\n• Positive energy flow\n• Health and well-being\n• Financial prosperity\n• Better relationships\n• Peace and harmony\n\nCommon Vaastu Defects to Avoid:\n• Main entrance in South or West\n• Kitchen in North-East\n• Bedroom in North-East\n• Bathroom in North-East\n• Column in center of house\n\nHow to Check Vaastu:\n• Use compass for directions\n• Consult experienced Vaastu expert\n• Review property layout\n• Check plot shape and orientation\n\nModern Vaastu Considerations:\n• Adaptable to modern architecture\n• Scientific principles behind Vaastu\n• Can be corrected with remedies\n• Increasing demand in new projects\n\nVaastu Compliant Projects in Pune:\n• Many premium developers incorporate Vaastu\n• Designs reviewed by Vaastu consultants\n• Customizable floor plans\n\nCost Implications:\n• Vaastu compliant: Usually 5-10% premium\n• Better resale value\n• Higher rental demand\n• Faster property sale\n\nWhile Vaastu compliance adds value and appeal, it\'s important to balance traditional principles with modern living requirements.'
    },
    {
      id: 19,
      title: 'Real Estate Digital Trends: AI & Virtual Reality',
      excerpt: 'How artificial intelligence, virtual reality, and digital innovations are reshaping the property buying experience.',
      category: 'Smart Home Technology',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Technology is revolutionizing the real estate industry, making property buying, selling, and investing more efficient and transparent.\n\nKey Digital Innovations:\n• AI-powered property recommendations\n• Virtual Reality (VR) home tours\n• Augmented Reality (AR) for property visualization\n• Digital documentation and e-signatures\n• Blockchain for secure transactions\n\nAI in Real Estate:\n• Automated property valuations\n• Predictive market analysis\n• Personalized property suggestions\n• Chatbots for customer queries\n• Smart contract management\n\nVR and AR Applications:\n• Virtual property walkthroughs\n• Furniture placement visualization\n• Renovation and design previews\n• Remote property viewing\n• Project site tours from anywhere\n\nBenefits for Buyers:\n• Save time on property visits\n• Better decision making\n• Virtual furniture staging\n• Compare multiple properties easily\n• Detailed property insights\n\nTechnology Trends:\n• 3D printing for construction\n• Drone property surveys\n• IoT-enabled building management\n• Smart city integration\n• Green building technology\n\nAdoption in Pune:\n• Leading developers using VR tours\n• AI-powered property portals\n• Digital project exhibitions\n• Smart home technology in projects\n\nFuture Outlook:\n• Complete end-to-end digital transactions\n• Enhanced virtual buying experience\n• Real-time property data analytics\n• AI-driven property management\n\nEmbracing technology in real estate buying decisions can provide significant advantages in terms of convenience and smart decision-making.'
    },
    {
      id: 20,
      title: 'Top Pune Localities for First-Time Homebuyers',
      excerpt: 'Affordable and growing neighborhoods in Pune ideal for young professionals and families buying their first home.',
      category: 'Area Guides',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      author: 'MG Realtys Team',
      date: 'July 18, 2026',
      content: 'Pune offers numerous affordable localities that are perfect for first-time homebuyers seeking value and convenience.\n\nTop 5 Localities for First-Time Buyers:\n\n1. Wakad\n   • Average Property Price: ₹5,500-6,500/sq ft\n   • Connectivity: Excellent to IT parks\n   • Amenities: Malls, schools, hospitals\n   • Why Choose: Good investment, steady growth\n\n2. Pimple Saudagar\n   • Average Property Price: ₹5,000-6,000/sq ft\n   • Connectivity: NH48 access\n   • Amenities: Well-developed social infrastructure\n   • Why Choose: Affordable, good living environment\n\n3. Talegaon\n   • Average Property Price: ₹3,500-4,500/sq ft\n   • Connectivity: NH48 and proposed metro\n   • Amenities: Growing infrastructure\n   • Why Choose: Most affordable option\n\n4. Ravet\n   • Average Property Price: ₹4,500-5,500/sq ft\n   • Connectivity: Good road network\n   • Amenities: Schools, colleges nearby\n   • Why Choose: New developments, good community\n\n5. Charholi\n   • Average Property Price: ₹4,000-5,000/sq ft\n   • Connectivity: NH48 access\n   • Amenities: Developing social infra\n   • Why Choose: Good budget option, future growth\n\nFactors to Consider:\n• Affordability and budget\n• Daily commute and connectivity\n• Social infrastructure availability\n• Future growth and appreciation\n• Builder reputation\n\nTips for First-Time Buyers:\n• Start with a clear budget\n• Get pre-approved for loan\n• Research thoroughly\n• Compare multiple projects\n• Check RERA registration\n• Visit the site personally\n\nThese localities offer the perfect balance of affordability and convenience for first-time homebuyers in Pune.'
    }
  ];

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: 'How do I choose the right property?',
      answer: 'Consider factors like location, connectivity, amenities, property type, budget, and future investment potential. Schedule a consultation with our experts for personalized guidance.'
    },
    {
      id: 2,
      question: 'Which area is best for investment in Pune?',
      answer: 'Popular investment areas include Hinjewadi, Baner, Koregaon Park, and Viman Nagar. The best choice depends on your budget, lifestyle, and investment goals. Contact us for tailored recommendations.'
    },
    {
      id: 3,
      question: 'What documents are required to buy a home?',
      answer: 'Required documents typically include PAN card, Aadhar, bank statements, proof of income, and property-related documents. Our team will guide you through the complete process.'
    },
    {
      id: 4,
      question: 'How much down payment is needed?',
      answer: 'Down payment typically ranges from 20-30% of property price, though some developers offer reduced down payments. This depends on the project and bank loan approval.'
    },
    {
      id: 5,
      question: 'What is RERA and why is it important?',
      answer: 'RERA (Real Estate Regulation Authority) regulates the real estate sector to protect consumer interests. It ensures transparency, timely delivery, and redressal of grievances.'
    }
  ];

  // Recent Posts
  const recentPosts = allBlogs.slice(0, 5);

  // Popular Posts
  const popularPosts = [
    allBlogs[0],
    allBlogs[1],
    allBlogs[2]
  ];

  // Filter blogs
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">Real Estate Insights & Property Buying Guides</h1>
          <p className="hero-subtitle">Expert advice, market updates, investment opportunities, and home-buying tips from MG Realtys.</p>
          
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </nav>

          {/* Search Bar */}
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Search blogs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="featured-blogs-section">
        <div className="section-container">
          <h2 className="section-title">Featured Articles</h2>
          <div className="featured-grid">
            {featuredBlogs.map((blog) => (
              <article key={blog.id} className="featured-card">
                <div className="featured-image">
                  <img src={blog.image} alt={blog.title} />
                  <span className="category-badge">{blog.category}</span>
                </div>
                <div className="featured-content">
                  <h3>{blog.title}</h3>
                  <p className="excerpt">{blog.excerpt}</p>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedBlog(blog);
                      setShowModal(true);
                    }}
                    className="read-more"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section className="categories-section">
        <div className="section-container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="category-grid">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="blog-container">
        {/* Latest Articles */}
        <section className="latest-blogs-section">
          <div className="section-container">
            <h2 className="section-title">Latest Articles</h2>
            <div className="blogs-grid">
              {filteredBlogs.map((blog) => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.title} />
                    <span className="category-tag">{blog.category}</span>
                  </div>
                  <div className="blog-body">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <div className="blog-footer">
                      <div className="blog-info">
                        <span className="author-info">{blog.author}</span>
                        <span className="date-info">{blog.date}</span>
                      </div>
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedBlog(blog);
                          setShowModal(true);
                        }}
                        className="read-btn"
                      >
                        Read
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Search Widget */}
          <div className="sidebar-widget search-widget">
            <h4>Search Blog</h4>
            <div className="widget-search">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>🔍</button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="sidebar-widget">
            <h4>Recent Posts</h4>
            <ul className="posts-list">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <a href="#">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Posts */}
          <div className="sidebar-widget">
            <h4>Popular Posts</h4>
            <ul className="posts-list">
              {popularPosts.map((post) => (
                <li key={post.id}>
                  <a href="#">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Widget */}
          <div className="sidebar-widget">
            <h4>Categories</h4>
            <ul className="category-list">
              {categories.filter(c => c !== 'All').map((cat, idx) => (
                <li key={idx}>
                  <button onClick={() => setSelectedCategory(cat)}>{cat}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Widget */}
          <div className="sidebar-widget">
            <h4>Tags</h4>
            <div className="tags-cloud">
              {['Real Estate', 'Pune', 'Investment', 'Home Buying', 'Property Market', 'RERA', 'Home Loan', 'Area Guide', 'Sustainability', 'Smart Home', 'Metro'].map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="section-container">
          <div className="newsletter-content">
            <h2>Get Weekly Property Insights</h2>
            <p>Subscribe to receive the latest real estate news, investment tips, and property updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="section-container">
          <h2>Looking for the Right Property in Pune?</h2>
          <p>Get expert guidance from MG Realtys and find properties that match your budget, lifestyle, and investment goals.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary">Schedule Consultation</Link>
            <Link to="/contact" className="cta-btn secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{expandedFaq === faq.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    {/* Blog Modal Popup */}
    {showModal && selectedBlog && (
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
          
          <div className="modal-image">
            <img src={selectedBlog.image} alt={selectedBlog.title} />
          </div>

          <div className="modal-body">
            <div className="modal-header">
              <span className="modal-category">{selectedBlog.category}</span>
            </div>

            <h2 className="modal-title">{selectedBlog.title}</h2>
            
            <div className="modal-excerpt">
              <p>{selectedBlog.excerpt}</p>
            </div>

            <div className="modal-text">
              {selectedBlog.content && selectedBlog.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="modal-actions">
              <Link to="/contact" className="modal-cta">Schedule Consultation</Link>
              <button className="modal-close-btn" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Blog;