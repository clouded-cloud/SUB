import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Company</h1>
      
      <div className="about-content">
        <p className="about-paragraph">
          A security audit will provide a roadmap of your organization's main information security 
          weaknesses and identify where it is meeting the criteria the organization has set out to 
          follow and where it isn't. Security audits are crucial to developing risk assessment 
          plans and mitigation strategies for organizations dealing with sensitive and confidential data.
        </p>
        
        <p className="about-paragraph highlight">
          Successful security audits should give your team a snapshot of your organization's security 
          posture at that point in time and provide enough detail to give your team a place to start 
          with remediation or improvement activities. Some security-centric audits may also serve as 
          formal compliance audits, completed by a third-party audit team for the purpose of certifying 
          against ISO 27001 or receiving a SOC 2 attestation, for example.
        </p>
        
        <p className="about-paragraph">
          Security audits also provide your organization with a different view of IT security practices 
          and strategy, whether they are conducted by an internal audit function or through an external 
          audit. Having your organization's security policies scrutinized can provide valuable insights 
          into how to implement better controls or streamline existing processes. With cyber-attacks 
          coming from every angle and some threats originating internally, having a faceted view of 
          cybersecurity amplifies an organization's capability to respond to security threats.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;