import { useEntityDataReference } from "frontend/hooks/data/data.store";
import { BaseSkeleton, TextButton } from "@hadmean/chromista";
import { useRouter } from "next/router";
import { NAVIGATION_LINKS } from "frontend/lib/routing";
import { useDetailsOffCanvasStore } from "./Table/hooks/useDetailsOffCanvas.store";

export type ReferenceDisplayFromTypes = "table" | "details" | "canvas";

interface IProps {
  entity: string;
  id: string;
  displayFrom: ReferenceDisplayFromTypes;
}

export function ReferenceComponent({ entity, id, displayFrom }: IProps) {
  const openDetailsCanvas = useDetailsOffCanvasStore((state) => state.open);
  const router = useRouter();

  const entityDataReference = useEntityDataReference(entity, id);

  if (entityDataReference.isLoading) {
    return <BaseSkeleton width="150px" height="20px" />;
  }

  if (entityDataReference.error) {
    return <span>{id}</span>;
  }

  const displayText = entityDataReference.data || id;

  if (displayFrom === "canvas") {
    return <span>{displayText}</span>;
  }

  return (
    <TextButton
      onClick={() => {
        if (displayFrom === "table") {
          // if (displayFrom === "table" || displayFrom === "details") {
          openDetailsCanvas({ entity, id });
        } else {
          router.push(NAVIGATION_LINKS.ENTITY.DETAILS(entity, id));
        }
      }}
    >
      {displayText}
    </TextButton>
  );
}
