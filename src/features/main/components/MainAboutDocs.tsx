import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/shadcn/card";
import { contentSections } from "@/features/main/constants/mainConstants";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MainAboutDocs = () => {
  return (
    <section
      id="main-about-docs"
      aria-label="Main About Docs Section"
      className="min-w-screen pb-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          이 문서가 담고 있는 내용
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        >
          {contentSections.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={card}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mx-auto">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>

                    <CardTitle className="text-center">{item.title}</CardTitle>

                    <CardDescription className="text-center">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MainAboutDocs;
