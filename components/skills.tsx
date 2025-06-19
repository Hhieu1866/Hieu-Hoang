import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skills = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
    { name: "Next.js", level: 88, color: "from-gray-400 to-gray-600" },
    { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-teal-600" },
    { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
    { name: "Figma", level: 90, color: "from-purple-400 to-purple-600" },
    { name: "UI/UX Design", level: 87, color: "from-pink-400 to-pink-600" },
    { name: "GraphQL", level: 80, color: "from-purple-500 to-purple-700" },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-white/70">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
