'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function PartnerForm() {
  const [organizationType, setOrganizationType] = useState('non-profit');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="space-y-6">
            <div className="space-y-4">
              <RadioGroup
                defaultValue="non-profit"
                onValueChange={setOrganizationType}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-profit" id="non-profit" />
                  <Label htmlFor="non-profit">Non-Profit</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="company" id="company" />
                  <Label htmlFor="company">Impact Company</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" placeholder="Organization name" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div>
              <Label htmlFor="message">Tell us about your project</Label>
              <Textarea
                id="message"
                placeholder="What challenges would you like to address? What are your goals?"
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
} 