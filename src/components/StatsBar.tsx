import { motion } from 'framer-motion';
import { Heart, Flame, Gem, Zap } from 'lucide-react';
import { UserStats } from '@/types';

interface StatsBarProps {
  stats: UserStats;
  compact?: boolean;
}

export const StatsBar = ({ stats, compact = false }: StatsBarProps) => {
  const items = [
    { icon: Heart, value: stats.hearts, label: 'Hearts', color: 'text-hearts', fill: true },
    { icon: Flame, value: stats.streak, label: 'Streak', color: 'text-streak', fill: false },
    { icon: Gem, value: stats.gems, label: 'Gems', color: 'text-gems', fill: true },
    { icon: Zap, value: stats.xp, label: 'XP', color: 'text-xp', fill: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center ${compact ? 'gap-4' : 'gap-6'}`}
    >
      {items.map(({ icon: Icon, value, label, color, fill }) => (
        <motion.div
          key={label}
          whileHover={{ scale: 1.1 }}
          className={`flex items-center gap-1.5 ${compact ? '' : 'bg-card px-3 py-1.5 rounded-full shadow-sm border border-border'}`}
        >
          <Icon className={`${compact ? 'w-5 h-5' : 'w-5 h-5'} ${color} ${fill ? 'fill-current' : ''}`} />
          <span className={`font-bold ${compact ? 'text-sm' : 'text-sm'} text-foreground`}>
            {value}
          </span>
          {!compact && (
            <span className="text-xs text-muted-foreground hidden sm:inline">{label}</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
