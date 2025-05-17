
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-[#222222] border-zapflow-border hover:border-zapflow-primary/50 transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-zapflow-border/20 p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-zapflow-primary">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-zapflow-textSecondary">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
