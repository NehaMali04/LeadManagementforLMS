import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shield, Users, BarChart3, Target, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Target,
    title: "Lead Tracking",
    description: "Track leads from first contact to conversion with our intuitive pipeline.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign leads, manage teams, and track performance in real-time.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Powerful insights to optimize your sales strategy and grow revenue.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Streamlined workflows designed to save time and close more deals.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <header className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </div>

        {/* Navigation */}
        <nav className="container mx-auto flex items-center justify-between py-6 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl gradient-teal flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-2xl font-bold text-secondary">Athenura</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-foreground hover:text-primary"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className="gradient-teal text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started
            </Button>
          </motion.div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground mb-6"
            >
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">
                Trusted by 1,000+ sales teams
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Manage Your Leads
              <span className="block text-primary">Like Never Before</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              A powerful, intuitive lead management system designed to help your sales team convert more prospects into loyal customers.
            </p>

            {/* Login Role Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={() => navigate("/login?role=admin")}
                className="w-full sm:w-auto gradient-teal text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Shield className="mr-2 h-5 w-5" />
                Login as Admin
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/login?role=manager")}
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg transition-all hover:scale-105"
              >
                <Users className="mr-2 h-5 w-5" />
                Login as Manager
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/login?role=agent")}
                className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg transition-all hover:scale-105"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Login as Agent
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Everything You Need to
              <span className="text-primary"> Close More Deals</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of tools helps you manage your entire sales pipeline from one intuitive dashboard.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-xl gradient-teal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl gradient-teal p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Boost Your Sales?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Join thousands of teams already using Athenura to manage leads and close more deals.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-background text-primary hover:bg-background/90 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Start Now — It's Free
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Athenura LMS. Built with ❤️ for sales teams everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
