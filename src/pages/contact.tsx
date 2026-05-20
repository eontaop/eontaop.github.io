import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="联系我们" description="联系颀信软件，获取ERP解决方案">
      <main style={{ background: 'linear-gradient(180deg, #0a0f1d, #0f1628)', minHeight: '100vh', paddingTop: '80px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 24px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            联系我们
          </h1>
          <p style={{ color: '#9ca3af', textAlign: 'center', marginBottom: '40px' }}>
            获取免费系统演示和行业解决方案
          </p>

          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📞</div>
            <h2 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px' }}>400-888-8888</h2>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '24px' }}>周一至周五 9:00-18:00</p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '16px' }}>
                扫码添加专属顾问微信，获取一对一服务
              </p>
              <Link
                to="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 32px',
                  background: 'linear-gradient(135deg, #155dfc, #1d6ef5)',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                立即试用 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
