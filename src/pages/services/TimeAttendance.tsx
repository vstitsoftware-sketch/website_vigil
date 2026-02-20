import { Clock, ArrowLeft, CheckCircle2, Users, Zap, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TimeAttendance = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link to="/#services" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Time Attendance & Payroll Solutions</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Streamlined workforce management and automated payroll processing.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Overview */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Our time attendance and payroll solutions provide comprehensive workforce management tools that streamline HR operations and ensure accurate compensation. We combine biometric time tracking with intelligent payroll processing to eliminate manual errors and save valuable administrative time.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From attendance tracking to payroll generation and compliance reporting, our solutions handle all aspects of workforce management efficiently.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Features & Capabilities</h2>
              <div className="space-y-4">
                {[
                  "Biometric time tracking (fingerprint, facial recognition)",
                  "Real-time attendance monitoring",
                  "Automated payroll calculation",
                  "Deduction and allowance management",
                  "Compliance with labor regulations",
                  "Mobile app for employee access",
                  "Detailed reporting and analytics",
                  "Integration with accounting systems"
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-accent/10 rounded-2xl p-8 sticky top-20">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Eliminate Time Theft",
                  "Reduce Admin Work",
                  "Improve Accuracy",
                  "Faster Payroll",
                  "Employee Transparency",
                  "Compliance Ready"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link to="/#contact">
                <Button variant="accent" size="lg" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Employee Management",
              description: "Streamline HR operations with comprehensive workforce management"
            },
            {
              icon: Zap,
              title: "Fast Payroll",
              description: "Process payroll automatically with no manual calculations"
            },
            {
              icon: BarChart,
              title: "Data Insights",
              description: "Gain visibility into attendance patterns and workforce productivity"
            }
          ].map((benefit) => (
            <div key={benefit.title} className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Streamline Your Payroll Today</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Implement our time attendance and payroll solution to save time and improve accuracy.
          </p>
          <Link to="/#contact">
            <Button variant="accent" size="lg">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TimeAttendance;
