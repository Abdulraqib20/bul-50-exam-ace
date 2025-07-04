import React, { createContext, useContext, useEffect, useState } from 'react';

interface SectionProgress {
    sectionId: number;
    sectionName: string;
    score: number;
    totalQuestions: number;
    completedAt: string;
    timeSpent: number; // in minutes
}

interface OverallStats {
    totalSectionsCompleted: number;
    totalFullExamsCompleted: number;
    averageScore: number;
    totalTimeSpent: number; // in minutes
    lastActivity: string;
}

interface ProgressContextType {
    sectionProgress: SectionProgress[];
    overallStats: OverallStats;
    addSectionProgress: (progress: Omit<SectionProgress, 'completedAt'>) => void;
    addFullExamProgress: (score: number, totalQuestions: number, timeSpent: number) => void;
    getProgressPercentage: () => number;
    getSectionStatus: (sectionId: number) => 'completed' | 'not-started';
}

const defaultStats: OverallStats = {
    totalSectionsCompleted: 0,
    totalFullExamsCompleted: 0,
    averageScore: 0,
    totalTimeSpent: 0,
    lastActivity: ''
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sectionProgress, setSectionProgress] = useState<SectionProgress[]>([]);
    const [overallStats, setOverallStats] = useState<OverallStats>(defaultStats);

    // Load data from localStorage on mount
    useEffect(() => {
        const savedProgress = localStorage.getItem('bul506-section-progress');
        const savedStats = localStorage.getItem('bul506-overall-stats');

        if (savedProgress) {
            setSectionProgress(JSON.parse(savedProgress));
        }
        if (savedStats) {
            setOverallStats(JSON.parse(savedStats));
        }
    }, []);

    // Save to localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem('bul506-section-progress', JSON.stringify(sectionProgress));
    }, [sectionProgress]);

    useEffect(() => {
        localStorage.setItem('bul506-overall-stats', JSON.stringify(overallStats));
    }, [overallStats]);

    const addSectionProgress = (progress: Omit<SectionProgress, 'completedAt'>) => {
        const newProgress: SectionProgress = {
            ...progress,
            completedAt: new Date().toISOString()
        };

        setSectionProgress(prev => {
            // Remove any existing progress for this section and add new one
            const filtered = prev.filter(p => p.sectionId !== progress.sectionId);
            return [...filtered, newProgress];
        });

        // Update overall stats
        setOverallStats(prev => {
            const allScores = [...sectionProgress.filter(p => p.sectionId !== progress.sectionId), newProgress];
            const avgScore = allScores.length > 0
                ? Math.round(allScores.reduce((sum, p) => sum + (p.score / p.totalQuestions * 100), 0) / allScores.length)
                : 0;

            return {
                ...prev,
                totalSectionsCompleted: new Set(allScores.map(p => p.sectionId)).size,
                averageScore: avgScore,
                totalTimeSpent: prev.totalTimeSpent + progress.timeSpent,
                lastActivity: new Date().toISOString()
            };
        });
    };

    const addFullExamProgress = (score: number, totalQuestions: number, timeSpent: number) => {
        setOverallStats(prev => ({
            ...prev,
            totalFullExamsCompleted: prev.totalFullExamsCompleted + 1,
            totalTimeSpent: prev.totalTimeSpent + timeSpent,
            lastActivity: new Date().toISOString()
        }));
    };

    const getProgressPercentage = () => {
        const totalSections = 10; // We have 10 sections (A-J)
        return Math.round((overallStats.totalSectionsCompleted / totalSections) * 100);
    };

    const getSectionStatus = (sectionId: number): 'completed' | 'not-started' => {
        return sectionProgress.some(p => p.sectionId === sectionId) ? 'completed' : 'not-started';
    };

    return (
        <ProgressContext.Provider value={{
            sectionProgress,
            overallStats,
            addSectionProgress,
            addFullExamProgress,
            getProgressPercentage,
            getSectionStatus
        }}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgress = () => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
};
