
import React from 'react';

const YouTubeSection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Discover Our Process
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="video-container shadow-xl rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="MachGari Fishing Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground">
              Our team uses sustainable fishing practices to ensure the highest quality
              seafood while preserving marine ecosystems for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
