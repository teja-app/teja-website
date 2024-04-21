'use client';

// FeatureItem.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { CloseCircleFilled, CloseCircleOutlined, CloseSquareFilled, DownOutlined, PlayCircleFilled, UpOutlined } from '@ant-design/icons';
import { titleFontCss } from '../css/fonts';

// Feature.ts
export interface Feature {
    id: number;
    title: string;
    description: string;
    image: string; // Assuming this is a thumbnail for the video
    video?: string; // URL to the video
}


interface FeatureItemProps {
    feature: Feature;
    onToggle: () => void;
    isExpanded: boolean;
}


interface FeatureListProps {
    features: Feature[];
}

// FeatureItem.tsx
export const FeatureItem: React.FC<FeatureItemProps> = ({ feature, onToggle, isExpanded }) => {
    const toggleIcon = isExpanded ? <UpOutlined /> : <DownOutlined />;

    return (
        <div className={`mb-4 overflow-hidden transition-all ${isExpanded ? 'max-h-screen' : 'max-h-[68px]'}`}>
            <div className="flex justify-between items-center py-2 px-4" onClick={onToggle}>
                <div className="flex items-center">
                    <span className="font-bold text-lg mr-4">{feature.id}. {feature.title}</span>
                </div>
                <button aria-label={isExpanded ? 'Collapse' : 'Expand'}>
                    {toggleIcon}
                </button>
            </div>
            {isExpanded && (
                <div className="pt-4 pb-2 px-4">
                    <p>{feature.description}</p>
                    {feature.video ? (
                        <div className="mt-4">
                            {/* Render a video player if video URL is present */}
                            <video width="100%" autoPlay loop>
                                <source src={feature.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ) : (
                        <div className="mt-4">
                            {/* Render an image if video URL is not present */}
                            <Image src={feature.image} alt={feature.title} width={400} height={300} />
                        </div>
                    )}
                    {/* <a href="#" className="text-blue-500 mt-2 inline-block">
                        Learn more
                    </a> */}
                </div>
            )}
        </div>
    );
};


// FeatureList.tsx
export const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
    const [expandedFeature, setExpandedFeature] = useState<number | null>(1);

    return (
        <div>
            {features.map((feature) => (
                <FeatureItem
                    key={feature.id}
                    feature={feature}
                    onToggle={() => setExpandedFeature(feature.id === expandedFeature ? null : feature.id)}
                    isExpanded={expandedFeature === feature.id}
                />
            ))}
        </div>
    );
};

export const VideoPromo: React.FC = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
    const handleVideoClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      setIsVideoModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsVideoModalOpen(false);
    };
  
    return (
      <div className="bg-white overflow-hidden relative">
        {/* Container for the image and play button */}
        <div className="mt-4 shadow-md relative cursor-pointer" onClick={handleVideoClick} style={{width:400}}>
          {/* Thumbnail image */}
          <Image
            src='/genZGirl.jpeg'
            alt="Play video"
            height={225}
            width={400}
            className="rounded-xl"
          />
          {/* Play button */}
          <div 
            className="absolute bottom-4 right-4"
            onClick={handleVideoClick}
          >
            <PlayCircleFilled style={{ color: 'white', fontSize: '50px' }} />
          </div>
        </div>
        {/* <p className="text-lg font-semibold">Watch more about our app</p> */}
        
        {/* Modal for playing the video */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-md relative">
              <video width="100%" controls autoPlay>
                <source src="/genZGirl.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Close button */}
              <button 
                onClick={handleCloseModal} 
                className="absolute top-0 right-0 p-2"
              >
                <CloseCircleFilled style={{ color: 'black', fontSize: '50px' }} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  


const features: Feature[] = [
    {
        id: 1,
        title: 'Journaling',
        description: 'Capture your thoughts and emotions with the help of AI-powered journaling.',
        image: '/young_genz_journaling.webp',
    },
    {
        id: 2,
        title: 'Mood Tracking',
        description: 'Track your mood over time with the assistance of AI algorithms.',
        image: '/genz_mood_tracking.webp',
    },
    {
        id: 3,
        title: 'Insights',
        description: 'Gain valuable insights into your mental well-being through data analysis.',
        image: '/ai_insights.webp',
    },
    {
        id: 4,
        title: 'Guidance',
        description: 'Receive personalized guidance and support from our AI-powered system.',
        image: '/teja_guidance.webp',
    },
];

const UniqueFeatures: React.FC = () => {
    return (
        // Use responsive padding classes and adjust flex direction and width for smaller screens
        <div className="flex flex-col md:flex-row justify-between px-16 md:px-32">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className={`text-2xl font-bold mb-4 ${titleFontCss.className}`}>What makes teja unique?</h2>
                <VideoPromo />
            </div>
            <div className="w-full md:w-1/2">
                <FeatureList features={features} />
            </div>
        </div>
    );
};

export default UniqueFeatures;
