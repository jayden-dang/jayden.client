import { MdVideoLibrary } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import Image from "next/image";

interface IProjectCardProps {}

const ProjectCard = (props: IProjectCardProps) => {
  return (
    <section className="flex flex-col bg-[#e6dfd5]/50 p-4">
      <div className="flex w-full">
        <ul className="flex items-center space-x-4 border-b w-full border-black/50 text-gray-700 text-sm">
          <li className="flex items-center space-x-1"> <span className="text-base"><FaFileCode/></span> <span>Source Code</span></li>
          <li className="flex items-center space-x-1"> <span className="text-base"><MdVideoLibrary/></span> <span>Video Tutorials</span></li>
        </ul>
      </div>
      <div className="grid grid-cols-3 pt-4 gap-4">
        <div className="w-full aspect-square flex overflow-hidden">
          <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '100%' }}>
            <Image src="/images/project.png" layout="fill"  className="object-cover hover:scale-110  transition-all duration-200" alt="Project Thumbnail"/>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-bold line-clamp-2">Build a NFT Marketplace on Near Protocol</h1>
          <p className="text-sm line-clamp-3">Đây là Series chuyên sâu về Technical (kỹ thuật) của Blockchain và các nền tảng Blockchain đang phổ biến trên thị trường đang hoạt động như thế nào.
            - Series sẽ cũng cấp cho các bạn kiến thức từ Blockchain Cơ bản tới các kiến thức chuyên sâu của Blockchain, Các kiến thức về các nền tảng như EVM, Layer 0, Layer 1, Layer 2. Các thức đánh giá phân tích, nghiên cứu về công nghệ này.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
