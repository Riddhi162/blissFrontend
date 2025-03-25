

const partnersData = {
    firstColumnPartners: [
      { 
        id: 1, 
        name: "TechVision", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Technology, Media & Telecom", "Business & Consumer Services", "Team Building"],

        introduction: "Trusted partner delivering excellence in software development with innovative solutions and customer-focused approach.",
        details: [
          { subtitle: "Core Services", subheading: "Cloud Migration, Web Applications, Mobile Development" },
          { subtitle: "Industry Expertise", subheading: "Finance, Healthcare, Retail, Education" },
          { subtitle: "Technology Stack", subheading: "React, Node.js, AWS, Python, .NET" },
          { subtitle: "Global Presence", subheading: "Offices in 5 countries with 200+ developers" }
        ]
      },
      { 
        id: 2, 
        name: "Innovate Plus", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Business & Consumer Services", "Corporate Events", "Networking"],

        introduction: "Award-winning digital marketing agency helping businesses grow their online presence and reach target audiences effectively.",
        details: [
          { subtitle: "Marketing Solutions", subheading: "SEO, Content Marketing, PPC, Social Media" },
          { subtitle: "Client Success Stories", subheading: "30% average increase in client conversion rates" },
          { subtitle: "Analytics Approach", subheading: "Data-driven strategies with custom reporting" },
          { subtitle: "Creative Team", subheading: "Industry-recognized designers and copywriters" }
        ]
      },
      { 
        id: 3, 
        name: "DataSphere", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Technology, Media & Telecom", "Business & Consumer Services", "Industrial Goods & Machinery"],

        introduction: "Specializing in transforming raw data into actionable insights through advanced analytics and visualization tools.",
        details: [
          { subtitle: "Data Services", subheading: "Data Warehousing, Analytics, Visualization, AI Integration" },
          { subtitle: "Industry Solutions", subheading: "Custom analytics solutions for retail, healthcare, and finance" },
          { subtitle: "Technology Partners", subheading: "Microsoft, Tableau, Snowflake, Google" },
          { subtitle: "Research Focus", subheading: "Leading research in predictive analytics and AI applications" }
        ]
      },
      { 
        id: 4, 
        name: "CloudWorks", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Technology, Media & Telecom", "Power & Utilities", "Business & Consumer Services"],

        introduction: "Helping businesses leverage cloud technologies to improve scalability, security and operational efficiency.",
        details: [
          { subtitle: "Cloud Expertise", subheading: "AWS, Azure, Google Cloud, Private Cloud" },
          { subtitle: "Security Focus", subheading: "SOC 2 compliant solutions with encryption standards" },
          { subtitle: "Performance Stats", subheading: "99.99% uptime guarantee with 24/7 monitoring" },
          { subtitle: "Cost Optimization", subheading: "Typical 30% reduction in infrastructure costs" }
        ]
      },
      { 
        id: 5, 
        name: "Nexus Media", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Power & Utilities", "Agriculture & Forestry", "Construction"],

        introduction: "Creative media production company delivering high-quality video, animation and interactive content for diverse clients.",
        details: [
          { subtitle: "Production Services", subheading: "Video Production, Animation, Motion Graphics, VR/AR" },
          { subtitle: "Client Portfolio", subheading: "Fortune 500 companies and emerging startups" },
          { subtitle: "Creative Awards", subheading: "Multiple industry awards for creative excellence" },
          { subtitle: "Technical Capabilities", subheading: "4K production, drone filming, 3D animation" }
        ]
      },
    ],
    
    secondColumnPartners: [
      { 
        id: 6, 
        name: "EcoSmart", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Power & Utilities", "Agriculture & Forestry", "Construction"],

        introduction: "Pioneering sustainable technologies and solutions for a greener future and reduced environmental impact.",
        details: [
          { subtitle: "Green Solutions", subheading: "Solar Energy, Waste Management, Smart Buildings" },
          { subtitle: "Impact Metrics", subheading: "Helped clients reduce carbon footprint by 40%" },
          { subtitle: "Certification", subheading: "ISO 14001 certified with LEED accreditation" },
          { subtitle: "Research Initiative", subheading: "Investing 15% of revenue in green tech research" }
        ]
      },
      { 
        id: 7, 
        name: "FinEdge", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Transport, Infrastructure & Logistics", "Business & Consumer Services", "Industrial Goods & Machinery"],

        introduction: "Innovating financial services through technology, offering secure, efficient solutions for modern banking needs.",
        details: [
          { subtitle: "Financial Products", subheading: "Digital Banking, Payment Processing, Fraud Prevention" },
          { subtitle: "Security Standards", subheading: "PCI DSS Level 1 compliance with encryption" },
          { subtitle: "Market Position", subheading: "Serving 200+ financial institutions globally" },
          { subtitle: "Technology Edge", subheading: "Blockchain integration and AI-powered analytics" }
        ]
      },
      { 
        id: 8, 
        name: "HealthTech", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Transport, Infrastructure & Logistics", "Business & Consumer Services", "Industrial Goods & Machinery"],

        introduction: "Transforming healthcare delivery through innovative IT solutions, enhancing patient care and operational efficiency.",
        details: [
          { subtitle: "Healthcare Solutions", subheading: "EHR Systems, Telemedicine, Patient Portals" },
          { subtitle: "Compliance", subheading: "HIPAA compliant with robust security protocols" },
          { subtitle: "Clinical Impact", subheading: "Reduced admin time by 40% in partner hospitals" },
          { subtitle: "Research Collaboration", subheading: "Working with leading medical institutions" }
        ]
      },
      { 
        id: 9, 
        name: "UrbanDesign", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Transport, Infrastructure & Logistics", "Business & Consumer Services", "Industrial Goods & Machinery"],

        introduction: "Award-winning architectural firm creating innovative, sustainable spaces that enhance urban environments.",
        details: [
          { subtitle: "Design Services", subheading: "Architecture, Interior Design, Urban Planning" },
          { subtitle: "Project Portfolio", subheading: "Over 500 completed projects across 3 continents" },
          { subtitle: "Sustainability Focus", subheading: "80% of projects achieve green building certification" },
          { subtitle: "Design Philosophy", subheading: "Human-centered design with environmental responsibility" }
        ]
      },
      { 
        id: 10, 
        name: "ElectriCore", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Transport, Infrastructure & Logistics", "Business & Consumer Services", "Industrial Goods & Machinery"],

        introduction: "Providing advanced energy solutions to optimize power distribution, reduce costs, and support renewable integration.",
        details: [
          { subtitle: "Energy Offerings", subheading: "Smart Grid Technology, Energy Storage, Microgrids" },
          { subtitle: "Efficiency Results", subheading: "Clients achieve 25% average energy cost reduction" },
          { subtitle: "Implementation Scale", subheading: "Solutions deployed across 1000+ locations" },
          { subtitle: "Innovation Focus", subheading: "Leading in grid-scale battery technology" }
        ]
      },
    ],
    
    thirdColumnPartners: [
      { 
        id: 11, 
        name: "GlobalEdge", 
        logo: "https://via.placeholder.com/150", 
        tags: ["International Trade", "Supply Chain", "Logistics"],
        introduction: "Facilitating global trade through innovative supply chain solutions, connecting businesses across borders efficiently.",
        details: [
          { subtitle: "Global Services", subheading: "Trade Facilitation, Customs Compliance, Supply Chain" },
          { subtitle: "Network Reach", subheading: "Operations in 40+ countries with local expertise" },
          { subtitle: "Process Efficiency", subheading: "Reduce import/export process time by 60%" },
          { subtitle: "Technology Platform", subheading: "Proprietary trade management software suite" }
        ]
      },
      { 
        id: 12, 
        name: "RetailPro", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Agriculture & Forestry", "Business & Consumer Services", "Technology, Media & Telecom"],

        introduction: "Empowering retailers with comprehensive technology solutions to enhance customer experience and operational efficiency.",
        details: [
          { subtitle: "Retail Technology", subheading: "POS Systems, Inventory Management, CRM" },
          { subtitle: "Client Base", subheading: "From boutiques to multinational retail chains" },
          { subtitle: "Integration Capabilities", subheading: "Seamless connection with major e-commerce platforms" },
          { subtitle: "Analytics Strength", subheading: "AI-powered customer behavior analysis" }
        ]
      },
      { 
        id: 13, 
        name: "LogiTech", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Business & Consumer Services", "Corporate Events", "Technology, Media & Telecom"],

        introduction: "Optimizing logistics operations through technology, ensuring efficient, cost-effective movement of goods worldwide.",
        details: [
          { subtitle: "Logistics Solutions", subheading: "Route Optimization, Fleet Management, Warehousing" },
          { subtitle: "Performance Metrics", subheading: "15% average reduction in logistics costs" },
          { subtitle: "Technology Stack", subheading: "IoT tracking, AI-powered routing, blockchain" },
          { subtitle: "Sustainability Initiative", subheading: "Carbon-neutral shipping options" }
        ]
      },
      { 
        id: 14, 
        name: "AgroSmart", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Business & Consumer Services", "Corporate Events", "Technology, Media & Telecom"],

        introduction: "Revolutionizing agriculture with smart technology solutions that increase yield, reduce waste, and promote sustainability.",
        details: [
          { subtitle: "AgTech Solutions", subheading: "Precision Farming, Crop Monitoring, Smart Irrigation" },
          { subtitle: "Yield Impact", subheading: "Average 30% increase in crop yields for clients" },
          { subtitle: "Resource Efficiency", subheading: "Water usage reduction of up to 40%" },
          { subtitle: "Technology Implementation", subheading: "IoT sensors, satellite imagery, AI analytics" }
        ]
      },
      { 
        id: 15, 
        name: "EduSphere", 
        logo: "https://via.placeholder.com/150", 
        tags: ["Business & Consumer Services", "Corporate Events", "Technology, Media & Telecom"],

        introduction: "Creating innovative educational technology to make learning more accessible, engaging, and effective for all students.",
        details: [
          { subtitle: "EdTech Offerings", subheading: "LMS, Interactive Content, Virtual Classrooms" },
          { subtitle: "User Base", subheading: "Used by 5000+ educational institutions globally" },
          { subtitle: "Learning Outcomes", subheading: "25% improvement in student engagement metrics" },
          { subtitle: "Accessibility Focus", subheading: "WCAG 2.1 compliant with multilingual support" }
        ]
      },
    ]
  };
  
  export default partnersData;