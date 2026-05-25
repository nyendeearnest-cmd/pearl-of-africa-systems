"use client";
import FadeIn from "@/components/FadeIn";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 50, suffix: "+", title: "Projects" },
  { number: 20, suffix: "+", title: "Developers" },
  { number: 10, suffix: "+", title: "Enterprise Clients" },
  { number: 99, suffix: "%", title: "Success Rate" },
];

export default function Stats() {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (

  <FadeIn>
    <section
      ref={ref}
      className="bg-zinc-950 text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-black p-10 rounded-3xl border border-zinc-800"
          >

            <h2 className="text-5xl font-bold text-green-500">

              {inView && (
                <CountUp
                  end={stat.number}
                  duration={3}
                />
              )}

              {stat.suffix}

            </h2>

            <p className="mt-4 text-gray-400">
              {stat.title}
            </p>

          </div>
        ))}

      </div>
    </section>
    </FadeIn>
  );
}