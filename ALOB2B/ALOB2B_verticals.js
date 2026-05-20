const VERTICALS = [
  {n:1,title:"Viager / Elderly Property Sales",cat:"Real Estate",sides:4,teams:[
    {l:"A",desc:"Call elderly owners to find willing sellers"},
    {l:"B",desc:"In-person appointments, snag property & sign agreements"},
    {l:"C",desc:"Call external service providers (notaries, valuers) - earn referral fee"},
    {l:"D",desc:"Call hedge funds & family offices to sell the contracts"}
  ],commission:"15-20% origination fee + care referral (AloAlo flagship)"},
  {n:2,title:"Commercial Lease Brokerage",cat:"Real Estate",sides:3,teams:[
    {l:"A",desc:"Call landlords / building owners seeking tenants"},
    {l:"B",desc:"Call companies needing office/retail/warehouse space"},
    {l:"C",desc:"Call fit-out contractors, IT infra firms for referral commission"}
  ],commission:"1 month rent per deal + referral fees"},
  {n:3,title:"Business Sale & Acquisition (M&A)",cat:"Finance",sides:3,teams:[
    {l:"A",desc:"Call SME owners looking to exit / sell their business"},
    {l:"B",desc:"Call PE firms, strategic buyers, serial entrepreneurs"},
    {l:"C",desc:"Call due-diligence firms, lawyers, accountants for deal flow referral"}
  ],commission:"2-8% of deal value"},
  {n:4,title:"Debt & Invoice Factoring",cat:"Finance",sides:2,teams:[
    {l:"A",desc:"Call SMEs with outstanding invoices needing immediate cash"},
    {l:"B",desc:"Call factoring companies & alternative lenders to match"}
  ],commission:"0.5-2% of invoice value"},
  {n:5,title:"Insurance Brokerage (Commercial)",cat:"Insurance",sides:3,teams:[
    {l:"A",desc:"Call businesses needing commercial/liability/cyber insurance"},
    {l:"B",desc:"Call insurers & underwriters to negotiate best terms"},
    {l:"C",desc:"Call HR firms & accountants for referral partner agreements"}
  ],commission:"10-20% of annual premium"},
  {n:6,title:"Freight & Logistics Brokerage",cat:"Logistics",sides:2,teams:[
    {l:"A",desc:"Call shippers / manufacturers with cargo to move"},
    {l:"B",desc:"Call carriers, trucking companies, freight forwarders"}
  ],commission:"10-20% of freight value"},
  {n:7,title:"Healthcare Staffing Brokerage",cat:"HR / Staffing",sides:2,teams:[
    {l:"A",desc:"Call hospitals, clinics, care homes with staffing gaps"},
    {l:"B",desc:"Call nurses, doctors, care workers seeking placements"}
  ],commission:"15-25% of placed worker annual salary"},
  {n:8,title:"Renewable Energy PPA Brokerage",cat:"Energy",sides:3,teams:[
    {l:"A",desc:"Call large energy consumers (factories, retailers)"},
    {l:"B",desc:"Call solar/wind farm developers with capacity to sell"},
    {l:"C",desc:"Call grid operators & regulators for compliance advisory fees"}
  ],commission:"1-3% of contract value annually"},
  {n:9,title:"SaaS Reseller / Referral Network",cat:"Tech",sides:2,teams:[
    {l:"A",desc:"Call SaaS vendors to recruit them into your referral network"},
    {l:"B",desc:"Call SMEs & enterprises needing software solutions"}
  ],commission:"15-30% recurring monthly commission"},
  {n:10,title:"IT Outsourcing Brokerage",cat:"Tech",sides:2,teams:[
    {l:"A",desc:"Call companies needing offshore dev / IT teams"},
    {l:"B",desc:"Call dev studios in Eastern Europe, Asia, LATAM"}
  ],commission:"10-15% of contract value"},
  {n:11,title:"Executive Recruitment (Headhunting)",cat:"HR / Staffing",sides:2,teams:[
    {l:"A",desc:"Call corporations needing C-suite / VP-level talent"},
    {l:"B",desc:"Call passive senior candidates in your talent pool"}
  ],commission:"20-33% of placed exec annual salary"},
  {n:12,title:"Trade Finance Brokerage",cat:"Finance",sides:3,teams:[
    {l:"A",desc:"Call importers/exporters needing letters of credit or financing"},
    {l:"B",desc:"Call banks and alternative trade finance providers"},
    {l:"C",desc:"Call customs agents, freight brokers for referral loops"}
  ],commission:"0.5-2% of trade value"},
  {n:13,title:"Carbon Credit Brokerage",cat:"Sustainability",sides:3,teams:[
    {l:"A",desc:"Call corporations with net-zero targets needing credits"},
    {l:"B",desc:"Call carbon project developers (forestry, methane, soil)"},
    {l:"C",desc:"Call ESG consultants & auditors for deal referrals"}
  ],commission:"5-15% of credit value"},
  {n:14,title:"Hotel & Conference Venue Brokerage",cat:"Events",sides:2,teams:[
    {l:"A",desc:"Call event planners, corporations needing venues"},
    {l:"B",desc:"Call hotels, conference centers, resorts seeking bookings"}
  ],commission:"8-15% of booking value"},
  {n:15,title:"Fleet Financing Brokerage",cat:"Finance",sides:2,teams:[
    {l:"A",desc:"Call logistics, taxi, delivery companies needing vehicle fleets"},
    {l:"B",desc:"Call fleet leasing companies and vehicle finance lenders"}
  ],commission:"1-3% of total fleet value"},
  {n:16,title:"Machinery & Equipment Leasing",cat:"Industrial",sides:2,teams:[
    {l:"A",desc:"Call manufacturers, construction firms needing equipment"},
    {l:"B",desc:"Call leasing companies and equipment vendors"}
  ],commission:"1-4% of lease value"},
  {n:17,title:"White-Label Manufacturing Brokerage",cat:"Industrial",sides:2,teams:[
    {l:"A",desc:"Call brands/retailers needing white-label production"},
    {l:"B",desc:"Call factories in Asia/Eastern Europe with spare capacity"}
  ],commission:"3-8% of production order"},
  {n:18,title:"Telecom Services Brokerage",cat:"Tech",sides:2,teams:[
    {l:"A",desc:"Call businesses to audit and renegotiate telecom contracts"},
    {l:"B",desc:"Call telecom operators offering better B2B packages"}
  ],commission:"20-40% of savings generated"},
  {n:19,title:"Cybersecurity Vendor Brokerage",cat:"Tech",sides:2,teams:[
    {l:"A",desc:"Call IT managers and CISOs needing security solutions"},
    {l:"B",desc:"Call cybersecurity vendors seeking enterprise customers"}
  ],commission:"15-25% of contract value"},
  {n:20,title:"Legal Process Outsourcing",cat:"Legal",sides:2,teams:[
    {l:"A",desc:"Call law firms and legal depts needing paralegal/LPO support"},
    {l:"B",desc:"Call LPO providers in India, Philippines, Eastern Europe"}
  ],commission:"10-15% of project value"},
  {n:21,title:"Private Credit / Alt-Lending Brokerage",cat:"Finance",sides:3,teams:[
    {l:"A",desc:"Call SMEs needing non-bank financing (bridge, mezzanine)"},
    {l:"B",desc:"Call family offices, debt funds with capital to deploy"},
    {l:"C",desc:"Call accountants and advisors for warm referral flow"}
  ],commission:"1-3% of loan arranged"},
  {n:22,title:"Data Center / Colocation Brokerage",cat:"Tech",sides:2,teams:[
    {l:"A",desc:"Call enterprises needing colocation / cloud hosting"},
    {l:"B",desc:"Call data center operators with rack space to fill"}
  ],commission:"5-12% of contract TCV"},
  {n:23,title:"Pharmaceutical Licensing Brokerage",cat:"Healthcare",sides:3,teams:[
    {l:"A",desc:"Call pharma companies with IP/molecules to license out"},
    {l:"B",desc:"Call mid-tier pharma seeking pipeline assets"},
    {l:"C",desc:"Call CROs and regulatory consultants for deal support fees"}
  ],commission:"2-5% of licensing deal value"},
  {n:24,title:"Agricultural Commodity Brokerage",cat:"Agriculture",sides:3,teams:[
    {l:"A",desc:"Call farmers, cooperatives with surplus produce"},
    {l:"B",desc:"Call food processors, wholesalers, exporters"},
    {l:"C",desc:"Call logistics providers, cold chain operators for referrals"}
  ],commission:"1-3% of commodity value"},
  {n:25,title:"Franchise Brokerage",cat:"Business",sides:3,teams:[
    {l:"A",desc:"Call franchise owners looking to expand or sell territory"},
    {l:"B",desc:"Call entrepreneurs and investors seeking franchises"},
    {l:"C",desc:"Call franchise consultants and lawyers for referral agreements"}
  ],commission:"10-20% of franchise fee"},
  {n:26,title:"Art & Collectibles Advisory",cat:"Luxury",sides:3,teams:[
    {l:"A",desc:"Call UHNW individuals / estates with art to sell"},
    {l:"B",desc:"Call collectors, family offices, museums seeking acquisitions"},
    {l:"C",desc:"Call auction houses, restorers, insurers for referral income"}
  ],commission:"5-15% of sale price"},
  {n:27,title:"Marine & Yacht Charter Brokerage",cat:"Luxury",sides:2,teams:[
    {l:"A",desc:"Call yacht owners and charter operators seeking clients"},
    {l:"B",desc:"Call corporate clients, UHNW individuals seeking charters"}
  ],commission:"15-20% of charter fee"},
  {n:28,title:"Private Aviation Brokerage",cat:"Luxury",sides:2,teams:[
    {l:"A",desc:"Call jet operators and owners with empty-leg inventory"},
    {l:"B",desc:"Call corporates and UHNW clients needing private flights"}
  ],commission:"10-15% of flight value"},
  {n:29,title:"Recruitment Process Outsourcing (RPO)",cat:"HR / Staffing",sides:3,teams:[
    {l:"A",desc:"Call companies with high-volume hiring needs"},
    {l:"B",desc:"Call RPO vendors and recruitment firms with capacity"},
    {l:"C",desc:"Call HRIS vendors for integration referral commissions"}
  ],commission:"8-15% of placed salary or project fee"},
  {n:30,title:"Supply Chain Finance Brokerage",cat:"Finance",sides:3,teams:[
    {l:"A",desc:"Call large buyers wanting to extend payment terms"},
    {l:"B",desc:"Call suppliers needing early payment on receivables"},
    {l:"C",desc:"Call banks and fintech platforms providing the financing"}
  ],commission:"0.3-1% of receivables financed"},
  {n:31,title:"Food & Beverage Distribution Brokerage",cat:"FMCG",sides:3,teams:[
    {l:"A",desc:"Call food producers needing retail distribution"},
    {l:"B",desc:"Call supermarket chains, distributors, HORECA buyers"},
    {l:"C",desc:"Call logistics firms and cold-chain providers for referrals"}
  ],commission:"3-8% of order value"},
  {n:32,title:"EV Charging Infrastructure Brokerage",cat:"Energy",sides:3,teams:[
    {l:"A",desc:"Call property owners, parking operators seeking EV revenue"},
    {l:"B",desc:"Call EV charging vendors needing installation locations"},
    {l:"C",desc:"Call fleet operators for charging contracts"}
  ],commission:"5-10% of installation value + recurring"},
  {n:33,title:"Waste Management & Recycling Brokerage",cat:"Sustainability",sides:2,teams:[
    {l:"A",desc:"Call manufacturers, retailers with waste streams"},
    {l:"B",desc:"Call recyclers, waste processors, circular economy firms"}
  ],commission:"5-15% of contract value"},
  {n:34,title:"Hotel Revenue Management Outsourcing",cat:"Hospitality",sides:2,teams:[
    {l:"A",desc:"Call hotel GMs and owners frustrated with occupancy rates"},
    {l:"B",desc:"Call revenue management firms and OTA consultants"}
  ],commission:"10-20% of incremental revenue generated"},
  {n:35,title:"Digital Marketing Agency Marketplace",cat:"Marketing",sides:2,teams:[
    {l:"A",desc:"Call SMEs and brands needing marketing campaigns"},
    {l:"B",desc:"Call specialist agencies (SEO, PPC, social, content)"}
  ],commission:"10-20% of agency contract value"},
  {n:36,title:"Education & Training Brokerage",cat:"Education",sides:3,teams:[
    {l:"A",desc:"Call HR directors needing L&D / corporate training"},
    {l:"B",desc:"Call training providers, business schools, coaches"},
    {l:"C",desc:"Call LMS vendors for tech referral commissions"}
  ],commission:"10-20% of training contract"},
  {n:37,title:"Healthcare Equipment Leasing",cat:"Healthcare",sides:2,teams:[
    {l:"A",desc:"Call hospitals, clinics needing MRI/CT/lab equipment"},
    {l:"B",desc:"Call medical equipment leasing companies"}
  ],commission:"2-4% of lease value"},
  {n:38,title:"Commercial Printing Brokerage",cat:"FMCG",sides:2,teams:[
    {l:"A",desc:"Call brands and retailers with packaging/print needs"},
    {l:"B",desc:"Call print factories with spare production capacity"}
  ],commission:"8-15% of print order value"},
  {n:39,title:"Fintech Integration Brokerage",cat:"Finance",sides:2,teams:[
    {l:"A",desc:"Call banks, credit unions needing fintech solutions"},
    {l:"B",desc:"Call fintech vendors seeking enterprise bank clients"}
  ],commission:"15-25% of contract TCV"},
  {n:40,title:"Mining & Resources Royalty Brokerage",cat:"Industrial",sides:3,teams:[
    {l:"A",desc:"Call mining companies with royalty streams to monetize"},
    {l:"B",desc:"Call royalty funds, streaming companies seeking deals"},
    {l:"C",desc:"Call mining engineers and geologists for due diligence referrals"}
  ],commission:"1-3% of royalty deal value"},
  {n:41,title:"IP & Patent Licensing Brokerage",cat:"Legal",sides:3,teams:[
    {l:"A",desc:"Call inventors, universities, companies with dormant IP"},
    {l:"B",desc:"Call manufacturers, tech firms wanting to license IP"},
    {l:"C",desc:"Call patent attorneys and IP consultants for referrals"}
  ],commission:"10-20% of licensing deal"},
  {n:42,title:"Hotel Distressed Asset Brokerage",cat:"Real Estate",sides:4,teams:[
    {l:"A",desc:"Call distressed hotel owners / banks with NPL hotels"},
    {l:"B",desc:"Call turnaround operators and hotel management groups"},
    {l:"C",desc:"Call PE / opportunity funds to acquire at discount"},
    {l:"D",desc:"Call brand licensors (Marriott, IHG) to re-flag the asset"}
  ],commission:"2-4% of asset value"},
  {n:43,title:"Cross-Border Payments Brokerage",cat:"Finance",sides:2,teams:[
    {l:"A",desc:"Call importers/exporters with high FX transaction costs"},
    {l:"B",desc:"Call FX platforms and payment providers seeking volume"}
  ],commission:"0.1-0.3% of FX volume"},
  {n:44,title:"Outsourced CFO / Finance Function",cat:"Finance",sides:2,teams:[
    {l:"A",desc:"Call scaling SMEs needing fractional CFO / finance ops"},
    {l:"B",desc:"Call outsourced CFO firms and finance BPO providers"}
  ],commission:"10-15% of annual engagement value"},
  {n:45,title:"Cybersecurity Insurance Brokerage",cat:"Insurance",sides:3,teams:[
    {l:"A",desc:"Call IT-heavy businesses with cyber exposure"},
    {l:"B",desc:"Call cyber insurance underwriters and specialist brokers"},
    {l:"C",desc:"Call MSSPs and security firms for referral partnerships"}
  ],commission:"15-25% of annual premium"},
  {n:46,title:"Construction & Engineering Subcontractor Brokerage",cat:"Industrial",sides:3,teams:[
    {l:"A",desc:"Call main contractors needing specialist subs"},
    {l:"B",desc:"Call subcontractors seeking project work"},
    {l:"C",desc:"Call material suppliers for referral income"}
  ],commission:"2-5% of subcontract value"},
  {n:47,title:"Renewable Energy Project Finance",cat:"Energy",sides:4,teams:[
    {l:"A",desc:"Call renewable developers needing project finance"},
    {l:"B",desc:"Call green bond investors and infrastructure funds"},
    {l:"C",desc:"Call development banks and grant advisors"},
    {l:"D",desc:"Call EPC contractors and O&M firms for referral income"}
  ],commission:"1-2% of project finance arranged"},
  {n:48,title:"Sport Sponsorship Brokerage",cat:"Marketing",sides:3,teams:[
    {l:"A",desc:"Call sports teams, athletes, leagues needing sponsors"},
    {l:"B",desc:"Call brands seeking sports sponsorship exposure"},
    {l:"C",desc:"Call sports agencies and PR firms for referral deals"}
  ],commission:"10-20% of sponsorship deal"},
  {n:49,title:"BPO / Call Center Outsourcing",cat:"HR / Staffing",sides:3,teams:[
    {l:"A",desc:"Call companies needing to outsource customer ops"},
    {l:"B",desc:"Call BPO/call center operators with capacity"},
    {l:"C",desc:"Call CRM and workforce mgmt vendors for referrals"}
  ],commission:"8-12% of BPO contract value"},
  {n:50,title:"Distressed Loan / NPL Portfolio Brokerage",cat:"Finance",sides:4,teams:[
    {l:"A",desc:"Call banks with non-performing loan portfolios to sell"},
    {l:"B",desc:"Call debt buyers, NPL funds, servicers"},
    {l:"C",desc:"Call law firms and debt collection agencies"},
    {l:"D",desc:"Call rating agencies and due diligence providers"}
  ],commission:"1-3% of portfolio face value"}
];
