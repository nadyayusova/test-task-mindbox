import { ReactNode } from 'react';
import styles from './TabButton.module.scss';

type TabButtonProps = {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

function TabButton({ children, isActive, onClick }: TabButtonProps) {
  const { 'tab-btn': tabBtn, 'active-tab': activeTab } = styles;

  const className = [tabBtn];

  if (isActive) {
    className.push(activeTab);
  }

  return (
    <button
      type="button"
      className={className.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TabButton;
