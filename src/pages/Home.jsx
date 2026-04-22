import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Landmark, Building, FileText, CheckSquare, Square } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const banks = [
    { id: 'sbi', name: 'SBI', fullName: 'State Bank of India', icon: Landmark, color: '#3b82f6' },
    { id: 'bob', name: 'BOB', fullName: 'Bank of Baroda', icon: Building2, color: '#f97316' },
    { id: 'bom', name: 'BOM', fullName: 'Bank of Maharashtra', icon: Building, color: '#ef4444' },
    { id: 'other', name: 'Other', fullName: 'Other Banks', icon: Building, color: '#8b5cf6' }
  ];

  const handleBankClick = (bankId) => {
    setSelectedBank(bankId);
    setAgreed(false);
  };

  const handleContinue = () => {
    if (agreed && selectedBank) {
      navigate(`/tester/${selectedBank}`);
    }
  };

  return (
    <>
      <div className="container" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="text-gradient">Select Your Bank</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Please select your bank to configure the GPS device tester</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          width: '100%'
        }}>
          {banks.map((bank) => {
            const Icon = bank.icon;
            return (
              <div 
                key={bank.id}
                className="glass-card"
                onClick={() => handleBankClick(bank.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  borderTop: `3px solid ${bank.color}`
                }}
              >
                <div style={{
                  background: `${bank.color}20`,
                  padding: '1rem',
                  borderRadius: '50%',
                  marginBottom: '1rem'
                }}>
                  <Icon size={32} color={bank.color} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{bank.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{bank.fullName}</p>
              </div>
            );
          })}
        </div>
      </div>

      {selectedBank && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
        }}>
          <div className="glass-panel" style={{ width: '600px', maxWidth: '95%', background: 'var(--bg-card)', padding: 0, overflow: 'hidden', animation: 'pulse 0.3s' }}>
            
            <div style={{ background: '#1e3a8a', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
              <FileText size={24} />
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Terms and Conditions & Privacy Policy</h2>
            </div>
            
            <div style={{ padding: '2rem 1.5rem', maxHeight: '50vh', overflowY: 'auto' }}>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.1rem' }}>1. Device Testing Terms</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                By using this GPS8.0 Device Testing tool, you agree to the following terms and conditions:
              </p>
              <ul style={{ color: 'var(--text-muted)', marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
                <li style={{ marginBottom: '0.5rem' }}>This tool will collect device information including serial number, firmware version, and device status.</li>
                <li style={{ marginBottom: '0.5rem' }}>GPS location coordinates will be captured and stored for quality control and device verification.</li>
                <li>Test results and device performance data will be logged and stored for product improvement.</li>
              </ul>

              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.1rem' }}>2. Data Collection and Privacy</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                We take your privacy seriously. The data we collect is used only for the following purposes:
              </p>
              <ul style={{ color: 'var(--text-muted)', marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
                <li style={{ marginBottom: '0.5rem' }}>Quality assurance and verification of device functionality</li>
                <li style={{ marginBottom: '0.5rem' }}>Improvement of our products and services</li>
                <li style={{ marginBottom: '0.5rem' }}>Technical support and troubleshooting</li>
                <li>Warranty validation and device history tracking</li>
              </ul>

              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.1rem' }}>3. Data Security</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                All collected data is securely stored in our protected database. We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and device data.
              </p>

              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.1rem' }}>4. Data Retention</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                Device test data is retained for a period necessary to fulfill the purposes outlined in this policy, typically for the duration of the product's expected lifecycle plus two years for warranty and support purposes.
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', color: 'var(--text-light)' }}>
                <input 
                  type="checkbox" 
                  checked={agreed} 
                  onChange={(e) => setAgreed(e.target.checked)} 
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }} 
                />
                <span style={{ fontSize: '0.95rem' }}>I agree to the Terms and Conditions and Privacy Policy</span>
              </label>
              <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto' }}>
                 <button onClick={() => setSelectedBank(null)} className="btn" style={{ background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-light)' }}>Cancel</button>
                 <button onClick={handleContinue} className="btn btn-primary" disabled={!agreed} style={{ opacity: agreed ? 1 : 0.5, cursor: agreed ? 'pointer' : 'not-allowed' }}>Continue</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
