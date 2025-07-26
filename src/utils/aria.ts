/**
 * ARIA utilities for enhancing accessibility
 */

/**
 * Generates a unique ID for ARIA attributes
 * @param prefix - Optional prefix for the ID
 * @returns A unique ID string
 */
export const generateId = (prefix = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Generates ARIA attributes for a button
 * @param props - Button properties
 * @returns ARIA attributes object
 */
export const getButtonAriaProps = (props: {
  label: string;
  expanded?: boolean;
  pressed?: boolean;
  disabled?: boolean;
  hasPopup?: boolean | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
  controls?: string;
}) => {
  const { label, expanded, pressed, disabled, hasPopup, controls } = props;
  
  return {
    'aria-label': label,
    'aria-expanded': expanded !== undefined ? String(expanded) : undefined,
    'aria-pressed': pressed !== undefined ? String(pressed) : undefined,
    'aria-disabled': disabled ? 'true' : undefined,
    'aria-haspopup': hasPopup ? (typeof hasPopup === 'string' ? hasPopup : 'true') : undefined,
    'aria-controls': controls,
  };
};

/**
 * Generates ARIA attributes for a modal/dialog
 * @param props - Modal properties
 * @returns ARIA attributes object
 */
export const getModalAriaProps = (props: {
  id: string;
  title: string;
  description?: string;
  labelledBy?: string;
  describedBy?: string;
}) => {
  const { id, title, description, labelledBy, describedBy } = props;
  
  return {
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': labelledBy || `${id}-title`,
    'aria-describedby': describedBy || (description ? `${id}-description` : undefined),
    'aria-label': !labelledBy ? title : undefined,
  };
};

/**
 * Generates ARIA attributes for a form field
 * @param props - Form field properties
 * @returns ARIA attributes object
 */
export const getFormFieldAriaProps = (props: {
  id: string;
  label: string;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  description?: string;
}) => {
  const { id, label, required, invalid, errorMessage, description } = props;
  const errorId = errorMessage ? `${id}-error` : undefined;
  const descriptionId = description ? `${id}-description` : undefined;
  
  return {
    'aria-label': label,
    'aria-labelledby': `label-${id}`,
    'aria-required': required ? 'true' : undefined,
    'aria-invalid': invalid ? 'true' : undefined,
    'aria-describedby': [errorId, descriptionId].filter(Boolean).join(' ') || undefined,
  };
};

/**
 * Generates ARIA live region attributes
 * @param props - Live region properties
 * @returns ARIA attributes object
 */
export const getLiveRegionAriaProps = (props: {
  atomic?: boolean;
  busy?: boolean;
  relevant?: 'additions' | 'removals' | 'text' | 'all' | 'additions text';
  live?: 'off' | 'polite' | 'assertive' | 'rude';
}) => {
  const { atomic = false, busy = false, relevant = 'additions', live = 'polite' } = props;
  
  return {
    'aria-atomic': atomic ? 'true' : 'false',
    'aria-busy': busy ? 'true' : 'false',
    'aria-live': live,
    'aria-relevant': relevant,
  };
};

/**
 * Generates ARIA attributes for a tablist
 * @param props - Tablist properties
 * @returns ARIA attributes object
 */
export const getTablistAriaProps = (props: {
  activeTab: number;
  tabs: Array<{ id: string; label: string }>;
  panelId: string;
}) => {
  const { activeTab, tabs, panelId } = props;
  
  return tabs.map((tab, index) => ({
    id: tab.id,
    'aria-controls': `${panelId}-${index}`,
    'aria-selected': index === activeTab ? 'true' : 'false',
    'aria-label': tab.label,
    role: 'tab',
    tabIndex: index === activeTab ? 0 : -1,
  }));
};

/**
 * Generates ARIA attributes for a tabpanel
 * @param props - Tabpanel properties
 * @returns ARIA attributes object
 */
export const getTabPanelAriaProps = (props: {
  id: string;
  tabId: string;
  hidden: boolean;
}) => {
  const { id, tabId, hidden } = props;
  
  return {
    id,
    'aria-labelledby': tabId,
    role: 'tabpanel',
    tabIndex: 0,
    hidden,
  };
};
