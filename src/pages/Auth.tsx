
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = isSignUp
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

      if (error) throw error;

      if (!error && !isSignUp) {
        navigate("/");
        toast({
          title: "Success!",
          description: "You have successfully logged in.",
        });
      }

      if (!error && isSignUp) {
        toast({
          title: "Success!",
          description: "Please check your email to verify your account.",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-msk-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(40deg,#1a1f2c,#0f172a)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-msk-yellow to-transparent absolute top-[20%] left-[5%]"></div>
          <div className="h-px w-1/4 bg-gradient-to-r from-transparent via-msk-yellow to-transparent absolute top-[35%] right-[10%]"></div>
          <div className="h-px w-1/5 bg-gradient-to-r from-transparent via-msk-yellow to-transparent absolute bottom-[15%] left-[15%]"></div>
        </div>
      </div>
      
      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2 text-white/80 border-msk-blue/30 hover:bg-msk-blue/20 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>
      </div>
      
      {/* Left side tech image */}
      <div className="hidden lg:flex w-1/2 justify-center items-center p-8">
        <div className="relative w-full max-w-lg">
          <img 
            src="/public/lovable-uploads/b5f86e06-3904-4c27-bafa-b55c5924fb16.png" 
            alt="Digital World" 
            className="mx-auto w-full max-w-md object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-msk-dark to-transparent bottom-0 h-1/4"></div>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 relative z-10">
        <div className="w-full max-w-md space-y-8 bg-gradient-to-br from-msk-darker to-[#181c28] p-8 rounded-xl border border-msk-blue/20 shadow-2xl backdrop-blur-sm">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-transparent bg-gradient-to-r from-[#9b87f5] to-msk-yellow bg-clip-text font-tech tracking-wide">
              {isSignUp ? "Create an account" : "Welcome back"}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {isSignUp
                ? "Sign up to get started with our services"
                : "Sign in to access your dashboard"}
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleAuth}>
            <div className="space-y-5">
              <div>
                <Label htmlFor="email" className="text-white/80 mb-1.5 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-msk-dark/60 border-msk-blue/30 focus:border-[#9b87f5]/70 text-white py-2.5"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-white/80 mb-1.5 block">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-msk-dark/60 border-msk-blue/30 focus:border-[#9b87f5]/70 text-white py-2.5"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8878d3] hover:to-[#6e5c97] text-white py-2.5 font-medium shadow-md"
              disabled={isLoading}
            >
              {isLoading
                ? "Processing..."
                : isSignUp
                ? "Create account"
                : "Sign in"}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-[#9b87f5] hover:text-msk-yellow/90 transition-colors"
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </form>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 right-4 text-msk-yellow/20 text-xl font-tech">&lt;/&gt;</div>
        <div className="absolute top-8 right-12 w-4 h-4 border border-msk-yellow/20 opacity-50"></div>
        <div className="absolute top-20 left-8 w-2 h-2 bg-msk-yellow/20 rounded-full"></div>
      </div>
    </div>
  );
}
