import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

function Homepage() {

  return (
    <div className="min-h-screen">
      
      <section className="min-h-screen mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:py-20 md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl"
        >
          Manage Projects. Assign Tasks. Scale Your Organization.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-xl text-base sm:mt-6 sm:text-lg"
        >
          OrgLadder helps teams collaborate efficiently with structured project
          management and seamless task assignment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row"
        >
          <Button size="lg" className="w-full sm:w-auto">Start for Free</Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Learn More
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:px-8 md:py-16">
        {[
          {
            title: "Project Management",
            desc: "Organize multiple projects with clear structure and visibility.",
          },
          {
            title: "Task Assignment",
            desc: "Assign tasks to team members with roles and permissions.",
          },
          {
            title: "Team Collaboration",
            desc: "Enable smooth communication and workflow within your team.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Card className="h-full rounded-2xl shadow-sm transition hover:shadow-md">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold sm:text-xl">{feature.title}</h3>
                <p className="mt-2 text-sm sm:mt-3 sm:text-base">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 text-center text-xs sm:text-sm">
        © {new Date().getFullYear()} sankagetsu. All rights reserved.
      </footer>
    </div>
  );
}


export const Route = createFileRoute("/")({
    component: Homepage
})