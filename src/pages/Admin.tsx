
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const Admin = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center mb-8">Vendor Dashboard</h1>

          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Log in to manage your products and services
                </h2>
                <p className="text-gray-600 mb-6">
                  As a GlowLink vendor, you can add, edit, and manage your listings from your dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="glow-btn w-full sm:w-auto">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto border-brand-purple text-brand-purple hover:bg-brand-light-purple">
                    Create Account
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Note: This is a demo. Actual admin functionality would be implemented in a real application.
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-semibold text-xl mb-6 text-center">
                  Preview of Vendor Dashboard Features
                </h3>
                
                <Tabs defaultValue="products">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="products">Products</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="products" className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Your Products</h4>
                        <Button size="sm" className="glow-btn">
                          Add New
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
                        <p className="text-gray-600 text-center">
                          Your product listings will appear here after you log in.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="services" className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Your Services</h4>
                        <Button size="sm" className="glow-btn">
                          Add New
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
                        <p className="text-gray-600 text-center">
                          Your service listings will appear here after you log in.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
