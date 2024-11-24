import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { LessonCard } from '../components/LessonCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { generateLearningContent } from '../services/learningService';

export const Learning: React.FC = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [completedSections, setCompletedSections] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const loadContent = async () => {
      if (!subjectId || !topicId) {
        setError('Missing subject or topic information');
        setLoading(false);
        return;
      }

      try {
        const generatedContent = await generateLearningContent(subjectId, topicId);
        setContent(generatedContent);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [subjectId, topicId]);

  const handleMarkComplete = async (_lessonId: number, sectionId: number) => {
    setCompletedSections(prev => ({
      ...prev,
      [sectionId]: true
    }));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  // Split content into sections
  const sections = content.split('\n\n').map((section, index) => ({
    id: index,
    title: section.split('\n')[0],
    content: section.split('\n').slice(1).join('\n'),
    isCompleted: completedSections[index] || false
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-emerald-500 text-white p-6 relative">
        <BackButton className="absolute top-6 left-4 text-white" />
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-2">{subjectId} Learning</h1>
          <p className="text-white/80">Topic: {topicId}</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4">
        <LessonCard
          id={1}
          title="Today's Lesson"
          sections={sections}
          expandedSection={expandedSection}
          onToggleSection={setExpandedSection}
          onMarkComplete={handleMarkComplete}
        />
      </div>
    </div>
  );
};