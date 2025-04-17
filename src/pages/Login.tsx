
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Fish, BarChart3, Building } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

type UserRole = 'fisherman' | 'arotdar' | 'dof' | null;

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const onSubmit = async (data: LoginFormValues) => {
    if (!selectedRole) return;
    
    setIsLoading(true);
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(`Successfully logged in as ${selectedRole}`);
    setIsLoading(false);
    navigate('/');
  };

  const handleResetRole = () => {
    setSelectedRole(null);
    form.reset();
  };

  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Login to MachGari</h1>

          {!selectedRole ? (
            <div className="space-y-8">
              <p className="text-center text-muted-foreground mb-6">
                Select your role to continue
              </p>

              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-center">
                <RoleButton 
                  role="fisherman" 
                  label="Fisherman" 
                  icon={<Fish className="h-6 w-6" />} 
                  onClick={() => handleRoleSelect('fisherman')} 
                />

                <RoleButton 
                  role="arotdar" 
                  label="Arotdar" 
                  icon={<BarChart3 className="h-6 w-6" />} 
                  onClick={() => handleRoleSelect('arotdar')} 
                />

                <RoleButton 
                  role="dof" 
                  label="DOF" 
                  icon={<Building className="h-6 w-6" />} 
                  onClick={() => handleRoleSelect('dof')} 
                />
              </div>

              <div className="text-center mt-6">
                <Link to="/signup" className="text-machgari-600 hover:underline">
                  Not Registered? Create Account
                </Link>
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold">
                    Logging in as{" "}
                    <span className="text-machgari-600 capitalize">{selectedRole}</span>
                  </h2>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between text-sm">
                      <Link to="/forgot-password" className="text-machgari-600 hover:underline">
                        Forgot Password?
                      </Link>
                      <button
                        type="button"
                        onClick={handleResetRole}
                        className="text-machgari-600 hover:underline"
                      >
                        Switch Role
                      </button>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

interface RoleButtonProps {
  role: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const RoleButton = ({ role, label, icon, onClick }: RoleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 border rounded-lg bg-card hover:bg-accent transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-machgari-500 w-full md:w-32"
      aria-label={`Login as ${label}`}
    >
      <div className="mb-3 text-machgari-600">{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default Login;
