import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// =============================================
// 滚动动画 Hook
// =============================================
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

// =============================================
// 数据
// =============================================
const PROBLEMS = [
  { icon: '📊', title: '排产混乱', desc: '插单频繁，交期不可控，设备利用率低下' },
  { icon: '🏷️', title: '批次混乱', desc: '成品、半成品无法快速追溯，批次管理困难' },
  { icon: '⚙️', title: '配方版本混乱', desc: '容易用错料，质量不稳定，历史版本难追溯' },
  { icon: '🔗', title: '多工序断层', desc: '各工序数据不连贯，造成严重的信息孤岛' },
  { icon: '📉', title: '损耗不清晰', desc: '生产损耗无法统计，成本核算不精准' },
  { icon: '💰', title: '财务对不上', desc: '库存与账务数据不一致，月底对账耗时耗力' },
];

const FEATURES = [
  { icon: '📦', title: '销售管理', items: ['客户订单管理', '交期跟踪', '销售统计分析'], color: '#155dfc', bg: 'rgba(21,93,252,0.08)' },
  { icon: '🛒', title: '采购管理', items: ['原材料采购', '供应商管理', '采购入库'], color: '#7c3aed', bg: 'rgba(124,58,237,0.08)' },
  { icon: '🏭', title: '库存管理', items: ['批次/序列号管理', '多仓库管理', '实时库存'], color: '#0891b2', bg: 'rgba(8,145,178,0.08)' },
  { icon: '⚙️', title: '生产管理', items: ['工单管理', '工序流转', '生产进度跟踪'], color: '#059669', bg: 'rgba(5,150,105,0.08)' },
  { icon: '🧪', title: '配方管理', items: ['配方版本控制', '原料比例管理', '替代料管理'], color: '#d97706', bg: 'rgba(217,119,6,0.08)' },
  { icon: '💵', title: '财务管理', items: ['应收应付', '成本核算', '利润分析'], color: '#dc2626', bg: 'rgba(220,38,38,0.08)' },
  { icon: '🔧', title: '设备管理', items: ['设备台账', '保养计划', '维修记录'], color: '#6b7280', bg: 'rgba(100,116,139,0.08)' },
  { icon: '✅', title: '质量管理', items: ['来料检验', '生产质检', '成品检测'], color: '#0d9488', bg: 'rgba(13,148,136,0.08)' },
  { icon: '🤖', title: 'AI 智能排产', items: ['自动排产优化', '瓶颈预测', '交期预警'], color: '#9333ea', bg: 'rgba(147,51,234,0.08)' },
];

const SOLUTIONS = [
  { icon: '🏭', title: '制造业', desc: '离散制造、流程制造，适合多品种小批量生产模式' },
  { icon: '🧵', title: '纺织服装', desc: '按单生产，工序流转，颜色/尺码管理' },
  { icon: '📦', title: '仓储物流', desc: '批次管理，出入库跟踪，库存预警' },
  { icon: '🔩', title: '电子组装', desc: '物料 BOM，工序报工，品质追溯' },
  { icon: '🏗️', title: '建材加工', desc: '按项目核算，材料用量管控' },
  { icon: '🍷', title: '食品医药', desc: '批次追溯，保质期管理，合规报表' },
];

const PRICING = [
  { name: '订阅版', price: '5,980', unit: '/年', target: '适合初创型企业', features: ['进销存+生产+财务全模块', 'AI 智能排产', '支持手机 APP', '10 用户授权', '每月功能升级', '全年专属顾问服务'], popular: false },
  { name: '买断版', price: '39,800', unit: '永久', target: '适合中大型企业', features: ['标准版全部功能', '20 用户授权', '首年专属顾问服务', '支持补差价升级', '数据本地存储'], popular: true },
  { name: '私有化部署', price: '59,800', unit: '永久', target: '适合对数据安全有高要求的企业', features: ['标准版全部功能', '不限制用户数', '数据私有化存储', '支持定制化开发', '上门安装培训', '首年专属顾问服务'], popular: false },
];

const CASES = [
  { company: '佛山某新材料科技有限公司', improvement: '生产效率提升 30%', desc: '工控平板记录所有生产参数，工序全流程打通，生产进度实时掌握。' },
  { company: '深圳某电子科技有限公司', improvement: '交期准时率提升 40%', desc: '各工序数据无缝衔接，减少信息传递延误，交付更有保障。' },
  { company: '东莞某制造有限公司', improvement: '对账效率提升 80%', desc: '销售、仓管、财务数据自动流转，彻底解决岗位间信息孤岛。' },
];

const PROCESS = ['销售订单', '生产计划', '物料采购', '生产执行', '质量检验', '成品入库', '销售出库'];

// =============================================
// 主导航栏
// =============================================
function NavBar() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '64px',
      background: 'rgba(6,9,15,0.85)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{
          width: '34px', height: '34px', borderRadius: '8px',
          background: 'linear-gradient(135deg, #155dfc, #00d4aa)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '15px', fontWeight: 800, color: '#fff',
        }}>颀</div>
        <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>颀信软件</span>
      </div>

      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
        {[
          { label: '首页', href: '/' },
          { label: '产品功能', href: '/#features' },
          { label: '解决方案', href: '/#solutions' },
          { label: '定价', href: '/#pricing' },
          { label: '客户案例', href: '/#cases' },
        ].map(link => (
          <a key={link.label} href={link.href} style={{
            fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => (e.target.style.color = '#fff')}
          onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.7)')}>
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link to="#" style={{
          padding: '10px 24px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #155dfc, #3b7bff)',
          color: '#fff', fontSize: '14px', fontWeight: 600,
          textDecoration: 'none', boxShadow: '0 2px 12px rgba(21,93,252,0.35)',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'translateY(-1px)'; (e.target as HTMLElement).style.boxShadow = '0 4px 20px rgba(21,93,252,0.5)'; }}
        onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'translateY(0)'; (e.target as HTMLElement).style.boxShadow = '0 2px 12px rgba(21,93,252,0.35)'; }}>
          产品演示 →
        </Link>
      </div>
      </div>
    </nav>
  );
}

// =============================================
// Hero 区域
// =============================================
function HeroSection() {
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTicker(t => t + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: '#06090f', position: 'relative', overflow: 'hidden',
      paddingTop: '64px',
    }}>
      {/* 背景光效 */}
      <div style={{
        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '700px',
        background: 'radial-gradient(ellipse, rgba(21,93,252,0.18) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* 网格背景 */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.035,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* 左侧文案 */}
          <div>
            {/* 标签 */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '100px',
              background: 'rgba(21,93,252,0.12)', border: '1px solid rgba(21,93,252,0.25)',
              fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '28px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              通用行业 ERP，覆盖全业务流程
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 5.5vw, 62px)', fontWeight: 800, lineHeight: 1.1,
              letterSpacing: '-0.03em', marginBottom: '8px',
              background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              颀信 ERP
            </h1>
            <h2 style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 600,
              color: 'rgba(255,255,255,0.6)', marginBottom: '24px', letterSpacing: '-0.01em',
            }}>
              通用行业数字化管理系统
            </h2>
            <p style={{
              fontSize: '16px', color: '#6b7280', lineHeight: 1.8,
              marginBottom: '36px', maxWidth: '480px',
            }}>
              一套系统打通销售、采购、库存、生产、财务全流程，实现生产透明化、管理数字化。适配制造业、纺织服装、电子组装、仓储物流等各行各业。
            </p>

            {/* 按钮组 */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <Link to="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 36px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #155dfc, #3b7bff)',
                color: '#fff', fontSize: '16px', fontWeight: 600,
                textDecoration: 'none', boxShadow: '0 4px 20px rgba(21,93,252,0.4)',
                transition: 'all 0.2s',
              }}>
                免费试用
              </Link>
              <a href="/#features" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 36px', borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.85)', fontSize: '16px', fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.2s',
              }}>
                了解更多 ↓
              </a>
            </div>

            {/* 行业标签 */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['制造业', '纺织服装', '电子组装', '仓储物流', '建材加工'].map(tag => (
                <span key={tag} style={{
                  padding: '4px 12px', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '12px', color: '#6b7280', fontWeight: 500,
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* 右侧 Dashboard */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'rgba(11,17,32,0.8)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px', padding: '24px', backdropFilter: 'blur(20px)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}>
              {/* 顶栏 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
                  <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                ))}
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#4b5563', fontFamily: 'monospace' }}>qixin-erp.cn/dashboard</span>
              </div>
              {/* 统计卡片 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                {[
                  { label: '今日生产工单', value: '128', color: '#155dfc', change: '+12%' },
                  { label: '完成率', value: '96.2%', color: '#22c55e', change: '+3.1%' },
                  { label: '待发货订单', value: '43', color: '#f59e0b', change: '-5%' },
                  { label: '设备利用率', value: '87.5%', color: '#a855f7', change: '+8.2%' },
                ].map(s => (
                  <div key={s.label} style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px', padding: '14px',
                  }}>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: '#4b5563', marginBottom: '4px' }}>{s.label}</div>
                    <span style={{ fontSize: '10px', color: s.change.startsWith('-') && s.label === '待发货订单' ? '#22c55e' : '#22c55e', fontWeight: 600 }}>{s.change}</span>
                  </div>
                ))}
              </div>
              {/* 进度条 */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: 500 }}>实时生产进度</span>
                  <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: 600 }}>↑ 实时同步</span>
                </div>
                {[
                  { name: '订单 #2026-001', progress: 78, color: '#155dfc' },
                  { name: '订单 #2026-002', progress: 55, color: '#0891b2' },
                  { name: '订单 #2026-003', progress: 92, color: '#22c55e' },
                ].map(order => (
                  <div key={order.name} style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>{order.name}</span>
                      <span style={{ fontSize: '12px', color: order.color, fontWeight: 600 }}>{order.progress}%</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '4px', height: '6px' }}>
                      <div style={{ width: `${order.progress}%`, height: '100%', background: `linear-gradient(90deg, ${order.color}, ${order.color}99)`, borderRadius: '4px', transition: 'width 1s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 装饰光 */}
            <div style={{
              position: 'absolute', top: '-20px', right: '-20px',
              width: '120px', height: '120px',
              background: 'radial-gradient(circle, rgba(21,93,252,0.3), transparent 70%)',
              filter: 'blur(20px)',
            }} />
          </div>
        </div>
      </div>

      {/* 底部渐变条 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(21,93,252,0.3), transparent)',
      }} />
    </section>
  );
}

// =============================================
// 数据统计条
// =============================================
function StatsBar() {
  return (
    <section style={{
      background: '#06090f',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '36px 48px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '64px', flexWrap: 'wrap' }}>
        {[
          { value: '30%+', label: '生产效率提升' },
          { value: '40%+', label: '交期准时率提升' },
          { value: '80%+', label: '对账效率提升' },
          { value: '11+', label: '年行业深耕' },
          { value: '500+', label: '服务企业客户' },
        ].map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center', position: 'relative' }}>
            {i > 0 && (
              <div style={{ position: 'absolute', left: '-32px', top: '50%', transform: 'translateY(-50%)', width: '1px', height: '32px', background: 'rgba(255,255,255,0.08)' }} />
            )}
            <div style={{ fontSize: 'clamp(34px, 4.5vw, 44px)', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg, #155dfc, #00d4aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================
// 章节头部
// =============================================
function SectionHeader({ eyebrow, title, subtitle, center = true, dark = false }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean; dark?: boolean }) {
  const eyebrowColor = dark ? '#155dfc' : '#60a5fa';
  const titleColor = dark ? '#111827' : '#f9fafb';
  const subtitleColor = dark ? '#374151' : '#94a3b8';
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '56px' }}>
      {eyebrow && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: eyebrowColor, marginBottom: '12px' }}>
          <span style={{ width: '20px', height: '2px', background: eyebrowColor, borderRadius: '1px' }} />
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0 0 12px', color: titleColor, lineHeight: 1.15 }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontSize: '15px', color: subtitleColor, lineHeight: 1.7, maxWidth: '520px', margin: center ? '0 auto' : 0 }}>{subtitle}</p>}
    </div>
  );
}

// =============================================
// 业务痛点
// =============================================
function ProblemsSection() {
  return (
    <section style={{ background: '#f9fafb', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeader eyebrow="痛点分析" title="企业管理的六大难题" subtitle="颀信 ERP 一套系统，全面解决" dark />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div style={{
                background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.25s', cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; }}>
                <span style={{ fontSize: '28px', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '6px', marginTop: 0 }}>{p.title}</h3>
                  <p style={{ fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// 核心价值
// =============================================
function ValueSection() {
  const values = [
    { icon: '🔗', title: '全流程打通', desc: '从订单到生产、入库、出库、财务一体化，消除信息孤岛' },
    { icon: '🏷️', title: '批次追溯', desc: '每一件物料全程可追溯，从原料批次到成品一目了然' },
    { icon: '⚙️', title: '配方管理', desc: '严格的版本控制，精准的比例计算，避免人工操作失误' },
    { icon: '📊', title: '实时数据', desc: '生产进度、库存水位、利润分析实时更新，决策有据可依' },
  ];
  return (
    <section style={{ background: '#ffffff', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeader eyebrow="核心价值" title="为什么选择颀信 ERP？" subtitle="专为通用行业设计，深度适配多种生产模式" dark />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div style={{
                textAlign: 'center', padding: '32px 24px',
                background: '#f9fafb', border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '20px', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(21,93,252,0.04)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,93,252,0.2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f9fafb'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '10px', marginTop: 0 }}>{v.title}</h3>
                <p style={{ fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// 流程图
// =============================================
function ProcessSection() {
  return (
    <section style={{ background: '#f9fafb', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeader eyebrow="业务流程" title="业务流程数字化" subtitle="覆盖企业全生命周期，一站式管理" dark />
        </Reveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
          {PROCESS.map((step, i) => (
            <React.Fragment key={step}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '76px', height: '76px', borderRadius: '50%',
                  background: 'rgba(21,93,252,0.08)', border: '2px solid rgba(21,93,252,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 700, color: '#111827',
                  transition: 'all 0.25s',
                }}>{step}</div>
              </div>
              {i < PROCESS.length - 1 && (
                <div style={{ color: 'rgba(21,93,252,0.3)', fontSize: '18px', flexShrink: 0 }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// 功能模块
// =============================================
function FeaturesSection() {
  return (
    <section id="features" style={{ background: '#f9fafb', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeader eyebrow="功能模块" title="核心功能模块" subtitle="覆盖企业全业务流程，一个平台全部搞定" dark />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 50}>
              <div style={{
                padding: '28px', borderRadius: '20px',
                background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,93,252,0.2)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.08)'; }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: f.bg, border: `1px solid ${f.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', marginBottom: '16px',
                }}>{f.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', marginBottom: '12px', marginTop: 0 }}>{f.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {f.items.map(item => (
                    <li key={item} style={{ fontSize: '14px', color: '#4b5563', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: f.color, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// AI 智能排产
// =============================================
function AISection() {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const iv = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '·'), 350);
    return () => clearInterval(iv);
  }, []);

  return (
    <section style={{ background: '#ffffff', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeader eyebrow="AI 智能" title="AI 智能排产" subtitle="让生产更高效、成本更优化" dark />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          {/* AI 看板 */}
          <Reveal>
            <div style={{
              background: 'rgba(11,17,32,0.8)', border: '1px solid rgba(21,93,252,0.2)',
              borderRadius: '20px', padding: '28px', backdropFilter: 'blur(20px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                <span style={{ fontSize: '13px', color: '#22c55e', fontWeight: 600 }}>AI 排产看板</span>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>实时计算中{dots}</span>
              </div>
              <div style={{ background: 'rgba(21,93,252,0.08)', border: '1px solid rgba(21,93,252,0.15)', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px', fontWeight: 600 }}>🤖 AI 建议</div>
                <p style={{ fontSize: '13px', color: '#f1f5f9', margin: 0, lineHeight: 1.7 }}>
                  检测到 3 号生产线将在 2 小时后完成任务，建议将订单 #20260402 提前排产，可减少换线时间约 45 分钟。
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: '排产效率提升', value: '35%+' },
                  { label: '设备利用率', value: '94.2%' },
                  { label: '换线时间减少', value: '28%' },
                  { label: '交期准时率', value: '98.5%' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center', padding: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#00d4aa' }}>{s.value}</div>
                    <div style={{ fontSize: '10px', color: '#e2e8f0', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 功能列表 */}
          <Reveal delay={150}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: '自动排产优化', desc: '基于交期、设备状态、物料情况，AI 自动生成最优排产计划' },
                { title: '减少换线损耗', desc: '智能合并同规格订单，最大限度减少停机换料时间' },
                { title: '提高设备利用率', desc: '实时监控设备负荷，动态调整生产任务，确保产能最大化' },
                { title: '提前预警交期风险', desc: '预测生产瓶颈，提前预警可能延期的订单，主动管理客户预期' },
              ].map((item, i) => (
                <div key={item.title} style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  padding: '18px', borderRadius: '12px',
                  background: '#f9fafb', border: '1px solid rgba(0,0,0,0.08)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(21,93,252,0.04)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,93,252,0.2)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f9fafb'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.08)'; }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px', color: '#059669', fontWeight: 700 }}>✓</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: '#4b5563', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// =============================================
// 解决方案
// =============================================
function SolutionsSection() {
  return (
    <section id="solutions" style={{ background: '#f9fafb', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeader eyebrow="行业方案" title="行业解决方案" subtitle="深度适配多种行业生产模式" dark />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div style={{
                padding: '28px', borderRadius: '20px',
                background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.25s', cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,93,252,0.2)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.08)'; }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', marginBottom: '10px', marginTop: 0 }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// 定价
// =============================================
function PricingSection() {
  return (
    <section id="pricing" style={{ background: '#ffffff', padding: '100px 48px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeader eyebrow="价格方案" title="灵活选择，适合不同发展阶段" dark />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {PRICING.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <div style={{
                padding: '28px', borderRadius: '20px', position: 'relative',
                background: '#f9fafb',
                border: `1px solid ${plan.popular ? 'rgba(21,93,252,0.35)' : 'rgba(0,0,0,0.1)'}`,
                boxShadow: plan.popular ? '0 4px 20px rgba(21,93,252,0.15)' : '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = plan.popular ? '0 12px 40px rgba(21,93,252,0.2)' : '0 12px 40px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = plan.popular ? 'rgba(21,93,252,0.5)' : 'rgba(21,93,252,0.2)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = plan.popular ? '0 4px 20px rgba(21,93,252,0.15)' : '0 2px 12px rgba(0,0,0,0.04)'; (e.currentTarget as HTMLElement).style.borderColor = plan.popular ? 'rgba(21,93,252,0.35)' : 'rgba(0,0,0,0.1)'; }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: '16px', right: '-22px',
                    background: 'linear-gradient(135deg, #155dfc, #00d4aa)',
                    color: 'white', fontSize: '10px', fontWeight: 700,
                    padding: '4px 26px', transform: 'rotate(45deg)',
                    letterSpacing: '0.05em',
                  }}>最受欢迎</div>
                )}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: plan.popular ? '#155dfc' : '#374151', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{plan.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '36px', fontWeight: 800, color: '#111827' }}>{plan.price}</span>
                    <span style={{ fontSize: '13px', color: '#6b7280' }}>{plan.unit}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '6px' }}>{plan.target}</div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: '13px', color: '#374151', padding: '5px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#16a34a', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="#" style={{
                  display: 'block', textAlign: 'center', padding: '16px',
                  borderRadius: '12px', fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.2s',
                  background: plan.popular ? 'linear-gradient(135deg, #155dfc, #3b7bff)' : 'transparent',
                  color: plan.popular ? '#fff' : '#155dfc',
                  border: plan.popular ? 'none' : '1.5px solid #155dfc',
                  boxShadow: plan.popular ? '0 4px 16px rgba(21,93,252,0.3)' : 'none',
                }}>
                  {plan.popular ? '立即试用' : '联系我们'}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// 客户案例
// =============================================
function CasesSection() {
  return (
    <section id="cases" style={{ background: '#f9fafb', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeader eyebrow="客户案例" title="已帮助数百家企业实现数字化转型" dark />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {CASES.map((c, i) => (
            <Reveal key={c.company} delay={i * 80}>
              <div style={{
                padding: '28px', borderRadius: '20px',
                background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,93,252,0.2)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.08)'; }}>
                <div style={{
                  display: 'inline-block', padding: '4px 14px', borderRadius: '100px',
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                  fontSize: '13px', color: '#16a34a', fontWeight: 700, marginBottom: '16px',
                }}>{c.improvement}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '12px', marginTop: 0 }}>{c.company}</h3>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// CTA
// =============================================
function CTASection() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0d46d9 0%, #155dfc 50%, #1d6ef5 100%)',
      padding: '100px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-40%', left: '-15%', width: '50%', height: '200%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 60%)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', right: '-10%', width: '40%', height: '150%',
        background: 'radial-gradient(circle, rgba(0,212,170,0.2), transparent 60%)', pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          开启您的数字化转型之旅
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', marginBottom: '36px', lineHeight: 1.6 }}>
          扫码添加专属顾问微信，免费获取系统演示及试用账号
        </p>
        <Link to="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '18px 40px', borderRadius: '12px',
          background: '#fff', color: '#155dfc',
          fontSize: '16px', fontWeight: 700, textDecoration: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          transition: 'all 0.2s',
        }}>
          免费试用 →
        </Link>
        <p style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>7×24 小时技术支持</p>
      </div>
    </section>
  );
}

// =============================================
// Footer
// =============================================
function FooterSection() {
  const footerStyle: React.CSSProperties = {
    background: '#f3f4f6', padding: '60px 48px 32px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  };

  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          {/* 品牌 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '7px', background: 'linear-gradient(135deg, #155dfc, #00d4aa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, color: '#fff' }}>积</div>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9' }}>颀信软件</span>
            </div>
            <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.7, marginBottom: '16px' }}>
              深圳市颀信软件有限公司是一家专注于企业数字化转型的软件企业，致力于为通用制造业提供最专业的 ERP 解决方案。
            </p>
            <div style={{ fontSize: '12px', color: '#4b5563' }}>联系电话：400-888-8888</div>
          </div>

          {/* 产品 */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 0 }}>产品</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['产品功能', '定价方案', '更新日志', '操作手册'].map(item => (
                <a key={item} href="#features" style={{ fontSize: '18px', color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#60a5fa'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#64748b'}>{item}</a>
              ))}
            </div>
          </div>

          {/* 解决方案 */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 0 }}>解决方案</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['制造业', '纺织服装', '电子组装', '仓储物流'].map(item => (
                <a key={item} href="#solutions" style={{ fontSize: '18px', color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#60a5fa'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#64748b'}>{item}</a>
              ))}
            </div>
          </div>

          {/* 关于 */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 0 }}>关于</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: '关于我们', href: '/about' },
                { label: '联系我们', href: '/contact' },
                { label: '产品演示', href: '#' },
              ].map(item => (
                <a key={item.label} href={item.href} style={{ fontSize: '18px', color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#60a5fa'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#64748b'}>{item.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '15px', color: '#6b7280' }}>Copyright © {new Date().getFullYear()} 深圳市颀信软件有限公司</span>
          <span style={{ fontSize: '15px', color: '#6b7280' }}>粤ICP备xxxxxxxx号</span>
        </div>
      </div>
    </footer>
  );
}

// =============================================
// 首页
// =============================================
export default function Home(): React.ReactNode {
  return (
    <Layout
      title="通用行业ERP — 颀信软件"
      description="颀信 ERP，专为通用行业打造，覆盖销售、采购、库存、生产、财务全流程，实现生产透明化、管理数字化。适配制造业、纺织服装、电子组装、仓储物流等各行各业。"
    >
      <NavBar />
      <main style={{ marginTop: 0 }}>
        <HeroSection />
        <StatsBar />
        <ProblemsSection />
        <ValueSection />
        <ProcessSection />
        <FeaturesSection />
        <AISection />
        <SolutionsSection />
        <PricingSection />
        <CasesSection />
        <CTASection />
      </main>
      <FooterSection />
    </Layout>
  );
}
