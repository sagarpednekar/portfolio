import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            titleClassName,
            description,
            className,
            img,
            imgClassName,
            spareImg,
          }) => {
            return (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                titleClassName={titleClassName}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                spareImg={spareImg}
              />
            );
          }
        )}
      </BentoGrid>
    </section>
  );
}
