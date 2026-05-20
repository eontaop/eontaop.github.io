import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function AboutNav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '64px', background: 'rgba(6,9,15,0.9)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'linear-gradient(135deg, #155dfc, #00d4aa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 800, color: '#fff' }}>颀</div>
        <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>颀信软件</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
        {[{ label: '首页', href: '/' }, { label: '产品功能', href: '/#features' }, { label: '关于我们', href: '/about' }].map(l => (
          <a key={l.label} href={l.href} style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{l.label}</a>
        ))}
      </div>
      <Link to="#" style={{ padding: '9px 20px', borderRadius: '8px', background: 'linear-gradient(135deg, #155dfc, #3b7bff)', color: '#fff', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>产品演示 →</Link>
    </nav>
  );
}

export default function About() {
  return (
    <Layout title="关于我们" description="深圳市颀信软件有限公司 — 通用行业ERP解决方案">
      <AboutNav />
      <main style={{ background: '#06090f', minHeight: '100vh', paddingTop: '64px' }}>
        {/* 顶部光效 */}
        <div style={{ position: 'relative', textAlign: 'center', padding: '80px 48px 60px', background: '#06090f', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(21,93,252,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '16px' }}>
              <span style={{ width: '20px', height: '2px', background: '#155dfc', borderRadius: '1px' }} />
              About Us
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#f9fafb', marginBottom: '16px', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              关于颀信软件
            </h1>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              专注于企业数字化转型，用技术力量推动中国制造升级
            </p>
          </div>
        </div>

        {/* 公司介绍 */}
        <section style={{ background: '#0b1120', padding: '80px 48px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, color: '#f9fafb', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                让每一家企业都能享受<br />
                <span style={{ background: 'linear-gradient(135deg, #155dfc, #00d4aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>数字化转型的红利</span>
              </h2>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8, marginBottom: '16px' }}>
                深圳市颀信软件有限公司是一家专注于企业数字化转型的软件企业，致力于为通用制造业提供最专业的 ERP 解决方案。通过技术创新，帮助传统制造企业实现降本增效。
              </p>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8, marginBottom: '28px' }}>
                我们拥有十余年的行业深耕经验，服务企业客户覆盖华南、华东等多个地区，产品覆盖销售、采购、库存、生产、财务等全业务流程，始终保持行业领先。
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '10px', background: 'linear-gradient(135deg, #155dfc, #3b7bff)', color: '#fff', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                  免费试用 →
                </Link>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                  联系我们
                </Link>
              </div>
            </div>
            {/* 统计数据 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { num: '11+', label: '年行业深耕', color: '#155dfc' },
                { num: '500+', label: '服务企业客户', color: '#0891b2' },
                { num: '99.9%', label: '系统稳定性', color: '#059669' },
                { num: '7×24', label: '技术支持', color: '#9333ea' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center', padding: '28px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px' }}>
                  <div style={{ fontSize: 'clamp(36px, 5.5vw, 48px)', fontWeight: 800, background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系信息 */}
        <section style={{ background: '#06090f', padding: '80px 48px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f9fafb', marginBottom: '8px' }}>联系我们</h2>
              <p style={{ fontSize: '15px', color: '#64748b' }}>获取免费系统演示和行业解决方案</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', textAlign: 'center' }}>
              {[
                { icon: '📞', label: '联系电话', value: '400-888-8888', sub: '周一至周五 9:00-18:00' },
                { icon: '💬', label: '商务咨询', value: '扫码添加微信', sub: '一对一专属顾问服务' },
                { icon: '📍', label: '公司地址', value: '深圳市南山区科技园', sub: '粤海街道xxx号' },
              ].map(c => (
                <div key={c.label}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{c.icon}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' }}>{c.value}</div>
                  <div style={{ fontSize: '12px', color: '#475569' }}>{c.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <Link to="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '12px', background: 'linear-gradient(135deg, #155dfc, #3b7bff)', color: '#fff', fontSize: '15px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(21,93,252,0.35)' }}>
                申请免费试用 →
              </Link>
            </div>
          </div>
        </section>

        {/* 底部 */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#334155' }}>Copyright © {new Date().getFullYear()} 深圳市颀信软件有限公司 | 竭诚为您服务</span>
          <span style={{ fontSize: '12px', color: '#334155' }}>粤ICP备xxxxxxxx号</span>
        </div>
      </main>
    </Layout>
  );
}
