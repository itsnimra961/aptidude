import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
  variant?: 'default' | 'hearts' | 'xp';
  className?: string;
}

const variantStyles = {
  default: 'bg-primary',
  hearts: 'bg-hearts',
  xp: 'bg-xp',
};

export const ProgressBar = ({ 
  current, 
  total, 
  showLabel = false, 
  variant = 'default',
  className = '' 
}: ProgressBarProps) => {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-sm font-semibold">
          <span className="text-muted-foreground">Progress</span>
          <span className="text-foreground">{current}/{total}</span>
        </div>
      )}
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`h-full rounded-full ${variantStyles[variant]}`}
        />
      </div>
    </div>
  );
};
