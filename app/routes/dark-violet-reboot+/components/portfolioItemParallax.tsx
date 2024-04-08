import FlexFull from "~/components/buildingBlocks/flexFull";
import { PortfolioItem, PortfolioItemInfoSection, Projects } from "./data";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import Box from "~/components/buildingBlocks/box";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import { CloseIcon } from "styles";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import { useNavigate, useParams } from "@remix-run/react";
import useEscapeKey from "~/utils/useEscapeKey";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";

import RadialScrollProgress from "./radialProgress";
import Image from "~/components/buildingBlocks/image";

export default function PortfolioItemParallax() {
  const { title } = useParams();
  console.log(title);
  const project = Projects.find((project) => project.title === title);
  const navigate = useNavigate();
  useEscapeKey(() => navigate(`/dark-violet-reboot/#portfolio`));
  const parallax = useRef<IParallax>(null!);

  const infoSections = project?.projectInfo as PortfolioItemInfoSection[];
  return (
    <VStackFull className="relative h-fit min-h-[95vh] bg-slate-800 bg-gradient-to-br from-violet-900/40 via-indigo-900/40 to-fuchsia-900/40 p-[0.5vh] insetShadowXl text-slate-100 pt-[6vh] md:pt-[7.5vh] border-900-md">
      {/* HEADER  */}
      <HStackFull className="absolute top-0 left-0 h-[6vh] md:h-[7.5vh] justify-between px-[1vh] py-[0.5vh] items-center bg-slate-900/60">
        <VStack
          className="w-93% h-full justify-evenly"
          align="items-start"
          gap="gap-[0px]"
        >
          <Text className="text-cyan-300 text-[2vh] leading-[2.3vh] md:text-[2.7vh] md:leading-[3vh] leading-tighter">
            {project?.title}
          </Text>
          <Text className="text-[1.3vh] leading-[1.5vh] md:text-[1.7vh] md:leading-[2vh] leading-tighter">
            {project?.description}
          </Text>
        </VStack>
        <Flex className="h-full w-7% justify-end">
          <NavIconButton icon={CloseIcon} to="/dark-violet-reboot/#portfolio" />
        </Flex>
      </HStackFull>
      {/* FOOTER  */}
      <CenterHorizontalFull className="absolute bottom-0 left-0 h-[4vh] p-[1vh] items-center bg-slate-900/60">
        <NavLinkButton
          iconLeft={CloseIcon}
          to="/dark-violet-reboot/#portfolio"
          buttonText="close"
          type="smallNormal"
        />
      </CenterHorizontalFull>
      {/* BODY  */}
      <FlexFull>
        <Parallax ref={parallax} pages={6} className="hide-scrollbar">
          <ParallaxLayer offset={0} speed={0.2}>
            <CenterHorizontalFull className="pt-[1.5vh]">
              <Flex className="h-fit w-[93vw] max-h-[75vh]">
                <RadialScrollProgress title={project?.title}>
                  {project?.projectImages.map((image, index) => (
                    <VStack className="w-fit flex-shrink-0">
                      <Flex className=" w-auto">
                        <Image
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full max-h-[68vh]"
                        />
                      </Flex>
                    </VStack>
                  ))}
                </RadialScrollProgress>
              </Flex>
            </CenterHorizontalFull>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1, end: 2 }}>THIS</ParallaxLayer>
          <ParallaxLayer sticky={{ start: 2, end: 3 }}>THAT</ParallaxLayer>
          <ParallaxLayer sticky={{ start: 3, end: 5 }}>THE OTHER</ParallaxLayer>
        </Parallax>
      </FlexFull>
    </VStackFull>
  );
}

{
  /* <FlexFull className="h-full bg-col-890 bg-radial6op50">
        <VStackFull className="h-full max-h-full">
          <VStackFull gap="gap-[0px]" className="h-full max-h-full"> */
}
{
  /* HEADER */
}
// <VStackFull className="bg-col-900 bg-radial6op50 border-b-970-md rounded-b-none p-[1vh] h-15% flex-shrink-0">
//   <Heading
//     text={project.title}
//     layout="text-xxl-normal md:text-insane-tight"
//     color="text-col-500"
//     shadow="textShadow"
//   />

// </VStackFull>
{
  /* CONTENT */
}
//     <VStack className="h-85% max-h-85% py-[2vh] px-[1vh] md:px-[2vh] overflow-y-auto">
//       <div>
//         {project.projectInfoImages[0] && (
//           <Box
//             className={`${project.projectInfoImages[0].dimension} float-end my-[2vh] ml-[2vh] shadowBroadNormal`}
//           >
//             <Image
//               src={
//                 project.projectInfoImages[0].src +
//                 projectInfoImageSettings
//               }
//               alt={project.title}
//             />
//           </Box>
//         )}
//         {sectionsOne.map((section, index) => (
//           <p key={index}>
//             <Heading
//               text={section.heading}
//               layout="text-xl-normal mb-[1vh]"
//               color="text-col-pink text-stroke-5-970"
//               shadow="textShadow"
//               noOfLines={5}
//             />
//             {section.paragraphs.map((paragraph, index) => (
//               <p key={index} className="mb-[1vh]">
//                 {paragraph}
//               </p>
//             ))}
//           </p>
//         ))}
//       </div>
//       <div>
//         {project.projectInfoImages[1] && (
//           <Box
//             className={`${project.projectInfoImages[1].dimension} float-start my-[2vh] mr-[2vh] shadowBroadNormal`}
//           >
//             <Image
//               src={
//                 project.projectInfoImages[1].src +
//                 projectInfoImageSettings
//               }
//               alt={project.title}
//             />
//           </Box>
//         )}
//         {sectionsTwo.map((section, index) => (
//           <p key={index}>
//             <Heading
//               text={section.heading}
//               layout="text-xl-normal mb-[1vh]"
//               color="text-col-pink text-stroke-5-970"
//               shadow="textShadow"
//               noOfLines={5}
//             />
//             {section.paragraphs.map((paragraph, index) => (
//               <p key={index} className="mb-[1vh]">
//                 {paragraph}
//               </p>
//             ))}
//           </p>
//         ))}
//       </div>
//     </VStack>
//   </VStackFull>
{
  /* FOOTER */
}
//     </VStackFull>
//   </FlexFull>
//   <FlexFull className="h-[5vh] bg-col-900 bg-radial6op50 border-t-970-md rounded-t-none absolute bottom-0 left-0 flex-shrink-0 justify-center items-center">
//     <Button buttonText="close" type="smallNormal" onClick={onClose} />
//   </FlexFull>
