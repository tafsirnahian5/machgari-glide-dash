
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Fish, BarChart3, Building, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Link } from 'react-router-dom';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';

type UserRole = 'fisherman' | 'arotdar' | 'dof' | null;

interface RoleInfo {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const roleInfoMap: Record<string, RoleInfo> = {
  fisherman: {
    title: 'Fisherman',
    icon: <Fish className="h-8 w-8" />,
    description: 'Access market prices, sell your catch directly, and connect with buyers.'
  },
  arotdar: {
    title: 'Arotdar',
    icon: <BarChart3 className="h-8 w-8" />,
    description: 'Manage your inventory, track market trends, and connect with suppliers.'
  },
  dof: {
    title: 'DOF',
    icon: <Building className="h-8 w-8" />,
    description: 'Monitor market activity, access reports, and provide oversight.'
  }
};

const baseSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const fishermanSchema = baseSchema.extend({
  boatLicense: z.string().min(5, { message: "Boat license number must be at least 5 characters" }),
});

const arotdarSchema = baseSchema.extend({
  businessId: z.string().min(5, { message: "Business ID must be at least 5 characters" }),
});

const dofSchema = baseSchema.extend({
  employeeId: z.string().min(5, { message: "Employee ID must be at least 5 characters" }),
});

type SignupStep = 'role-selection' | 'basic-info' | 'role-specific';

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [currentStep, setCurrentStep] = useState<SignupStep>('role-selection');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const form = useForm<any>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      boatLicense: '',
      businessId: '',
      employeeId: '',
    },
  });

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setCurrentStep('basic-info');

    // Update form validation schema based on selected role
    if (role === 'fisherman') {
      form.reset();
      form.clearErrors();
    } else if (role === 'arotdar') {
      form.reset();
      form.clearErrors();
    } else if (role === 'dof') {
      form.reset();
      form.clearErrors();
    }
  };

  const handleNext = async () => {
    if (currentStep === 'basic-info') {
      const isValid = await form.trigger(['name', 'email', 'phone', 'password']);
      if (isValid) {
        setCurrentStep('role-specific');
      }
    }
  };

  const handleBack = () => {
    if (currentStep === 'basic-info') {
      setCurrentStep('role-selection');
      setSelectedRole(null);
    } else if (currentStep === 'role-specific') {
      setCurrentStep('basic-info');
    }
  };

  const onSubmit = async (data: any) => {
    toast.success("Account created successfully!");
    navigate('/login');
  };

  const renderRoleSpecificFields = () => {
    if (selectedRole === 'fisherman') {
      return (
        <FormField
          control={form.control}
          name="boatLicense"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    id="boatLicense"
                    className="pl-3 h-12"
                    placeholder=" "
                  />
                </FormControl>
                <FormLabel 
                  className={cn(
                    "absolute left-3 transition-all duration-150",
                    field.value 
                      ? "-top-2.5 bg-background px-1 text-xs" 
                      : "top-3 text-muted-foreground"
                  )}
                >
                  Boat License Number
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    } else if (selectedRole === 'arotdar') {
      return (
        <FormField
          control={form.control}
          name="businessId"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    id="businessId"
                    className="pl-3 h-12"
                    placeholder=" "
                  />
                </FormControl>
                <FormLabel 
                  className={cn(
                    "absolute left-3 transition-all duration-150",
                    field.value 
                      ? "-top-2.5 bg-background px-1 text-xs" 
                      : "top-3 text-muted-foreground"
                  )}
                >
                  Business ID
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    } else if (selectedRole === 'dof') {
      return (
        <FormField
          control={form.control}
          name="employeeId"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    id="employeeId"
                    className="pl-3 h-12"
                    placeholder=" "
                  />
                </FormControl>
                <FormLabel 
                  className={cn(
                    "absolute left-3 transition-all duration-150",
                    field.value 
                      ? "-top-2.5 bg-background px-1 text-xs" 
                      : "top-3 text-muted-foreground"
                  )}
                >
                  Employee ID
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    }
    return null;
  };

  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Create Your Account</h1>

          {/* Progress Indicator */}
          {currentStep !== 'role-selection' && (
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep !== 'role-selection' ? 'bg-machgari-600 text-white' : 'bg-muted'}`}>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span className="text-xs mt-1">Role</span>
                </div>
                <div className="h-1 flex-grow mx-2 bg-muted">
                  <div className={`h-full bg-machgari-600 ${currentStep !== 'role-selection' ? 'w-full' : 'w-0'}`}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep !== 'role-selection' ? 'bg-machgari-600 text-white' : 'bg-muted'}`}>
                    <span>2</span>
                  </div>
                  <span className="text-xs mt-1">Info</span>
                </div>
                <div className="h-1 flex-grow mx-2 bg-muted">
                  <div className={`h-full bg-machgari-600 ${currentStep === 'role-specific' ? 'w-full' : 'w-0'}`}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'role-specific' ? 'bg-machgari-600 text-white' : 'bg-muted'}`}>
                    <span>3</span>
                  </div>
                  <span className="text-xs mt-1">Details</span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'role-selection' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(roleInfoMap).map(([role, info]) => (
                <Card 
                  key={role}
                  className={cn(
                    "cursor-pointer transition-all duration-300 hover:shadow-lg",
                    "hover:scale-105 focus:scale-105"
                  )}
                  onClick={() => handleRoleSelect(role as UserRole)}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 text-machgari-600 rounded-full bg-machgari-50 p-4 dark:bg-machgari-900/30">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground mb-4">{info.description}</p>
                    <Button variant="outline" className="w-full">Select</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6">
                {selectedRole && (
                  <div className="bg-machgari-50 dark:bg-machgari-900/30 p-3 rounded-md mb-6 flex items-center">
                    <div className="text-machgari-600 mr-3">
                      {roleInfoMap[selectedRole].icon}
                    </div>
                    <div>
                      <h3 className="font-medium">Signing up as {roleInfoMap[selectedRole].title}</h3>
                      <p className="text-sm text-muted-foreground">{roleInfoMap[selectedRole].description}</p>
                    </div>
                  </div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {currentStep === 'basic-info' && (
                      <>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <div className="relative">
                                <FormControl>
                                  <Input
                                    {...field}
                                    id="name"
                                    className="pl-3 h-12"
                                    placeholder=" "
                                  />
                                </FormControl>
                                <FormLabel 
                                  className={cn(
                                    "absolute left-3 transition-all duration-150",
                                    field.value 
                                      ? "-top-2.5 bg-background px-1 text-xs" 
                                      : "top-3 text-muted-foreground"
                                  )}
                                >
                                  Full Name
                                </FormLabel>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <div className="relative">
                                <FormControl>
                                  <Input
                                    {...field}
                                    id="email"
                                    type="email"
                                    className="pl-3 h-12"
                                    placeholder=" "
                                  />
                                </FormControl>
                                <FormLabel 
                                  className={cn(
                                    "absolute left-3 transition-all duration-150",
                                    field.value 
                                      ? "-top-2.5 bg-background px-1 text-xs" 
                                      : "top-3 text-muted-foreground"
                                  )}
                                >
                                  Email
                                </FormLabel>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <div className="relative">
                                <FormControl>
                                  <Input
                                    {...field}
                                    id="phone"
                                    className="pl-3 h-12"
                                    placeholder=" "
                                  />
                                </FormControl>
                                <FormLabel 
                                  className={cn(
                                    "absolute left-3 transition-all duration-150",
                                    field.value 
                                      ? "-top-2.5 bg-background px-1 text-xs" 
                                      : "top-3 text-muted-foreground"
                                  )}
                                >
                                  Phone Number
                                </FormLabel>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <div className="relative">
                                <FormControl>
                                  <div className="relative">
                                    <Input
                                      {...field}
                                      id="password"
                                      type={showPassword ? "text" : "password"}
                                      className="pl-3 pr-10 h-12"
                                      placeholder=" "
                                    />
                                    <button
                                      type="button"
                                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                                      onClick={() => setShowPassword(!showPassword)}
                                    >
                                      {showPassword ? "Hide" : "Show"}
                                    </button>
                                  </div>
                                </FormControl>
                                <FormLabel 
                                  className={cn(
                                    "absolute left-3 transition-all duration-150",
                                    field.value 
                                      ? "-top-2.5 bg-background px-1 text-xs" 
                                      : "top-3 text-muted-foreground"
                                  )}
                                >
                                  Password
                                </FormLabel>
                              </div>
                              {field.value && (
                                <div className="mt-2">
                                  <div className="text-xs">Password strength:</div>
                                  <div className="h-1 w-full bg-muted mt-1 rounded-full">
                                    <div 
                                      className={cn(
                                        "h-full rounded-full",
                                        field.value.length < 8 ? "w-1/4 bg-red-500" :
                                        field.value.length < 10 ? "w-2/4 bg-yellow-500" :
                                        field.value.length < 12 ? "w-3/4 bg-green-500" :
                                        "w-full bg-green-600"
                                      )}
                                    ></div>
                                  </div>
                                </div>
                              )}
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    {currentStep === 'role-specific' && renderRoleSpecificFields()}

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      
                      {currentStep === 'basic-info' ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                        >
                          Next
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button type="submit">
                          Create Account
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>

                <div className="text-center mt-6">
                  <p className="text-muted-foreground">
                    Already have an account?{" "}
                    <Link to="/login" className="text-machgari-600 hover:underline">
                      Login
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Signup;
