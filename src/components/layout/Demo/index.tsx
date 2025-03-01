import React from 'react';
import DemoSection from './components/DemoSection';

const Demo = () => {
  return (
    <section className="w-full bg-light-background">
      <div className="container mx-auto px-4">
        {/* Chat Demo */}
        <DemoSection
          title="Ask any question"
          description="Camel uses your live data. Get tables and charts instantly."
          imageSrc="/chat-demo-ss.png"
          imageAlt="Chat interface demo showing data analysis capabilities"
          icon="/code-icon.png"
        />

        {/* Dashboard Demo */}
        <DemoSection
          title="Powerful Dashboards"
          description="Save any graph to a live dashboard. Start a chat to answer ad-hoc questions."
          imageSrc="/dashboard-demo-ss.png"
          imageAlt="Dashboard interface showing data visualization and metrics"
          icon="/light-bulb-icon.png"
        />
      </div>
    </section>
  );
};

export default Demo;

