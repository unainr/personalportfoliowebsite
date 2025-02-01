import React from 'react'
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { ProjectsSection } from "@/components/ProjectsSection";


const ProjectPage = async () => {
	const projects = await client.fetch(PROJECT_FETCH_QUERY);

  return (
    <>
    {projects?.length > 0 ? (
            <section className="py-20">
              <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      All 
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBACF9] to-[#B794F4]">
                        {" "}
                        Projects
                      </span>
                    </h2>
                  </div>
    
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore some of my recent work showcasing web development
                    expertise across different industries and technologies.
                  </p>
                </div>
    
                <div
                  id="portfolio"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {projects.map((project: any) => (
                    <ProjectsSection key={project._id} project={project} />
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-gray-400 text-lg font-medium">No Projects Found</p>
            </div>
          )}
    </>
  )
}

export default ProjectPage

// export const revalidate = 60;
