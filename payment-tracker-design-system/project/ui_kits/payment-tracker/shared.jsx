/* Shared data + icons for the Payment Tracker UI kit demo */

const Icons = {
  CreditCard: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>,
  Users: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  BarChart: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14v4"/><path d="M12 10v8"/><path d="M17 6v12"/></svg>,
  Settings: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h0a1.65 1.65 0 001.82-.33l.06.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  Plus: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>,
  Search: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  Check: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>,
  Chevron: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>,
  ChevronL: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7"/></svg>,
  LogOut: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>,
  X: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Google: (p) => <svg {...p} viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>,
};

// Demo data
const SEED_CLIENTS = [
  { id: 1, name: 'ООО "Северный ветер"', contact: 'Анна Петрова', phone: '+7 999 123 45 67', amount: 85000, freq: 'monthly', status: 'active', nextDate: '2026-04-25', nextStatus: 'overdue', daysDue: -5 },
  { id: 2, name: 'ИП Смирнов А.В.', contact: 'Алексей Смирнов', phone: '+7 999 222 11 33', amount: 45000, freq: 'once', status: 'paused', nextDate: '2026-04-22', nextStatus: 'pending', daysDue: 2 },
  { id: 3, name: 'Кофейня "Зерно"', contact: 'Мария Иванова', phone: '+7 999 888 77 66', amount: 32000, freq: 'monthly', status: 'active', nextDate: '2026-05-03', nextStatus: 'pending', daysDue: 13 },
  { id: 4, name: 'Студия "Красный квадрат"', contact: 'Дмитрий Волков', phone: '+7 999 333 22 11', amount: 120000, freq: 'quarterly', status: 'active', nextDate: '2026-04-18', nextStatus: 'overdue', daysDue: -2 },
  { id: 5, name: 'Автосервис "Ремзона"', contact: 'Игорь Козлов', phone: '+7 999 444 55 66', amount: 28000, freq: 'monthly', status: 'active', nextDate: '2026-04-30', nextStatus: 'pending', daysDue: 10 },
  { id: 6, name: 'Ателье "Шов"', contact: 'Елена Белова', phone: '+7 999 555 66 77', amount: 18000, freq: 'monthly', status: 'completed', nextDate: '2026-03-15', nextStatus: 'paid', daysDue: 0 },
];

const MONTHS_RU = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
const WEEKDAYS_RU = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

const formatRub = (n) => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
const formatDate = (iso) => {
  const d = new Date(iso);
  return d.getDate() + ' ' + MONTHS_RU[d.getMonth()].slice(0,3);
};
const getMonogram = (name) => {
  const stripped = name.replace(/^(ООО|ИП|ОАО|ЗАО|АО)\s+/,'').replace(/^["«]/,'');
  return stripped.charAt(0).toUpperCase();
};
const freqLabel = (f) => ({ monthly:'ежемесячно', quarterly:'ежеквартально', once:'разово', yearly:'ежегодно' }[f] || f);

Object.assign(window, { Icons, SEED_CLIENTS, MONTHS_RU, WEEKDAYS_RU, formatRub, formatDate, getMonogram, freqLabel });
