import { useState } from "react";
import { ProjectCard } from "~/components/ProjectCard";
import { Section } from "~/components/Section";
import { TechIcon } from "~/components/TechIcon";
import { theme } from "~/styles/defaultTheme";
import {
  BottomContent,
  DescriptionContent,
  TechContent,
  TopContent,
  Text,
  Title,
  TechImages,
} from "./styles";
import data from "~/data/projects.json";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

export const Projects = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Section title="<Projects>" gradient={`${theme.colors.$reverseGradient}`}>
      <TopContent>
        <Swiper
          // modules={[EffectCoverflow, Pagination, Navigation]}
          effect={"coverflow"}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={50}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <ProjectCard
                imageSource={item.image}
                linkLabel={"linkedin.com/raultormes"}
                onClick={() => setSelected(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </TopContent>
      <BottomContent>
        <DescriptionContent>
          <Title>Description</Title>
          <br />
          <Text>
            As a React frontend developer, Ive honed my skills in creating
            dynamic user interfaces, mastering essential frontend concepts, and
            embracing challenges as a problem solver and quick learner. My
            adaptable nature, passion for innovation, and commitment to quality
            have enabled me to excel in collaborative environments, driving
            impactful solutions while remaining dedicated to continuous growth.
          </Text>
        </DescriptionContent>
        <TechContent>
          <Title>Technologies</Title>
          <br />
          <TechImages>
            {" "}
            {data[selected].content.technologies.map((item) => (
              <TechIcon image={item} key={item} />
            ))}
          </TechImages>
        </TechContent>
      </BottomContent>
    </Section>
  );
};
