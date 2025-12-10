import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Settings, Target, ChevronRight } from 'lucide-react';
import { Mascot } from '@/components/Mascot';
import { StatsBar } from '@/components/StatsBar';
import { User, UserStats, TargetExam } from '@/types';
import { storageService } from '@/services/storageService';

interface ProfileViewProps {
  user: User;
  stats: UserStats;
  onLogout: () => void;
}

const examOptions: { value: TargetExam; label: string; description: string }[] = [
  { value: 'CAT', label: 'CAT', description: 'Common Admission Test' },
  { value: 'GRE', label: 'GRE', description: 'Graduate Record Examination' },
  { value: 'GMAT', label: 'GMAT', description: 'Graduate Management Admission Test' },
  { value: 'BANK', label: 'Bank Exams', description: 'Banking sector examinations' },
  { value: 'SSC', label: 'SSC', description: 'Staff Selection Commission' },
  { value: 'GENERAL', label: 'General', description: 'General aptitude practice' },
];

export const ProfileView = ({ user, stats, onLogout }: ProfileViewProps) => {
  const [targetExam, setTargetExam] = useState<TargetExam>(storageService.getTargetExam());
  const [showExamPicker, setShowExamPicker] = useState(false);

  const handleExamChange = (exam: TargetExam) => {
    setTargetExam(exam);
    storageService.setTargetExam(exam);
    setShowExamPicker(false);
  };

  const allProgress = storageService.getAllProgress();
  const totalCompletedLevels = allProgress.reduce(
    (acc, p) => acc + p.completedLevels.length,
    0
  );

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Profile Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="bg-card rounded-3xl p-6 shadow-lg border border-border">
          <div className="flex items-center gap-4 mb-6">
            <Mascot mood="happy" size="lg" />
            <div className="flex-1">
              <h1 className="text-2xl font-black text-foreground">{user.username}</h1>
              <p className="text-muted-foreground font-semibold">{user.email}</p>
            </div>
          </div>

          <StatsBar stats={stats} />

          {/* Achievement Summary */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-muted rounded-xl">
              <p className="text-2xl font-black text-foreground">{totalCompletedLevels}</p>
              <p className="text-xs text-muted-foreground font-semibold">Levels Done</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-xl">
              <p className="text-2xl font-black text-foreground">{stats.streak}</p>
              <p className="text-xs text-muted-foreground font-semibold">Day Streak</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-xl">
              <p className="text-2xl font-black text-foreground">{stats.xp}</p>
              <p className="text-xs text-muted-foreground font-semibold">Total XP</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Settings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-3"
      >
        <h2 className="text-xl font-black text-foreground mb-4">Settings</h2>

        {/* Target Exam */}
        <motion.button
          onClick={() => setShowExamPicker(!showExamPicker)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full bg-card rounded-2xl p-4 shadow-sm border border-border flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-bold text-foreground">Target Exam</p>
            <p className="text-sm text-muted-foreground">
              {examOptions.find(e => e.value === targetExam)?.label || 'General'}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </motion.button>

        {/* Exam Picker */}
        {showExamPicker && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            {examOptions.map((exam) => (
              <button
                key={exam.value}
                onClick={() => handleExamChange(exam.value)}
                className={`w-full p-4 flex items-center justify-between hover:bg-muted transition-colors ${
                  targetExam === exam.value ? 'bg-primary/10' : ''
                }`}
              >
                <div className="text-left">
                  <p className={`font-bold ${targetExam === exam.value ? 'text-primary' : 'text-foreground'}`}>
                    {exam.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{exam.description}</p>
                </div>
                {targetExam === exam.value && (
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                )}
              </button>
            ))}
          </motion.div>
        )}

        {/* Other Settings */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full bg-card rounded-2xl p-4 shadow-sm border border-border flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
            <Settings className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-bold text-foreground">App Settings</p>
            <p className="text-sm text-muted-foreground">Notifications, theme, and more</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </motion.button>

        {/* Logout */}
        <motion.button
          onClick={onLogout}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full bg-destructive/10 rounded-2xl p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
            <LogOut className="w-6 h-6 text-destructive" />
          </div>
          <p className="font-bold text-destructive">Log Out</p>
        </motion.button>
      </motion.section>
    </div>
  );
};
