import { motion } from 'framer-motion';
import { Trophy, Crown, Medal } from 'lucide-react';
import { Mascot } from '@/components/Mascot';

export const LeaderboardView = () => {
  // Mock leaderboard data
  const leaderboard = [
    { rank: 1, name: 'MathWiz', xp: 15420, avatar: '🦁' },
    { rank: 2, name: 'LogicMaster', xp: 14850, avatar: '🦊' },
    { rank: 3, name: 'BrainStorm', xp: 13200, avatar: '🐯' },
    { rank: 4, name: 'QuickThinker', xp: 12100, avatar: '🐻' },
    { rank: 5, name: 'AptitudeAce', xp: 11500, avatar: '🐼' },
    { rank: 6, name: 'NumberNinja', xp: 10800, avatar: '🐨' },
    { rank: 7, name: 'ReasonRuler', xp: 9500, avatar: '🐰' },
    { rank: 8, name: 'You', xp: 8200, avatar: '🐱', isCurrentUser: true },
    { rank: 9, name: 'DataDragon', xp: 7800, avatar: '🐲' },
    { rank: 10, name: 'VerbalVictor', xp: 7200, avatar: '🦄' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-gold fill-gold" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400 fill-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600 fill-amber-600" />;
      default:
        return <span className="w-6 text-center font-bold text-muted-foreground">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-gold fill-gold" />
          <h1 className="text-2xl font-black text-foreground">Leaderboard</h1>
        </div>
        <p className="text-muted-foreground font-semibold">Weekly Rankings</p>
      </motion.header>

      {/* Coming Soon Notice */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-gold/20 to-secondary/20 rounded-3xl p-6 mb-6 text-center"
      >
        <Mascot mood="happy" size="md" />
        <p className="font-bold text-foreground mt-4">Compete with learners worldwide!</p>
        <p className="text-sm text-muted-foreground mt-1">
          Full leaderboard features coming soon
        </p>
      </motion.div>

      {/* Leaderboard List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
      >
        {leaderboard.map((user, index) => (
          <motion.div
            key={user.rank}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex items-center gap-4 p-4 ${
              index !== leaderboard.length - 1 ? 'border-b border-border' : ''
            } ${user.isCurrentUser ? 'bg-primary/10' : ''}`}
          >
            <div className="w-8 flex justify-center">
              {getRankIcon(user.rank)}
            </div>
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-2xl">
              {user.avatar}
            </div>
            <div className="flex-1">
              <p className={`font-bold ${user.isCurrentUser ? 'text-primary' : 'text-foreground'}`}>
                {user.name}
                {user.isCurrentUser && ' (You)'}
              </p>
              <p className="text-sm text-muted-foreground">{user.xp.toLocaleString()} XP</p>
            </div>
            {user.rank <= 3 && (
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                user.rank === 1 ? 'bg-gold text-secondary-foreground' :
                user.rank === 2 ? 'bg-gray-300 text-gray-700' :
                'bg-amber-200 text-amber-800'
              }`}>
                Top {user.rank}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
