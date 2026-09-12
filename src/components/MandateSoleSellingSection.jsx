import React from 'react';
import { Link } from 'react-router-dom';
import './MandateSoleSellingSection.css';

const projectObservationPoints = [
  {
    title: 'DEMAND ANALYSIS',
    description: 'Understand market demand, buyer behaviour and project potential to build an effective sales strategy.'
  },
  {
    title: '300+ CHANNEL PARTNER NETWORK',
    description: 'Leverage our 300+ channel partner network to expand project reach and create multiple sales opportunities.',
    featuredStat: '300+'
  },
  {
    title: 'LEAD GENERATION',
    description: 'Generate qualified enquiries through targeted digital marketing, channel partners and performance-driven campaigns.'
  },
  {
    title: 'LOCATION ADVANTAGE',
    description: 'Analyse location, connectivity, infrastructure and surrounding development to identify the project\'s strongest selling points.'
  }
];

const audienceProfiles = [
  {
    percentage: '50%',
    title: 'IT Professionals',
    description: 'Primary target segment with strong property purchase potential.'
  },
  {
    percentage: '35%',
    title: 'Investors',
    description: 'Targeted for investment-driven opportunities and high-value prospects.'
  },
  {
    percentage: '10%',
    title: 'Premium Buyers',
    description: 'Focused targeting for premium and luxury property requirements.'
  },
  {
    percentage: '5%',
    title: 'References',
    description: 'Referral-driven opportunities from existing clients and network.'
  }
];

const competitorCards = [
  {
    icon: '₨',
    title: 'PRICING',
    description: 'Compare market pricing and establish a competitive value proposition.'
  },
  {
    icon: '✦',
    title: 'AMENITIES',
    description: 'Analyse competing amenities and highlight the project\'s unique lifestyle benefits.'
  },
  {
    icon: '⌁',
    title: 'CONNECTIVITY',
    description: 'Compare location connectivity, infrastructure, IT hubs, commercial zones and important landmarks.'
  },
  {
    icon: '▣',
    title: 'SPECIFICATIONS',
    description: 'Evaluate configurations, carpet areas, specifications and overall project value against competitors.'
  }
];

const funnelSteps = [
  {
    number: 'STEP 01',
    title: '300+ CHANNEL PARTNER BASE',
    description: 'Activate our extensive channel partner ecosystem to maximize market reach and project visibility.'
  },
  {
    number: 'STEP 02',
    title: 'META & GOOGLE ADS',
    description: 'Run targeted digital campaigns to reach high-intent buyers and investors.'
  },
  {
    number: 'STEP 03',
    title: 'SITE VISITS',
    description: 'Qualify leads, follow up with prospects and convert genuine enquiries into site visits.'
  },
  {
    number: 'STEP 04',
    title: 'REFERRAL CAMPAIGNS',
    description: 'Generate additional opportunities through customer, channel partner and referral networks.'
  }
];

function MandateSoleSellingSection() {
  return (
    <section className="mandate-sole-section" aria-labelledby="mandate-sole-selling-heading">
      <div className="mandate-sole-section__inner">
        <header className="mandate-sole-section__header">
          <div className="mandate-sole-section__topline">
            <span className="mandate-sole-section__line"></span>
            <span className="mandate-sole-section__kicker">MG Realtys • Development Sales Strategy</span>
            <span className="mandate-sole-section__line"></span>
          </div>
          <h2 id="mandate-sole-selling-heading" className="mandate-sole-section__title">
            Mandate &amp; Sole Selling
          </h2>
          <p className="mandate-sole-section__subtitle">
            Strategic Sales &amp; Marketing Solutions That Drive Project Growth
          </p>
          <p className="mandate-sole-section__intro">
            From market analysis to lead generation and site visit conversion, MG Realtys provides an end-to-end sales strategy designed to maximize project visibility, qualified enquiries and sales opportunities.
          </p>
        </header>

        <section className="mandate-part mandate-part-observation">
          <div className="mandate-part__heading">
            <span className="mandate-part__number">01 —</span>
            <h3 className="mandate-part__title">Project Observation</h3>
          </div>
          <p className="mandate-part__summary">
            Before marketing a project, MG Realtys studies the project, market and buyer demand.
          </p>
          <div className="mandate-observation-grid">
            {projectObservationPoints.map((point, index) => (
              <article className="mandate-observation-card" key={point.title}>
                {point.featuredStat ? (
                  <div className="mandate-stat">
                    <span className="mandate-stat__number">{point.featuredStat}</span>
                    <span className="mandate-stat__label">Channel Partners</span>
                  </div>
                ) : (
                  <span className="mandate-card-icon" aria-hidden="true">
                    {index === 0 ? '◌' : index === 2 ? '↗' : '⌕'}
                  </span>
                )}
                <div className="mandate-card-body">
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mandate-part mandate-part-audience">
          <div className="mandate-part__heading">
            <span className="mandate-part__number">02 —</span>
            <h3 className="mandate-part__title">Target Audience by Profile</h3>
          </div>
          <p className="mandate-part__subtitle">
            We identify and target the right buyer segments for every project.
          </p>

          <div className="mandate-audience-layout">
            <div className="mandate-audience-chart-wrap">
              <div className="mandate-audience-chart" aria-label="Target audience distribution">
                <div className="mandate-audience-chart__inner">
                  <span className="mandate-audience-chart__label">Audience Mix</span>
                  <span className="mandate-audience-chart__core">4 Profiles</span>
                </div>
              </div>
            </div>

            <div className="mandate-audience-breakdown">
              {audienceProfiles.map((profile) => (
                <article className="mandate-profile-card" key={profile.title}>
                  <div className="mandate-profile-card__top">
                    <span className="mandate-profile-card__percent">{profile.percentage}</span>
                    <span className="mandate-profile-card__title">{profile.title}</span>
                  </div>
                  <p>{profile.description}</p>
                </article>
              ))}
              <div className="mandate-profile-tagline">
                <span>Right Audience. Right Message. Right Property.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mandate-part mandate-part-competitor">
          <div className="mandate-part__heading">
            <span className="mandate-part__number">03 —</span>
            <h3 className="mandate-part__title">Competitor Analysis</h3>
          </div>
          <p className="mandate-part__subtitle">
            We position every project strategically by understanding its competitive market.
          </p>
          <div className="mandate-competitor-grid">
            {competitorCards.map((card) => (
              <article className="mandate-competitor-card" key={card.title}>
                <span className="mandate-competitor-icon" aria-hidden="true">{card.icon}</span>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mandate-part mandate-part-marketing">
          <div className="mandate-part__heading centered">
            <span className="mandate-part__number">04 —</span>
            <h3 className="mandate-part__title">Marketing Strategy</h3>
          </div>
          <p className="mandate-part__subtitle centered">
            An integrated approach to generate leads, drive site visits and maximize conversions.
          </p>

          <div className="mandate-funnel">
            <div className="mandate-funnel__vertical">
              {funnelSteps.map((step, index) => (
                <div className="mandate-funnel-step" key={step.title}>
                  <span className="mandate-funnel-step__connector" aria-hidden="true"></span>
                  <div className="mandate-funnel-step__content">
                    <span className="mandate-funnel-step__number">{step.number}</span>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {index < funnelSteps.length - 1 && (
                    <span className="mandate-funnel-drop" aria-hidden="true">↓</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mandate-funnel-flow" aria-label="Marketing funnel flow">
              <span className="mandate-flow-label">300+ Channel Partners</span>
              <span className="mandate-flow-arrow">↓</span>
              <span className="mandate-flow-label">Meta &amp; Google Ads</span>
              <span className="mandate-flow-arrow">↓</span>
              <span className="mandate-flow-label">Qualified Leads</span>
              <span className="mandate-flow-arrow">↓</span>
              <span className="mandate-flow-label">Site Visits</span>
              <span className="mandate-flow-arrow">↓</span>
              <span className="mandate-flow-label">Referrals &amp; Conversions</span>
            </div>
          </div>
        </section>

        <section className="mandate-cta-banner">
          <div className="mandate-cta-banner__content">
            <span className="mandate-cta-banner__label">Mandate &amp; Sole Selling</span>
            <h3>Want to Maximize Your Project Sales?</h3>
            <p>Partner with MG Realtys for professional Mandate &amp; Sole Selling solutions.</p>
          </div>
          <Link className="mandate-cta-banner__button" to="/contact">
            Discuss Your Project →
          </Link>
        </section>
      </div>
    </section>
  );
}

export default MandateSoleSellingSection;
