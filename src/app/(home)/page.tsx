import ProjectCard from "./ProjectCard"

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  return (
    <div className="grid grid-cols-2 gap-12 pt-12 px-12">
      {[1,2,3,4].map((proj, index) => (
        <div key={index}>
          <ProjectCard />
        </div>
      ))
      }
    </div>
  )
}

export default HomePage
