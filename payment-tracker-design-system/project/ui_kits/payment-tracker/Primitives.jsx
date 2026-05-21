// Atomic UI primitives

function Button({ variant='primary', size='md', children, className='', ...rest }) {
  const cls = `btn btn-${variant} ${size==='sm'?'btn-sm':''} ${className}`.trim();
  return <button className={cls} {...rest}>{children}</button>;
}

function Input({ className='', ...rest }) {
  return <input className={`input ${className}`.trim()} {...rest} />;
}

function Select({ children, className='', ...rest }) {
  return <select className={`select ${className}`.trim()} {...rest}>{children}</select>;
}

function Badge({ variant, children }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

function StatusDot({ variant }) {
  return <span className={`dot dot-${variant}`} />;
}

function Avatar({ name, size=40 }) {
  const style = { width: size, height: size, fontSize: Math.round(size*0.35) };
  return <div className="avatar" style={style}>{getMonogram(name)}</div>;
}

function Card({ children, className='', ...rest }) {
  return <div className={`card ${className}`.trim()} {...rest}>{children}</div>;
}

function Tabs({ tabs, value, onChange }) {
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button key={t.key} className={`tab ${value===t.key?'active':''}`} onClick={()=>onChange(t.key)}>
          {t.dot && <StatusDot variant={t.dot} />}
          {t.label}
          {t.count!=null && <span className="tab-count">{t.count}</span>}
        </button>
      ))}
    </div>
  );
}

function Dialog({ open, onClose, title, children, actions }) {
  if (!open) return null;
  return (
    <div className="scrim" onClick={onClose}>
      <div className="dialog" onClick={e=>e.stopPropagation()}>
        {title && <h3>{title}</h3>}
        {children}
        {actions && <div className="flex gap-3 mt-4">{actions}</div>}
      </div>
    </div>
  );
}

function Toast({ message, kind='success', onDismiss }) {
  React.useEffect(() => {
    if (!message) return;
    const t = setTimeout(onDismiss, 2500);
    return () => clearTimeout(t);
  }, [message]);
  if (!message) return null;
  return (
    <div className={`toast ${kind}`}>
      <Icons.Check />
      {message}
    </div>
  );
}

Object.assign(window, { Button, Input, Select, Badge, StatusDot, Avatar, Card, Tabs, Dialog, Toast });
