'use client';

// In-memory zero-persistence progress stub (no localStorage usage)
export function useProgress() {
  return {
    isLoaded: true,
    completedTopics: [],
    bookmarkedTopics: [],
    quizScores: {},
    completedExercises: [],
    toggleTopicCompleted: () => {},
    toggleBookmark: () => {},
    recordQuizScore: () => {},
    toggleExerciseCompleted: () => {},
    isTopicCompleted: () => false,
    isTopicBookmarked: () => false,
    isExerciseCompleted: () => false,
    resetAllProgress: () => {},
  };
}
