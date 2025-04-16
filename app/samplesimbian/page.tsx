'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ShieldOff,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const dummyAlerts = [
  "Phishing Email",
  "Suspicious Login",
  "Malware Detected",
  "Unauthorized Access",
  "Data Exfiltration",
];

const withoutSimbianCards = [
  {
    title: "Ignored Alerts",
    icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
    baseCount: 200,
    note: "Wasting valuable analyst time on false positives",
  },
  {
    title: "Wrongly Closed Alerts",
    icon: <ShieldOff className="w-8 h-8 text-red-500" />,
    baseCount: 35,
    note: "Processing one alert at a time, missing the big picture",
  },
  {
    title: "Active Threats",
    icon: <ShieldAlert className="w-8 h-8 text-purple-500" />,
    baseCount: 5,
    note: "More time fixing SOAR automation, less time on real threats",
  },
];

const withSimbianFlow = [
  "Triaged & Reported",
  "Automated Response",
  "Comprehensive Analysis",
  "Accurate Detection",
  "24/7 Coverage",
];

const withSimbianSummaries = [
  {
    title: "Ignored Alerts",
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    baseCount: 0,
    note: "90% of alerts resolved automatically, 24/7",
  },
  {
    title: "Wrongly Closed Alerts",
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    baseCount: 0,
    note: "Correlates alerts to your environment",
  },
  {
    title: "Active Threats",
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    baseCount: 0,
    note: "Investigate every alert—no SOAR needed",
  },
];

export default function samplesimbian() {
  const [withoutCounts, setWithoutCounts] = useState(
    withoutSimbianCards.map((c) => c.baseCount)
  );

  type Alert = {
    id: number;
    message: string;
  };

  const [withoutAlerts, setWithoutAlerts] = useState<Alert[][]>([[], [], []]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWithoutCounts((prev) =>
        prev.map((c) => c + Math.floor(Math.random() * 3))
      );

      setWithoutAlerts((prev) =>
        prev.map((alerts) => [
          ...alerts,
          {
            id: Date.now() + Math.random(),
            message:
              dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)],
          },
        ])
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-10 space-y-20">
      {/* Section 1: Without Simbian */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-10">Without Simbian</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {withoutSimbianCards.map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 8px rgba(255,255,255,0.2)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                {card.icon}
                <h2 className="text-xl font-semibold">{card.title}</h2>
              </div>
              <motion.div
                className="text-3xl font-bold text-yellow-400 mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, type: "tween" }}
              >
                {withoutCounts[idx]}
              </motion.div>
              <div className="space-y-2">
                <AnimatePresence>
                  {withoutAlerts[idx].slice(-3).map((alert) => (
                    <motion.div
                      key={alert.id}
                      className="bg-gray-800 p-2 rounded-md shadow-md border border-yellow-500"
                      initial={{ x: 100, opacity: 0, scale: 1 }}
                      animate={{ x: 0, opacity: 1, scale: 1.05 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      🚨 {alert.message}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className="mt-4 text-sm text-gray-400">{card.note}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: With Simbian */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-10">With Simbian</h1>

        {/* Flow animation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
          {withSimbianFlow.map((step, idx) => (
            <motion.div
              key={step}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <motion.div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                {step}
              </motion.div>
              {idx < withSimbianFlow.length - 1 && (
                <ArrowRight className="w-5 h-5 text-green-400" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Final Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {withSimbianSummaries.map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <motion.div
                className="text-3xl font-bold text-green-400 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {card.baseCount}
              </motion.div>
              <div className="text-sm text-gray-400">{card.note}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
