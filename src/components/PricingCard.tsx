
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, buttonText, popular = false }) => {
  return (
    <Card className={`border ${popular ? 'border-zapflow-primary' : 'border-zapflow-border'} relative flex flex-col h-full`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zapflow-primary text-black font-medium py-1 px-4 rounded-full text-sm">
          Mais Popular
        </div>
      )}
      <CardHeader className={`text-center pb-8 ${popular ? 'pt-8' : 'pt-6'}`}>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-zapflow-textSecondary"> /único</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-zapflow-primary mr-2 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${popular 
            ? 'bg-zapflow-primary hover:bg-zapflow-hover text-black' 
            : 'bg-zapflow-border hover:bg-zapflow-border/70'} rounded-xl py-6`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
